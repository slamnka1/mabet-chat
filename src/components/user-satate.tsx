"use client"

import React, { useEffect, useState } from "react"
import { getChat } from "@/api/helpers/get-chat"
import { useSocket } from "@/socket-context"
import { useQuery } from "@tanstack/react-query"

import { chatResponse } from "@/types/chat-response"

type Props = {
  chatID: string
  token: string
}

const UserState = ({ chatID, token }: Props) => {
  const { data, isFetching, isFetched } = useQuery<chatResponse>({
    queryKey: [chatID],
    queryFn: async () => await getChat({ chatID, token }),
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    refetchOnReconnect: "always",
  })
  const [isTyping, setIsTyping] = useState(false)

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
      ) : data?.data.user.is_online ? (
        "متصل الأن"
      ) : (
        " غير متصل الان"
      )}
    </p>
  )
}

export default UserState
