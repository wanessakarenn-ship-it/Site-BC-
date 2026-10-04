import { Container } from '@/components'
import Link from '@/components/Link'
import { HOME_SEGMENT_ITEMS } from '@/config/navigation'
const IMAGES: Record<string,string> = {
 '/segmentos/agronegocio':'agronegocio.webp', '/segmentos/condominio':'condominio-v2.webp', '/segmentos/saude':'saude.webp', '/segmentos/varejo':'varejo.webp', '/segmentos/servico':'servico.webp', '/segmentos/residencial':'residencial.webp'
}
const Segments = ({ className = '' }: { className?: string }) => <section id="home_segmentos" className={className}>
 <Container><div className="flow-segments-heading"><div><p className="t-eyebrow">Para quem</p><h2 className="t-h2-lead mt-3">A energia de cada negócio</h2></div><Link href="/segmentos" data-cta-name="home_segmentos_todos" className="flow-text-link">Conheça os segmentos atendidos</Link></div>
 <ul className="flow-segment-strip">{HOME_SEGMENT_ITEMS.map((item,index)=><li key={item.href}><Link href={item.href} data-cta-name={`home_segmentos_${item.title}`} className="flow-segment-photo"><img src={`/img/pages/segmentos/${IMAGES[item.href] ?? 'servico.webp'}`} alt="" width={800} height={900} loading="lazy" decoding="async" /><span className="flow-segment-label"><small>{String(index+1).padStart(2,'0')} / Segmentos</small><strong>{item.title}</strong></span></Link></li>)}</ul>
 </Container>
</section>
export default Segments
