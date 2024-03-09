"use client"

import * as React from "react"
import { useAppStore } from "@/stores/app-store-provider"
import { useShallow } from "zustand/react/shallow"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const filtersItems = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <path
          d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z"
          fill="#494949"
        />
        <path
          opacity="0.5"
          d="M15.6361 2.01096C15.0111 2 14.3051 2 13.5 2H10.5C7.22657 2 5.58985 2 4.38751 2.7368C3.71473 3.14908 3.14908 3.71473 2.7368 4.38751C2 5.58985 2 7.22657 2 10.5V11.5C2 13.8297 2 14.9946 2.3806 15.9134C2.88807 17.1386 3.86144 18.1119 5.08658 18.6194C5.74689 18.8929 6.53422 18.9698 7.78958 18.9915C8.63992 19.0061 9.06509 19.0134 9.40279 19.2098C9.74049 19.4063 9.95073 19.7614 10.3712 20.4718L10.9133 21.3877C11.3965 22.204 12.6035 22.204 13.0867 21.3877L13.6288 20.4718C14.0492 19.7614 14.2595 19.4062 14.5972 19.2098C14.9349 19.0134 15.36 19.0061 16.2104 18.9915C17.4658 18.9698 18.2531 18.8929 18.9134 18.6194C20.1386 18.1119 21.1119 17.1386 21.6194 15.9134C22 14.9946 22 13.8297 22 11.5V10.5C22 9.69494 22 8.98889 21.989 8.36394C21.1942 9.07068 20.1473 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 3.85275 14.9293 2.80577 15.6361 2.01096Z"
          fill="#494949"
        />
      </svg>
    ),
    title: "المحادثات التي لم تقرأ بعد",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <path
          d="M19.5 8.25H15.915C15.5033 7.79325 14.9122 7.5 14.25 7.5H8.25V3.75C8.25 2.925 8.925 2.25 9.75 2.25H21.75C22.575 2.25 23.25 2.925 23.25 3.75V12C23.25 12.825 22.575 13.5 21.75 13.5H18.75L16.5 15.75V9.75H19.5C19.914 9.75 20.25 9.414 20.25 9C20.25 8.586 19.914 8.25 19.5 8.25ZM19.5 5.25H12C11.586 5.25 11.25 5.586 11.25 6C11.25 6.414 11.586 6.75 12 6.75H19.5C19.914 6.75 20.25 6.414 20.25 6C20.25 5.586 19.914 5.25 19.5 5.25ZM2.25 8.25H14.25C15.075 8.25 15.75 8.925 15.75 9.75V18C15.75 18.825 15.075 19.5 14.25 19.5H10.5L8.25 21.75L6 19.5H2.25C1.425 19.5 0.75 18.825 0.75 18V9.75C0.75 8.925 1.425 8.25 2.25 8.25ZM4.5 15.75H12C12.414 15.75 12.75 15.414 12.75 15C12.75 14.586 12.414 14.25 12 14.25H4.5C4.086 14.25 3.75 14.586 3.75 15C3.75 15.414 4.086 15.75 4.5 15.75ZM4.5 12.75H12C12.414 12.75 12.75 12.414 12.75 12C12.75 11.586 12.414 11.25 12 11.25H4.5C4.086 11.25 3.75 11.586 3.75 12C3.75 12.414 4.086 12.75 4.5 12.75Z"
          fill="#494949"
        />
      </svg>
    ),
    title: "جميع المحادثات",
  },
]

export function MyDrawer() {
  const [drawer, setDrawerState] = useAppStore(
    useShallow((state) => [state.drawer, state.setDrawer]),
  )

  return (
    <Drawer open={!!drawer} onClose={() => setDrawerState("")}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm pt-5">
          {/* <DrawerHeader>
            <DrawerTitle>الفلاتر</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader> */}
          {drawer === "filters" ? (
            <div className="mb-4 space-y-2">
              {filtersItems.map((e, i) => {
                return (
                  <button
                    key={`filter_item_${i}`}
                    type="button"
                    className="flex  w-full gap-2 rounded-lg bg-[#F8F8F8] px-[10px] py-3"
                    title="unread chats">
                    {e.icon}
                    <span className="font-bold text-secondaryColor">{e.title}</span>
                  </button>
                )
              })}
            </div>
          ) : null}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
