"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  BookOpen,
  Home,
  BookOpenText,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  BarChart3,
  Users,
  FileText,
  PlusCircle,
  Leaf,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useIsMobile } from "@/hooks/use-mobile"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  // Close the menu when navigating or when screen size changes to desktop
  useEffect(() => {
    setOpen(false)
  }, [pathname, isMobile])

  // This would normally come from an API or auth context
  const userRole = "admin" // Change to "student" or "teacher" to see different views
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "/placeholder.svg?height=32&width=32",
  }

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-primary/10 p-4">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary"></div>
                <Leaf className="h-5 w-5 text-primary-foreground relative z-10" />
              </div>
              <span className="font-bold text-xl">RuraLearn</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <div className="p-4 border-b border-primary/10">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-primary/20">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto py-4">
            <nav className="flex flex-col gap-1 px-2">
              <Link
                href="/dashboard"
                className={`mobile-nav-item ${isActive("/dashboard") ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/courses"
                className={`mobile-nav-item ${isActive("/courses") ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <BookOpenText className="h-5 w-5" />
                <span>Courses</span>
              </Link>
              <Link
                href="/chatbot"
                className={`mobile-nav-item ${isActive("/chatbot") ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <MessageSquare className="h-5 w-5" />
                <span>AI Chatbot</span>
              </Link>

              {userRole === "admin" && (
                <>
                  <div className="my-2 px-3 text-xs font-semibold text-muted-foreground">ADMINISTRATION</div>
                  <Link
                    href="/users"
                    className={`mobile-nav-item ${isActive("/users") ? "active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <Users className="h-5 w-5" />
                    <span>Users</span>
                  </Link>
                  <Link
                    href="/analytics"
                    className={`mobile-nav-item ${isActive("/analytics") ? "active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span>Analytics</span>
                  </Link>
                  <Link
                    href="/courses/create"
                    className={`mobile-nav-item ${isActive("/courses/create") ? "active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <PlusCircle className="h-5 w-5" />
                    <span>Create Course</span>
                  </Link>
                </>
              )}

              {userRole === "teacher" && (
                <>
                  <div className="my-2 px-3 text-xs font-semibold text-muted-foreground">TEACHING</div>
                  <Link
                    href="/students"
                    className={`mobile-nav-item ${isActive("/students") ? "active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <Users className="h-5 w-5" />
                    <span>Students</span>
                  </Link>
                  <Link
                    href="/course-management"
                    className={`mobile-nav-item ${isActive("/course-management") ? "active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Course Management</span>
                  </Link>
                </>
              )}

              <div className="my-2 px-3 text-xs font-semibold text-muted-foreground">ACCOUNT</div>
              <Link
                href="/profile"
                className={`mobile-nav-item ${isActive("/profile") ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <Link
                href="/settings"
                className={`mobile-nav-item ${isActive("/settings") ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>

            <div className="mt-4 px-2">
              <div className="rounded-lg bg-primary/10 p-4">
                <h3 className="font-medium flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Need Help?</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Get instant assistance with our AI chatbot or contact our support team.
                </p>
                <Link href="/chatbot" onClick={() => setOpen(false)}>
                  <Button className="w-full" size="sm">
                    Chat with AI
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/10 p-4">
            <Link
              href="/logout"
              className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors"
              onClick={() => setOpen(false)}
            >
              <LogOut className="h-5 w-5" />
              <span>Log out</span>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

