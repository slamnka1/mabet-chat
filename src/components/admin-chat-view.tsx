"use client"

import React, { useEffect, useRef } from "react"
import { getChatList } from "@/api/helpers/get-chat-list"
import { useSocket } from "@/socket-context"
import { useAppStore } from "@/stores/app-store-provider"
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query"

import { AdminChatsListResponse } from "@/types/admin-chats-list-reponse"
import { ChatListsResponse } from "@/types/chat-list-response"
import { Message as MessageType } from "@/types/chat-response"

import AdminChatItem from "./admin-chat-item"
import ChatItem from "./chat-item"
import Loader from "./ui/loader"
import { ScrollArea } from "./ui/scroll-area"

type Props = {
  token: string
}

const AdminChatView = ({ token }: Props) => {
  const chatsQuery = useAppStore((state) => state.chatsQuery)
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery<AdminChatsListResponse>({
    queryKey: ["admin-chats-list", chatsQuery],
    queryFn: async ({ pageParam }) => {
      return await getChatList({
        token: token,
        pageParam: pageParam + "",
        query: chatsQuery,
      })
    },
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    refetchOnReconnect: "always",
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.current_page === lastPage.data.last_page
        ? null
        : lastPage.data.current_page + 1
    },
  })

  const socket = useSocket()
  // Get QueryClient from the context
  const queryClient = useQueryClient()

  useEffect(() => {
    if (socket?.id) {
      socket.emit("online", token)

      const receiveMessagesListener = (message: MessageType, chatID: string) => {
        queryClient.invalidateQueries({ queryKey: [chatID] })
        queryClient.refetchQueries({ queryKey: ["chat-lists"] })
      }
      socket.on("receiveMessage", receiveMessagesListener)
      return () => {
        socket.off("receiveMessage", receiveMessagesListener)
      }
    }
  }, [socket?.id])

  const ref = useRef<React.ElementRef<"div">>(null)
  useEffect(() => {
    if (
      isFetching ||
      isFetchingNextPage ||
      !ref.current ||
      !hasNextPage ||
      isLoading
    )
      return
    const observer = new IntersectionObserver((entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage()
        }
      })
    })

    observer.observe(ref.current!)

    return () => {
      observer.disconnect()
    }
  }, [isFetching, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading])

  return (
    <ScrollArea className="bg-stale-50 h-[calc(100vh-300px)]">
      {data?.pages
        ?.flatMap((element) => element.data.chats)
        .map((chat, i) => (
          <AdminChatItem key={`chat_${chat.uuid}`} {...chat} token={token} />
        ))}
      {isFetching ? <Loader className=" flex justify-center py-5" /> : null}
      <div className="h-5 " ref={ref}></div>
    </ScrollArea>
  )
}

export default AdminChatView
