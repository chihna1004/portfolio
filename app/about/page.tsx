import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const principles = [
  {
    num: 'PRINCIPLE 01',
    title: '足し算より、引き算。',
    body:
      '「これも乗せましょう」が積み重なる前に、「これは本当に要りますか」と問い直すのが、私のやり方です。情報量を減らすことが、結果として読まれる設計につながると信じています。',
  },
  {
    num: 'PRINCIPLE 02',
    title: '派手より、十年。',
    body:
      '流行の見た目で目を引くより、十年後にも静かに使われている設計を選びます。事業のリズムは、そう簡単に変わらないからです。',
  },
  {
    num: 'PRINCIPLE 03',
    title: '納品より、運用。',
    body:
      'お渡しして終わり、にはしたくありません。ガイドラインや運用マニュアルまで含めて、現場の方々が「自分の手で育てていける」形でお引き渡しします。',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="cs-hero wrap">
        <div className="cs-hero__nombre reveal">
          ABOUT &nbsp;/&nbsp; sen. &nbsp;/&nbsp; UI/UX DESIGNER
        </div>
        <h1 className="cs-hero__title reveal" data-delay="1">
          装飾を引き算する。
          <br />
          思想は、残す。
        </h1>
        <div className="about-hero reveal" data-delay="2">
          <p>
            sen.（セン）。1995年生まれ。過去にデザイン事務所で、主に中小企業さまのブランディングのお手伝いをさせていただきました。
          </p>
          <p>
            現在は、大手事業会社でUI/UXデザイナーとして勤務しています。事業のはじまりから運用までを設計する仕事を、日々の現場で続けています。
          </p>
          <p>
            そのかたわら、副業として、中小企業や個人事業主の方々のホームページやLP制作のお仕事もお引き受けしています。
          </p>
          <p>
            父が、商いをしていました。事業を立ち上げ、続け、守り続けることの難しさを、私はそばで見てきました。日本の小さな事業を営む方々の、長く続くデザインを作りたい。それが、副業を始めた理由です。
          </p>
          <p>
            写真も自分で撮るのは、デザイン事務所にいた頃に「世界観は写真で決まる」と気づいたからです。
          </p>
        </div>
      </section>

      <section className="cs-section wrap">
        <div className="cs-section__head reveal">
          <span className="cs-section__num">01 &nbsp;/&nbsp; PRINCIPLE</span>
          <h2 className="cs-section__title">
            仕事についての、
            <br />
            三つの約束。
          </h2>
        </div>
        <div
          className="services reveal"
          data-delay="1"
          style={{ marginTop: 0 }}
        >
          {principles.map((p) => (
            <div key={p.num} className="services__cell">
              <span className="num">{p.num}</span>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 'clamp(56px, 7vw, 96px)',
            color: 'var(--mouse)',
            fontSize: 14,
            lineHeight: 2,
            maxWidth: '36em',
          }}
        >
          ※ 単発のロゴ制作・印刷物のみのお仕事は、原則お引き受けしておりません。サービス全体の設計と一体になる場合のみ、ご相談ください。
        </div>
      </section>
    </>
  );
}
