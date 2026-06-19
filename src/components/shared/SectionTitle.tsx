import type { PropsWithChildren } from 'react'
import { tw } from '../../styles/tw'

type SectionTitleProps = PropsWithChildren<{
  className?: string
}>

export function SectionTitle({ className, children }: SectionTitleProps) {
  const classNames = [tw.sectionTitle, className].filter(Boolean).join(' ')

  return <h2 className={classNames}>{children}</h2>
}
