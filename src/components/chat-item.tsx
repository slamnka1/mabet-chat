"use client"

import React, { useState } from "react"
import { formatTimeTo12HourClock } from "@/utils/formatTimeTo12HourClock"
import { getTimeDifference } from "@/utils/getTimeDifference"
import { motion } from "framer-motion"
import { Trash2, User } from "lucide-react"

import { cn } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

type Props = {
  imageSrc?: string
  name: string
  lastMessage: string
  messageTime: Date | string | number
}

const ChatItem = ({ imageSrc, name, lastMessage, messageTime }: Props) => {
  const [chatOptions, setChatOptions] = useState(false)
  const hasBeenMovedEnough = (value: number) => {
    if (value >= 120) {
      setChatOptions(true)
    }
  }
  return (
    <div className="relative">
      <button
        type="button"
        className=" absolute left-0 top-0 flex aspect-square h-full flex-col items-center justify-center gap-2 bg-[#263238] text-white">
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
          chatOptions && "!translate-x-24",
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
          <span className="block max-w-40 truncate text-sm font-semibold leading-loose text-[#7B7B7B]">
            {lastMessage}
          </span>
        </div>
        <div className=" mr-auto">
          <span className="block text-sm leading-loose text-[#494949] ">
            {formatTimeTo12HourClock(messageTime)}
          </span>
          <span className="block text-sm leading-loose text-[#494949]">
            منذ {getTimeDifference(messageTime)}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default ChatItem
