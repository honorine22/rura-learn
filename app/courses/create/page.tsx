"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Plus, Trash2, Upload, Save, Eye, BookOpen } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function CreateCoursePage() {
  const [activeTab, setActiveTab] = useState("basic")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast({
        title: "Course created successfully",
        description: "Your new course has been created and is now in draft mode.",
      })
      // In a real app, you would redirect to the course page or course management page
    } catch (error) {
      toast({
        title: "Error creating course",
        description: "There was an error creating your course. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/courses/manage">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create New Course</h1>
            <p className="text-muted-foreground">Create and publish a new educational course</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-2">
            <Eye className="h-4 w-4" />
            <span>Preview</span>
          </Button>
          <Button className="gap-2" onClick={handleSubmit} disabled={isSubmitting}>
            <Save className="h-4 w-4" />
            <span>{isSubmitting ? "Saving..." : "Save as Draft"}</span>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="sticky top-16 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-2">
          <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
              <CardDescription>Basic information about your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input id="title" placeholder="e.g. Introduction to Mathematics" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your course"
                  className="min-h-[120px]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="mathematics">
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="language">Language</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Difficulty Level</Label>
                  <Select defaultValue="beginner">
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Select a level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (weeks)</Label>
                  <Input id="duration" type="number" min="1" placeholder="e.g. 8" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructor">Instructor</Label>
                  <Select defaultValue="current">
                    <SelectTrigger id="instructor">
                      <SelectValue placeholder="Select an instructor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Yourself (Admin)</SelectItem>
                      <SelectItem value="sarah">Dr. Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Prof. Michael Lee</SelectItem>
                      <SelectItem value="emily">Ms. Emily Parker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Image</CardTitle>
              <CardDescription>Upload a cover image for your course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-primary/20 rounded-lg p-12 text-center">
                <BookOpen className="h-10 w-10 text-muted-foreground mb-4" />
                <div className="space-y-2">
                  <h3 className="font-medium">Upload course image</h3>
                  <p className="text-sm text-muted-foreground">Drag and drop an image, or click to browse</p>
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    <span>Upload Image</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={() => setActiveTab("content")}>Continue to Content</Button>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Modules</CardTitle>
              <CardDescription>Organize your course into modules and lessons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Module 1</h3>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="module-title-1">Module Title</Label>
                    <Input id="module-title-1" defaultValue="Introduction to the Course" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="module-description-1">Module Description</Label>
                    <Textarea id="module-description-1" placeholder="Describe this module" />
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium">Lessons</h4>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Plus className="h-3 w-3" />
                        <span>Add Lesson</span>
                      </Button>
                    </div>
                    <div className="border rounded-md p-3 space-y-2">
                      <div className="flex justify-between items-center">
                        <h5 className="text-sm">Lesson 1: Course Overview</h5>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-md p-3 space-y-2">
                      <div className="flex justify-between items-center">
                        <h5 className="text-sm">Lesson 2: Getting Started</h5>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full gap-2">
                  <Plus className="h-4 w-4" />
                  <span>Add New Module</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("basic")}>
              Back to Basic Info
            </Button>
            <Button onClick={() => setActiveTab("settings")}>Continue to Settings</Button>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Settings</CardTitle>
              <CardDescription>Configure additional settings for your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Visibility</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="public">Public Course</Label>
                    <p className="text-sm text-muted-foreground">Make this course visible to all students</p>
                  </div>
                  <Switch id="public" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="featured">Featured Course</Label>
                    <p className="text-sm text-muted-foreground">Highlight this course on the homepage</p>
                  </div>
                  <Switch id="featured" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Enrollment</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enrollment-limit">Enrollment Limit</Label>
                    <p className="text-sm text-muted-foreground">Set a maximum number of students</p>
                  </div>
                  <div className="w-[180px]">
                    <Input id="enrollment-limit" type="number" placeholder="No limit" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="self-enrollment">Self Enrollment</Label>
                    <p className="text-sm text-muted-foreground">Allow students to enroll themselves</p>
                  </div>
                  <Switch id="self-enrollment" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Certificates</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="certificates">Enable Certificates</Label>
                    <p className="text-sm text-muted-foreground">Issue certificates upon course completion</p>
                  </div>
                  <Switch id="certificates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="completion-threshold">Completion Threshold</Label>
                    <p className="text-sm text-muted-foreground">Minimum percentage required to complete the course</p>
                  </div>
                  <div className="w-[180px]">
                    <Select defaultValue="80">
                      <SelectTrigger id="completion-threshold">
                        <SelectValue placeholder="Select threshold" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="70">70%</SelectItem>
                        <SelectItem value="80">80%</SelectItem>
                        <SelectItem value="90">90%</SelectItem>
                        <SelectItem value="100">100%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2" onClick={handleSubmit} disabled={isSubmitting}>
                <Save className="h-4 w-4" />
                <span>{isSubmitting ? "Saving..." : "Save Course"}</span>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

