import SearchChats from "@/components/search-chats"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, MoreHorizontal } from "lucide-react"

export default function Home() {
  return (
    <main>
      <div className="p-6 pt-20 bg-gradient-conic rounded-b-2xl space-y-6 text-white">
        <div className="flex items-center justify-between  ">
          <button
            type="button"
            title="go back"
            className="bg-white aspect-square w-8 rounded-[4px] flex items-center justify-center">
            <ChevronRight className="text-secondaryColor w-5" />
          </button>
          <h1 className="text-2xl font-bold">المحادثات</h1>
          <button
            className="transparent aspect-square w-8 rounded-lg flex items-center justify-center"
            type="button"
            title="settings">
            <MoreHorizontal color="#fff" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className=" border-[3px] border-white w-16 h-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">مازن عبد العزيز</p>
            <p className="font-semibold text-sm">
              مرحبا مازن, نتمنى لك يوما سعيد .!
            </p>
          </div>
        </div>
        <SearchChats />
      </div>
    </main>
  )
}
