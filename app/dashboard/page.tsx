import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, BarChart3, Clock, Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  // This would normally come from an API or auth context
  const userRole = "admin" // Change to "student" or "teacher" to see different views

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            {userRole === "admin"
              ? "Manage your educational platform and monitor performance."
              : userRole === "teacher"
                ? "Manage your courses and track student progress."
                : "Welcome back! Here's an overview of your learning progress."}
          </p>
        </div>

        {userRole === "admin" && (
          <div className="flex flex-wrap gap-2">
            <Link href="/courses/create">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                <span>Create Course</span>
              </Button>
            </Link>
            <Link href="/users/manage">
              <Button variant="outline" className="gap-2">
                <Users className="h-4 w-4" />
                <span>Manage Users</span>
              </Button>
            </Link>
          </div>
        )}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">{userRole === "admin" ? "Manage Courses" : "My Courses"}</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {userRole === "admin" ? "Total Courses" : "Courses Enrolled"}
                </CardTitle>
                <BookOpen className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userRole === "admin" ? "24" : "5"}</div>
                <p className="text-xs text-muted-foreground">
                  {userRole === "admin" ? "+4 from last month" : "+1 from last month"}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {userRole === "admin" ? "Active Users" : "Completed Courses"}
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userRole === "admin" ? "1,248" : "2"}</div>
                <p className="text-xs text-muted-foreground">
                  {userRole === "admin" ? "+12% from last month" : "+2 from last month"}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {userRole === "admin" ? "Total Learning Hours" : "Learning Hours"}
                </CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userRole === "admin" ? "8,540" : "24.5"}</div>
                <p className="text-xs text-muted-foreground">
                  {userRole === "admin" ? "+18% from last month" : "+5.2 from last week"}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {userRole === "admin" ? "Completion Rate" : "Achievement Score"}
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userRole === "admin" ? "68%" : "78%"}</div>
                <p className="text-xs text-muted-foreground">
                  {userRole === "admin" ? "+5% from last month" : "+4% from last month"}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-full md:col-span-4 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{userRole === "admin" ? "Platform Activity" : "Learning Progress"}</CardTitle>
                <CardDescription>
                  {userRole === "admin" ? "User engagement over time" : "Your progress across all courses"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[240px] flex items-center justify-center text-muted-foreground">
                  {userRole === "admin"
                    ? "Activity chart will be displayed here"
                    : "Learning progress chart will be displayed here"}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-full md:col-span-3 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{userRole === "admin" ? "Recent Activities" : "Recent Activity"}</CardTitle>
                <CardDescription>
                  {userRole === "admin" ? "Latest platform activities" : "Your recent learning activities"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userRole === "admin" ? (
                    <>
                      <div className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">New course published: Advanced Mathematics</p>
                          <p className="text-xs text-muted-foreground">1 hour ago by Dr. Sarah Johnson</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">15 new users registered</p>
                          <p className="text-xs text-muted-foreground">Today</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Course updated: Introduction to Biology</p>
                          <p className="text-xs text-muted-foreground">Yesterday by Prof. Michael Lee</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-purple-500"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">System maintenance completed</p>
                          <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Completed Module 3: Basic Algebra</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Started Course: Introduction to Biology</p>
                          <p className="text-xs text-muted-foreground">Yesterday</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Earned Certificate: Basic Mathematics</p>
                          <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          {userRole === "admin" ? (
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Course Management</h2>
                  <p className="text-muted-foreground">Manage and monitor all courses on the platform</p>
                </div>
                <div className="flex gap-2">
                  <Link href="/courses/create">
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      <span>Add Course</span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 1,
                    title: "Introduction to Mathematics",
                    students: 245,
                    status: "active",
                    completion: 78,
                    instructor: "Dr. Sarah Johnson",
                  },
                  {
                    id: 2,
                    title: "Basic Science",
                    students: 187,
                    status: "active",
                    completion: 65,
                    instructor: "Prof. Michael Lee",
                  },
                  {
                    id: 3,
                    title: "English Language",
                    students: 312,
                    status: "active",
                    completion: 82,
                    instructor: "Ms. Emily Parker",
                  },
                  {
                    id: 4,
                    title: "Computer Skills",
                    students: 156,
                    status: "draft",
                    completion: 0,
                    instructor: "Mr. David Wilson",
                  },
                  {
                    id: 5,
                    title: "History of Africa",
                    students: 98,
                    status: "review",
                    completion: 45,
                    instructor: "Dr. James Okonkwo",
                  },
                  {
                    id: 6,
                    title: "Agricultural Science",
                    students: 178,
                    status: "active",
                    completion: 71,
                    instructor: "Dr. Maria Santos",
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
                          {course.status === "active" ? "Active" : course.status === "draft" ? "Draft" : "Review"}
                        </Badge>
                      </div>
                      <CardDescription>Instructor: {course.instructor}</CardDescription>
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
            </>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5].map((course) => (
                <Card key={course} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Mathematics {course}</CardTitle>
                    <CardDescription>Learn the fundamentals of mathematics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{Math.floor(Math.random() * 100)}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/courses/${course}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        View Course
                      </Link>
                    </Button>
                    <Button size="sm">Continue</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{userRole === "admin" ? "User Engagement" : "Learning Time Distribution"}</CardTitle>
                <CardDescription>
                  {userRole === "admin" ? "Platform usage statistics" : "Hours spent on different subjects"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  {userRole === "admin"
                    ? "User engagement chart will be displayed here"
                    : "Learning time chart will be displayed here"}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{userRole === "admin" ? "Course Popularity" : "Performance"}</CardTitle>
                <CardDescription>{userRole === "admin" ? "Most enrolled courses" : "Your test scores"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  {userRole === "admin"
                    ? "Course popularity chart will be displayed here"
                    : "Performance chart will be displayed here"}
                </div>
              </CardContent>
            </Card>

            {userRole === "admin" && (
              <>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>User Demographics</CardTitle>
                    <CardDescription>User distribution by region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[240px] flex items-center justify-center text-muted-foreground">
                      Demographics chart will be displayed here
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Completion Rates</CardTitle>
                    <CardDescription>Course completion statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[240px] flex items-center justify-center text-muted-foreground">
                      Completion rates chart will be displayed here
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>System Performance</CardTitle>
                    <CardDescription>Platform uptime and response times</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[240px] flex items-center justify-center text-muted-foreground">
                      System performance chart will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

