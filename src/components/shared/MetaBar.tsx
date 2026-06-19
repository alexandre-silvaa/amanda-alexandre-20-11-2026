type MetaBarProps = {
  children?: React.ReactNode
  city?: string
  dateLabel?: string
}

export function MetaBar({
  city = 'Sorocaba',
  dateLabel = '20 de Novembro de 2026',
  children,
}: MetaBarProps) {
  return (
    <section>
      <header className="flex flex-col items-center border-b-[#8d8b88] border-t-4 border-t-[#202020] py-2" aria-label="Linha editorial">
        <div className="flex w-full items-center justify-between border-t font-['Garet']">
          <span className="pt-1.5">{city}</span>
          <span className="pt-1.5">{dateLabel}</span>
        </div>
        <div className="flex w-full h-2 border-b border-dotted border-[#202020]" />
      </header>

      {children}

      {children ? (
        <footer className="flex flex-col items-center border-b-[#8d8b88] border-t border-t-[#202020] py-2 pt-1.5" aria-label="Linha editorial">
          <div className="flex w-full items-center justify-between border-t-4 font-['Garet']" />
        </footer>
      ) : null}
    </section>
  )
}
