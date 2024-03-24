import axios from "axios"

export const reportOnline = async ({ token }: { token: string }) => {
  const response = await axios.post(`/api/me/report-online`, {
    token,
  })
  return response.data
}
