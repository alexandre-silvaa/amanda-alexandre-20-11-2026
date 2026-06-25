import type { InviteData, InfoBullet } from "../../data/weeding-data";
import { ActionButton } from "../shared/ActionButton";
import { IconTextItem } from "../shared/IconTextItem";
import { MetaBar } from "../shared/MetaBar";
import { PhotoPlaceholder } from "../shared/PhotoPlaceholder";
import { SectionShell } from "../shared/SectionShell";
import { SectionTitle } from "../shared/SectionTitle";

type EventSectionProps = {
  data: InviteData;
};

function iconByType(type: InfoBullet["icon"]) {
  if (type === "clock") {
    return (
      <span className="inline-grid h-[34px] w-[34px] place-items-center border border-[#1f1f1f] text-[1.2rem]">
        ◷
      </span>
    );
  }

  if (type === "camera") {
    return (
      <span className="inline-grid h-[34px] w-[34px] place-items-center border border-[#1f1f1f] text-[1.2rem]">
        ◉
      </span>
    );
  }

  if (type === "money") {
    return (
      <span className="inline-grid h-[34px] w-[34px] place-items-center border border-[#1f1f1f] text-[1.2rem]">
        $
      </span>
    );
  }

  return (
    <span className="inline-grid h-[34px] w-[34px] place-items-center border border-[#1f1f1f] text-[1.2rem]">
      ✦
    </span>
  );
}

export function EventSection({ data }: EventSectionProps) {
  return (
    <SectionShell id="evento">
      <MetaBar shouldNotShowEndBorder />

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article>
          <SectionTitle className="text-fluid-copy">CRONOGRAMA</SectionTitle>
          <ol className="m-0 list-none border-l-2 border-l-[#222] pl-5">
            {data.timeline.map((item) => (
              <li
                key={item.time}
                className="relative mb-4 pl-2 before:absolute before:left-[-1.52rem] before:top-2 before:h-[9px] before:w-[9px] before:rounded-full before:bg-black before:content-['']"
              >
                <time className="block font-['Garet'] text-[1rem]">
                  {item.time}
                </time>
                <p className="m-0 text-fluid-copy leading-none">{item.title}</p>
              </li>
            ))}
          </ol>

          <div className="mt-2 ">
            <strong className="my-2 text-[1.5rem]">Endereços:</strong>
            <p className="m-0 text-fluid-copy">
              <strong>Paz Church:</strong> {data.addresses.church}
            </p>
            <p className="m-0 text-fluid-copy">
              <strong>Via Brasil:</strong> {data.addresses.restaurant}
            </p>
          </div>

          <PhotoPlaceholder
            label="Foto do vestido e buquê"
            tone="warm"
            className="mt-4 aspect-[3/4] rounded-[14px]"
          />
        </article>

        <article>
          <PhotoPlaceholder
            label="Foto de abraço na porta"
            tone="warm"
            className="min-h-[370px] rounded-[14px]"
          />

          <SectionTitle className="mt-4 text-fluid-copy">
            INFORMAÇÕES
          </SectionTitle>
          <ul className="m-0 list-none p-0">
            {data.infoBullets.map((item) => (
              <IconTextItem
                key={item.text}
                icon={iconByType(item.icon)}
                text={item.text}
              />
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ActionButton href={data.locationLinks.church}>
              Ver igreja no mapa
            </ActionButton>
            <ActionButton href={data.locationLinks.restaurant}>
              Ver restaurante no mapa
            </ActionButton>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
