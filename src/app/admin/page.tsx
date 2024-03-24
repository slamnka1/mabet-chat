import { notFound } from "next/navigation"
import { getChatList } from "@/api/helpers/get-chat-list"
import { getMe } from "@/api/helpers/get-me"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SearchChats from "@/components/search-chats"
import ViewChats from "@/components/view-chats"

export const dynamic = "force-dynamic"

export default async function Admin({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined
  }
}) {
  if (!searchParams.token) return notFound()
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["chat-lists"],
    queryFn: async ({ pageParam }) =>
      await getChatList({ token: searchParams.token!, pageParam: pageParam + "" }),
    initialPageParam: 1,
  })

  const me = await getMe({ token: searchParams.token! })

  return (
    <main>
      <div className="space-y-4 rounded-b-2xl bg-gradient-conic p-6 pt-16 text-white">
        <div className="flex items-center justify-center  ">
          {/* <button

            type="button"
            title="go back"
            className="flex aspect-square w-8 items-center justify-center rounded-[4px] bg-white">
            <ChevronRight className="w-5 text-secondaryColor" />
          </button> */}
          <span></span>
          <h1 className="text-2xl font-bold">المحادثات</h1>
          {/* <button
            className="transparent flex aspect-square w-[34px] items-center justify-center rounded-lg"
            type="button"
            title="settings">
            <MoreHorizontal color="#fff" />
          </button> */}
        </div>
        <div className="flex items-center gap-2">
          <Avatar className=" h-16 w-16 border-[3px] border-white">
            <AvatarImage src={me.data.user.user.avatar} />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div>
            <p className="mb-2 font-bold">{me.data.user.user.name}</p>
            <p className="text-sm font-semibold">
              مرحبا {me.data.user.user.name}, نتمنى لك يوما سعيد .!
            </p>
          </div>
        </div>
        <SearchChats />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ViewChats token={searchParams.token} />
      </HydrationBoundary>
    </main>
  )
}
