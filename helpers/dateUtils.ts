import { DateDiff } from '@/types/common'

const secondAmount = 1000
const minuteAmount = secondAmount * 60
const hourAmount = minuteAmount * 60
const dayAmount = hourAmount * 24

export const getDateDiff = (): DateDiff => {
    var date = Date.UTC(2024, 0, 14, 0, 30)
    var diff = Date.now() - date

    var diffDays = Math.floor(diff / dayAmount)
    var diffHours = Math.floor((diff - diffDays * dayAmount) / hourAmount)
    var diffMins = Math.floor((diff - diffDays * dayAmount - diffHours * hourAmount) / minuteAmount)
    var diffSecs = Math.floor(
        (diff - diffDays * dayAmount - diffHours * hourAmount - diffMins * minuteAmount) /
            secondAmount
    )
    return {
        days: diffDays,
        hours: diffHours,
        minutes: diffMins,
        seconds: diffSecs,
    }
}
