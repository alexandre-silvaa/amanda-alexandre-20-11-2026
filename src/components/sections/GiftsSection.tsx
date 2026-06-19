import type { InviteData } from '../../data/weeding-data'
import { ActionButton } from '../shared/ActionButton'
import { SectionShell } from '../shared/SectionShell'
import { SectionTitle } from '../shared/SectionTitle'

type GiftsSectionProps = {
  data: InviteData
}

export function GiftsSection({ data }: GiftsSectionProps) {
  const hasLink = Boolean(data.gifts.url.trim())

  return (
    <SectionShell id="presentes" className="border-y border-y-solid border-y-[#202020]">
      <article className="grid gap-3 border border-[#222] bg-[#f8f7f5] p-4 text-center">
        <SectionTitle>{data.gifts.title}</SectionTitle>
        <p className="m-0 text-[1.8rem]">{data.gifts.description}</p>
        <ActionButton href={hasLink ? data.gifts.url : undefined} disabled={!hasLink}>
          {hasLink ? 'Acessar lista de presentes' : 'Link da lista em breve'}
        </ActionButton>
      </article>
    </SectionShell>
  )
}
