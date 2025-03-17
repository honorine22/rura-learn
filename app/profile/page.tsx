import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="john@example.com" />
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  defaultValue="I'm a student interested in mathematics and science."
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Nairobi, Kenya" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Input id="language" defaultValue="English" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Preferences</CardTitle>
              <CardDescription>Customize your learning experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="interests">Areas of Interest</Label>
                <Input id="interests" defaultValue="Mathematics, Science, Computer Skills" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="goals">Learning Goals</Label>
                <Textarea
                  id="goals"
                  placeholder="What do you want to achieve?"
                  defaultValue="Complete basic mathematics and science courses by the end of the year."
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center py-8 text-muted-foreground">Notification settings will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Achievements</CardTitle>
              <CardDescription>View your earned badges and certificates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="py-2 px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-primary"></div>
                        <span>Quick Learner</span>
                      </div>
                    </Badge>
                    <Badge variant="outline" className="py-2 px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-primary"></div>
                        <span>Math Whiz</span>
                      </div>
                    </Badge>
                    <Badge variant="outline" className="py-2 px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-primary"></div>
                        <span>Consistent Learner</span>
                      </div>
                    </Badge>
                    <Badge variant="outline" className="py-2 px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-primary"></div>
                        <span>Problem Solver</span>
                      </div>
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Certificates</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Basic Mathematics</CardTitle>
                        <CardDescription>Completed on March 15, 2025</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm">
                          View Certificate
                        </Button>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Introduction to Science</CardTitle>
                        <CardDescription>Completed on February 10, 2025</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm">
                          View Certificate
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

