import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCaseSlugs, getCase } from '@/lib/cases';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCase(slug);
  if (!cs) return {};
  return {
    title: cs.shortTitle,
    description: cs.lead,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = getCase(slug);
  if (!cs) notFound();

  return (
    <>
      <section className="cs-hero wrap">
        <div className="cs-hero__nombre reveal">{cs.nombreLine}</div>
        <h1 className="cs-hero__title reveal" data-delay="1">
          {cs.heroTitle}
        </h1>
        <p className="cs-hero__lead reveal" data-delay="2">
          {cs.lead}
        </p>

        <dl className="cs-meta cs-meta--simple reveal" data-delay="3">
          <div>
            <dt>PERIOD</dt>
            <dd style={{ whiteSpace: 'pre-line' }}>{cs.meta.period}</dd>
          </div>
          <div>
            <dt>TOOLS</dt>
            <dd style={{ whiteSpace: 'pre-line' }}>{cs.meta.tools}</dd>
          </div>
        </dl>
      </section>

      <figure className="cs-figure wrap reveal">
        <div className="cs-figure__media ph">
          <span className="ph__label">{cs.fv.label}</span>
        </div>
        <figcaption className="cs-figure__caption">
          <span className="cs-figure__num">{cs.fv.num}</span>
          <span>{cs.fv.caption}</span>
        </figcaption>
      </figure>

      {cs.productionUrl ? (
        <section className="wrap">
          <a
            className="case-visit reveal"
            href={cs.productionUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cs.productionLabel ?? '本番環境を見る'}
          </a>
        </section>
      ) : null}

      <section className="wrap">
        <div className="cs-next reveal">
          {cs.prev ? (
            <Link className="prev" href={`/work/${cs.prev.slug}`}>
              <span className="label">{cs.prev.label}</span>
              <span className="title">{cs.prev.title}</span>
            </Link>
          ) : (
            <Link className="prev" href="/work">
              <span className="label">← INDEX</span>
              <span className="title">Work 一覧へ戻る</span>
            </Link>
          )}
          {cs.next ? (
            <Link className="next" href={`/work/${cs.next.slug}`}>
              <span className="label">{cs.next.label}</span>
              <span className="title">{cs.next.title}</span>
            </Link>
          ) : (
            <Link className="next" href="/work">
              <span className="label">INDEX →</span>
              <span className="title">Work 一覧へ</span>
            </Link>
          )}
        </div>
      </section>

      <section className="cta wrap">
        <div className="cta__inner">
          <div className="nombre reveal" style={{ marginBottom: 32 }}>
            CONTACT
          </div>
          <h2 className="cta__title reveal" data-delay="1">
            似たような課題、
            <br />
            お持ちでしょうか。
          </h2>
          <Link className="cta__mail reveal" data-delay="2" href="/contact">
            ご相談・お見積りはこちら<span className="dot"></span>
          </Link>
        </div>
      </section>
    </>
  );
}
