import type { InviteData } from '../../data/weeding-data'
import { ActionButton } from '../shared/ActionButton'
import { SectionShell } from '../shared/SectionShell'
import { SectionTitle } from '../shared/SectionTitle'

type RsvpSectionProps = {
  data: InviteData
}

export function RsvpSection({ data }: RsvpSectionProps) {
  return (
    <SectionShell id="rsvp" className="border-y border-y-solid border-y-[#202020]">
      <article className="grid gap-3 border border-[#222] bg-[#f8f7f5] p-4 text-center">
        <SectionTitle>{data.rsvp.title}</SectionTitle>
        <p className="m-0 text-[1.8rem]">{data.rsvp.description}</p>
        <ActionButton href={data.rsvp.googleFormsUrl}>Confirmar presença no Google Forms</ActionButton>
      </article>
    </SectionShell>
  )
}
