"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import { reportOnline } from "@/api/helpers/report-online"
import { useQuery } from "@tanstack/react-query"

type Props = {}

const ReportOnline = (props: Props) => {
  const searchParams = useSearchParams()

  useQuery({
    queryKey: ["report-online"],
    queryFn: async () =>
      await reportOnline({ token: searchParams?.get("token")! as string }),
    refetchInterval: 1000 * 60 * 10,
  })

  return null
}

export default ReportOnline
