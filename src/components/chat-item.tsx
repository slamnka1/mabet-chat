"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
// import { formatTimeTo12HourClock } from "@/utils/formatTimeTo12HourClock"
// import { getTimeDifference } from "@/utils/getTimeDifference"
import { motion } from "framer-motion"
import { Trash2, User } from "lucide-react"

import { Chat } from "@/types/chat-list-response"
import { cn } from "@/lib/utils"
import useClickOutside from "@/hooks/use-click-outside"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const ChatItem = ({
  token,
  uuid,
  chat_name,
  last_message,
  is_read,
  unread_messages,
  chat_image,
  created_at,
  last_message_at,
  last_message_day,
  chat_link,
  access_token,
}: Chat & { token: string }) => {
  const [chatOptions, setChatOptions] = useState(false)
  const hasBeenMovedEnough = (value: number) => {
    if (value >= 120) {
      setChatOptions(true)
    }
  }

  const ref = useRef<React.ElementRef<"div">>(null)
  useClickOutside(ref, () => {
    setChatOptions(false)
  })

  const handleDeleteChat: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    e.preventDefault()

    // TODO handle delete chat
    console.log("chat should be deleted")
    setChatOptions(false)
  }

  return (
    <div dir="rtl" className="relative" ref={ref}>
      <Link href={`/chats/${uuid}?token=${token}`}>
        <button
          onClick={handleDeleteChat}
          type="button"
          className=" absolute bottom-[1px] left-0 top-[1px] flex aspect-square  flex-col items-center justify-center gap-2 bg-[#263238] text-white">
          <span className="block text-[10px] font-bold">مسح المحادثة</span>
          <Trash2 />
        </button>
        <motion.div
          onDragEnd={(event, info) => hasBeenMovedEnough(info.offset.x)}
          drag="x"
          dragElastic={0.3}
          dragConstraints={{ left: 0, right: 0 }}
          className={cn(
            " relative flex   gap-2 border-b border-t bg-white px-6 py-4 duration-200",
            chatOptions && "!translate-x-[5.8rem]",
          )}>
          <Avatar className=" aspect-square h-14 w-14">
            <AvatarImage src={chat_image} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[14px] font-bold leading-loose text-secondaryColor">
              {chat_name}
            </p>
            <span
              className={cn(
                "block max-w-40 truncate text-sm font-semibold leading-loose text-[#7B7B7B]",
                !is_read && "font-bold text-black",
              )}>
              {last_message}
            </span>
          </div>
          <div className=" mr-auto">
            {/* <span className="block text-sm">
              {new Date(lastMessage.time).toLocaleDateString("ar")}
            </span> */}
            <span className="block text-sm leading-loose text-[#494949] ">
              {last_message_day}
            </span>
            {!!unread_messages ? (
              <span className="mt-2 block w-fit rounded bg-green-100 p-1 text-[10px] font-bold text-green-500 ">
                {unread_messages}{" "}
                {unread_messages === 1 ? "رسالة جديدة" : "رسائل جديدة"}
              </span>
            ) : null}
          </div>
        </motion.div>
      </Link>
    </div>
  )
}

export default ChatItem
