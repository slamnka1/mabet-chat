import ChatApi from "@/api"
import axios from "axios"

import { ChatListsResponse } from "@/types/chat-list-response"

export const getChatList = async (token: string, pageParam: string | number) => {
  const response = await axios.get<ChatListsResponse>(
    `http://127.0.0.1:3000/api/chats-list?token=${token}&page=${pageParam}`,
  )
  return response.data
}
