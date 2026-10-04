import { useId, useState } from 'react'
import Link from '@/components/Link'
import { BrazilMap } from '@/components/BrazilMap'
import { COMPANY_METRICS } from '@/data/companyMetrics'
import { COVERAGE_STATES } from '@/data/coverage'

export default function MetricsScale() {
  const id = useId()
  const [hovered, setHovered] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const activeUf = focused ?? hovered ?? selected
  const lead = COMPANY_METRICS.find(metric => metric.id === 'economia')
  const metrics = lead ? [lead, ...COMPANY_METRICS.filter(metric => metric.id !== lead.id)] : COMPANY_METRICS
  return <section className="bc-scale bc-scale--reference bc-scale--interactive" aria-labelledby={`${id}-title`}>
    <div className="be-wrap bc-scale-grid">
      <div className="bc-results">
        <h2 id={`${id}-title`}>Resultados que movem o mercado.</h2>
        <dl className="bc-results-list">
          {metrics.map(metric => <div key={metric.id} className={`bc-metric ${metric.id === 'economia' ? 'bc-metric--lead' : ''}`}>
            <dt className="bc-metric-label">{metric.label}</dt>
            <dd className="bc-metric-value">{metric.value}</dd>
            {metric.description && <dd className="bc-metric-description">{metric.description}</dd>}
          </div>)}
        </dl>
        <Link className="bc-text-link" href="/sobre/quem-somos" data-cta-name="home_numeros_quem_somos" data-cta-location="metrics">Conheça nossa história</Link>
      </div>
      <div className="bc-presence" role="group" aria-labelledby={`${id}-presence`}>
        <div className="bc-presence-copy">
          <h3 id={`${id}-presence`}>Presença regional</h3>
          <ul className="bc-presence-locations">{COVERAGE_STATES.map(state => <li key={state.uf}>
            {state.href ? <Link className={activeUf === state.uf ? 'is-active' : ''} href={state.href} onMouseEnter={()=>setHovered(state.uf)} onMouseLeave={()=>setHovered(null)} onFocus={()=>setFocused(state.uf)} onBlur={()=>setFocused(null)} data-cta-name={`home_regional_${state.uf}`} data-cta-location="presence">{state.name}</Link> : <button type="button" className={activeUf === state.uf ? 'is-active' : ''} aria-pressed={selected === state.uf} onClick={()=>setSelected(selected===state.uf?null:state.uf)} onMouseEnter={()=>setHovered(state.uf)} onMouseLeave={()=>setHovered(null)} onFocus={()=>setFocused(state.uf)} onBlur={()=>setFocused(null)}>{state.name}</button>}
          </li>)}</ul>
          <div className="bc-presence-map"><BrazilMap highlighted={COVERAGE_STATES.map(state=>state.uf)} activeUf={activeUf} onStateEnter={setHovered} onStateLeave={()=>setHovered(null)} showStateDots={false} officeMarkers title="Cobertura em Goiás, Tocantins, Mato Grosso, Minas Gerais, Paraná e Distrito Federal. Escritórios em Goiânia e São Paulo."/></div>
          <p className="bc-office-legend"><span aria-hidden="true"/>Escritórios: Goiânia (GO) · São Paulo (SP)</p>
          <Link className="bc-text-link" href="/contato" data-cta-name="home_regional_especialista" data-cta-location="presence">Consultar atendimento</Link>
        </div>
      </div>
    </div>
  </section>
}
