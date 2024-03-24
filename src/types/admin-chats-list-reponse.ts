export type AdminChatsListResponse = {
  data: Data
  message: null
  success: boolean
}

export type Data = {
  statics: Statics
  chats: Chat[]
  from: number
  to: number
  total: number
  per_page: number
  current_page: number
  last_page: number
  next_page_url: string
  previous_page_url: null
}

export type Chat = {
  uuid: string
  sender_name: null | string
  receiver_name: string
  is_sender_online: boolean
  last_sender_active: number
  is_receiver_online: boolean
  last_receiver_active: number
  sender_identifier: string
  receiver_identifier: string
  sender_guard: string
  receiver_guard: string
  sender_image: string
  receiver_image: string
  last_message: string
  is_read: boolean
  unread_messages: number
  created_at: Date
  last_message_at: string
  last_message_day: string
  chat_link: string
  access_token: string
}

export type Statics = {
  response_rate: string
  response_duration: string
}
