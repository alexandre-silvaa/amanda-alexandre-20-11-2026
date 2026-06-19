import type { ReactNode } from 'react'

type IconTextItemProps = {
  icon: ReactNode
  text: string
}

export function IconTextItem({ icon, text }: IconTextItemProps) {
  return (
    <li className="mb-3 grid grid-cols-[38px_1fr] items-start gap-3">
      <span aria-hidden="true">
        {icon}
      </span>
      <p className="m-0 text-[1.55rem] leading-tight sm:text-[1.9rem]">{text}</p>
    </li>
  )
}
