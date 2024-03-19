import ChatApi from "@/api"

import { chatResponse } from "@/types/chat-response"

export const getChat = async ({
  chatID,
  token,
}: {
  chatID: string
  token: string
}) => {
  const response = await ChatApi.get<chatResponse>(`/chats/${chatID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
