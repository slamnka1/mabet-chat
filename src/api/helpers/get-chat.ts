import axios from "axios"

export const getChat = async <T>({
  chatID,
  token,
}: {
  chatID: string
  token: string
}) => {
  const response = await axios.get<T>(`/api/chats/${chatID}?token=${token}`)
  return response.data
}
