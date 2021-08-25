export default function filterOutOldDates(course) {
  // milliseconds in 8 days
  const eightDays = 691200000
  const now = Date.now()
  // return true if the course is less than 8 days old
  return now - new Date(course.start_date) <= eightDays
}
