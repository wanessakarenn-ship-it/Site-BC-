import { Container } from '@/components'
import Link from '@/components/Link'
import { COMPANY_METRICS } from '@/data/companyMetrics'

const Stats = () => <section id="home_numeros" className="flow-stats">
  <Container><div className="flow-stats-heading"><p className="t-eyebrow">Escala e experiência</p><h2 className="t-h2">Resultados que movem o mercado</h2><Link href="/sobre/quem-somos" data-cta-name="home_numeros_quem_somos">Conheça nossa história</Link></div>
  <dl className="flow-metrics">{COMPANY_METRICS.map(metric => <div key={metric.id}><dt>{metric.label}</dt><dd className="flow-metric-value"><span>{metric.id === 'economia' ? '+ de R$' : '+ de'}</span><strong>{metric.value.replace(/^\+ de (R\$ )?/, '')}</strong></dd><dd className="flow-metric-description">{metric.description}</dd></div>)}</dl></Container>
</section>
export default Stats
