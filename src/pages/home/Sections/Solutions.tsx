import { Container } from '@/components'
import Link from '@/components/Link'
import { PRODUCT_HUB_ITEMS } from '@/config/navigation'
import { LINK_CATALOG } from '@/config/internalLinks'

const Solutions = ({ className = '' }: { className?: string }) => (
  <section id="home_solucoes" data-cta-location="home_solucoes" className={className}>
    <Container>
      <div className="flow-solutions-heading">
        <div><p className="t-eyebrow">Soluções</p><h2 className="t-h2-lead mt-4">Um portfólio para cada perfil de consumo</h2></div>
        <div><p className="t-body-lg">Empresas, condomínios e residências: escolha o modelo mais adequado ao seu consumo e à sua conexão.</p><Link href="/produtos" data-cta-name="home_ver_todas_solucoes" className="t-action-label mt-5 inline-flex min-h-[44px] items-center text-bc-primary underline underline-offset-4">Ver todas as soluções</Link></div>
      </div>
      <div className="flow-solutions-layout">
        <img className="flow-solutions-image" src="/img/flow/enterprise.webp" width={1000} height={1200} loading="lazy" decoding="async" alt="Profissional acompanhando informações e documentos no escritório" />
        <div>{PRODUCT_HUB_ITEMS.filter(item => !item.external).map((item, index) => (
          <article key={item.href} className="flow-solution-row">
            <span aria-hidden="true" className="flow-solution-number">{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{LINK_CATALOG[item.href]?.shortLabel ?? item.title}</h3><p>{item.description}</p>{item.href === '/produtos/consorcio-bc-energia' ? <Link href="https://www.appenergia.com.br/Grupo_BC_Energia/" target="_blank" rel="noopener noreferrer" data-cta-name="home_solucoes_adesao" className="mr-6">Fazer adesão gratuita</Link> : null}<Link href={item.href} data-cta-name={`home_solucoes_${item.title}`}>Conhecer solução</Link></div>
          </article>
        ))}{PRODUCT_HUB_ITEMS.filter(item => item.external).map(item => <p className="t-body mt-8" key={item.href}>{item.description} <Link href={item.href} target="_blank" rel="noopener noreferrer" data-cta-name={`home_solucoes_${item.title}`} className="text-bc-primary underline">Acessar {item.title}</Link></p>)}</div>
      </div>
    </Container>
  </section>
)
export default Solutions
