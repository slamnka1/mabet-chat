"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

import { Button } from "./button"

type Props = {}

const GoBackButton = (props: Props) => {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.back()}
      title="go back"
      className="flex  aspect-square h-[34px] w-[34px] items-center justify-center rounded-[4px] bg-white">
      <ChevronRight className="w-5 shrink-0 text-secondaryColor" />
    </Button>
  )
}

export default GoBackButton
