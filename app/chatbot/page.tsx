"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Mic, MicOff, Image, Paperclip, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChatbotPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const [isRecording, setIsRecording] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // In a real app, this would start/stop speech recognition
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">AI Learning Assistant</h1>
        </div>
        <p className="text-muted-foreground">Ask any question about your courses or get help with your studies.</p>

        <Tabs defaultValue="chat" onValueChange={setActiveTab} className="h-[calc(100vh-16rem)]">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="h-full flex flex-col">
            <Card className="flex flex-col flex-1 shadow-lg border-primary/10">
              <CardHeader className="bg-muted/50 rounded-t-lg">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border-2 border-primary">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>RuraLearn AI</CardTitle>
                    <CardDescription>Your personal AI tutor</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden p-4">
                <ScrollArea className="h-[calc(100vh-24rem)]">
                  <div className="space-y-4 pr-4">
                    {messages.length === 0 ? (
                      <div className="flex h-40 items-center justify-center rounded-lg border border-dashed p-8 bg-muted/30">
                        <div className="flex flex-col items-center gap-2 text-center">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Sparkles className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold">Start a conversation</h3>
                          <p className="text-sm text-muted-foreground max-w-xs">
                            Ask any question about your courses or learning materials. I'm here to help with
                            explanations, examples, and guidance.
                          </p>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-left"
                              onClick={() =>
                                handleInputChange({ target: { value: "Explain the Pythagorean theorem" } } as any)
                              }
                            >
                              Explain the Pythagorean theorem
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-left"
                              onClick={() =>
                                handleInputChange({ target: { value: "How do I solve quadratic equations?" } } as any)
                              }
                            >
                              How do I solve quadratic equations?
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-left"
                              onClick={() =>
                                handleInputChange({
                                  target: { value: "What are the key events of the Industrial Revolution?" },
                                } as any)
                              }
                            >
                              Key events of the Industrial Revolution
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-left"
                              onClick={() =>
                                handleInputChange({ target: { value: "Help me understand photosynthesis" } } as any)
                              }
                            >
                              Help me understand photosynthesis
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`flex max-w-[80%] items-start gap-3 rounded-lg p-3 ${
                              message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            {message.role !== "user" && (
                              <Avatar className="h-8 w-8 border border-primary/20">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                                <AvatarFallback>
                                  <Bot className="h-4 w-4" />
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div className="flex-1 space-y-2">
                              <p className="text-sm leading-relaxed">{message.content}</p>
                            </div>
                            {message.role === "user" && (
                              <Avatar className="h-8 w-8 border border-primary/20">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                                <AvatarFallback>
                                  <User className="h-4 w-4" />
                                </AvatarFallback>
                              </Avatar>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex max-w-[80%] items-start gap-3 rounded-lg bg-muted p-3">
                          <Avatar className="h-8 w-8 border border-primary/20">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                            <AvatarFallback>
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="flex space-x-2">
                              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                              <span className="h-2 w-2 rounded-full bg-primary animate-pulse delay-150"></span>
                              <span className="h-2 w-2 rounded-full bg-primary animate-pulse delay-300"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="border-t bg-muted/30 p-4">
                <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                  <Button type="button" size="icon" variant="ghost" className="flex-shrink-0">
                    <Paperclip className="h-4 w-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                  <Button type="button" size="icon" variant="ghost" className="flex-shrink-0">
                    <Image className="h-4 w-4" />
                    <span className="sr-only">Attach image</span>
                  </Button>
                  <div className="relative flex-1">
                    <Input
                      id="message"
                      placeholder="Type your message..."
                      className="pr-10"
                      autoComplete="off"
                      value={input}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
                      onClick={toggleRecording}
                    >
                      {isRecording ? <MicOff className="h-4 w-4 text-destructive" /> : <Mic className="h-4 w-4" />}
                      <span className="sr-only">{isRecording ? "Stop recording" : "Start recording"}</span>
                    </Button>
                  </div>
                  <Button
                    type="submit"
                    size="icon"
                    className="flex-shrink-0 bg-primary hover:bg-primary/90"
                    disabled={isLoading || !input.trim()}
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="h-full">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Chat History</CardTitle>
                <CardDescription>View your previous conversations with the AI assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((session, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Study Session {session}</h3>
                        <span className="text-xs text-muted-foreground">
                          {new Date(Date.now() - 86400000 * session).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {session === 1
                          ? "Mathematics - Algebra"
                          : session === 2
                            ? "Science - Biology"
                            : "History - Industrial Revolution"}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">{4 + session} messages</span>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

