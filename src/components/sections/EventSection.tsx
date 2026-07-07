import { Camera, ClockCheck, DollarSign, Gift } from "lucide-react";
import type { InfoBullet, InviteData } from "../../data/weeding-data";
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
    return <ClockCheck size={22} />;
  }

  if (type === "camera") {
    return <Camera size={22} />;
  }

  if (type === "money") {
    return <DollarSign size={22} />;
  }

  return <Gift size={22} />;
}

export function EventSection({ data }: EventSectionProps) {
  return (
    <SectionShell id="evento">
      <MetaBar shouldNotShowEndBorder />

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article>
          <SectionTitle className="text-fluid-copy">CRONOGRAMA</SectionTitle>
          <div className="flex w-full justify-center gap-4 flex-col ">
            <ol className="m-0 list-none border-l-2 border-l-[#222] pl-5 ">
              {data.timeline.map((item) => (
                <li
                  key={item.time}
                  className="relative mb-4 pl-2 before:absolute before:left-[-1.58rem] before:top-0 before:h-2.25 before:w-2.25 before:rounded-full before:bg-black before:content-['']"
                >
                  <time className="block font-['Garet'] text-[1rem]">
                    {item.time}
                  </time>
                  <p className="m-0 text-fluid-copy leading-none">
                    {item.title}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-2">
              <strong className="my-2 text-fluid-copy">Endereços:</strong>
              <p className="m-0 text-fluid-copy">
                <strong>Paz Church:</strong> {data.addresses.church}
              </p>
              <p className="m-0 text-fluid-copy">
                <strong>Via Brasil:</strong> {data.addresses.restaurant}
              </p>
            </div>
          </div>

          <PhotoPlaceholder
            label="Foto do vestido e buquê"
            tone="warm"
            className="mt-4 aspect-3/4 rounded-[14px]"
          />
        </article>

        <article className="flex flex-col gap-4 h-full ">
          {/* Foto */}
          <div className="order-2 lg:order-1">
            <PhotoPlaceholder
              label="Foto de abraço na porta"
              tone="warm"
              className="aspect-3/4 rounded-[14px]"
            />
          </div>

          {/* Informações */}
          <div className="order-1 lg:order-2">
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
          </div>

          {/* Botões */}
          {/* <div className="order-3 mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ActionButton href={data.locationLinks.church}>
              Ver igreja no mapa
            </ActionButton>

            <ActionButton href={data.locationLinks.restaurant}>
              Ver restaurante no mapa
            </ActionButton>
          </div> */}
        </article>
      </div>
    </SectionShell>
  );
}
