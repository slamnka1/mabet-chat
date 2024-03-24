import { notFound } from "next/navigation"
import { getMe } from "@/api/helpers/get-me"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AdminChatView from "@/components/admin-chat-view"
import SearchChats from "@/components/search-chats"

export const dynamic = "force-dynamic"

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    token: string
  }
}) {
  const me = await getMe({ token: params.token.replace("%7C", "|") })
  return (
    <main>
      {/* <AdminMe /> */}
      <div className="mb-5 space-y-4 rounded-b-2xl bg-gradient-conic p-6 pt-16 text-white">
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
      </div>
      <div className="flex gap-8">
        <div className="w-[40%]">
          <div className="mb-4">
            <SearchChats />
          </div>
          <AdminChatView token={params.token} />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </main>
  )
}
