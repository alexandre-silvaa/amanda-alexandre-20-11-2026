import { Camera, ClockCheck, DollarSign, Gift } from "lucide-react";
import FotoAbraco from "../../assets/abraco-porta.webp";
import FotoCaminhando from "../../assets/caminhando.webp";
import type { InfoBullet, InviteData } from "../../data/weeding-data";
import { IconTextItem } from "../shared/IconTextItem";
import { LocationMap } from "../shared/LocationMap";
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
          <SectionTitle>CRONOGRAMA</SectionTitle>
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
                  <p className="m-0 text-fluid leading-none">{item.title}</p>
                </li>
              ))}
            </ol>
          </div>

          <PhotoPlaceholder
            label="Foto do vestido e buquê"
            tone="warm"
            className="mt-4 aspect-3/4 rounded-[14px]"
            image={FotoCaminhando}
          />
        </article>

        <article className="flex flex-col gap-4 h-full ">
          <div className="order-2 lg:order-1">
            <PhotoPlaceholder
              label="Foto de abraço na porta"
              tone="warm"
              className="aspect-3/4 rounded-[14px]"
              image={FotoAbraco}
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionTitle>INFORMAÇÕES</SectionTitle>

            <ul className="m-0 list-none p-0 lg:flex lg:flex-col lg:h-full lg:justify-between lg:pt-2">
              {data.infoBullets.map((item) => (
                <IconTextItem
                  key={item.text}
                  icon={iconByType(item.icon)}
                  text={item.text}
                />
              ))}
            </ul>
          </div>
        </article>
      </div>

      <div className="mt-8 border-t border-t-dotted border-t-[#8d8b88] pt-8">
        <SectionTitle className="mb-4 text-center lg:text-left">
          LOCALIZAÇÃO
        </SectionTitle>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <LocationMap
            title="Paz Church"
            address={data.addresses.church}
            mapUrl={data.locationLinks.church}
            externalUrl={data.locationLinks.church}
          />

          <LocationMap
            title="Via Brasil"
            address={data.addresses.restaurant}
            mapUrl={data.locationLinks.restaurant}
            externalUrl={data.locationLinks.restaurant}
          />
        </div>
      </div>
    </SectionShell>
  );
}
