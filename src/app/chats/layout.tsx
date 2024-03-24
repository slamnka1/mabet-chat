import ReportOnline from "@/components/report-online"

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReportOnline />
      {children}
    </>
  )
}
