import ChatApi from "@/api"

export const reportMessage = async ({
  chatID,
  token,
  messageID,
}: {
  chatID: string
  token: string
  messageID: string
}) => {
  const response = await ChatApi.post(
    `/chats/${chatID}/report/${messageID}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return response.data
}
