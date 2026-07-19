import React from "react";
import FotoPrincipal from "../../assets/principal.webp";
import type { InviteData } from "../../data/weeding-data";
import { Countdown } from "../shared/Countdown";
import { MetaBar } from "../shared/MetaBar";
import { PhotoPlaceholder } from "../shared/PhotoPlaceholder";
import { SectionShell } from "../shared/SectionShell";

type HeroSectionProps = {
  data: InviteData;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <SectionShell id="home">
      <div className="my-2 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:my-3 sm:gap-6">
        <div className="relative h-2 w-full before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-black before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-black after:content-['']" />
        <span className="font-['Crimson_Pro'] text-2xl">EDIÇÃO ESPECIAL</span>
        <div className="relative h-2 w-full before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-black before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-black after:content-['']" />
      </div>

      <div className="w-full text-center pb-4 md:pb-8">
        <span className="font-['Engravers_Old_English'] text-[clamp(2.5rem,9vw,6.2rem)] leading-[0.95] tracking-[0.03em]">
          A+A News
        </span>
      </div>

      <MetaBar shouldNotShowEndBorder>
        <React.Fragment>
          <div className="pt-5 md:pb-2">
            <h2 className="m-0 text-center font-['Anton'] text-[clamp(2.25rem,9vw,6.2rem)] leading-[0.95] tracking-[0.03em]">
              {data.coupleNames}
            </h2>
            <p className="mt-2 text-center font-['Allura'] text-[clamp(2rem,4vw,3.4rem)]">
              {data.subtitle}
            </p>
          </div>

          <PhotoPlaceholder
            label="Foto principal do casal"
            tone="bw"
            className="aspect-4/3"
            image={FotoPrincipal}
          />

          <div className="my-5 flex flex-col-reverse gap-6 font-[Georgia_Pro] lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            <blockquote className="m-0">
              <p className="font-bold italic text-[clamp(1.1rem,1.6vw,1.4rem)]">
                {data.quote}
              </p>
              <cite className="mt-2.5 block text-[1rem] not-italic">
                - Amanda e Alexandre
              </cite>
            </blockquote>
            <p className="m-0 text-fluid">{data.introText}</p>
          </div>

          <div
            className="mb-5 font-['Garet'] grid grid-cols-1 gap-px bg-[#1f1f1f] text-[#f6f6f6] sm:grid-cols-3"
            aria-label="Destaques do convite"
          >
            <span className="px-2 py-2 text-center font-['Garet'] text-sm tracking-[0.03em] sm:text-base">
              NOSSO DIA PARA SEMPRE
            </span>
            <span className="px-2 py-2 text-center font-['Garet'] text-sm tracking-[0.03em] sm:text-base">
              NOSSO SIM
            </span>
            <span className="px-2 py-2 text-center font-['Garet'] text-sm tracking-[0.03em] sm:text-base">
              O MELHOR DIA DE TODOS
            </span>
          </div>
          <Countdown
            targetDate={data.eventDateISO}
            eventLabel={data.eventDateLabel}
          />
        </React.Fragment>
      </MetaBar>
    </SectionShell>
  );
}
