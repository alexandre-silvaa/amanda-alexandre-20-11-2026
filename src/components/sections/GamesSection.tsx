import type { InviteData } from '../../data/weeding-data'
import { MetaBar } from '../shared/MetaBar'
import { PhotoPlaceholder } from '../shared/PhotoPlaceholder'
import { SectionShell } from '../shared/SectionShell'
import { SectionTitle } from '../shared/SectionTitle'

type GamesSectionProps = {
  data: InviteData
}

export function GamesSection({ data }: GamesSectionProps) {
  return (
    <SectionShell id="interacoes">
      <MetaBar city={data.city} dateLabel={data.newspaperDate} />

      <div className="mt-4 grid grid-cols-1 gap-6 border-b border-b-dotted border-b-[#8d8b88] pb-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article>
          <SectionTitle>ELE DISSE, ELA DISSE</SectionTitle>
          <p className="mb-3 text-[1.65rem] italic">
            Adivinhe se cada frase foi dita pela noiva ou pelo noivo, marcando a opção
            correta.
          </p>

          <div className="border-t border-t-[#b3b2af]" role="table" aria-label="Jogo ele disse ela disse">
            <div
              className="grid grid-cols-[1fr_40px_40px] items-center gap-2 border-b border-b-[#c9c7c3] px-1 py-1 font-['Garet'] text-sm uppercase tracking-[0.08em] sm:grid-cols-[1fr_56px_56px] sm:text-[1.15rem]"
              role="row"
            >
              <span role="columnheader">Frase</span>
              <span role="columnheader">ELE</span>
              <span role="columnheader">ELA</span>
            </div>
            {data.quizStatements.map((statement) => (
              <div
                key={statement}
                className="grid grid-cols-[1fr_40px_40px] items-center gap-2 border-b border-b-[#c9c7c3] px-1 py-1 text-[1.45rem] sm:grid-cols-[1fr_56px_56px] sm:text-[1.9rem]"
                role="row"
              >
                <span role="cell">{statement}</span>
                <span role="cell" aria-label="Opção ele">
                  ☐
                </span>
                <span role="cell" aria-label="Opção ela">
                  ☐
                </span>
              </div>
            ))}
          </div>
        </article>

        <PhotoPlaceholder
          label="Foto colorida do casal em frente ao prédio"
          tone="warm"
          className="min-h-[420px]"
        />
      </div>

      <article className="pt-5">
        <SectionTitle>CAÇA PALAVRAS</SectionTitle>
        <p className="mb-3 text-[1.65rem] italic">
          Encontre palavras que fazem parte de quem nós somos. Existem palavras na
          horizontal, vertical e diagonal.
        </p>
        <div className="mt-3 border border-[#b4b1ad] bg-[#f9f8f7] p-4" aria-label="Caça palavras">
          {data.wordSearchGrid.map((row, index) => (
            <p
              key={`${row}-${index}`}
              className="m-0 text-center font-['Garet'] text-[clamp(0.95rem,2.2vw,1.3rem)] tracking-[0.12em] sm:tracking-[0.23em]"
            >
              {row.split('').join(' ')}
            </p>
          ))}
        </div>
        <ul className="mt-4 grid list-none grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2 p-0 text-center font-['Garet'] tracking-[0.03em]">
          {data.wordList.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </article>
    </SectionShell>
  )
}
