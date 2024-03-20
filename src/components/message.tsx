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
  isError,
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
            <div
              className={cn(
                "rounded-md border border-lightGray px-[10px] py-[6px]",
                isError && "border-red-600 ",
              )}>
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
                {isError ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#db3939"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-triangle-alert">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                ) : null}
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
