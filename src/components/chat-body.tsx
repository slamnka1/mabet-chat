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
    <ScrollArea className="relative h-[calc(100vh-250px)] pt-5">
      {chatData.data.messages.map((message, index) => {
        return (
          <React.Fragment key={`message_${message.id}`}>
            {message.date !== chatData.data.messages[index - 1]?.date ? (
              <DateIndicator date={message.date} />
            ) : null}
            <div
              ref={
                index === chatData.data.messages.length - 1 ? lastMessageRef : null
              }>
              <Message
                {...message}
                user_guard={message.user_guard as UserGuard}
                name={chatData.data.user.name}
                avatar={chatData.data.user.avatar}
              />
            </div>
          </React.Fragment>
        )
      })}
    </ScrollArea>
  )
}

export default ChatBody
