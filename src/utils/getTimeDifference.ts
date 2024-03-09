export function getTimeDifference(
  endDate: Date | string | number,
  startDate?: Date | string | number,
): number | string {
  endDate = new Date(endDate)
  startDate = new Date(startDate || new Date())
  const startTime = startDate?.getTime() || new Date().getTime()
  const endTime = endDate.getTime()

  const timeDifference = endTime - startTime

  if (timeDifference >= 1000 * 60 * 60) {
    return (timeDifference / (1000 * 60 * 60)).toFixed(1) + "  ساعة  " // Return hours if difference is greater than or equal to 1 hour
  } else {
    return (timeDifference / (1000 * 60)).toFixed(0) + "  دقيقة  " // Return minutes if difference is less than 1 hour
  }
}
