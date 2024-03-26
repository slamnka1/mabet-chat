import axios from "axios"

export const getChat = async <T>({
  chatID,
  token,
}: {
  chatID: string
  token: string
}) => {
  const response = await axios.get<T>(
    `http://127.0.0.1:3000/api/chats/${chatID}?token=${token}`,
  )

  return response.data
}
