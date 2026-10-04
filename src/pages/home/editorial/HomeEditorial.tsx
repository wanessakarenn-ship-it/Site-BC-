import Link from '@/components/Link'
import MetricsScale from './MetricsScale'
import PlantCarousel from './PlantCarousel'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { PRODUCT_HUB_ITEMS, SEGMENT_HUB_ITEMS, HEADER_CLIENT_LINK } from '@/config/navigation'
import { POWER_PLANTS } from '@/data/powerPlants'
import { getArticles } from '@/data/content/articles'
import { getEpisodes, getEpisodeLabel } from '@/data/content/episodes'
import HomeFaq from '../Sections/HomeFaq'
import { PILLARS } from '../Sections/positioning.data'
import Hero from '../Sections/Hero'
import { Customers } from '@/components/Customers'
import './bc-editorial.css'
import './reference-home.css'
import './energy-in-motion.css'
import './solutions-portfolio.css'
import './operation-knowledge.css'
import './trust-to-action.css'
import './visual-refinement.css'

const HomeEditorial = () => {
 const solutions=[...PRODUCT_HUB_ITEMS].sort((a,b)=>{const priority=['/produtos/consorcio-bc-energia','/produtos/mercado-livre-de-energia'];return (priority.indexOf(a.href)<0?2:priority.indexOf(a.href))-(priority.indexOf(b.href)<0?2:priority.indexOf(b.href))})
 const contextualLinks: Record<string,string> = {
  '/produtos/consorcio-bc-energia': 'Conhecer solução',
  '/produtos/mercado-livre-de-energia': 'Conhecer solução',
  '/produtos/gestao-de-energia': 'Conhecer gestão',
  '/produtos/certificacao-renovavel-irec': 'Ver certificação',
  '/produtos/arrendamento-de-usinas': 'Entender arrendamento'
 }
 const renderSolution = (item: (typeof solutions)[number], index: number) => <article className={`be-service-entry ${index===0?'be-service-entry--primary':index===1?'be-service-entry--secondary':''}`} key={item.href}>
      <div className="be-service-copy">
       {index<2?<p className="be-service-audience">{index===0?'Solução para residências e comércios':'Solução para empresas'}</p>:null}
       <h3>{item.title}</h3>{index===0?<p className="be-portfolio-saving">Até 25% de economia</p>:null}<p>{item.description}</p>
      </div>
      <div className="be-service-actions"><Link className="be-service-access" href={item.href} {...(item.external?{target:'_blank',rel:'noopener noreferrer'}:{})} data-cta-name={`home_solucoes_${item.title}`} data-cta-location="solutions">{item.external?'Acessar portal':contextualLinks[item.href] ?? 'Conhecer solução'}<span aria-hidden="true"> →</span></Link>
       {item.href==='/produtos/consorcio-bc-energia'?<Link className="be-service-enroll" href="https://www.appenergia.com.br/Grupo_BC_Energia/" target="_blank" rel="noopener noreferrer" data-cta-name="home_solucoes_adesao" data-cta-location="solutions">Fazer adesão gratuita</Link>:null}
      </div>
     </article>
 const episodes=getEpisodes(),articles=getArticles(),featured=episodes[0]
 const [agro,retail,home]=['/segmentos/agronegocio','/segmentos/varejo','/segmentos/residencial'].map(href=>SEGMENT_HUB_ITEMS.find(x=>x.href===href))
 return <main className="bc-editorial bc-reference-home">
  <Hero/>
  <section className="be-attribute-band" aria-label="Atributos do Grupo BC Energia"><ul className="be-wrap">{PILLARS.map(pillar=><li key={pillar.title}><h2>{pillar.title}</h2></li>)}</ul></section>
  <section className="be-solutions be-solutions--editorial be-solutions--portfolio be-wrap" aria-labelledby="be-solutions-title">
   <header className="be-portfolio-heading">
    <div><p className="be-portfolio-eyebrow">SOLUÇÕES PARA CADA PERFIL</p><h2 id="be-solutions-title">Inteligência para cada perfil de consumo</h2><p>Empresas, condomínios e residências: escolha o modelo mais adequado ao seu consumo e à sua conexão.</p></div>
    <Link className="be-link" href="/produtos" data-cta-name="home_solucoes_todas" data-cta-location="solutions">Ver todas as soluções</Link>
   </header>
   <div className="be-solution-layout">
    <figure className="be-solution-visual"><img src="/img/home/como-ajudamos-usina.webp" alt="Vista operacional de usina fotovoltaica" width={720} height={900} loading="lazy" decoding="async"/></figure>
    <div className="be-solutions-copy">{solutions.slice(0,1).map(renderSolution)}</div>
   </div>
   <div className="be-portfolio-strategic">{solutions.slice(1,2).map((item)=>renderSolution(item,1))}</div>
   <div className="be-service-complementary">{solutions.slice(2).map((item,index)=>renderSolution(item,index+2))}</div>
  </section>
  <section className="be-movement be-movement--editorial be-wrap" aria-labelledby="be-movement-title">
   <figure className="be-movement-photo"><img src="/img/pages/usinas/ClareiradeAracu.jpg" alt="Usina do Complexo Clareira de Araçu" width={900} height={506} loading="lazy" decoding="async"/></figure>
   <div className="be-movement-copy"><h2 id="be-movement-title">Energia que transforma consumo em resultado.</h2><p className="be-lead">Integramos tecnologia, pessoas e conhecimento para entregar soluções personalizadas, sustentáveis e alinhadas às necessidades de cada cliente.</p>
    <dl className="be-pillar-narrative">{PILLARS.map(pillar=><div key={pillar.title}><dt>{pillar.title}</dt><dd>{pillar.text}</dd></div>)}</dl>
   </div>
  </section>
  <MetricsScale/>
  <section className="be-segments" aria-labelledby="be-segments-title"><div className="be-wrap"><div className="be-section-heading"><div><h2 id="be-segments-title">A energia de cada negócio.</h2></div><Link className="be-link" href="/segmentos" data-cta-name="home_segmentos_todos">Conheça os segmentos atendidos</Link></div>
   <div className="be-sector-mosaic">{[[agro,'/img/reference-home/agronegocio.webp'],[retail,'/img/reference-home/varejo.webp'],[home,'/img/pages/segmentos/residencial.webp']].map(([item,file],index)=>{const entry=item as typeof agro;return entry?<Link key={entry.href} className={`be-sector be-sector-${index}`} href={entry.href} data-cta-name={`home_segmentos_${entry.title}`}><img src={file as string} alt="" width={1000} height={700} loading="lazy" decoding="async"/><span>{entry.title}</span></Link>:null})}</div>
   <div className="be-other-sectors">{SEGMENT_HUB_ITEMS.filter(x=>![agro?.href,retail?.href,home?.href].includes(x.href)).map(item=><Link key={item.href} href={item.href} data-cta-name={`home_segmentos_${item.title}`}>{item.title}</Link>)}</div>
  </div></section>
  <section className="be-field be-wrap" aria-labelledby="be-field-title">
   <div className="be-operation-layout"><PlantCarousel plants={POWER_PLANTS}/>
   <div className="be-operation-copy"><p className="be-editorial-eyebrow">ESTRUTURA PRÓPRIA</p><h2 id="be-field-title">Energia acontecendo</h2><p>A energia que comercializamos vem de usinas próprias de fonte renovável. Estrutura, operação e certificação I-REC garantem economia com origem limpa e comprovável.</p><div className="be-operation-metric"><p className="be-field-number">{POWER_PLANTS.length}</p><div><h3>Complexos de geração</h3><p>Usinas solares e hidrelétricas próprias no Centro-Oeste e Sudeste.</p></div></div><Link className="be-link" href="/sobre/nossas-usinas" data-cta-name="home_sustentabilidade_usinas">Conhecer nossas usinas<span aria-hidden="true"> →</span></Link></div></div>
  </section>
  {(featured||articles.length>0)?<section className="be-content be-wrap" aria-labelledby="be-content-title"><div className="be-section-heading"><div><p className="be-editorial-eyebrow">CONHECIMENTO</p><h2 id="be-content-title">Conversas e análises sobre energia.</h2></div><Link href="/conteudo" className="be-link" data-cta-name="home_conteudo_explorar">Explorar conteúdos</Link></div><div className="be-content-layout">
   {featured?<article className="be-content-feature"><YouTubeEmbed height="auto" url={featured.embedUrl} title={getEpisodeLabel(featured)} className="be-video"/><div className="be-episode-copy"><p className="be-content-label">BC Cast #{String(featured.number).padStart(2,'0')}</p><h3><Link href={`/conteudo/bc-cast/${featured.slug}`} data-cta-name={`home_conteudo_destaque_${featured.slug}`}>{featured.title}</Link></h3>{featured.guests?.map(guest=><p className="be-episode-guest" key={guest.name}>{guest.name}</p>)}<Link className="be-link" href={`/conteudo/bc-cast/${featured.slug}`} data-cta-name="home_conteudo_ver_episodio" data-cta-location="knowledge">Ver episódio<span aria-hidden="true"> →</span></Link></div></article>:null}
   <div className="be-reading-list">{episodes.slice(1,2).map(ep=><article key={ep.slug}><p className="be-content-label">BC Cast</p><h3><Link href={`/conteudo/bc-cast/${ep.slug}`} data-cta-name={`home_conteudo_episodio_${ep.slug}`}>{ep.title}</Link></h3></article>)}{articles.slice(0,2).map(article=><article key={article.slug}><p className="be-content-label">Blog</p><h3><Link href={`/conteudo/blog/${article.slug}`} data-cta-name={`home_conteudo_artigo_${article.slug}`}>{article.title}</Link></h3><p>{article.excerpt}</p></article>)}</div>
  </div></section>:null}
  <div className="be-faq"><HomeFaq/></div>
  <section className="be-about" aria-labelledby="be-about-title"><div className="be-wrap"><div className="be-about-layout"><div className="be-about-photo"><img src="/img/pages/sobre-nos-equipe.webp" width={1600} height={773} loading="lazy" decoding="async" alt="Equipe do Grupo BC Energia reunida em encontro interno"/></div><div><h2 id="be-about-title">Energia para gerar valor, eficiência e crescimento.</h2><p>O Grupo BC Energia desenvolve soluções em geração, gestão e comercialização de energia para empresas e consumidores que buscam economia, eficiência e sustentabilidade.</p><Link className="be-button be-button-light" href="/sobre" data-cta-name="home_institucional_sobre">Conheça o Grupo BC Energia</Link><Link className="be-link" href="/sobre/quem-somos" data-cta-name="home_institucional_quem_somos">Quem somos</Link></div></div></div></section>
  <Customers eyebrow="" title="Empresas que confiam na BC Energia" className="be-client-band"/>
  <section className="be-conversion" aria-labelledby="be-conversion-title"><div className="be-wrap"><div><div className="be-closing-copy"><p className="be-closing-eyebrow">PRÓXIMO PASSO</p><h2 id="be-conversion-title">Descubra quanto a sua empresa pode economizar em energia.</h2><p className="be-conversion-note">Simulação gratuita e sem compromisso.</p></div><div className="be-actions"><Link href="/simulador-de-economia" className="be-button" data-cta-name="Simular minha economia" data-cta-location="page_closing">Simular minha economia</Link><Link className="be-link" href={HEADER_CLIENT_LINK.href} target="_blank" rel="noopener noreferrer" data-cta-name="Falar com um consultor" data-cta-location="page_closing">Falar com um consultor<span aria-hidden="true"> →</span></Link></div></div></div></section>
 </main>
}
export default HomeEditorial
