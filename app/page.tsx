import Link from 'next/link';
import { workItems } from '@/lib/cases';

const homeSelected = workItems.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero__eyebrow reveal">
          DESIGN &nbsp;·&nbsp; PHOTOGRAPH &nbsp;·&nbsp; BRANDING
        </div>
        <h1 className="hero__title reveal" data-delay="1">
          あなたの事業に、
          <br />
          長く寄り添う
          <br />
          デザインを<em>.</em>
        </h1>
        <div className="hero__meta reveal" data-delay="3">
          <div>
            現在<strong>新規ご相談を受付中</strong>
          </div>
          <div>
            対応領域<strong>LP・HP制作 / UI・UX / 写真撮影</strong>
          </div>
          <div>
            所在地<strong>OSAKA</strong>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-label reveal">
          <span className="section-label__num">001 — 003</span>
          <span className="section-label__text">SELECTED&nbsp;WORK</span>
        </div>

        <div className="selected">
          {homeSelected.map((item, i) => (
            <Link
              key={item.num}
              className="selected__item reveal"
              href={item.href}
            >
              <span className="selected__num">{item.num}</span>
              <div className="selected__body">
                <h3 className="selected__title">{item.title}</h3>
                <p className="selected__cap" style={{ whiteSpace: 'pre-line' }}>
                  {item.caption}
                </p>
                <div className="selected__visual ph">
                  <span className="ph__label">{item.visualLabel}</span>
                </div>
                <div className="selected__bottom">
                  <span>{item.tags.join(' / ')}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="section-label reveal">
          <span className="section-label__num">004</span>
          <span className="section-label__text">ABOUT</span>
        </div>

        <div className="about-excerpt">
          <h3 className="reveal">
            ひとつの仕事に、
            <br />
            真摯に向き合うこと。
            <br />
            それをいちばん大切にしています<em>.</em>
          </h3>
          <div className="reveal" data-delay="1">
            <p>
              中小企業や個人事業主の方を中心に、ホームページ・LP・UI/UX のデザインを行っています。ヒアリングから写真撮影、運用ガイドまでを一貫してお手伝いします。事業のリズムにあわせて、ゆっくり進めることを大切にしています。
            </p>
            <p>流行のなかで埋もれず、長く愛されるデザインを設計します。</p>
            <Link className="more" href="/about">
              プロフィール詳細
            </Link>
          </div>
        </div>
      </section>

      <section className="cta wrap">
        <div className="cta__inner">
          <div className="nombre reveal" style={{ marginBottom: 32 }}>
            005 &nbsp;/&nbsp; CONTACT
          </div>
          <h2 className="cta__title reveal" data-delay="1">
            お気軽に
            <br />
            ご相談ください<em>.</em>
          </h2>
          <Link className="cta__mail reveal" data-delay="2" href="/contact">
            ご相談・お見積りはこちら<span className="dot"></span>
          </Link>
        </div>
      </section>
    </>
  );
}
