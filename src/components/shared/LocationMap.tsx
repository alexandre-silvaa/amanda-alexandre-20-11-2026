import { ActionButton } from "./ActionButton";

type LocationMapProps = {
  title: string;
  address: string;
  mapUrl?: string;
  externalUrl?: string;
};

function getGoogleEmbedUrl(mapUrl: string | undefined, address: string) {
  const fallbackQuery = encodeURIComponent(address);
  const fallbackUrl = `https://www.google.com/maps?q=${fallbackQuery}&output=embed`;

  if (!mapUrl) {
    return fallbackUrl;
  }

  try {
    const parsed = new URL(mapUrl);

    if (parsed.pathname.includes("/maps/embed")) {
      return mapUrl;
    }

    const searchQuery =
      parsed.searchParams.get("query") ?? parsed.searchParams.get("q");

    if (searchQuery) {
      return `https://www.google.com/maps?q=${encodeURIComponent(searchQuery)}&output=embed`;
    }

    return fallbackUrl;
  } catch {
    return fallbackUrl;
  }
}

export function LocationMap({
  title,
  address,
  mapUrl,
  externalUrl,
}: LocationMapProps) {
  const embedUrl = getGoogleEmbedUrl(mapUrl, address);

  return (
    <article>
      <h3 className="m-0 font-['Garet'] text-fluid tracking-[0.02em]">
        {title}
      </h3>
      <p className="m-0 mt-1 text-fluid">{address}</p>

      <div className="mt-3 overflow-hidden rounded-xl bg-[#ecebea]">
        <iframe
          title={`Mapa de ${title}`}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-65 w-full border-0 md:h-80"
        />
      </div>

      <div className="mt-3 grid">
        <ActionButton href={externalUrl}>Abrir no mapa</ActionButton>
      </div>
    </article>
  );
}
