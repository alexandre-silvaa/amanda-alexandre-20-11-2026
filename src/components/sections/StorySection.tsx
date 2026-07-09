import FotoPortao from "../../assets/portao.jpg";
import type { InviteData } from "../../data/weeding-data";
import { MetaBar } from "../shared/MetaBar";
import { PhotoPlaceholder } from "../shared/PhotoPlaceholder";
import { SectionShell } from "../shared/SectionShell";
import { SectionTitle } from "../shared/SectionTitle";

type StorySectionProps = {
  data: InviteData;
};

export function StorySection({ data }: StorySectionProps) {
  const quoteBlockClasses =
    "flex flex-col gap-3 md:mb-8 lg: text-fluid italic text-justify";

  return (
    <SectionShell id="historia">
      <MetaBar city={data.city} dateLabel={data.newspaperDate} />

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:mb-8">
        <PhotoPlaceholder
          label="Foto do casal no portão"
          tone="bw"
          className="aspect-3/4 rounded-[14px] lg:h-150"
          image={FotoPortao}
        />

        <article className="flex flex-col h-full lg:justify-between">
          <SectionTitle className="text-center lg:text-left">
            {data.storyTitle}
          </SectionTitle>
          {data.storyParagraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-fluid text-justify">
              {paragraph}
            </p>
          ))}
          <div className={`hidden lg:flex ${quoteBlockClasses}`}>
            <blockquote>
              <p>{data.storyQuote1}</p>
            </blockquote>

            <blockquote>
              <p>{data.storyQuote}</p>
            </blockquote>
          </div>
        </article>
      </div>

      <div className={`lg:hidden ${quoteBlockClasses}`}>
        <blockquote>
          <p>{data.storyQuote1}</p>
        </blockquote>

        <blockquote>
          <p>{data.storyQuote}</p>
        </blockquote>
      </div>

      <div className="grid grid-cols-1 gap-6 border-t border-t-dotted border-t-[#8d8b88] pt-8 lg:grid-cols-2">
        <article>
          <SectionTitle className="title-fluid text-center">
            RESUMO DA NOSSA HISTÓRIA
          </SectionTitle>
          <ul className="m-0 list-none p-0">
            {data.historyMilestones.map((item) => (
              <li key={item.title} className="mb-4">
                <h6 className="m-0 font-['Garet'] text-[1.2rem] tracking-[0.03em]">
                  {item.title}
                </h6>
                <p className="m-0 text-[1.2rem]">{item.date}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="border-t border-t-dotted border-t-[#8d8b88] pt-4 lg:border-l lg:border-l-dotted lg:border-l-[#8d8b88] lg:border-t-0 lg:pl-6 lg:pt-0">
          <SectionTitle className="title-fluid text-center">
            NOSSOS DIAS EM NÚMEROS
          </SectionTitle>
          <ul className="m-0 list-none p-0">
            {data.historyNumbers.map((item) => (
              <li key={item.label} className="mb-2 flex items-baseline gap-3.5">
                <span className="min-w-16 text-[1.8rem] italic">
                  {item.value}
                </span>
                <p className="m-0 text-[1.7rem]">{item.label}</p>
              </li>
            ))}
          </ul>
          <p className="m-0 text-[1.7rem]">
            4 anos, 4 meses e 4 dias no dia do Sim!
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
