import ChatApi from "@/api"

export const deleteMessage = async ({
  token,
  messageID,
}: {
  token: string | null
  messageID: string
}) => {
  const response = await ChatApi.delete(`/chats/messages/${messageID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
