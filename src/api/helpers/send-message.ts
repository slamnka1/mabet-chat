import ChatApi from "@/api"

export const sendMessage = async ({
  chatID,
  token,
  message,
}: {
  chatID: string
  token: string | null
  message: string
}) => {
  if (!token) throw new Error("no token provided")
  const formData = new FormData()
  formData.append("message", message)
  const response = await ChatApi.post(`/chats/${chatID}/send_message`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
