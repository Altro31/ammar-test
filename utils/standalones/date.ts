// @ts-ignore
import {compareDate} from "@internationalized/date/src/queries";

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
