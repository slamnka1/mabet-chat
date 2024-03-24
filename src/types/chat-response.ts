export type chatResponse = {
  data: Data
  message: null
  success: boolean
}

export type Data = {
  unit: Record<string | string, Unit>
  user: User
  messages: Message[]
}

export type Message = {
  id: number
  chat_id: string
  message: string
  user_id?: number
  user_guard?: UserGuard
  is_me: boolean
  sent_at: string
  date: string
  unit_id: number | string
  isLoading?: boolean
  isError?: boolean
}

export type UserGuard = "sanctum" | "partner_api" | "guest" | "admin"

export type Unit = {
  name: string
  link: string
  code: string
  address: string
  image: string
}

export type User = {
  name: string
  avatar: string
  created_at: string
  user_identifier: string
}
