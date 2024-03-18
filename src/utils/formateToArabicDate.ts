export function formatDateToArabic(dateString: string): string {
  const monthsArabic = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ]

  const daysArabic = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ]

  const [day, month, year] = dateString.split("/").map(Number)
  const date = new Date(year, month - 1, day)
  const arabicDay = daysArabic[date.getDay()]
  const arabicMonth = monthsArabic[date.getMonth()]

  return `${arabicDay} ${day.toString().padStart(2, "0")}, ${arabicMonth}`
}
