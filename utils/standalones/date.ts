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
