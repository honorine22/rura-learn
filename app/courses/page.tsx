import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, BarChart3, Search, Filter, SlidersHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    id: 1,
    title: "Introduction to Mathematics",
    description: "Learn the fundamentals of mathematics including arithmetic, algebra, and geometry.",
    level: "Beginner",
    duration: "8 weeks",
    modules: 12,
    image: "/placeholder.svg?height=200&width=300",
    category: "mathematics",
    featured: true,
    rating: 4.8,
    students: 1245,
  },
  {
    id: 2,
    title: "Basic Science",
    description: "Explore the world of science with topics covering physics, chemistry, and biology.",
    level: "Beginner",
    duration: "10 weeks",
    modules: 15,
    image: "/placeholder.svg?height=200&width=300",
    category: "science",
    featured: false,
    rating: 4.6,
    students: 987,
  },
  {
    id: 3,
    title: "English Language",
    description: "Improve your English language skills with grammar, vocabulary, and writing exercises.",
    level: "Intermediate",
    duration: "12 weeks",
    modules: 18,
    image: "/placeholder.svg?height=200&width=300",
    category: "language",
    featured: true,
    rating: 4.7,
    students: 1532,
  },
  {
    id: 4,
    title: "Computer Skills",
    description: "Learn essential computer skills including typing, using software, and internet basics.",
    level: "Beginner",
    duration: "6 weeks",
    modules: 9,
    image: "/placeholder.svg?height=200&width=300",
    category: "technology",
    featured: false,
    rating: 4.5,
    students: 756,
  },
  {
    id: 5,
    title: "History of Africa",
    description: "Discover the rich history of Africa from ancient civilizations to modern times.",
    level: "Intermediate",
    duration: "8 weeks",
    modules: 12,
    image: "/placeholder.svg?height=200&width=300",
    category: "history",
    featured: false,
    rating: 4.9,
    students: 643,
  },
  {
    id: 6,
    title: "Agricultural Science",
    description: "Learn about sustainable farming practices, crop cultivation, and livestock management.",
    level: "Intermediate",
    duration: "10 weeks",
    modules: 15,
    image: "/placeholder.svg?height=200&width=300",
    category: "agriculture",
    featured: true,
    rating: 4.7,
    students: 892,
  },
]

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Browse and enroll in our educational courses</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-9 w-full md:w-[250px]" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Sort</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{courses.length}</span> courses
          </div>
        </div>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.featured)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              .sort((a, b) => b.students - a.students)
              .slice(0, 3)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 2).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-6">
        <Button variant="outline" className="gap-2">
          Load More Courses
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  return (
    <Card className="overflow-hidden group transition-all hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden relative">
        {course.featured && (
          <div className="absolute top-2 left-2 z-10">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="h-full w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="text-sm font-medium text-white">View Course Details</div>
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{course.title}</CardTitle>
            <CardDescription className="line-clamp-2 mt-1">{course.description}</CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            {course.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-3">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{course.modules} Modules</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
            <span>{course.level}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                    className={`h-4 w-4 ${i < Math.floor(course.rating) ? "text-yellow-500" : "text-muted-foreground"}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
            </div>
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-xs text-muted-foreground">({course.students})</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/courses/${course.id}`} className="w-full">
          <Button className="w-full group-hover:bg-primary/90">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

