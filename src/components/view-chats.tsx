import React from "react"

import ChatItem from "./chat-item"

type Props = {}

const ViewChats = (props: Props) => {
  return (
    <>
      <div className="border-b px-6 shadow-md ">
        <h2 className="mt-8 pb-4 text-xl font-bold">جميع المحادثات</h2>
      </div>

      <div className="max-h-[calc(100vh-350px)] overflow-scroll">
        {new Array(10).fill("").map((e, i) => (
          <ChatItem
            newMessages={i % 2 ? i : 0}
            key={`chat_${i}`}
            imageSrc={"https://github.com/shadcn.png"}
            name="يزن عبدالله"
            lastMessage="رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط"
            messageTime={new Date()}
          />
        ))}
      </div>
    </>
  )
}

export default ViewChats
