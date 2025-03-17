import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, BarChart3, CheckCircle, PlayCircle, FileText } from "lucide-react"

export default function CoursePage({ params }: { params: { id: string } }) {
  const courseId = params.id

  // This would normally be fetched from an API
  const course = {
    id: courseId,
    title: "Introduction to Mathematics",
    description: "Learn the fundamentals of mathematics including arithmetic, algebra, and geometry.",
    level: "Beginner",
    duration: "8 weeks",
    modules: 12,
    progress: 35,
    image: "/placeholder.svg?height=300&width=800",
    instructor: {
      name: "Dr. Sarah Johnson",
      bio: "Mathematics professor with 15 years of teaching experience",
      image: "/placeholder.svg?height=100&width=100",
    },
    modules: [
      {
        id: 1,
        title: "Introduction to Numbers",
        description: "Learn about natural numbers, integers, and real numbers",
        completed: true,
        duration: "45 minutes",
        lessons: 3,
      },
      {
        id: 2,
        title: "Basic Arithmetic",
        description: "Addition, subtraction, multiplication, and division",
        completed: true,
        duration: "1 hour",
        lessons: 4,
      },
      {
        id: 3,
        title: "Introduction to Algebra",
        description: "Variables, expressions, and simple equations",
        completed: false,
        duration: "1.5 hours",
        lessons: 5,
      },
      {
        id: 4,
        title: "Geometry Basics",
        description: "Points, lines, angles, and shapes",
        completed: false,
        duration: "2 hours",
        lessons: 6,
      },
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="relative h-[200px] overflow-hidden rounded-lg">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-3xl font-bold text-white">{course.title}</h1>
          <p className="text-white/90">{course.description}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="content" className="space-y-4">
            <TabsList>
              <TabsTrigger value="content">Course Content</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4">
              <div className="space-y-4">
                {course.modules.map((module) => (
                  <Card key={module.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        {module.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{module.lessons} Lessons</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{module.duration}</span>
                          </div>
                        </div>
                        <Link href={`/courses/${courseId}/modules/${module.id}`}>
                          <Button size="sm" variant={module.completed ? "outline" : "default"}>
                            {module.completed ? "Review" : "Start"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    This comprehensive course covers the fundamentals of mathematics, providing a solid foundation for
                    further studies. You'll learn about numbers, arithmetic operations, basic algebra, and geometry.
                  </p>
                  <p>
                    The course is designed for beginners and requires no prior knowledge of mathematics beyond basic
                    counting. Each module builds upon the previous one, gradually introducing more complex concepts.
                  </p>
                  <h3 className="text-lg font-medium">What You'll Learn</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Understanding number systems and their properties</li>
                    <li>Performing arithmetic operations confidently</li>
                    <li>Solving basic algebraic equations</li>
                    <li>Recognizing and working with geometric shapes</li>
                    <li>Applying mathematical concepts to real-world problems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent className="flex items-start gap-4">
                  <img
                    src={course.instructor.image || "/placeholder.svg"}
                    alt={course.instructor.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{course.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discussion" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Course Discussion</CardTitle>
                  <CardDescription>Engage with other students and instructors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-muted-foreground">Discussion forum will be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Completion</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Course Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{course.modules.length} Modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="h-4 w-4 text-muted-foreground" />
                    <span>18 Lessons</span>
                  </div>
                </div>
              </div>

              <Button className="w-full">Continue Learning</Button>

              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  Download Materials
                </Button>
                <Button variant="outline" size="sm">
                  Get Help
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Learning Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Need help understanding a concept? Ask our AI assistant for personalized explanations.
              </p>
              <Link href="/chatbot">
                <Button className="w-full">Chat with AI</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

