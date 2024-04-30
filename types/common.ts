export type DateDiff = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export function getValueFromDate(date: DateDiff, key: keyof DateDiff) {
    return date[key]
}
