"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { BookOpen, ArrowRight, ArrowLeft, Loader2, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type UserRole = "student" | "teacher" | "admin"

type FormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  role: UserRole
  school: string
  location: string
}

type FormErrors = {
  [K in keyof FormData]?: string
}

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    school: "",
    location: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const router = useRouter()
  const { toast } = useToast()

  const validateStep1 = () => {
    const newErrors: FormErrors = {}
    let valid = true

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      valid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const validateStep2 = () => {
    const newErrors: FormErrors = {}
    let valid = true

    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      valid = false
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
      valid = false
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const validateStep3 = () => {
    const newErrors: FormErrors = {}
    let valid = true

    if (!formData.role) {
      newErrors.role = "Please select a role"
      valid = false
    }

    if (!formData.school.trim()) {
      newErrors.school = "School/Institution is required"
      valid = false
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      role: value as UserRole,
    }))

    if (errors.role) {
      setErrors((prev) => ({
        ...prev,
        role: undefined,
      }))
    }
  }

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 3 && validateStep3()) {
      setIsLoading(true)

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        toast({
          title: "Registration successful",
          description: "Your account has been created. Welcome to RuraLearn!",
        })

        // Move to success step
        setStep(4)
      } catch (error) {
        toast({
          title: "Registration failed",
          description: "There was an error creating your account. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-muted/50 to-background p-4">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 blur-3xl"></div>

      <Link href="/" className="flex items-center gap-2 mb-8 relative z-10">
        <BookOpen className="h-8 w-8 text-primary" />
        <span className="font-bold text-2xl">RuraLearn</span>
      </Link>

      <Card className="w-full max-w-md relative z-10 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            {step < 4 ? "Enter your information to create your account" : "Your account has been created"}
          </CardDescription>

          {step < 4 && (
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                <div className={`h-2 w-2 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`}></div>
                <div className={`h-2 w-2 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                <div className={`h-2 w-2 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
              </div>
              <span className="text-sm text-muted-foreground">Step {step} of 3</span>
            </div>
          )}
        </CardHeader>

        <CardContent>
          {step === 1 && (
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <Button type="button" className="w-full" onClick={handleNextStep}>
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          {step === 2 && (
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "border-destructive" : ""}
                />
                {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                {!errors.password && (
                  <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? "border-destructive" : ""}
                />
                {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handlePrevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="button" onClick={handleNextStep}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">I am a</Label>
                <RadioGroup value={formData.role} onValueChange={handleRoleChange} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="teacher" id="teacher" />
                    <Label htmlFor="teacher">Teacher</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="admin" id="admin" />
                    <Label htmlFor="admin">Administrator</Label>
                  </div>
                </RadioGroup>
                {errors.role && <p className="text-sm text-destructive">{errors.role}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="school">School/Institution</Label>
                <Input
                  id="school"
                  name="school"
                  placeholder="Enter your school or institution"
                  value={formData.school}
                  onChange={handleChange}
                  className={errors.school ? "border-destructive" : ""}
                />
                {errors.school && <p className="text-sm text-destructive">{errors.school}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={handleChange}
                  className={errors.location ? "border-destructive" : ""}
                />
                {errors.location && <p className="text-sm text-destructive">{errors.location}</p>}
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handlePrevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center">Registration Successful!</h3>
              <p className="text-center text-muted-foreground">
                Your account has been created successfully. You can now log in to access your dashboard.
              </p>
              <Button className="w-full mt-4" onClick={() => router.push("/login")}>
                Go to Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>

        {step < 4 && (
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

