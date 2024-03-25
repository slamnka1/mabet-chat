import { deleteMessage } from "@/api/helpers/delete-message"
import axios from "axios"

export async function POST(
  req: Request,
  { params }: { params: { messageID: string } },
) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get("token")
    const { messageID } = params
    if (!token) return new Response("Unauthorized", { status: 401 })
    const response = await deleteMessage({ token, messageID })
    return Response.json(response)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("🚀 ~ error:", error)
      return new Response(JSON.stringify(error.response?.data), {
        status: error.response?.status || 500,
      })
    }
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 })
    }

    return new Response("Internal server error", { status: 500 })
  }
}
