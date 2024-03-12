type MessageType = {
  id: string | number
  message: string
  time: Date | string
}

type Chat = {
  id: number | string
  name: string
  image: string
  lasMessage: MessageType
  newMessages?: MessageType[]
}

export type { MessageType, Chat }
