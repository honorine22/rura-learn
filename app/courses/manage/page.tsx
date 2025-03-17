import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Eye, Search, Filter, ArrowUpDown, CheckCircle, AlertTriangle, Clock } from "lucide-react"
import Link from "next/link"

export default function CourseManagementPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Course Management</h1>
          <p className="text-muted-foreground">Manage and monitor all courses on the platform</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/courses/create">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Create Course</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search courses..." className="pl-9 w-full md:w-[300px]" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowUpDown className="h-4 w-4" />
            <span>Sort</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="review">Under Review</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "Introduction to Mathematics",
                students: 245,
                status: "active",
                completion: 78,
                instructor: "Dr. Sarah Johnson",
                lastUpdated: "2 days ago",
              },
              {
                id: 2,
                title: "Basic Science",
                students: 187,
                status: "active",
                completion: 65,
                instructor: "Prof. Michael Lee",
                lastUpdated: "1 week ago",
              },
              {
                id: 3,
                title: "English Language",
                students: 312,
                status: "active",
                completion: 82,
                instructor: "Ms. Emily Parker",
                lastUpdated: "3 days ago",
              },
              {
                id: 4,
                title: "Computer Skills",
                students: 156,
                status: "draft",
                completion: 0,
                instructor: "Mr. David Wilson",
                lastUpdated: "Just now",
              },
              {
                id: 5,
                title: "History of Africa",
                students: 98,
                status: "review",
                completion: 45,
                instructor: "Dr. James Okonkwo",
                lastUpdated: "5 hours ago",
              },
              {
                id: 6,
                title: "Agricultural Science",
                students: 178,
                status: "active",
                completion: 71,
                instructor: "Dr. Maria Santos",
                lastUpdated: "2 weeks ago",
              },
            ].map((course) => (
              <Card key={course.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge
                      variant={
                        course.status === "active" ? "default" : course.status === "draft" ? "outline" : "secondary"
                      }
                      className={
                        course.status === "active"
                          ? "bg-green-500"
                          : course.status === "draft"
                            ? "border-muted-foreground"
                            : "bg-yellow-500"
                      }
                    >
                      {course.status === "active" ? (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </div>
                      ) : course.status === "draft" ? (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 mr-1" />
                          Draft
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Review
                        </div>
                      )}
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="flex flex-col gap-1">
                      <span>Instructor: {course.instructor}</span>
                      <span className="text-xs">Last updated: {course.lastUpdated}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Enrolled Students</span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                    {course.status !== "draft" && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Avg. Completion</span>
                          <span className="font-medium">{course.completion}%</span>
                        </div>
                        <Progress value={course.completion} className="h-2" />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/courses/${course.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/courses/${course.id}/edit`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "Introduction to Mathematics",
                students: 245,
                status: "active",
                completion: 78,
                instructor: "Dr. Sarah Johnson",
                lastUpdated: "2 days ago",
              },
              {
                id: 2,
                title: "Basic Science",
                students: 187,
                status: "active",
                completion: 65,
                instructor: "Prof. Michael Lee",
                lastUpdated: "1 week ago",
              },
              {
                id: 3,
                title: "English Language",
                students: 312,
                status: "active",
                completion: 82,
                instructor: "Ms. Emily Parker",
                lastUpdated: "3 days ago",
              },
              {
                id: 6,
                title: "Agricultural Science",
                students: 178,
                status: "active",
                completion: 71,
                instructor: "Dr. Maria Santos",
                lastUpdated: "2 weeks ago",
              },
            ].map((course) => (
              <Card key={course.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge className="bg-green-500">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </div>
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="flex flex-col gap-1">
                      <span>Instructor: {course.instructor}</span>
                      <span className="text-xs">Last updated: {course.lastUpdated}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Enrolled Students</span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Avg. Completion</span>
                        <span className="font-medium">{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/courses/${course.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/courses/${course.id}/edit`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="draft" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 4,
                title: "Computer Skills",
                students: 0,
                status: "draft",
                completion: 0,
                instructor: "Mr. David Wilson",
                lastUpdated: "Just now",
              },
            ].map((course) => (
              <Card key={course.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge variant="outline" className="border-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 mr-1" />
                        Draft
                      </div>
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="flex flex-col gap-1">
                      <span>Instructor: {course.instructor}</span>
                      <span className="text-xs">Last updated: {course.lastUpdated}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Status</span>
                      <span className="font-medium">Not published</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/courses/${course.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/courses/${course.id}/edit`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="review" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 5,
                title: "History of Africa",
                students: 98,
                status: "review",
                completion: 45,
                instructor: "Dr. James Okonkwo",
                lastUpdated: "5 hours ago",
              },
            ].map((course) => (
              <Card key={course.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge className="bg-yellow-500">
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Review
                      </div>
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="flex flex-col gap-1">
                      <span>Instructor: {course.instructor}</span>
                      <span className="text-xs">Last updated: {course.lastUpdated}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Enrolled Students</span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Avg. Completion</span>
                        <span className="font-medium">{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/courses/${course.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/courses/${course.id}/edit`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

