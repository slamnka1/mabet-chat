"use client"

import React from "react"
import { useAppStore } from "@/stores/app-store-provider"
import { MoreHorizontal } from "lucide-react"

type Props = {
  action: string
}

const ActionButton = ({ action }: Props) => {
  const setDrawer = useAppStore((state) => state.setDrawer)
  const handleAction = () => {
    setDrawer(action)
  }
  return (
    <button
      onClick={handleAction}
      className="transparent flex aspect-square w-8 items-center justify-center rounded-lg"
      type="button"
      title="settings">
      <MoreHorizontal color="#fff" />
    </button>
  )
}

export default ActionButton
