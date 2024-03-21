"use client"

import React, { useRef, useState } from "react"
import { useParams } from "next/navigation"
import { useSocket } from "@/socket-context"
import { formatDate } from "@/utils/formateDate"
import { formatTimeTo12HourClock } from "@/utils/formatTimeTo12HourClock"
import axios from "axios"

import { UserGuard, type Message } from "@/types/chat-response"

import { Action } from "./chat-body"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

type Props = {
  dispatch: React.Dispatch<Action>
}

const ChatInput = ({ dispatch }: Props) => {
  const textAreRef = useRef<HTMLTextAreaElement>(null)
  const socket = useSocket()

  // dynamic resizing text area
  const textRowCount = textAreRef.current
    ? textAreRef.current.value.split("\n").length
    : 1
  const rows = textRowCount <= 3 ? textRowCount : 3

  const [inputMessage, setInputMessage] = useState("")
  const handleInputMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    setInputMessage(e.target.value)
  }

  const { chatID } = useParams<{ chatID: string }>()!
  const handleSendMessage = async () => {
    // TODO handle send message
    const messageID = Math.random() + Math.random()
    try {
      const newMessage = {
        id: messageID,
        chat_id: chatID as string,
        message: inputMessage,
        is_me: true,
        sent_at: formatTimeTo12HourClock(new Date()),
        date: formatDate(new Date()),
        isLoading: true,
      }
      dispatch({
        type: "sendingMessage",
        payload: newMessage,
      })
      setInputMessage("")

      const searchParams = new URLSearchParams(window.location.search)
      const token = searchParams.get("token")
      const response = await axios.post<{
        data: {
          chat_id: number
          guard: UserGuard
          id: number
          message: string
        }
      }>("/api/messages/send", {
        chatID: chatID as string,
        token,
        message: inputMessage,
      })
      console.log("🚀 ~ handleSendMessage ~ response:", response)
      socket?.emit(
        "sendMessage",
        { ...newMessage, ...response.data.data, isLoading: false, isError: false },
        chatID,
      )
      dispatch({
        type: "messageSent",
        payload: {
          messageID: messageID,
        },
      })
    } catch (error) {
      console.log("🚀 ~ handleSendMessage ~ error:", error)
      dispatch({
        type: "messageError",
        payload: {
          messageID: messageID,
        },
      })
    }
  }

  // handling sending message using enter key
  const handleEnterKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    const keyDown = e.key
    if (keyDown === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  return (
    <div className="!my-4  flex items-center gap-4 px-4">
      <div className="relative w-full">
        <Textarea
          ref={textAreRef}
          rows={rows}
          placeholder="اكتب ما تريد الاستفسار عنه ....."
          value={inputMessage}
          onChange={handleInputMessageChange}
          onKeyDown={handleEnterKeyDown}
          className=" min-h-[40px] resize-none rounded-xl border-[#EBEBEB] bg-white py-3 pl-11 shadow placeholder:font-bold placeholder:text-[#A1A1A1]"
        />

        <svg
          className="absolute left-2 top-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M5.92998 8.50867L14.49 4.22867C20.24 1.34867 22.6 3.70867 19.72 9.45867L18.85 11.1987C18.6 11.7087 18.6 12.2987 18.85 12.8087L19.72 14.5387C22.6 20.2887 20.25 22.6487 14.49 19.7687L5.92998 15.4887C2.08998 13.5687 2.08998 10.4287 5.92998 8.50867ZM9.15998 12.7487H14.56C14.97 12.7487 15.31 12.4087 15.31 11.9987C15.31 11.5887 14.97 11.2487 14.56 11.2487H9.15998C8.74998 11.2487 8.40998 11.5887 8.40998 11.9987C8.40998 12.4087 8.74998 12.7487 9.15998 12.7487Z"
            fill="#4EBEB2"
          />
        </svg>
      </div>
      <Button
        onClick={handleSendMessage}
        type="submit"
        className=" shrink-0 font-bold ">
        احجز الان
      </Button>
    </div>
  )
}

export default ChatInput
