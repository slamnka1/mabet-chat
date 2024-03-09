import React from "react"
import { formatTimeTo12HourClock } from "@/utils/formatTimeTo12HourClock"
import { getTimeDifference } from "@/utils/getTimeDifference"
import { User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

type Props = {
  imageSrc?: string
  name: string
  lastMessage: string
  messageTime: Date | string | number
}

const ChatItem = ({ imageSrc, name, lastMessage, messageTime }: Props) => {
  return (
    <div className="br flex gap-2 px-6 py-3 ">
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
    </div>
  )
}

export default ChatItem
