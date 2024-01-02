/**
 * Compares two dates by its Day, Month and Year
 * @param date1
 * @param date2
 * @return number If the returned number is:
 *  - \>0 -> date1 is greater than date2
 *  - <0 -> date1 is lower than date2
 *  - =0 -> date1 is equal to date 2
 *
 */
export function compareDatesByDMY(date1: Date, date2: Date) {

    const cmp1 = new Date(
        date1.getFullYear(),
        date1.getMonth(),
        date1.getDate()
    )

    const cmp2 = new Date(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate()
    )

    return cmp1.getTime() - cmp2.getTime()
}

/**
 * Return the right way of say Good Morning, Good Afternoon and Good Evening
 *
 * - Since 4:00 AM until 11:59 AM we say "Good Morning"
 * - Since 12:00 PM we say "Good Afternoon"
 * - Since 8:00 PM until 3:59 AM we say "Good Evening"
 */
export function getDayTimeGreeting() {

    const today = new Date()
    const hours = today.getHours()

    // By default, "Good Morning"
    let welcome_text = 'Good morning'

    // Since 12:00 PM we say "Good Afternoon"
    if (hours >= 12) welcome_text = 'Good afternoon'

    // Since 8:00 PM until 3:59 PM we say "Good Evening"
    if (hours >= 8 && hours < 4) welcome_text = 'Good evening'

    return welcome_text
}
