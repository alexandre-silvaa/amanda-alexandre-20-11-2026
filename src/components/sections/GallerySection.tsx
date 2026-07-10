import { SectionShell } from "../shared/SectionShell";
import { SectionTitle } from "../shared/SectionTitle";
import { MetaBar } from "../shared/MetaBar";
import galleryPhoto1 from "../../assets/gallery/1.jpg";
import galleryPhoto2 from "../../assets/gallery/2.jpg";
import galleryPhoto3 from "../../assets/gallery/3.jpeg";
import galleryPhoto5 from "../../assets/gallery/5.jpeg";
import galleryPhoto6 from "../../assets/gallery/6.jpeg";
import galleryPhoto7 from "../../assets/gallery/7.jpeg";
import galleryPhoto8 from "../../assets/gallery/8.jpeg";
import galleryPhoto9 from "../../assets/gallery/9.jpeg";
import galleryPhoto10 from "../../assets/gallery/10.jpg";
import galleryPhoto11 from "../../assets/gallery/11.JPEG";
import galleryPhoto12 from "../../assets/gallery/12.JPEG";

const galleryPhoto4 = new URL("../../assets/gallery/4.JPEG", import.meta.url)
  .href;

const galleryPhotos = [
  {
    src: galleryPhoto1,
    alt: "Foto do casal 01",
  },
  { src: galleryPhoto2, alt: "Foto do casal 02" },
  { src: galleryPhoto3, alt: "Foto do casal 03" },
  { src: galleryPhoto4, alt: "Foto do casal 04" },
  { src: galleryPhoto5, alt: "Foto do casal 05" },
  { src: galleryPhoto6, alt: "Foto do casal 06" },
  { src: galleryPhoto7, alt: "Foto do casal 07" },
  { src: galleryPhoto8, alt: "Foto do casal 08" },
  { src: galleryPhoto9, alt: "Foto do casal 09" },
  { src: galleryPhoto10, alt: "Foto do casal 10" },
  { src: galleryPhoto11, alt: "Foto do casal 11" },
  { src: galleryPhoto12, alt: "Foto do casal 12" },
];

export function GallerySection() {
  return (
    <SectionShell id="galeria">
      <MetaBar shouldNotShowEndBorder />

      <SectionTitle>GALERIA DE FOTOS</SectionTitle>
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
