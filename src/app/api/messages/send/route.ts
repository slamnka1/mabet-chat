import { sendMessage } from "@/api/helpers/send-message"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      chatID: string
      token: string
      message: string
    }
    const response = await sendMessage(body)
    return Response.json(response)
  } catch (error) {
    console.log("🚀 ~ file: route.ts:72 ~ POST ~ error:", error)
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 })
    }

    return new Response("Internal server error", { status: 500 })
  }
}
