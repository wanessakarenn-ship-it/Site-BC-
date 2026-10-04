import { useState } from 'react'
import { BrazilMap, Container } from '@/components'
import Link from '@/components/Link'
import { COVERAGE_STATES } from '@/data/coverage'

const RegionalPresence = ({ className = '' }: { className?: string }) => {
  const [activeUf, setActiveUf] = useState<string | null>(null)
  return <section id="home_presenca_regional" className={`flow-region ${className}`}>
    <Container><div className="flow-region-layout">
      <div className="flow-region-copy"><p className="t-eyebrow">Presença regional</p>
        <h2 className="t-h2-lead">Nossa energia está cada vez mais perto de você</h2>
        <p className="t-body-lg">Atendemos em Goiás, Tocantins, Mato Grosso, Minas Gerais, Paraná e no Distrito Federal. As condições variam conforme a distribuidora e o perfil de consumo de cada operação.</p>
        <div className="flow-state-list">{COVERAGE_STATES.map(state => state.href ? <Link key={state.uf} href={state.href} data-cta-name={`home_regional_${state.uf}`} onMouseEnter={() => setActiveUf(state.uf)} onMouseLeave={() => setActiveUf(null)} onFocus={() => setActiveUf(state.uf)} onBlur={() => setActiveUf(null)}><span>{state.uf}</span>{state.name}</Link> : <span key={state.uf} onMouseEnter={() => setActiveUf(state.uf)} onMouseLeave={() => setActiveUf(null)}><span>{state.uf}</span>{state.name}</span>)}</div>
        <Link href="/contato" data-cta-name="home_regional_especialista" className="flow-text-link">Ver atendimento na sua região</Link>
      </div>
      <figure className="flow-region-map"><BrazilMap highlighted={COVERAGE_STATES.map(s => s.uf)} activeUf={activeUf} onStateEnter={setActiveUf} onStateLeave={() => setActiveUf(null)} title="Estados atendidos pelo Grupo BC Energia" /><figcaption>Presença, conhecimento local e soluções para cada perfil de consumo.</figcaption></figure>
    </div></Container>
  </section>
}
export default RegionalPresence
