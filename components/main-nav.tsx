"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen } from "lucide-react"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="flex items-center space-x-2">
        <BookOpen className="h-6 w-6" />
        <span className="font-bold text-xl hidden md:inline-block">RuraLearn</span>
      </Link>
      <Link
        href="/dashboard"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/courses"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/courses" || pathname.startsWith("/courses/") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Courses
      </Link>
      <Link
        href="/chatbot"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/chatbot" ? "text-primary" : "text-muted-foreground",
        )}
      >
        AI Chatbot
      </Link>
    </nav>
  )
}

