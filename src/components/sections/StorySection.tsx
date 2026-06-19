import type { InviteData } from '../../data/weeding-data'
import { MetaBar } from '../shared/MetaBar'
import { PhotoPlaceholder } from '../shared/PhotoPlaceholder'
import { SectionShell } from '../shared/SectionShell'
import { SectionTitle } from '../shared/SectionTitle'

type StorySectionProps = {
  data: InviteData
}

export function StorySection({ data }: StorySectionProps) {
  return (
    <SectionShell id="historia">
      <MetaBar city={data.city} dateLabel={data.newspaperDate} />

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PhotoPlaceholder
          label="Foto do casal no portão"
          tone="bw"
          className="aspect-[3/4] rounded-[14px]"
        />

        <article>
          <SectionTitle>{data.storyTitle}</SectionTitle>
          {data.storyParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-4 text-[clamp(1.45rem,2.2vw,2rem)] leading-tight"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </div>

      <blockquote className="my-5 border-y border-y-dotted border-y-[#8d8b88] py-4 text-[clamp(1.6rem,2.3vw,2.2rem)] italic">
        <p>{data.storyQuote}</p>
      </blockquote>

      <div className="grid grid-cols-1 gap-6 border-t border-t-dotted border-t-[#8d8b88] pt-4 lg:grid-cols-2">
        <article>
          <SectionTitle>RESUMO DA NOSSA HISTÓRIA</SectionTitle>
          <ul className="m-0 list-none p-0">
            {data.historyMilestones.map((item) => (
              <li key={item.title} className="mb-4">
                <h4 className="m-0 font-['Garet'] text-[1.5rem] tracking-[0.03em]">
                  {item.title}
                </h4>
                <p className="m-0 text-[1.6rem]">{item.date}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="border-t border-t-dotted border-t-[#8d8b88] pt-4 lg:border-l lg:border-l-dotted lg:border-l-[#8d8b88] lg:border-t-0 lg:pl-6 lg:pt-0">
          <SectionTitle>NOSSOS DIAS EM NÚMEROS</SectionTitle>
          <ul className="m-0 list-none p-0">
            {data.historyNumbers.map((item) => (
              <li key={item.label} className="mb-2 flex items-baseline gap-3.5">
                <span className="min-w-16 text-[1.8rem] italic">{item.value}</span>
                <p className="m-0 text-[1.7rem]">{item.label}</p>
              </li>
            ))}
          </ul>
          <p className="m-0 text-[1.7rem]">4 anos, 4 meses e 4 dias no dia do Sim!</p>
        </article>
      </div>
    </SectionShell>
  )
}
