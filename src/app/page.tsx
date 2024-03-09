import { ChevronRight, MoreHorizontal } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SearchChats from "@/components/search-chats"
import ViewChats from "@/components/view-chats"

export default function Home() {
  return (
    <main>
      <div className="space-y-6 rounded-b-2xl bg-gradient-conic p-6 pt-20 text-white">
        <div className="flex items-center justify-between  ">
          <button
            type="button"
            title="go back"
            className="flex aspect-square w-8 items-center justify-center rounded-[4px] bg-white">
            <ChevronRight className="w-5 text-secondaryColor" />
          </button>
          <h1 className="text-2xl font-bold">المحادثات</h1>
          <button
            className="transparent flex aspect-square w-8 items-center justify-center rounded-lg"
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
      <ViewChats />
    </main>
  )
}
