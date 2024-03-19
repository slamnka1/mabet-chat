"use client"

import React from "react"
import { dummyChats } from "@/dummy-data/dummy-chats"

import { Chat } from "@/types/chat-list-response"

import ChatItem from "./chat-item"
import { ScrollArea } from "./ui/scroll-area"

type Props = {
  initialChats: Chat[]
}

const ViewChats = ({ initialChats }: Props) => {
  return (
    <>
      <div className="border-b px-6 shadow-md ">
        <h2 className=" pb-4 text-xl font-bold">جميع المحادثات</h2>
      </div>

      <ScrollArea className="h-[calc(100vh-420px)]">
        {initialChats.map((chat, i) => (
          <ChatItem key={`chat_${chat.uuid}`} {...chat} />
        ))}
      </ScrollArea>
    </>
  )
}

export default ViewChats
