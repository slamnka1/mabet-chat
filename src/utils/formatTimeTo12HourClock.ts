export function formatTimeTo12HourClock(date: Date | number | string): string {
  if (!date) throw new Error("no date  provided")

  date = new Date(date)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  // Determine AM or PM
  const meridiem = hours >= 12 ? "م" : "ص"

  // Convert to 12-hour format
  const formattedHours = hours % 12 || 12

  // Zero-pad minutes
  const formattedMinutes = minutes.toString().padStart(2, "0")

  return `${formattedHours}:${formattedMinutes} ${meridiem}`
}
