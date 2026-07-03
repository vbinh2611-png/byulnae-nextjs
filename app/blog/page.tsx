import SectionHead from '@/components/SectionHead';
import { blogPosts, site } from '@/lib/site-data';
export const metadata = { title: '시공일지' };
export default function BlogPage(){return <main className="page-main"><section className="section"><div className="container"><SectionHead label="BLOG" title="더 많은 시공기는 블로그에 있습니다." desc="지역, 금액, 공정까지 정리된 시공기를 네이버 블로그에서 확인하실 수 있습니다."/><div className="blog-list">{blogPosts.map((post)=><a className="blog-item" key={post.href} href={post.href} target="_blank" rel="noreferrer"><b>{post.price}</b><span>{post.title}</span><span>보기 →</span></a>)}</div><div className="btn-row"><a className="btn primary" href={site.blog} target="_blank" rel="noreferrer">네이버 블로그 전체보기</a></div></div></section></main>}
