import ChatApi from "@/api"

import { chatResponse } from "@/types/chat-response"

export async function GET(req: Request, { params }: { params: { chatID: string } }) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get("token")
    const { chatID } = params
    if (!token) return new Response("Unauthorized", { status: 401 })

    const response = await ChatApi.get<chatResponse>(`/chats/${chatID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return Response.json(response.data)
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error)
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 })
    }

    return new Response("Internal server error", { status: 500 })
  }
}
