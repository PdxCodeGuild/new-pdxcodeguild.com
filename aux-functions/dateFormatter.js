const monthConverter = {
  '01': 'Jan.',
  '02': 'Feb.',
  '03': 'Mar.',
  '04': 'Apr.',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'Aug.',
  '09': 'Sep.',
  10: 'Oct.',
  11: 'Nov.',
  12: 'Dec.',
}

export default function dateFormatter(date) {
  date = date.split('-')
  const month = monthConverter[date[1]]
  const day = date[2]
  const year = date[0]
  return `${month} ${day}, ${year}`
}
