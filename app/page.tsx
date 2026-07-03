import Image from 'next/image';
import Link from 'next/link';
import SectionHead from '@/components/SectionHead';
import WorkCard from '@/components/WorkCard';
import { images, portfolioItems, services, site } from '@/lib/site-data';

export default function HomePage() {
  return (
    <main className="page-main">
      <section className="hero">
        <div>
          <div className="hero-eyebrow"><span className="dot" /><span className="label">경기도 전역 · 아버지와 아들의 목수팀</span></div>
          <h1>
  나무를 다루는 손에<br />
  담배 냄새는 어울리지 않습니다.
</h1>
<p>
  처음부터 비흡연자만 함께합니다.
  <br />
  깨끗한 공간은 
  <br />
  깨끗한 작업 습관에서 시작됩니다. 
  <br />
  <br />

  25년 경력의 손끝으로
  <br />
  작은 작업도 끝까지 책임지는
  <br />
  인테리어 목공팀입니다.
</p>
          <div className="stats">
            <div className="stat"><b>25년</b><span>+ 아들 경력</span></div>
            <div className="stat"><b>100%</b><span>비흡연자로만 꾸린 팀</span></div>
            <div className="stat"><b>30-40대</b><span> 소통이 빠른 젊은 팀</span></div>
          </div>
          <div className="btn-row">
            <Link className="btn primary" href="/portfolio">시공 사례 보기</Link>
            <a className="btn" href={site.blog} target="_blank" rel="noreferrer">전체 시공기 블로그</a>
          </div>
        </div>
        <div className="hero-card">
          <Image src={images[0].src} alt={images[0].alt} width={800} height={1000} priority />
        </div>
      </section>
      <div className="seam" />

      <section className="section">
        <div className="container">
          <SectionHead label="ABOUT US" title={<>시공만 하지 않습니다.<br />순서와 우선순위를 함께 정합니다.</>} desc="예산 안에서 무엇을 먼저 해야 하는지 설명하고 함께 결정하는 팀입니다." />
          <div className="grid-4">
            {['설명하는 목수', '소통되는 팀', '원래부터 비흡연자', '작은 작업도 책임'].map((title, index) => (
              <div className="card value-card" key={title}><b>{String(index + 1).padStart(2, '0')}</b><h3>{title}</h3><p>현장 상황을 솔직하게 말씀드리고, 가능한 범위와 한계를 미리 안내드립니다.</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--soft)' }}>
        <div className="container">
          <SectionHead label="SERVICE" title="필요한 목공만 정확하게" desc="맞춤가구부터 상업공간 목공까지, 공간의 목적에 맞춰 공정을 정리합니다." />
          <div className="grid-4">{services.map((item) => <div className="card" key={item.title}><h3>{item.title}</h3><p>{item.desc}</p></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="PORTFOLIO" title="현장에서 가져온 시공 사례" desc="일부 현장은 정확한 지역과 금액을 비공개로 안내드립니다. 더 많은 현장은 블로그에서 확인하실 수 있습니다." />
          <div className="portfolio-grid">{portfolioItems.slice(0, 3).map((item) => <WorkCard key={item.title} item={item} />)}</div>
          <div className="btn-row"><Link className="btn primary" href="/portfolio">시공사례 더 보기</Link></div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="container">
          <div className="grid-3">
            <div><div className="label">WHY 별내목수</div><h2 style={{fontSize:'2.5rem',lineHeight:1.15,marginTop:10}}>좋은 점만 말씀드리진 않습니다.</h2></div>
            <div className="card"><h3>담배는 참는 게 아니라 없습니다</h3><p>고객 공간을 배려하기 위해 비흡연자로 팀을 꾸렸습니다.</p></div>
            <div className="card"><h3>문제는 끝까지 책임집니다</h3><p>작업 중 생긴 실수는 책임 범위 안에서 끝까지 보완합니다.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-box">
            <SectionHead label="CONTACT" title="견적보다 현장 상황부터 들어보겠습니다." desc="현장 사진이나 평면도가 있으면 더 정확하게 안내드릴 수 있습니다." />
            <div className="btn-row"><a className="btn primary" style={{background:'var(--paper)',color:'var(--ink)'}} href={site.phoneHref}>{site.phone} 전화하기</a><a className="btn" style={{borderColor:'var(--paper)'}} href={site.kakao}>카톡 상담하기</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
