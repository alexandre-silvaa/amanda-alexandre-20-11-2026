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
    "flex flex-col gap-3 mb-8 md:mb-0 md:py-3 md:my-3 text-fluid italic text-justify";

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

          <div className="mx-auto flex w-full max-w-92 flex-col gap-2.5">
            {data.historyMilestones.map((item) => (
              <div
                key={item.title}
                className="flex min-h-16 w-full items-center gap-4"
              >
                <span className="inline-flex shrink-0 items-center justify-center">
                  {item.icon}
                </span>

                <div className="flex min-w-0 flex-col">
                  <h6 className="m-0 whitespace-nowrap font-['Garet'] text-base tracking-[0.03em] lg:text-lg">
                    {item.title}
                  </h6>
                  <p className="m-0 whitespace-nowrap text-sm lg:text-base">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="border-t border-t-dotted border-t-[#8d8b88] pt-4 md:pt-8 lg:border-l lg:border-l-dotted lg:border-l-[#8d8b88] lg:border-t-0 lg:pl-6 lg:pt-0">
          <SectionTitle className="title-fluid text-center">
            NOSSOS DIAS EM NÚMEROS
          </SectionTitle>
          <ul className="mx-auto flex h-full w-full max-w-92 list-none flex-col p-0">
            {data.historyNumbers.map((item) => (
              <li
                key={item.label}
                className="grid min-h-10 w-full grid-cols-[4rem_12rem] place-items-center justify-center text-center"
              >
                <span className="min-w-16 shrink-0 text-xl italic lg:text-2xl">
                  {item.value}
                </span>
                <p className="m-0 w-full whitespace-nowrap text-center text-lg lg:text-xl">
                  {item.label}
                </p>
              </li>
            ))}
            <li className="mt-2 whitespace-nowrap text-center text-xl lg:text-2xl">
              4 anos, 4 meses e 4 dias no dia do Sim!
            </li>
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}
