"use client"

// Error components must be Client Components
import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex  h-screen flex-col items-center justify-center gap-5 text-center">
      <h2 className=" px-2 text-2xl font-semibold">
        عذرا حصلت مشكلة ما ولم نتمكن من عرض المحادثة
      </h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        حاول مجدداً
      </Button>
    </div>
  )
}
