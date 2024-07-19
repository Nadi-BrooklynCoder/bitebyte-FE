const calculateTurnedTime = (date) => {
    const now = new Date()
    const then = new Date(date)
    const difference = now - then

    const days = difference / (1000 * 60 * 60 * 24)
    const months = days / 30.44
    const years = days / 365.25

    if(years >= 1) {
        return `${Math.floor(years)} ${Math.floor(years) > 1 ? 'years' : 'year'} ago`
    } else if (months >= 1) {
        return `${Math.floor(months)} ${Math.floor(months) > 1 ? 'months' : 'month'} ago`
    } else {
        return `${Math.floor(days)} ${Math.floor(days)  > 1 ? 'days' : 'day'} ago`
    }
 }

 export default calculateTurnedTime