"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { MessageType } from "@/types"
import { formatTimeTo12HourClock } from "@/utils/formatTimeTo12HourClock"
// import { getTimeDifference } from "@/utils/getTimeDifference"
import { motion } from "framer-motion"
import { Trash2, User } from "lucide-react"

import { cn } from "@/lib/utils"
import useClickOutside from "@/hooks/use-click-outside"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

type Props = {
  imageSrc?: string
  name: string
  lastMessage: MessageType
  newMessages?: MessageType[]
}

const ChatItem = ({
  imageSrc,
  name,
  lastMessage,

  newMessages,
}: Props) => {
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
    <div className="relative" ref={ref}>
      <Link href={"/chats/1"}>
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
            " relative  flex gap-2 border-b border-t bg-white px-6 py-4 duration-200",
            chatOptions && "!translate-x-[5.8rem]",
          )}>
          <Avatar className=" aspect-square h-14 w-14">
            <AvatarImage src={imageSrc} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[14px] font-bold leading-loose text-secondaryColor">
              {name}
            </p>
            <span
              className={cn(
                "block max-w-40 truncate text-sm font-semibold leading-loose text-[#7B7B7B]",
                newMessages && "font-bold text-black",
              )}>
              {lastMessage.message}
            </span>
          </div>
          <div className=" mr-auto">
            <span className="block text-sm leading-loose text-[#494949] ">
              {formatTimeTo12HourClock(lastMessage.time)}
            </span>
            {newMessages?.length ? (
              <span className="mt-2 block rounded bg-green-100 p-1 text-[10px] font-bold text-green-500 ">
                {newMessages.length} {newMessages.length === 1 ? "رسالة" : "رسائل"}
              </span>
            ) : null}
          </div>
        </motion.div>
      </Link>
    </div>
  )
}

export default ChatItem
