import type { Metadata } from 'next';
import Link from 'next/link';
import { workItems } from '@/lib/cases';

export const metadata: Metadata = {
  title: 'Work',
  description:
    '事業のかたちは、ひとつとして同じものはありません。これまで伴走してきた、いくつかの仕事をご紹介します。',
};

export default function WorkPage() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero__eyebrow reveal">
          001 &nbsp;/&nbsp; WORK ARCHIVE &nbsp;·&nbsp; 2023 — 2026
        </div>
        <h1 className="hero__title reveal" data-delay="1">
          読まれるための、
          <br />
          確かな設計<em>.</em>
        </h1>
        <p
          className="reveal"
          data-delay="2"
          style={{
            marginTop: 56,
            maxWidth: '32em',
            color: 'var(--ink-sub)',
            lineHeight: 2,
          }}
        >
          事業のかたちは、ひとつとして同じものはありません。だから、ひとつずつ、お話を伺いながら、組み立てる。これまで伴走してきた、いくつかの仕事をご紹介します。
        </p>
      </section>

      <section className="section wrap">
        <div className="work-list">
          {workItems.map((item) => (
            <Link
              key={item.num}
              className="work-item reveal"
              href={item.href}
              id={item.num}
            >
              <div className="work-item__head">
                <span className="work-item__num">{item.num}</span>
                <h2 className="work-item__title">{item.title}</h2>
                <span className="work-item__year">{item.year}</span>
              </div>
              <div className="work-item__visual ph">
                <span className="ph__label">{item.visualLabel}</span>
              </div>
              <div className="work-item__meta">
                <span className="work-item__num">概要</span>
                <div>
                  <p className="work-item__caption">{item.caption}</p>
                  <div className="work-item__tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="work-item__more">{item.moreLabel}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta wrap">
        <div className="cta__inner">
          <div className="nombre reveal" style={{ marginBottom: 32 }}>
            CONTACT
          </div>
          <h2 className="cta__title reveal" data-delay="1">
            あなたの仕事の、
            <br />
            静かな手応えを、いっしょに<em>.</em>
          </h2>
          <Link className="cta__mail reveal" data-delay="2" href="/contact">
            ご相談・お見積りはこちら<span className="dot"></span>
          </Link>
        </div>
      </section>
    </>
  );
}
