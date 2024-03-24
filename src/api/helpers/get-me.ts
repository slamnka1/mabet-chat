import axios from "axios"

import { UserResponse } from "@/types/user"

export const getMe = async ({ token }: { token: string }) => {
  console.log("🚀 ~ getMe ~ token:", token)
  const response = await axios.get<UserResponse>(
    `http://127.0.0.1:3000/api/me?token=${token}`,
  )
  return response.data
}
