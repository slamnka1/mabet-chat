import React from "react"
import { Copy, Loader2, ShieldAlert, User } from "lucide-react"

import { Message as Props } from "@/types/chat-response"
import { UserType } from "@/types/user"
import { cn } from "@/lib/utils"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Message = ({
  avatar,
  name,
  message,
  is_me,
  sent_at,
  isLoading,
}: Props & Omit<UserType, "id">) => {
  const handleReportMessage = async () => {
    // TODO handle report message
  }

  const handleCopy = async () => {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        console.log("Text copied successfully!")
      })
      .catch((error) => {
        console.error("Failed to copy text:", error)
      })
  }
  return (
    <>
      <div dir="rtl" className={cn("my-2 flex select-none  px-5 ")}>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="rounded-md border border-lightGray px-[10px] py-[6px]">
              <div
                className={cn(
                  "flex  items-center gap-2 text-sm",
                  !is_me ? " text-primary" : "text-secondaryColor",
                )}>
                <Avatar className=" h-8 w-8 border-[3px] border-white">
                  <AvatarImage src={is_me ? "" : avatar} />
                  <AvatarFallback>
                    <User className=" h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="font-bold">{is_me ? "أنت" : name}</span>
                <span className="text-[11px]">{sent_at}</span>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {isLoading ? <Loader2 className="h-4 w-4  animate-spin" /> : null}
                <p className=" text-[#7B7B7B]">{message}</p>
              </div>
            </div>
          </ContextMenuTrigger>
          {/* <ContextMenuTrigger>Right click</ContextMenuTrigger> */}
          <ContextMenuContent>
            <ContextMenuItem onClick={handleCopy}>
              <Copy className="mr-2 h-4 w-4 " />
              <span>نسخ</span>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem
              onClick={handleReportMessage}
              className="text-red-500 hover:!text-red-600">
              <ShieldAlert className="mr-2 h-4 w-4 " />
              <span>ابلاغ</span>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </>
  )
}

export default Message
