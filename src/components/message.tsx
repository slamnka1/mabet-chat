import React from "react"
import { usePathname } from "next/navigation"
import axios from "axios"
import { Copy, Loader2, ShieldAlert, User } from "lucide-react"
import { toast } from "sonner"

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
  id,
  chat_id,
  chatID,
  user_guard,
  token,
  deleteMessage,
}: Props &
  Omit<UserType, "id"> & {
    token: string
    chatID: string
    deleteMessage: (messageID: number) => Promise<void>
  }) => {
  const handleReportMessage = async () => {
    try {
      await axios.post(`/api/chats/${chatID}/report/${id}?token=${token}`)
      toast.success("شكرا لابلاغك, سنقوم بمراجعة الابلاغ الخاص بك في اسرع وقت ممكن")
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.status === 304) {
        toast.error(error.response.data.errors[0])
      }
      toast.error("عذرا لم يتم الابلاغ على الرسالة!")
    }
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
  const handleDeleteMessage = async () => {
    await deleteMessage(id)
  }
  const pathName = usePathname()
  const isAdminView = pathName?.includes("/admin")
  return (
    <>
      <div
        dir="rtl"
        className={cn(
          "my-2 flex select-none  px-5 ",
          user_guard === "admin" && "my-4 shadow-md",
        )}>
        <ContextMenu>
          <ContextMenuTrigger>
            <div
              className={cn(
                "rounded-md border border-lightGray px-[10px] py-[6px]",
                isError && "border-red-600 ",
                user_guard === "admin" && "border-primary ",
              )}>
              <div
                className={cn(
                  "flex  items-center gap-2 text-sm",
                  !is_me && !isAdminView ? " text-primary" : "text-secondaryColor",
                  user_guard === "admin" && "text-[16px] font-bold text-primary",
                )}>
                <Avatar className=" h-8 w-8 border-[3px] border-white">
                  <AvatarImage
                    src={user_guard === "admin" ? "" : is_me ? "" : avatar}
                  />
                  <AvatarFallback>
                    <User className=" h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="font-bold">
                  {user_guard === "admin" ? "مسؤول" : is_me ? "أنت" : name}
                </span>
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
                <p
                  className={cn(
                    " text-[#7B7B7B]",
                    user_guard === "admin" && "font-bold  text-secondaryColor",
                  )}>
                  {message}
                </p>
              </div>
            </div>
          </ContextMenuTrigger>
          {/* <ContextMenuTrigger>Right click</ContextMenuTrigger> */}
          <ContextMenuContent>
            <ContextMenuItem
              onClick={handleCopy}
              className="flex-end  justify-end gap-1">
              <span>نسخ</span>
              <Copy className="mr-2 h-4 w-4 " />
            </ContextMenuItem>
            {isAdminView || is_me ? (
              <ContextMenuItem
                onClick={handleDeleteMessage}
                className="flex-end justify-end gap-1  text-red-500 hover:!text-red-600">
                <span>حذف الرسالة</span>
                <ShieldAlert className="mr-2 h-4 w-4 " />
              </ContextMenuItem>
            ) : (
              <>
                <ContextMenuSeparator />
                <ContextMenuItem
                  onClick={handleReportMessage}
                  className="flex-end justify-end gap-1  text-red-500 hover:!text-red-600">
                  <span>ابلاغ</span>
                  <ShieldAlert className="mr-2 h-4 w-4 " />
                </ContextMenuItem>
              </>
            )}
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </>
  )
}

export default Message
