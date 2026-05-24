import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'sen. へのご相談・お見積り。事業のはじまりや、ホームページ／LP／UI/UX／撮影の課題、お気軽にお話を聞かせてください。',
};

const examples = [
  {
    num: 'EXAMPLE 01',
    title: (
      <>
        「事業を始めるので、
        <br />
        最初のホームページを作りたい」
      </>
    ),
    body:
      '個人事業主や、独立されたばかりの方からのご相談。事業の核をヒアリングするところから始め、ホームページとして形にします。約2〜3ヶ月。',
  },
  {
    num: 'EXAMPLE 02',
    title: (
      <>
        「自社のサービスを伝える
        <br />
        LPを作り直したい」
      </>
    ),
    body:
      '既存のLPでは反応が薄い、もっと事業の本質を伝えたい、というご相談。コピー・写真・デザインまで一気通貫で設計します。約3〜5週間。',
  },
  {
    num: 'EXAMPLE 03',
    title: (
      <>
        「ブランディングごと整えて、
        <br />
        ECサイトを刷新したい」
      </>
    ),
    body:
      '実店舗をお持ちの方や、商品を扱う事業者からのご相談。写真撮影から始め、ブランドの世界観を作り直します。約2〜3ヶ月。',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="cs-hero wrap">
        <div className="cs-hero__nombre reveal">
          CONTACT &nbsp;/&nbsp; 2026 受付状況：◯ 新規ご相談可
        </div>

        <h1 className="contact-hero__title reveal" data-delay="1">
          まずは、
          <br />
          お話を聞かせてください。
        </h1>

        <a
          className="contact-mail reveal"
          data-delay="2"
          href="mailto:sen.studio123@gmail.com"
        >
          sen.studio123@gmail.com.<span className="dot"></span>
        </a>

        <p
          className="reveal"
          data-delay="3"
          style={{
            marginTop: 56,
            maxWidth: '32em',
            color: 'var(--mouse)',
            lineHeight: 2,
          }}
        >
          返信は通常2営業日以内。詳細が決まっていない段階のご相談も歓迎します。お見積り・ご提案は無料です。
        </p>
      </section>

      <section className="cs-section wrap">
        <div className="cs-section__head reveal">
          <span className="cs-section__num">01 &nbsp;/&nbsp; CHANNEL</span>
          <h2 className="cs-section__title">連絡先。</h2>
        </div>

        <div className="contact-grid contact-grid--single">
          <div className="reveal">
            <h4>EMAIL &nbsp;/&nbsp; DIRECT</h4>
            <ul>
              <li>
                sen.studio123@gmail.com
                <span className="meta">業務全般 ─ 通常2営業日以内に返信</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cs-section wrap">
        <div className="cs-section__head reveal">
          <span className="cs-section__num">02 &nbsp;/&nbsp; EXAMPLES</span>
          <h2 className="cs-section__title">
            こんなご相談を、
            <br />
            よくいただきます。
          </h2>
        </div>

        <div className="services" style={{ marginTop: 0 }}>
          {examples.map((ex, i) => (
            <div
              key={ex.num}
              className="services__cell reveal"
              data-delay={i === 0 ? undefined : String(i)}
            >
              <span className="num">{ex.num}</span>
              <h4>{ex.title}</h4>
              <p>{ex.body}</p>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 'clamp(64px, 8vw, 112px)',
            padding: 'clamp(40px, 5vw, 64px)',
            background: '#FFFFFF',
          }}
        >
          <div className="nombre" style={{ marginBottom: 16 }}>
            ご相談時にお伝えいただけると嬉しいこと
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: 16,
              lineHeight: 2.1,
            }}
          >
            <li>─ 事業の概要と、いま起きている課題（一段落で結構です）</li>
            <li>─ ご希望のサービス（LP ／ HP ／ UI/UX ／ 撮影込みなど）</li>
            <li>─ 既存のサービスがあれば、そのURL</li>
            <li>─ 開始希望時期</li>
          </ul>
        </div>
      </section>
    </>
  );
}
