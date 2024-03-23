import ChatApi from "@/api"
import axios from "axios"

import { ChatListsResponse } from "@/types/chat-list-response"

export const getChatList = async (token: string) => {
  const response = await axios.get<ChatListsResponse>(
    `/api/chats-list?token=${token}`,
  )
  return response.data
}
