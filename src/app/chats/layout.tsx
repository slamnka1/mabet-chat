import { Suspense } from "react"

import ReportOnline from "@/components/report-online"

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback="">
        <ReportOnline />
      </Suspense>
      {children}
    </>
  )
}
