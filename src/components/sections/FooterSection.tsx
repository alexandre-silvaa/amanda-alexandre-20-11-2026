import type { InviteData } from "../../data/weeding-data";

type FooterSectionProps = {
  data: InviteData;
};

export function FooterSection({ data }: FooterSectionProps) {
  return (
    <footer className="mx-auto max-w-265 border-y-4 border-y-double border-[#202020]">
      <div className="py-[1.1rem] text-center text-[1.5rem] italic">
        <p className="m-0">{data.footerText}</p>
      </div>
    </footer>
  );
}
