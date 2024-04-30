const secondAmount = 1000
const minuteAmount = secondAmount * 60
const hourAmount = minuteAmount * 60
const dayAmount = hourAmount * 24

export default function Home() {
    var date = Date.UTC(2024, 0, 14, 0, 30)
    var diff = Date.now() - date

    var diffDays = Math.floor(diff / dayAmount)
    var diffHours = Math.floor((diff - diffDays * dayAmount) / hourAmount)
    var diffMins = Math.floor((diff - diffDays * dayAmount - diffHours * hourAmount) / minuteAmount)
    var diffSecs = Math.floor(
        (diff - diffDays * dayAmount - diffHours * hourAmount - diffMins * minuteAmount) /
            secondAmount
    )
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

            <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <p>{diffDays}</p>
                <p>__</p>
                <p>{diffHours}</p>
                <p>__</p>
                <p>{diffMins}</p>
                <p>__</p>
                <p>{diffSecs}</p>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
        </main>
    )
}
