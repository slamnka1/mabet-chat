import ChatApi from "@/api"
import { reportOnline } from "@/api/helpers/report-online"
import axios from "axios"

export async function POST(req: Request) {
  try {
    const { token } = (await req.json()) as {
      token: string
    }
    if (!token) return new Response("Unauthorized", { status: 401 })
    const response = await ChatApi.post(
      "/account/report-as-online",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return Response.json(response.data)
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 })
    }

    return new Response("Internal server error", { status: 500 })
  }
}
