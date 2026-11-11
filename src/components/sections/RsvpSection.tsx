import { SectionShell } from "../shared/SectionShell";
import { SectionTitle } from "../shared/SectionTitle";
import { MetaBar } from "../shared/MetaBar";

const RSVP_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdIIiJtYlMEssJGMOU_XImp0dZ8B9448Qh47cEzgC0OD0IDgA/viewform?embedded=true";

export function RsvpSection() {
  return (
    <SectionShell id="confirmacao">
      <MetaBar shouldNotShowEndBorder />

      <SectionTitle>Confirmação de Presença</SectionTitle>
      <div className="overflow-hidden rounded-[14px] bg-white">
        <iframe
          src={RSVP_FORM_URL}
          title="Formulário de confirmação de presença"
          width="100%"
          className="block h-[520px] w-full border-0"
          loading="lazy"
        >
          Carregando…
        </iframe>
      </div>
    </SectionShell>
  );
}
