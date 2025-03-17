"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  BarChart3,
  Users,
  Settings,
  MessageSquare,
  Home,
  GraduationCap,
  User,
  FileText,
  PlusCircle,
  Leaf,
  ChevronDown,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

type SidebarProps = {
  role?: "admin" | "teacher" | "student"
}

export function DashboardSidebar({ role = "admin" }: SidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar className="border-primary/10">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary"></div>
            <Leaf className="h-5 w-5 text-primary-foreground relative z-10" />
          </div>
          <span className="font-bold text-xl">RuraLearn</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard"} tooltip="Dashboard">
                  <Link href="/dashboard">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={
                    pathname.startsWith("/courses") && !pathname.includes("/create") && !pathname.includes("/manage")
                  }
                  tooltip="Courses"
                >
                  <Link href="/courses">
                    <BookOpen className="h-4 w-4" />
                    <span>Courses</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/chatbot"} tooltip="AI Chatbot">
                  <Link href="/chatbot">
                    <MessageSquare className="h-4 w-4" />
                    <span>AI Chatbot</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {role === "admin" && (
          <SidebarGroup>
            <SidebarGroupLabel>Administration</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <Collapsible className="w-full">
                  <SidebarMenuItem>
                    <CollapsibleTrigger className="flex w-full" asChild>
                      <SidebarMenuButton
                        isActive={pathname.includes("/courses/manage") || pathname.includes("/courses/create")}
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>Course Management</span>
                        <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                  <CollapsibleContent className="pl-6 pt-1">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={pathname === "/courses/create"} size="sm">
                          <Link href="/courses/create">
                            <PlusCircle className="h-4 w-4" />
                            <span>Create Course</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={pathname === "/courses/manage"} size="sm">
                          <Link href="/courses/manage">
                            <FileText className="h-4 w-4" />
                            <span>Manage Courses</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </CollapsibleContent>
                </Collapsible>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname.startsWith("/users")} tooltip="Users">
                    <Link href="/users">
                      <Users className="h-4 w-4" />
                      <span>Users</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/analytics"} tooltip="Analytics">
                    <Link href="/analytics">
                      <BarChart3 className="h-4 w-4" />
                      <span>Analytics</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {role === "teacher" && (
          <SidebarGroup>
            <SidebarGroupLabel>Teaching</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/students"} tooltip="Students">
                    <Link href="/students">
                      <GraduationCap className="h-4 w-4" />
                      <span>Students</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/course-management"} tooltip="Course Management">
                    <Link href="/course-management">
                      <FileText className="h-4 w-4" />
                      <span>Course Management</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/create-course"} tooltip="Create Course">
                    <Link href="/create-course">
                      <PlusCircle className="h-4 w-4" />
                      <span>Create Course</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/profile"} tooltip="Profile">
                  <Link href="/profile">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/settings"} tooltip="Settings">
                  <Link href="/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2">
          <div className="rounded-lg bg-primary/10 p-3">
            <p className="text-xs text-muted-foreground mb-1">Need help with RuraLearn?</p>
            <Link href="/chatbot">
              <Button variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary/10 text-xs">
                Ask AI Assistant
              </Button>
            </Link>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

