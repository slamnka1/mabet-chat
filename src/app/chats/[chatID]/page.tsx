import { useRouter } from "next/navigation"

import ActionButton from "@/components/ui/action-button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import GoBackButton from "@/components/ui/go-back-button"
import ChatBody from "@/components/chat-body"
import ChatInput from "@/components/chat-input"

export default function Page() {
  const makeMessagesRead = async () => {
    // TODO make all messages read
  }
  return (
    <main>
      <div className="space-y-6 rounded-b-2xl bg-gradient-conic p-6 pt-20 text-white">
        <div className="flex items-center justify-between gap-4 ">
          <GoBackButton />
          <div className="flex grow items-center gap-2">
            <Avatar className="h-[60px] w-[60px] border-[3px] border-white">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div>
              <p className="mb-2 font-bold">مازن عبد العزيز</p>
              <p className="text-sm font-semibold">غير متصل الان</p>
            </div>
          </div>
          <ActionButton action="chat-options" />
        </div>
      </div>
      <ChatBody />
      <ChatInput />
    </main>
  )
}
