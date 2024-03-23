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
    `/api/chats/${chatID}?token=${token}`,
  )
  return response.data
}
