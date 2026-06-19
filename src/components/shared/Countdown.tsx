import { useCountdown } from '../../hooks/useCountdown'

type CountdownProps = {
  targetDate: string
  eventLabel: string
}

type SegmentProps = {
  value: number
  label: string
}

function Segment({ value, label }: SegmentProps) {
  return (
    <div className="flex h-[108px] min-w-[108px] flex-col items-center justify-center rounded-xl bg-[#ffffffde] px-3 text-center shadow-[0_1px_8px_rgba(0,0,0,0.08)] sm:h-[124px] sm:min-w-[124px]">
      <span className="block font-['Georgia_Pro'] text-[clamp(2rem,3.6vw,3rem)] font-normal leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 block font-['Garet'] text-[0.72rem] uppercase tracking-[0.03em] text-[#3c3a38] sm:text-[0.9rem]">
        {label}
      </span>
    </div>
  )
}

export function Countdown({ targetDate }: CountdownProps) {
  const { days, hours, minutes, seconds, isFinished } = useCountdown(targetDate)

  return (
    <section
      className="mb-3 bg-transparent py-7 sm:py-10"
      aria-label="Contagem regressiva para o casamento"
    >
      <h3 className="mb-7 text-center font-['Allura'] text-[clamp(2.5rem,5.2vw,4.4rem)] font-normal leading-none tracking-[0.01em] sm:mb-10">
        Contagem Regressiva
      </h3>
      {isFinished ? (
        <p className="m-0 text-center text-[1.15rem] italic">Chegou o grande dia. Vamos celebrar!</p>
      ) : (
        <div className="mx-auto grid max-w-[620px] grid-cols-2 justify-items-center gap-3 sm:grid-cols-4 sm:gap-4">
          <Segment value={days} label="dias" />
          <Segment value={hours} label="horas" />
          <Segment value={minutes} label="min" />
          <Segment value={seconds} label="seg" />
        </div>
      )}
    </section>
  )
}
