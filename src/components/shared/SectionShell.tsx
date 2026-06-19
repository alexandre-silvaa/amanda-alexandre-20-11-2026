import type { PropsWithChildren } from 'react'
import { tw } from '../../styles/tw'

type SectionShellProps = PropsWithChildren<{
  id?: string
  className?: string
}>

export function SectionShell({ id, className, children }: SectionShellProps) {
  const classNames = [tw.sectionShell, className].filter(Boolean).join(' ')

  return (
    <section id={id} className={classNames}>
      <div className={tw.sectionInner}>{children}</div>
    </section>
  )
}
