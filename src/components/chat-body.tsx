"use client"

import React, { useEffect, useRef } from "react"
import chatData from "@/dummy-data/dummy-chat.json"

import { UserGuard } from "@/types/chat-response"

import DateIndicator from "./date-indicator"
import Message from "./message"
import { ScrollArea } from "./ui/scroll-area"

type Props = {}

const ChatBody = (props: Props) => {
  const lastMessageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to the last message on mount
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView()
    }
  }, [])
  return (
    <ScrollArea className="h-[calc(100vh-164px)] py-5">
      {chatData.data.messages.map((message, index) => {
        return (
          <div
            key={`message_${message.id}`}
            ref={
              index === chatData.data.messages.length - 1 ? lastMessageRef : null
            }>
            {message.date !== chatData.data.messages[index - 1]?.date ? (
              <DateIndicator date={message.date} />
            ) : null}
            <Message
              {...message}
              user_guard={message.user_guard as UserGuard}
              name={chatData.data.user.name}
              avatar={chatData.data.user.avatar}
            />
          </div>
        )
      })}
    </ScrollArea>
  )
}

export default ChatBody
