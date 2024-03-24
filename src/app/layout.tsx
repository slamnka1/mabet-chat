import type { Metadata } from "next"
import { Cairo } from "next/font/google"

import "./globals.css"

import { SocketProvider } from "@/socket-context"
import { AppStoreProvider } from "@/stores/app-store-provider"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "sonner"

import Providers from "@/lib/react-query/providers"
import { MyDrawer } from "@/components/my-drawer"

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Mabet chats",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Providers>
          <AppStoreProvider>
            <SocketProvider>{children}</SocketProvider>
            <Toaster />
            <MyDrawer />
          </AppStoreProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  )
}
