import React from "react"
import { formatDateToArabic } from "@/utils/formateToArabicDate"

type Props = {
  date: string
}

const DateIndicator = ({ date }: Props) => {
  return (
    <div className="flex justify-center">
      <div className=" rounded-3xl border border-[#EEEEEE] px-7 py-1 font-semibold text-secondaryColor ">
        {formatDateToArabic(date)}
      </div>
    </div>
  )
}

export default DateIndicator
