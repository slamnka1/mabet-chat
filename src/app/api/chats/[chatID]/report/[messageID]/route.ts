import { reportMessage } from "@/api/helpers/report-message"
import axios from "axios"

export async function POST(
  req: Request,
  { params }: { params: { chatID: string; messageID: string } },
) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get("token")
    if (!token) return new Response("Unauthorized", { status: 401 })

    const { chatID, messageID } = params
    const response = await reportMessage({ chatID, messageID, token })
    return Response.json(response)
  } catch (error) {
    console.log("🚀 ~ file: route.ts:72 ~ POST ~ error:", error)
    if (axios.isAxiosError(error) && error.response?.status === 403) {
      new Response("هناك مشكلة في قبول الابلاغ، برجاء التواصل مع الدعم الفني.", {
        status: 403,
      })
    }
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 })
    }

    return new Response("Internal server error", { status: 500 })
  }
}
