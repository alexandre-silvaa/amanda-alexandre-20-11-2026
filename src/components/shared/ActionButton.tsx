import { tw } from '../../styles/tw'

type ActionButtonProps = {
  href?: string
  children: string
  disabled?: boolean
}

export function ActionButton({ href, children, disabled = false }: ActionButtonProps) {
  if (!href || disabled) {
    return (
      <span className={tw.actionButtonDisabled} aria-disabled="true">
        {children}
      </span>
    )
  }

  return (
    <a className={tw.actionButton} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
