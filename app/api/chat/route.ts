import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    system:
      "You are an educational AI assistant for RuraLearn, a platform that bridges the gap between urban and rural education in Africa. You help students with their coursework, explain concepts, and provide learning resources. Be friendly, encouraging, and adapt your explanations to different learning levels.",
  })

  return result.toDataStreamResponse()
}

