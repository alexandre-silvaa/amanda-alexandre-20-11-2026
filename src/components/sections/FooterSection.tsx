import type { InviteData } from '../../data/weeding-data'

type FooterSectionProps = {
  data: InviteData
}

export function FooterSection({ data }: FooterSectionProps) {
  return (
    <footer className="mx-auto max-w-[1060px] border-y-[4px] border-y-double border-[#202020]">
      <div className="py-[1.1rem] text-center text-[2rem] italic">
        <p className="m-0">{data.footerText}</p>
      </div>
    </footer>
  )
}
