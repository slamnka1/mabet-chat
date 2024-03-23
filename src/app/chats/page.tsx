import { notFound } from "next/navigation"
import { getChatList } from "@/api/helpers/get-chat-list"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SearchChats from "@/components/search-chats"
import ViewChats from "@/components/view-chats"

export const dynamic = "force-dynamic"

export default async function Home({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined
  }
}) {
  if (!searchParams.token) return notFound()
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["chat-lists"],
    queryFn: async () => await getChatList(searchParams.token!),
  })
  const data = await getChatList(searchParams.token)
  return (
    <main>
      <div className="space-y-6 rounded-b-2xl bg-gradient-conic p-6 pt-16 text-white">
        <div className="flex items-center justify-between  ">
          <button
            type="button"
            title="go back"
            className="flex aspect-square w-8 items-center justify-center rounded-[4px] bg-white">
            <ChevronRight className="w-5 text-secondaryColor" />
          </button>
          <h1 className="text-2xl font-bold">المحادثات</h1>
          <button
            className="transparent flex aspect-square w-[34px] items-center justify-center rounded-lg"
            type="button"
            title="settings">
            <MoreHorizontal color="#fff" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className=" h-16 w-16 border-[3px] border-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div>
            <p className="mb-2 font-bold">مازن عبد العزيز</p>
            <p className="text-sm font-semibold">
              مرحبا مازن, نتمنى لك يوما سعيد .!
            </p>
          </div>
        </div>
        <SearchChats />
      </div>
      <div className="flex items-center justify-center gap-4 p-4">
        <div className=" flex flex-col justify-between gap-3 rounded-lg border px-[10px] py-[6px] text-center font-bold">
          <p className="text-[10px]">معدل الرد</p>
          <span className="text-primary">{data?.data?.statics?.response_rate}</span>
        </div>
        <div className=" flex flex-col justify-between gap-3 rounded-lg border px-[10px] py-[6px] text-center font-bold">
          <p className="text-[10px]">وقت الرد</p>
          <span className="text-primary">
            {data.data?.statics?.response_duration}
          </span>
        </div>
        <div className=" flex flex-col justify-between gap-3 rounded-lg border px-[10px] py-[6px] text-center font-bold">
          <p className="text-[10px]">التقييم</p>
          <span className="flex gap-1 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none">
              <path
                d="M19.9178 7.32382L13.9222 6.41135L11.242 0.721419C11.1688 0.565632 11.0483 0.439519 10.8996 0.362862C10.5265 0.169983 10.0731 0.330715 9.88653 0.721419L7.20634 6.41135L1.21073 7.32382C1.04543 7.34855 0.894297 7.43015 0.778588 7.55379C0.638702 7.70435 0.561619 7.90691 0.564275 8.11695C0.566932 8.327 0.649112 8.52734 0.792756 8.67397L5.13066 13.1028L4.10581 19.3565C4.08178 19.502 4.09715 19.6516 4.15019 19.7884C4.20322 19.9252 4.2918 20.0437 4.40587 20.1304C4.51994 20.2172 4.65495 20.2687 4.79558 20.2792C4.9362 20.2897 5.07683 20.2588 5.2015 20.1898L10.5643 17.2373L15.927 20.1898C16.0734 20.2714 16.2434 20.2986 16.4064 20.269C16.8173 20.1948 17.0935 19.7868 17.0227 19.3565L15.9979 13.1028L20.3358 8.67397C20.4538 8.55281 20.5318 8.39455 20.5554 8.22145C20.6191 7.78871 20.331 7.38811 19.9178 7.32382Z"
                fill="#4EBEB2"
              />
            </svg>
            5{" "}
          </span>
        </div>
        <div className=" flex flex-col justify-between gap-3 rounded-lg border px-[10px] py-[6px] text-center font-bold">
          <p className="text-[10px]">التعاملات</p>
          <span className="text-primary">130 زائر</span>
        </div>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ViewChats token={searchParams.token} />
      </HydrationBoundary>
    </main>
  )
}
