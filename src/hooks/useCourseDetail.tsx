import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { fetchLessonsWithVideos } from '@/utils/courseVideoUtils';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  lessons: number;
  image?: string;
}

interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: number;
  order_index: number;
  completed?: boolean;
  videoUrl?: string;
}

interface Enrollment {
  id: string;
  progress: number;
  completed: boolean;
}

interface LessonProgress {
  lesson_id: string;
  completed: boolean;
}

function safeLessonProgressCast(data: any[]): LessonProgress[] {
  if (!Array.isArray(data)) return [];
  
  return data
    .filter(item => 
      item && 
      typeof item === 'object' && 
      'lesson_id' in item && 
      'completed' in item
    )
    .map(item => ({
      lesson_id: item.lesson_id,
      completed: item.completed
    }));
}

const useCourseDetail = (courseId: string | undefined) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [loadingCertificate, setLoadingCertificate] = useState(false);
  const [certificateId, setCertificateId] = useState<string | null>(null);
  
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!courseId) return;

    const fetchCourseDetails = async () => {
      setLoading(true);
      try {
        console.log('Fetching course details for ID:', courseId);
        
        const { data: courseData, error: courseError } = await supabase
          .from('courses')
          .select('*')
          .eq('id', courseId)
          .single();
          
        if (courseError) throw courseError;
        
        console.log('Course data retrieved:', courseData);
        setCourse(courseData);
        
        const lessonsData = await fetchLessonsWithVideos(courseId);
        
        console.log('Lessons with videos retrieved:', lessonsData);
        console.log('Number of lessons found:', lessonsData?.length || 0);
        
        if (user) {
          const { data: enrollmentData, error: enrollmentError } = await supabase
            .from('enrollments')
            .select('*')
            .eq('user_id', user.id)
            .eq('course_id', courseId)
            .maybeSingle();
            
          if (enrollmentError) throw enrollmentError;
          
          setEnrollment(enrollmentData);
          
          const { data: progressData, error: progressError } = await supabase
            .from('user_lesson_progress')
            .select('lesson_id, completed')
            .eq('user_id', user.id);
            
          if (progressError) throw progressError;
          
          const typedProgressData = safeLessonProgressCast(progressData);
          
          if (typedProgressData.length > 0) {
            const completionMap = typedProgressData.reduce((map: Record<string, boolean>, item) => {
              map[item.lesson_id] = item.completed;
              return map;
            }, {});
            
            const lessonsWithProgress = lessonsData.map(lesson => ({
              ...lesson,
              completed: completionMap[lesson.id] || false
            }));
            
            setLessons(lessonsWithProgress);
            
            const courseLessonIds = lessonsData.map(lesson => lesson.id);
            const completed = typedProgressData
              .filter(p => p.completed && courseLessonIds.includes(p.lesson_id))
              .length;
              
            setCompletedLessons(completed);
          } else {
            setLessons(lessonsData);
          }
          
          const { data: certificateData, error: certificateError } = await supabase
            .from('certificates')
            .select('id')
            .eq('user_id', user.id)
            .eq('course_id', courseId)
            .maybeSingle();
            
          if (certificateError) throw certificateError;
          
          if (certificateData) {
            setCertificateId(certificateData.id);
          }
        } else {
          setLessons(lessonsData);
        }
      } catch (error: any) {
        console.error('Error fetching course details:', error);
        // toast({
        //   title: 'Error loading course',
        //   description: error.message || 'Please try again later',
        //   variant: 'destructive',
        // });
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId, user, toast]);

  const handleEnrollmentChange = async (enrolled: boolean) => {
    if (enrolled && !enrollment) {
      try {
        if (user && courseId) {
          console.log('Creating new enrollment for user:', user.id, 'course:', courseId);
          
          const { data: existingEnrollment, error: checkError } = await supabase
            .from('enrollments')
            .select('id')
            .eq('user_id', user.id)
            .eq('course_id', courseId)
            .maybeSingle();
            
          if (checkError) throw checkError;
          
          if (existingEnrollment) {
            setEnrollment({
              id: existingEnrollment.id,
              progress: 0,
              completed: false
            });
            
            toast({
              title: 'Already enrolled',
              description: 'You were already enrolled in this course',
            });
            return;
          }
          
          const { data, error } = await supabase
            .from('enrollments')
            .insert({
              user_id: user.id,
              course_id: courseId,
              progress: 0,
              completed: false
            })
            .select();
            
          if (error) throw error;
          
          if (data && data[0]) {
            setEnrollment({
              id: data[0].id,
              progress: 0,
              completed: false
            });
            
            toast({
              title: 'Successfully enrolled',
              description: 'You are now enrolled in this course',
            });
          }
        }
      } catch (error: any) {
        console.error('Error enrolling in course:', error);
        toast({
          title: 'Enrollment failed',
          description: error.message || 'Please try again later',
          variant: 'destructive',
        });
      }
    } else if (!enrolled && enrollment) {
      try {
        if (user && courseId && enrollment.id) {
          console.log('Deleting enrollment for user:', user.id, 'course:', courseId, 'enrollment id:', enrollment.id);
          
          const { error: deleteError } = await supabase
            .from('enrollments')
            .delete()
            .eq('id', enrollment.id);
            
          if (deleteError) throw deleteError;
          
          const { error: progressDeleteError } = await supabase
            .from('user_lesson_progress')
            .delete()
            .eq('user_id', user.id)
            .in('lesson_id', lessons.map(lesson => lesson.id));
            
          if (progressDeleteError) console.warn('Could not delete all progress records:', progressDeleteError);
          
          setEnrollment(null);
          setCompletedLessons(0);
          
          setLessons(prev => prev.map(lesson => ({
            ...lesson,
            completed: false
          })));
          
          toast({
            title: 'Unenrolled successfully',
            description: 'You have been unenrolled from this course',
          });
        }
      } catch (error: any) {
        console.error('Error unenrolling from course:', error);
        toast({
          title: 'Unenrollment failed',
          description: error.message || 'Please try again later',
          variant: 'destructive',
        });
      }
    }
  };

  const handleLessonComplete = async (lessonId: string, completed: boolean) => {
    if (!user || !courseId) return;
    
    try {
      setLessons(prev => prev.map(lesson => 
        lesson.id === lessonId 
          ? { ...lesson, completed } 
          : lesson
      ));
      
      const newCompletedCount = completed 
        ? completedLessons + 1 
        : Math.max(0, completedLessons - 1);
      
      setCompletedLessons(newCompletedCount);
      
      if (lessons.length > 0) {
        const progressPercentage = Math.round((newCompletedCount / lessons.length) * 100);
        
        if (enrollment) {
          setEnrollment(prev => prev ? {
            ...prev,
            progress: progressPercentage,
            completed: progressPercentage === 100
          } : null);
          
          await supabase
            .from('user_lesson_progress')
            .upsert({
              user_id: user.id,
              lesson_id: lessonId,
              completed: completed,
              last_accessed: new Date().toISOString()
            }, { onConflict: 'user_id,lesson_id' });
            
          await supabase
            .from('enrollments')
            .update({ 
              progress: progressPercentage,
              completed: progressPercentage === 100,
              last_accessed: new Date().toISOString()
            })
            .eq('id', enrollment.id);
            
          if (progressPercentage === 100 && !certificateId) {
            await generateCertificate();
          }
        }
      }
    } catch (error) {
      console.error("Failed to update progress:", error);
      toast({
        title: 'Error updating progress',
        description: 'Failed to update your lesson progress',
        variant: 'destructive',
      });
    }
  };

  const generateCertificate = async () => {
    if (!user || !courseId) return;
    
    setLoadingCertificate(true);
    
    try {
      const { data: lessonData, error: lessonError } = await supabase
        .from('lessons')
        .select('id')
        .eq('course_id', courseId);
        
      if (lessonError) throw lessonError;
      
      const lessonIds = lessonData.map(lesson => lesson.id);
      
      if (lessonIds.length === 0) {
        toast({
          title: 'Cannot generate certificate',
          description: 'This course has no lessons yet.',
          variant: 'destructive',
        });
        setLoadingCertificate(false);
        return;
      }
      
      const { data: progressData, error: progressError } = await supabase
        .from('user_lesson_progress')
        .select('lesson_id, completed')
        .eq('user_id', user.id)
        .eq('completed', true)
        .in('lesson_id', lessonIds);
        
      if (progressError) throw progressError;
      
      const typedProgressData = safeLessonProgressCast(progressData);
      const completedLessonIds = typedProgressData.map(progress => progress.lesson_id);
      
      console.log('Certificate generation check:', {
        lessonIds,
        completedLessonIds,
        allLessonsExist: lessonIds.length > 0,
        allCompleted: lessonIds.every(id => completedLessonIds.includes(id))
      });
      
      const incompleteCount = lessonIds.length - completedLessonIds.length;
      if (incompleteCount > 0) {
        toast({
          title: 'Cannot generate certificate',
          description: `Please complete all lessons first. You still have ${incompleteCount} lessons to complete.`,
          variant: 'destructive',
        });
        setLoadingCertificate(false);
        return;
      }
      
      await supabase
        .from('enrollments')
        .update({ 
          progress: 100,
          completed: true,
          last_accessed: new Date().toISOString()
        })
        .eq('user_id', user.id)
        .eq('course_id', courseId);
      
      const { data: certificateResult, error: rpcError } = await supabase.rpc(
        'generate_certificate',
        { course_id: courseId }
      );
      
      if (rpcError) {
        console.error('RPC error:', rpcError);
        
        const { data: certificateData, error: certificateError } = await supabase
          .from('certificates')
          .upsert(
            { 
              user_id: user.id, 
              course_id: courseId,
              certificate_url: `https://example.com/cert/${user.id}/${courseId}`,
              issue_date: new Date().toISOString()
            },
            { 
              onConflict: 'user_id,course_id'
            }
          )
          .select();
          
        if (certificateError) {
          console.error('Direct certificate creation error:', certificateError);
          throw new Error(`Failed to create certificate: ${certificateError.message}`);
        }
        
        if (certificateData && certificateData.length > 0) {
          setCertificateId(certificateData[0].id);
          toast({
            title: 'Certificate generated!',
            description: 'Congratulations on completing this course',
          });
        } else {
          toast({
            title: 'Error generating certificate',
            description: 'Please try again later',
            variant: 'destructive',
          });
        }
      } else {
        setCertificateId(certificateResult);
        toast({
          title: 'Certificate generated!',
          description: 'Congratulations on completing this course',
        });
      }
    } catch (error: any) {
      console.error('Error generating certificate:', error);
      toast({
        title: 'Error generating certificate',
        description: error.message || 'Please try again later',
        variant: 'destructive',
      });
    } finally {
      setLoadingCertificate(false);
    }
  };

  const getProgressPercentage = (): number => {
    if (!lessons.length) return 0;
    return Math.round((completedLessons / lessons.length) * 100);
  };

  return {
    course,
    lessons,
    enrollment,
    completedLessons,
    loading,
    loadingCertificate,
    certificateId,
    handleEnrollmentChange,
    handleLessonComplete,
    generateCertificate,
    getProgressPercentage
  };
};

export default useCourseDetail;
