import ChatApi from "@/api"

import { ChatListsResponse } from "@/types/chat-list-response"

export const getChatList = async (token: string) => {
  const response = await ChatApi.get<ChatListsResponse>("/chats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
