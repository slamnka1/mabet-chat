import React from "react"
import { dummyChats } from "@/dummy-data/dummy-chats"
import { Chat } from "@/types"

import ChatItem from "./chat-item"

type Props = {}

const ViewChats = (props: Props) => {
  return (
    <>
      <div className="border-b px-6 shadow-md ">
        <h2 className="mt-8 pb-4 text-xl font-bold">جميع المحادثات</h2>
      </div>

      <div className="max-h-[calc(100vh-350px)] overflow-scroll">
        {dummyChats
          .sort((a, b) =>
            a.lasMessage.time < b.lasMessage.time
              ? 1
              : a.lasMessage.time > b.lasMessage.time
                ? -1
                : 0,
          )
          .map((message, i) => (
            <ChatItem
              newMessages={message.newMessages}
              key={`chat_${i}`}
              imageSrc={message.image}
              name={message.name}
              lastMessage={message.lasMessage}
            />
          ))}
      </div>
    </>
  )
}

export default ViewChats
