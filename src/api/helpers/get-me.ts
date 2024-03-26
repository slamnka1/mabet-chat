import axios from "axios"

import { UserResponse } from "@/types/user"

export const getMe = async ({ token }: { token: string }) => {
  const response = await axios.get<UserResponse>(`/api/me?token=${token}`)
  return response.data
}
