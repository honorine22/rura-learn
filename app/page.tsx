import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, MessageSquare, ArrowRight, CheckCircle, Lightbulb, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary animate-pulse-slow"></div>
                <BookOpen className="h-5 w-5 text-primary-foreground relative z-10" />
              </div>
              <span className="font-bold text-xl">RuraLearn</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
                Courses
              </Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm" className="ml-4">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Register</Button>
              </Link>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden hero-gradient">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-60 blur-3xl"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm font-medium">
                  Empowering Rural Education in Africa
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                  Bridging the Gap in <span className="text-primary">Rural Education</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                  RuraLearn provides AI-powered personalized learning to bridge the gap between urban and rural
                  education in Africa, making quality education accessible to all.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="group relative overflow-hidden">
                      <span className="relative z-10 flex items-center">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center animate-slide-down">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-lime-400 opacity-30 blur-xl animate-pulse-slow"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="RuraLearn students learning"
                      className="relative rounded-xl object-cover"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <p className="text-sm font-medium">Personalized learning for every student</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                  Why Choose RuraLearn
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  Key Features
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                  Discover how RuraLearn is transforming education in rural Africa with innovative technology and
                  personalized learning
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="card-hover group relative overflow-hidden border-primary/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <CardTitle>Personalized Learning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI-powered curriculum that adapts to each student's learning pace and style, ensuring optimal
                    educational outcomes.
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-lime-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
              </Card>
              <Card className="card-hover group relative overflow-hidden border-primary/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <CardTitle>AI Chatbot Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 learning assistance through our intelligent chatbot that answers questions in real-time and
                    provides personalized guidance.
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-lime-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
              </Card>
              <Card className="card-hover group relative overflow-hidden border-primary/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <CardTitle>Teacher Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive tools for educators to track student progress, customize learning materials, and
                    provide targeted support.
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-lime-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Our Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
                  Transforming Rural Education
                </h2>
                <p className="text-muted-foreground md:text-lg text-balance">
                  RuraLearn is making a significant impact in rural communities across Africa, providing access to
                  quality education where it's needed most.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 animated-bg rounded-lg p-3 transition-all">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Increased Access</h3>
                      <p className="text-sm text-muted-foreground">
                        Bringing education to over 500 rural communities with limited resources
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animated-bg rounded-lg p-3 transition-all">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Improved Outcomes</h3>
                      <p className="text-sm text-muted-foreground">
                        85% of students show significant academic improvement within 3 months
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animated-bg rounded-lg p-3 transition-all">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Teacher Empowerment</h3>
                      <p className="text-sm text-muted-foreground">
                        Over 1,000 teachers equipped with digital teaching tools and training
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animated-bg rounded-lg p-3 transition-all">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Community Engagement</h3>
                      <p className="text-sm text-muted-foreground">
                        Partnering with local communities to ensure culturally relevant education
                      </p>
                    </div>
                  </li>
                </ul>
                <Link href="/about">
                  <Button variant="outline" className="group border-primary/20 hover:bg-primary/10">
                    Learn More About Our Impact
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/placeholder.svg?height=300&width=250"
                      alt="Students learning"
                      className="h-auto w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/placeholder.svg?height=400&width=250"
                      alt="Rural classroom"
                      className="h-auto w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/placeholder.svg?height=400&width=250"
                      alt="Teacher with students"
                      className="h-auto w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/placeholder.svg?height=300&width=250"
                      alt="Student using tablet"
                      className="h-auto w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  How It Works
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                  Our simple process to get started with RuraLearn and transform your educational journey
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12 relative">
              <div className="hidden md:block absolute top-1/2 left-[25%] right-[25%] h-1 bg-primary/20 -translate-y-1/2 z-0"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4 shadow-lg shadow-primary/20 relative">
                  <div className="absolute inset-0 rounded-full bg-primary animate-pulse-slow"></div>
                  <Users className="h-10 w-10 relative z-10" />
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-4 border-primary text-foreground font-bold text-sm">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold">Create an Account</h3>
                <p className="mt-2 text-muted-foreground">
                  Sign up for free and create your personalized learning profile.
                </p>
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4 shadow-lg shadow-primary/20 relative">
                  <div className="absolute inset-0 rounded-full bg-primary animate-pulse-slow"></div>
                  <BookOpen className="h-10 w-10 relative z-10" />
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-4 border-primary text-foreground font-bold text-sm">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold">Explore Courses</h3>
                <p className="mt-2 text-muted-foreground">
                  Browse our catalog of courses tailored to rural education needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4 shadow-lg shadow-primary/20 relative">
                  <div className="absolute inset-0 rounded-full bg-primary animate-pulse-slow"></div>
                  <Lightbulb className="h-10 w-10 relative z-10" />
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-4 border-primary text-foreground font-bold text-sm">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold">Start Learning</h3>
                <p className="mt-2 text-muted-foreground">
                  Begin your educational journey with personalized AI guidance.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/register">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">Join Our Community</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                  Be part of the educational revolution in rural Africa
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1 border-primary/20 focus-visible:ring-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="relative overflow-hidden group">
                    <span className="relative z-10">Subscribe</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our terms and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/10 bg-muted/20">
        <div className="container flex flex-col gap-6 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary"></div>
                <BookOpen className="h-4 w-4 text-primary-foreground relative z-10" />
              </div>
              <span className="font-bold">RuraLearn</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bridging the gap between urban and rural education in Africa.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-sm font-medium">Company</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                Team
              </Link>
              <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-sm font-medium">Resources</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                Courses
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </nav>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-sm font-medium">Legal</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-primary/10 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} RuraLearn. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-right">
              Made with <span className="text-primary">❤️</span> for rural education
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

