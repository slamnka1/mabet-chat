import React from "react"
import { User } from "lucide-react"

import { Message as Props } from "@/types/chat-response"
import { UserType } from "@/types/user"
import { cn } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Message = ({
  avatar,
  name,
  chat_id,
  id: message_id,
  message,
  user_guard,
  is_me,
  sent_at,
  date,
}: Props & Omit<UserType, "id">) => {
  return (
    <div dir="rtl" className="my-2 flex px-5 ">
      <div className="rounded-md border border-lightGray px-[10px] py-[6px]">
        <div
          className={cn(
            "flex  items-center gap-2 text-sm",
            is_me ? " text-primary" : "text-secondaryColor",
          )}>
          <Avatar className=" h-8 w-8 border-[3px] border-white">
            <AvatarImage src={avatar} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <span className="font-bold">{name}</span>
          <span className="text-[11px]">{sent_at}</span>
        </div>
        <div>
          <p className="mt-2 text-[#7B7B7B]">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Message
