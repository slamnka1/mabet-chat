export const showProperTime = (date: Date | string) => {
  date = new Date(date)
  const currentDate = new Date()

  if (
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate()
  ) {
    return date.toLocaleTimeString("ar")
  } else if (
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate() - 1
  ) {
    return "الامس"
  } else {
    return date.toLocaleDateString("ar")
  }
}
