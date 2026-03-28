import{useState,useEffect}from'react'
import{motion,AnimatePresence}from'framer-motion'
import{useInView}from'react-intersection-observer'
import{List,X,Star,WhatsappLogo,Phone,MapPin,Clock,Tooth,Syringe,Sparkle,ShieldCheck,Quotes,CaretLeft,CaretRight,InstagramLogo}from'@phosphor-icons/react'

const biz={name:'Clínica Amarante Odontologia',phone:'(48) 3237-3286',whatsapp:'',address:'Av. Campeche, 1550 - Campeche, Florianópolis - SC, 88036-300',hours:'24 horas - 7 dias por semana',rating:4.8,reviews:111,ig:'@clinicamarante',founded:'2007',
whatsappMsg:'Olá! Vi o site e gostaria de agendar uma avaliação na Clínica Amarante.'}
const servicos=[{t:'Implantes Dentários',d:'Implantes com planejamento digital 3D para máxima precisão e segurança.',i:'Tooth'},{t:'Cirurgia Guiada',d:'Tecnologia 3D para planejamento e execução de implantes com cirurgia guiada.',i:'Sparkle'},{t:'Implantes Zigomáticos',d:'Solução avançada para pacientes com perda óssea severa.',i:'ShieldCheck'},{t:'Reabilitação Oral',d:'Referência em casos de alta complexidade com equipe multidisciplinar.',i:'Syringe'},{t:'Estética Dental',d:'Restaurações estéticas, lentes de contato e planejamento digital do sorriso.',i:'Sparkle'},{t:'Endodontia',d:'Tratamento de canal com tecnologia de ponta e máximo conforto.',i:'Tooth'}]
const im={Tooth,Sparkle,ShieldCheck,Syringe}
const revs=[{n:'Marcos T.',t:'Equipe excepcional! Fiz implantes na Clínica Amarante e o resultado ficou perfeito. Dr. Marco é um profissional brilhante.',r:5},{n:'Patrícia V.',t:'Atendimento 24h faz toda a diferença. Tive uma emergência e fui atendida imediatamente. Muito grata!',r:5},{n:'Ricardo F.',t:'Mais de 10 mil sorrisos cuidados. Confio totalmente na equipe. Referência em reabilitação oral.',r:5}]

export default function App(){
const[sc,setSc]=useState(false);const[mo,setMo]=useState(false);const[cur,setCur]=useState(0)
useEffect(()=>{const h=()=>setSc(window.scrollY>40);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h)},[])
const nav=['Serviços','Diferenciais','Depoimentos','Contato'];const ids=['servicos','diferenciais','deps','contato']
return(<>
<motion.header initial={{y:-100}} animate={{y:0}} transition={{duration:0.8,ease:[0.22,1,0.36,1]}}
style={{position:'fixed',top:0,left:0,right:0,zIndex:1000,padding:'0 clamp(1rem,4vw,3rem)',height:80,display:'flex',alignItems:'center',justifyContent:'space-between',background:sc?'rgba(248,250,249,0.95)':'rgba(248,250,249,0.7)',backdropFilter:'blur(16px)',borderBottom:sc?'1px solid var(--border)':'1px solid transparent',transition:'all 0.4s'}}>
<a href="#hero" style={{fontFamily:'var(--heading)',fontSize:18,color:'var(--text)'}}>Clínica <span style={{color:'var(--primary)'}}>Amarante</span></a>
<nav style={{display:'flex',alignItems:'center',gap:'1.5rem'}}>
<div className="dn" style={{display:'flex',gap:'1.5rem'}}>{nav.map((l,i)=><a key={i} href={`#${ids[i]}`} style={{fontSize:13,letterSpacing:0.5,textTransform:'uppercase',color:'var(--text-light)',fontWeight:500}}>{l}</a>)}</div>
<a href={`tel:${biz.phone.replace(/\D/g,'')}`} style={{background:'var(--primary)',color:'#fff',padding:'10px 24px',borderRadius:100,fontSize:13,fontWeight:600,textTransform:'uppercase',display:'inline-flex',alignItems:'center',gap:6}}><Phone size={16} weight="fill"/>Agendar</a>
<button className="hm" onClick={()=>setMo(!mo)} style={{display:'none',color:'var(--text)'}}>{mo?<X size={28}/>:<List size={28}/>}</button>
</nav></motion.header>

<AnimatePresence>{mo&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{position:'fixed',inset:0,top:80,background:'rgba(248,250,249,0.98)',zIndex:999,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2rem'}}>
{nav.map((l,i)=><a key={i} href={`#${ids[i]}`} onClick={()=>setMo(false)} style={{fontFamily:'var(--heading)',fontSize:28}}>{l}</a>)}</motion.div>}</AnimatePresence>

<section id="hero" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',background:'linear-gradient(160deg,#f8faf9 0%,#d4e8df 40%,#5fb49c 120%)',paddingTop:80}}>
<div style={{maxWidth:850,margin:'0 auto',padding:'2rem clamp(1.5rem,5vw,3rem)',textAlign:'center',position:'relative',zIndex:1}}>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,0.8)',padding:'8px 20px',borderRadius:100,marginBottom:'1.5rem',border:'1px solid var(--border)'}}>
{[...Array(5)].map((_,i)=><Star key={i} size={14} weight="fill" style={{color:'#f0c040'}}/>)}<span style={{fontSize:13,color:'var(--text-light)'}}>{biz.rating} — {biz.reviews} avaliações | Desde {biz.founded}</span></motion.div>
<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--primary)',marginBottom:'1.5rem',fontWeight:600}}>Odontologia de Excelência</motion.p>
<motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.7,duration:1}} style={{fontFamily:'var(--heading)',fontSize:'clamp(2.5rem,6vw,4rem)',fontWeight:400,lineHeight:1.1,marginBottom:'1.5rem'}}>
Seu sorriso merece<br/><em style={{fontStyle:'italic',color:'var(--primary)'}}>o melhor cuidado</em></motion.h1>
<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} style={{fontSize:'clamp(1rem,2vw,1.1rem)',color:'var(--text-light)',maxWidth:520,margin:'0 auto 2.5rem',lineHeight:1.7}}>
Referência em reabilitação oral e implantes com tecnologia 3D no Campeche. Mais de 10.000 sorrisos transformados.</motion.p>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.5}} style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
<a href={`tel:${biz.phone.replace(/\D/g,'')}`} style={{display:'inline-flex',alignItems:'center',gap:10,background:'var(--primary)',color:'#fff',padding:'16px 36px',borderRadius:100,fontSize:14,fontWeight:600,textTransform:'uppercase'}}><Phone size={20} weight="fill"/>Agendar Avaliação</a>
<a href="#servicos" style={{display:'inline-flex',border:'1.5px solid var(--border)',padding:'16px 36px',borderRadius:100,fontSize:14,fontWeight:500,textTransform:'uppercase'}}>Ver Serviços</a>
</motion.div>
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}} style={{display:'flex',justifyContent:'center',gap:'2.5rem',marginTop:'3rem'}}>
{[{n:'10K+',l:'Sorrisos'},{n:'17+',l:'Anos'},{n:'4.8',l:'Estrelas'},{n:'24h',l:'Atendimento'}].map(s=><div key={s.l} style={{textAlign:'center'}}><div style={{fontFamily:'var(--heading)',fontSize:'clamp(1.3rem,3vw,2rem)',color:'var(--primary)'}}>{s.n}</div><div style={{fontSize:10,letterSpacing:1.5,textTransform:'uppercase',color:'var(--text-muted)'}}>{s.l}</div></div>)}
</motion.div></div></section>

<section id="servicos" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto'}}>
<div style={{textAlign:'center',marginBottom:'clamp(2.5rem,5vw,4rem)'}}><p style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--accent)',marginBottom:'1rem',fontWeight:600}}>Serviços</p><h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,3rem)'}}>Especialidades</h2></div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'1.5rem'}}>
{servicos.map((s,i)=>{const I=im[s.i]||Tooth;return(<motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
style={{background:'var(--surface)',borderRadius:20,padding:'clamp(1.5rem,3vw,2rem)',border:'1px solid var(--border)',transition:'transform 0.3s,box-shadow 0.3s'}}
onMouseOver={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(42,107,94,0.08)'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
<div style={{width:52,height:52,borderRadius:14,background:'linear-gradient(135deg,rgba(42,107,94,0.1),rgba(95,180,156,0.06))',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem'}}><I size={26} weight="duotone" style={{color:'var(--primary)'}}/></div>
<h3 style={{fontFamily:'var(--heading)',fontSize:'1.15rem',marginBottom:'0.5rem'}}>{s.t}</h3><p style={{fontSize:'0.9rem',lineHeight:1.7,color:'var(--text-light)'}}>{s.d}</p></motion.div>)})}
</div></div></section>

<section id="diferenciais" style={{padding:'clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,3rem)',background:'linear-gradient(180deg,#e0efe8,var(--bg))'}}>
<div style={{maxWidth:800,margin:'0 auto',textAlign:'center'}}>
<Tooth size={48} weight="duotone" style={{color:'var(--primary)',margin:'0 auto 1rem'}}/>
<h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,2.5rem)',marginBottom:'1.5rem'}}>Por que a Clínica Amarante?</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'1rem',marginTop:'2rem'}}>
{[{t:'Atendimento 24h',d:'7 dias por semana'},{t:'Cirurgia Guiada 3D',d:'Tecnologia de ponta'},{t:'Equipe Multidisciplinar',d:'Cada dentista é especialista'},{t:'10.000+ Sorrisos',d:'Desde 2007'}].map((c,i)=>(
<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} style={{background:'var(--surface)',borderRadius:16,padding:'1.5rem',border:'1px solid var(--border)'}}>
<h3 style={{fontFamily:'var(--heading)',fontSize:'1.1rem',marginBottom:'0.25rem',color:'var(--primary)'}}>{c.t}</h3><p style={{fontSize:'0.8rem',color:'var(--text-light)'}}>{c.d}</p></motion.div>))}
</div></div></section>

<section id="deps" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)'}}>
<div style={{maxWidth:700,margin:'0 auto',textAlign:'center'}}>
<p style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--accent)',marginBottom:'1rem',fontWeight:600}}>Depoimentos</p>
<h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,3rem)',marginBottom:'2.5rem'}}>Pacientes satisfeitos</h2>
<AnimatePresence mode="wait"><motion.div key={cur} initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-40}} style={{background:'var(--surface)',borderRadius:24,padding:'clamp(2rem,4vw,3rem)',border:'1px solid var(--border)'}}>
<Quotes size={36} weight="fill" style={{color:'rgba(95,180,156,0.2)',marginBottom:'1rem'}}/><p style={{fontFamily:'var(--heading)',fontSize:'clamp(1.1rem,2.5vw,1.3rem)',fontStyle:'italic',lineHeight:1.7,marginBottom:'1.5rem'}}>"{revs[cur].t}"</p>
<div style={{display:'flex',gap:2,justifyContent:'center',marginBottom:'0.75rem'}}>{[...Array(5)].map((_,i)=><Star key={i} size={14} weight="fill" style={{color:'#f0c040'}}/>)}</div><p style={{fontWeight:700}}>{revs[cur].n}</p>
</motion.div></AnimatePresence>
<div style={{display:'flex',justifyContent:'center',gap:'1rem',marginTop:'1.5rem'}}>
<button onClick={()=>setCur(c=>(c-1+revs.length)%revs.length)} style={{width:44,height:44,borderRadius:'50%',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--surface)'}}><CaretLeft size={18} weight="bold"/></button>
<div style={{display:'flex',alignItems:'center',gap:8}}>{revs.map((_,i)=><button key={i} onClick={()=>setCur(i)} style={{width:cur===i?24:8,height:8,borderRadius:100,background:cur===i?'var(--primary)':'var(--border)',transition:'all 0.3s'}}/>)}</div>
<button onClick={()=>setCur(c=>(c+1)%revs.length)} style={{width:44,height:44,borderRadius:'50%',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--surface)'}}><CaretRight size={18} weight="bold"/></button>
</div></div></section>

<section id="contato" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)',background:'linear-gradient(180deg,var(--bg),#d4e8df)'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto'}}>
<div style={{textAlign:'center',marginBottom:'2rem'}}><h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,3rem)'}}>Agende sua avaliação</h2></div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'1.5rem'}}>
<a href={`tel:${biz.phone.replace(/\D/g,'')}`} style={{background:'var(--primary)',borderRadius:20,padding:'2rem',color:'#fff',display:'flex',flexDirection:'column',gap:'1rem',transition:'transform 0.3s'}} onMouseOver={e=>e.currentTarget.style.transform='translateY(-4px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}><Phone size={36} weight="fill"/><h3 style={{fontSize:'1.2rem',fontWeight:700}}>Ligar Agora</h3><p style={{fontSize:'1rem',fontWeight:700}}>{biz.phone}</p><p style={{fontSize:'0.8rem',opacity:0.8}}>Atendimento 24h</p></a>
<a href="https://instagram.com/clinicamarante" target="_blank" rel="noopener noreferrer" style={{background:'var(--surface)',borderRadius:20,padding:'2rem',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:'1rem'}}><InstagramLogo size={36} weight="duotone" style={{color:'#e1306c'}}/><h3 style={{fontSize:'1.1rem',fontWeight:600}}>Instagram</h3><p style={{fontSize:'0.9rem',color:'var(--text-light)'}}>{biz.ig}</p></a>
<div style={{background:'var(--surface)',borderRadius:20,padding:'2rem',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:'1rem'}}><MapPin size={36} weight="duotone" style={{color:'var(--primary)'}}/><h3 style={{fontSize:'1.1rem',fontWeight:600}}>Campeche</h3><p style={{fontSize:'0.85rem',color:'var(--text-light)',lineHeight:1.6}}>{biz.address}</p></div>
</div></div></section>

<footer style={{background:'#1a2e28',color:'#fff',padding:'clamp(3rem,6vw,4rem) clamp(1.5rem,5vw,3rem) 2rem'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'1rem'}}>
<div><p style={{fontFamily:'var(--heading)',fontSize:18}}>Clínica Amarante</p><p style={{fontSize:11,opacity:0.5}}>Odontologia de Excelência | Campeche, Florianópolis</p></div>
<p style={{fontSize:'0.75rem',opacity:0.4}}>© {new Date().getFullYear()} Clínica Amarante Odontologia.</p></div></footer>
<style>{`@media(max-width:900px){.dn{display:none!important}.hm{display:block!important}}`}</style>
</>)}
