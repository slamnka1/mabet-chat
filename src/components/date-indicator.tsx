import React from "react"
import { formatDateToArabic } from "@/utils/formateToArabicDate"

type Props = {
  date: string
}

const DateIndicator = ({ date }: Props) => {
  return (
    <div className="sticky top-0 flex justify-center ">
      <div className=" w-36 rounded-3xl border border-[#EEEEEE] bg-white py-1 text-center font-semibold text-secondaryColor ">
        {formatDateToArabic(date)}
      </div>
    </div>
  )
}

export default DateIndicator
