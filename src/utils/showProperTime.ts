function formatTime(date: Date): string {
  let hours: number = date.getHours()
  let minutes: number = date.getMinutes()
  let seconds: number = date.getSeconds()

  // Determine if it's AM or PM
  let am_pm: string = hours >= 12 ? "م" : "ص"
  if (hours > 12) {
    hours -= 12
  } else if (hours === 0) {
    hours = 12
  }

  // Format hours, minutes, and seconds with leading zeros
  const formattedTime: string = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${am_pm}`
  return formattedTime
}

function formatDate(date: Date): string {
  const year: number = date.getFullYear()
  const month: number = date.getMonth() + 1 // Month is zero-based, so we add 1
  const day: number = date.getDate()

  // Format year, month, and day with leading zeros
  const formattedDate: string = `${String(year)}/${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}`
  return formattedDate
}

export const showProperTime = (date: Date | string) => {
  date = new Date(date)
  const currentDate = new Date()

  if (
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate()
  ) {
    return formatTime(date)
  } else if (
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate() - 1
  ) {
    return "الأمس"
  } else {
    return formatDate(date)
  }
}
