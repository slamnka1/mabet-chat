export type AdminChatResponse = {
  data: Data
  message: null
  success: boolean
}

export type Data = {
  unit: Unit
  user: [User, User]
  messages: Message[]
}

export type Message = {
  id: number
  chat_id: string
  message: string
  user_id?: number
  user_guard?: UserGuard
  user_key?: 0 | 1
  is_me: boolean
  sent_at: string
  date: string
  unit_id: string | number
  isLoading?: boolean
  isError?: boolean
}

export type UserGuard = string

export type Unit = Record<string, The11>

export type The11 = {
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
