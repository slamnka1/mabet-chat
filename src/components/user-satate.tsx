"use client"

import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useSocket } from "@/socket-context"

type Props = {}

const UserState = (props: Props) => {
  const [isTyping, setIsTyping] = useState(false)
  const { chatID } = useParams<{ chatID: string }>()!

  const socket = useSocket()
  const handleTypingState = (isTyping: boolean, chat_id: string) => {
    setIsTyping(isTyping && chat_id === chatID)
  }
  useEffect(() => {
    if (socket?.id) {
      socket.on("typing", handleTypingState)
      return () => {
        socket.off("typing", handleTypingState)
      }
    }
  }, [socket, chatID])
  return (
    <p className="text-sm font-semibold">
      {isTyping ? (
        <span className="font-bold text-white">يكتب...</span>
      ) : (
        " غير متصل الان"
      )}
    </p>
  )
}

export default UserState
