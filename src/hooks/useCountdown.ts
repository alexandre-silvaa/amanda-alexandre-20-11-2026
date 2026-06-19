import { useEffect, useMemo, useState } from 'react'

export type CountdownValue = {
  totalMs: number
  days: number
  hours: number
  minutes: number
  seconds: number
  isFinished: boolean
}

const SECOND_MS = 1000
const MINUTE_MS = 60 * SECOND_MS
const HOUR_MS = 60 * MINUTE_MS
const DAY_MS = 24 * HOUR_MS

function getCountdownValue(targetDateMs: number, nowMs: number): CountdownValue {
  const diff = Math.max(targetDateMs - nowMs, 0)

  const days = Math.floor(diff / DAY_MS)
  const hours = Math.floor((diff % DAY_MS) / HOUR_MS)
  const minutes = Math.floor((diff % HOUR_MS) / MINUTE_MS)
  const seconds = Math.floor((diff % MINUTE_MS) / SECOND_MS)

  return {
    totalMs: diff,
    days,
    hours,
    minutes,
    seconds,
    isFinished: diff === 0,
  }
}

type UseCountdownOptions = {
  intervalMs?: number
}

export function useCountdown(
  targetDate: string | number | Date,
  options?: UseCountdownOptions,
): CountdownValue {
  const targetDateMs = useMemo(() => new Date(targetDate).getTime(), [targetDate])
  const tickMs = options?.intervalMs ?? SECOND_MS
  const [nowMs, setNowMs] = useState<number>(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNowMs(Date.now())
    }, tickMs)

    return () => {
      window.clearInterval(timer)
    }
  }, [tickMs])

  const value = useMemo<CountdownValue>(() => {
    if (!Number.isFinite(targetDateMs)) {
      return {
        totalMs: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isFinished: true,
      }
    }

    return getCountdownValue(targetDateMs, nowMs)
  }, [targetDateMs, nowMs])

  return value
}

