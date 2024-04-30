'use client'

import { getDateDiff } from '@/helpers/dateUtils'
import { capitalize } from '@/helpers/stringUtils'
import { getValueFromDate, DateDiff } from '@/types/common'
import { useEffect, useState } from 'react'

export default function DateRenderer() {
    const [diff, setDiff] = useState(getDateDiff())

    useEffect(() => {
        const interval = setInterval(() => {
            setDiff(getDateDiff())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {Object.keys(diff).map((key) => (
                <div key={key} className="flex">
                    <p className="pl-2">{capitalize(key)}:</p>
                    <p className="pl-1">{getValueFromDate(diff, key as keyof DateDiff)}</p>
                </div>
            ))}
        </>
    )
}
