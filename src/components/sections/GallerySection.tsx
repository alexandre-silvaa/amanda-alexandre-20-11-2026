import { SectionShell } from '../shared/SectionShell'
import { SectionTitle } from '../shared/SectionTitle'
import { PhotoPlaceholder } from '../shared/PhotoPlaceholder'

export function GallerySection() {
  return (
    <SectionShell id="galeria">
      <SectionTitle>GALERIA DE FOTOS</SectionTitle>
      <p className="mb-4 mt-1 text-[1.75rem]">
        Enquanto os registros oficiais não chegam, deixamos este espaço preparado para
        eternizar cada momento do nosso dia.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <PhotoPlaceholder label="Foto do casal 01" tone="bw" className="aspect-[4/3] rounded-[14px]" />
        <PhotoPlaceholder label="Foto do casal 02" tone="warm" className="aspect-[4/3] rounded-[14px]" />
        <PhotoPlaceholder label="Foto do casal 03" tone="bw" className="aspect-[4/3] rounded-[14px]" />
        <PhotoPlaceholder label="Foto do casal 04" tone="warm" className="aspect-[4/3] rounded-[14px]" />
      </div>
    </SectionShell>
  )
}
