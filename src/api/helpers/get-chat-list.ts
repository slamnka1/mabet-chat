import ChatApi from "@/api"
import axios from "axios"

import { ChatListsResponse } from "@/types/chat-list-response"

export const getChatList = async ({
  token,
  query,
  pageParam,
}: {
  token: string
  query?: string
  pageParam: string | number
}) => {
  let url = `http://127.0.0.1:3000/api/chats-list?token=${token}&page=${pageParam}`
  if (query) url += `&query=${query}`
  const response = await axios.get<ChatListsResponse>(url)
  return response.data
}
