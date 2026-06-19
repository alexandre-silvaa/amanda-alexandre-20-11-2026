type PhotoPlaceholderProps = {
  label: string
  tone?: 'bw' | 'warm'
  className?: string
}

export function PhotoPlaceholder({ label, tone = 'bw', className }: PhotoPlaceholderProps) {
  const toneClass =
    tone === 'warm'
      ? 'bg-[linear-gradient(22deg,#bb8a55c9,#f2d8b7bb),repeating-linear-gradient(45deg,#8c6a4f28_0_2px,transparent_2px_5px),linear-gradient(140deg,#a96f42,#e6c8a8)]'
      : 'bg-[linear-gradient(25deg,#3a3a3a30,#ffffff30),repeating-linear-gradient(45deg,#1010101a_0_2px,transparent_2px_5px),linear-gradient(140deg,#9e9e9e,#d7d7d7)]'

  const classNames = [
    'relative flex w-full items-end justify-start overflow-hidden border border-[#555]',
    toneClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames} role="img" aria-label={label}>
      <span className="m-3 border border-[#00000020] bg-[#ffffffe8] px-2.5 py-1 font-['Garet'] text-sm tracking-[0.04em]">
        {label}
      </span>
    </div>
  )
}
