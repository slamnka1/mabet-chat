import ChatApi from "@/api"
import axios from "axios"

export const getChatList = async <T>({
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
  const response = await axios.get<T>(url)
  return response.data
}
