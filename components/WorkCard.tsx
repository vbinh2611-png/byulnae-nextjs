import Image from 'next/image';
import { portfolioItems } from '@/lib/site-data';

type Work = (typeof portfolioItems)[number];
export default function WorkCard({ item }: { item: Work }) {
  return (
    <article className="work-card">
      <Image src={item.image.src} alt={item.image.alt} width={720} height={460} />
      <div className="work-body">
        <small>{item.category}</small>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="price">{item.price}</div>
        <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );
}
