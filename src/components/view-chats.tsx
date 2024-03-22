"use client"

import React, { useEffect } from "react"
import { getChatList } from "@/api/helpers/get-chat-list"
import { useSocket } from "@/socket-context"
import { useQuery } from "@tanstack/react-query"

import { Chat, ChatListsResponse } from "@/types/chat-list-response"

import ChatItem from "./chat-item"
import { ScrollArea } from "./ui/scroll-area"

type Props = {
  token: string
}

const ViewChats = ({ token }: Props) => {
  const { data } = useQuery<ChatListsResponse>({
    queryKey: ["chat-lists"],
    queryFn: async () => await getChatList(token!),
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    refetchOnReconnect: "always",
  })
  const socket = useSocket()
  useEffect(() => {
    if (socket?.id) {
      socket.emit("online", token)
    }
  }, [socket?.id])

  return (
    <>
      <div className="border-b px-6 shadow-md ">
        <h2 className=" pb-4 text-xl font-bold">جميع المحادثات</h2>
      </div>

      <ScrollArea className="h-[calc(100vh-420px)]">
        {data?.data.chats.map((chat, i) => (
          <ChatItem key={`chat_${chat.uuid}`} {...chat} token={token} />
        ))}
      </ScrollArea>
    </>
  )
}

export default ViewChats
