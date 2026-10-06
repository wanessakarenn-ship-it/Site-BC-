import { useId } from 'react'
import Link from '@/components/Link'
import { COMPANY_METRICS } from '@/data/companyMetrics'

export default function MetricsScale() {
  const id = useId()
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
        <Link className="bc-text-link bc-arrow-action bc-arrow-action--dark" href="/sobre/quem-somos" data-cta-name="home_numeros_quem_somos" data-cta-location="metrics">Conheça nossa história</Link>
      </div>
    </div>
  </section>
}
