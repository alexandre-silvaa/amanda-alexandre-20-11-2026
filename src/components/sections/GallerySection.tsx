import { SectionShell } from "../shared/SectionShell";
import { SectionTitle } from "../shared/SectionTitle";
import { MetaBar } from "../shared/MetaBar";
import galleryPhoto1 from "../../assets/gallery/1.webp";
import galleryPhoto2 from "../../assets/gallery/2.webp";
import galleryPhoto3 from "../../assets/gallery/3.webp";
import galleryPhoto4 from "../../assets/gallery/4.webp";
import galleryPhoto5 from "../../assets/gallery/5.webp";
import galleryPhoto6 from "../../assets/gallery/6.webp";
import galleryPhoto7 from "../../assets/gallery/7.webp";
import galleryPhoto8 from "../../assets/gallery/8.webp";
import galleryPhoto9 from "../../assets/gallery/9.webp";
import galleryPhoto10 from "../../assets/gallery/10.webp";

const galleryPhotos = [
  { src: galleryPhoto1, alt: "Foto do casal 01" },
  { src: galleryPhoto2, alt: "Foto do casal 02" },
  { src: galleryPhoto3, alt: "Foto do casal 03" },
  { src: galleryPhoto4, alt: "Foto do casal 04" },
  { src: galleryPhoto5, alt: "Foto do casal 05" },
  { src: galleryPhoto6, alt: "Foto do casal 06" },
  { src: galleryPhoto7, alt: "Foto do casal 07" },
  { src: galleryPhoto8, alt: "Foto do casal 08" },
  { src: galleryPhoto9, alt: "Foto do casal 09" },
  { src: galleryPhoto10, alt: "Foto do casal 10" },
];

export function GallerySection() {
  return (
    <SectionShell id="galeria">
      <MetaBar shouldNotShowEndBorder />

      <SectionTitle>Galeria de Fotos</SectionTitle>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {galleryPhotos.map((photo) => (
          <div
            key={photo.src}
            className="aspect-3/4 overflow-hidden rounded-[14px] bg-zinc-100"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-bottom object-cover"
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
