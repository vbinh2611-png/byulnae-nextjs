import { site } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <b>{site.brand}</b><br />
        {site.description}
      </div>
      <div className="footer-links">
        <a href={site.blog} target="_blank" rel="noreferrer">네이버 블로그</a>
        <a href={site.tistory} target="_blank" rel="noreferrer">티스토리</a>
        <a href={site.instagram}>인스타그램</a>
        <a href={site.youtube}>유튜브</a>
      </div>
    </footer>
  );
}
