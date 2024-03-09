import React from "react"

import ChatItem from "./chat-item"

type Props = {}

const ViewChats = (props: Props) => {
  return (
    <>
      <div className="border-b px-6 ">
        <h2 className="mt-8 pb-4 text-xl font-bold">جميع المحادثات</h2>
      </div>

      <div className=" space-y-2  divide-y divide-solid">
        {new Array(10).fill("").map((e, i) => (
          <ChatItem
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
