import axios from "axios"

import { chatResponse } from "@/types/chat-response"

export const getChat = async ({
  chatID,
  token,
}: {
  chatID: string
  token: string
}) => {
  const response = await axios.get<chatResponse>(
    `http://127.0.0.1:3000/api/chats/${chatID}?token=${token}`,
  )
  return response.data
}
