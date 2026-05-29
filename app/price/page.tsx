import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Price',
  description:
    'sen. のサービスと料金。LP・コーポレート／ブランドサイト・UI/UXデザイン・撮影ディレクションをパッケージ別にご案内します。',
};

type PriceTier = {
  name: string;
  price: string;
  priceUnit?: string;
  subtitle: string;
  pitch: string;
  items: string[];
  note?: string;
};

type PriceService = {
  num: string;
  title: string;
  period: string;
  description: string;
  tiers: PriceTier[];
};

const services: PriceService[] = [
  {
    num: 'PRICE 01',
    title: 'LP（ランディングページ）',
    period: 'PERIOD / 1〜2ヶ月',
    description:
      '事業の入口となるLP。\nコピー・デザイン・実装まで、ひとつずつ組み立てます。',
    tiers: [
      {
        name: 'LP / ESSENTIAL',
        price: '¥50,000',
        subtitle: 'STUDIOで、軽やかにはじめる',
        pitch: 'まずWebが必要、というご相談に。',
        items: [
          'ヒアリング（1回 / 60分）',
          'STUDIOテンプレートからカスタマイズ',
          '色・フォント・コピー調整',
          'レスポンシブ対応',
          '公開サポート',
          '制作期間：1〜2週間',
        ],
        note: '※ オリジナルデザイン・撮影は含みません',
      },
      {
        name: 'LP / CRAFTED',
        price: '¥300,000',
        subtitle: 'オリジナル設計・デザインで',
        pitch: '事業の核を、画面に翻訳する。もっとも選ばれているプランです。',
        items: [
          'リサーチ・戦略設計',
          'ヒアリング（複数回）',
          '完全オリジナルデザイン',
          '1ページLP（縦7,000px以内）',
          'レスポンシブ対応',
          '簡易コピーライティング',
          '公開サポート',
          '制作期間：3〜5週間',
        ],
      },
      {
        name: 'LP / SIGNATURE',
        price: '¥600,000',
        subtitle: '撮影・コピー・運用まで一気通貫',
        pitch: '事業のはじまりに、長く残る一枚を。',
        items: [
          'CRAFTEDの内容すべて',
          '競合分析・ペルソナ設計',
          '写真撮影（半日〜1日）',
          '本格コピーライティング',
          'A/Bテスト設計',
          '公開後3ヶ月の運用サポート',
          '制作期間：5〜7週間',
        ],
      },
    ],
  },
  {
    num: 'PRICE 02',
    title: 'コーポレート／ブランドサイト',
    period: 'PERIOD / 2〜3ヶ月',
    description: '事業の顔となるサイトを、ブランドのはじまりから設計します。',
    tiers: [
      {
        name: 'HP / ESSENTIAL',
        price: '¥150,000',
        subtitle: 'STUDIOで、軽やかにはじめる',
        pitch: '事業のはじまりに、まずひとつの顔を。',
        items: [
          'STUDIOテンプレートからカスタマイズ',
          '5〜8ページ構成',
          '色・フォント・コピー調整',
          'お問い合わせフォーム',
          'レスポンシブ対応',
          '制作期間：2〜3週間',
        ],
        note: '※ オリジナルデザインは含みません',
      },
      {
        name: 'HP / CRAFTED',
        price: '¥600,000',
        subtitle: 'オリジナル設計・5〜10ページ',
        pitch: '事業のかたちに、ひとつずつ向き合う。',
        items: [
          'リサーチ・ヒアリング（複数回）',
          'サイトマップ設計・IA設計',
          '完全オリジナルデザイン',
          '5〜10ページ構成',
          'お問い合わせフォーム・CMS導入',
          'レスポンシブ対応',
          '公開サポート',
          '制作期間：6〜8週間',
        ],
      },
      {
        name: 'HP / SIGNATURE',
        price: '¥1,200,000',
        subtitle: 'ブランディング含め一気通貫',
        pitch: '事業の物語を、十年もたせる設計で。',
        items: [
          'CRAFTEDの内容すべて',
          'ブランドガイドライン作成',
          '写真撮影（1日）',
          '本格コピーライティング',
          '公開後3ヶ月の運用サポート',
          '制作期間：8〜12週間',
        ],
      },
    ],
  },
  {
    num: 'PRICE 03',
    title: 'UI/UX デザイン',
    period: 'PERIOD / プロジェクト型 2〜4ヶ月 ／ 月額型 最低3ヶ月から',
    description:
      'サービスの使い心地を、画面の前から設計します。\nプロジェクト単発と、月額の継続伴走、二つの関わり方をご用意しています。',
    tiers: [
      {
        name: 'UI/UX / PROJECT',
        price: '¥600,000〜',
        subtitle: 'プロジェクト単発で',
        pitch: 'サービスの立ち上げや、大きな改修を一気に。',
        items: [
          'リサーチ・ペルソナ設計',
          '情報設計・ユーザーフロー',
          'UIデザイン（10〜20画面）',
          'デザインシステム整備',
          'エンジニアとの連携',
          '制作期間：2〜4ヶ月',
        ],
      },
      {
        name: 'UI/UX / MONTHLY',
        price: '応相談',
        subtitle: '継続伴走型',
        pitch: '既存サービスの改善を、月単位で。',
        items: [
          '週MTG・関与時間はご相談に応じて調整',
          'UI改善・新機能設計',
          'データ分析と改善提案',
          '最低3ヶ月から、以後1ヶ月単位で更新',
          'ご予算・期間に応じてお見積りいたします',
        ],
      },
    ],
  },
  {
    num: 'PRICE 04',
    title: '撮影ディレクション',
    period: 'PERIOD / 半日〜1日',
    description:
      'ブランドの世界観に合った静かな写真を、デザインの視点から。\n構成案・カメラマン選定・当日ディレクション・セレクト・レタッチ監修まで。',
    tiers: [
      {
        name: 'PHOTO / HALF DAY',
        price: '¥80,000',
        subtitle: '半日撮影 ／ レタッチ20カット込み',
        pitch: '小規模な物撮りや、ポイント撮影に。',
        items: [
          '撮影構成案',
          'カメラマン選定・調整（撮影費別）',
          '当日ディレクション（4時間）',
          'セレクト・レタッチ監修（20カット）',
        ],
        note: '※ カメラマン費・スタジオ費は別途実費',
      },
      {
        name: 'PHOTO / FULL DAY',
        price: '¥150,000',
        subtitle: '1日撮影 ／ レタッチ40カット込み',
        pitch: 'ブランドのキービジュアル一式に。',
        items: [
          '撮影構成案・絵コンテ',
          'カメラマン選定・調整（撮影費別）',
          '当日ディレクション（8時間）',
          'セレクト・レタッチ監修（40カット）',
        ],
        note: '※ カメラマン費・スタジオ費は別途実費',
      },
    ],
  },
];

const workflow = [
  {
    num: 'STEP 01',
    title: 'ご相談',
    body: 'メールで概要をお送りください。返信は通常2営業日以内。',
  },
  {
    num: 'STEP 02',
    title: 'お見積り',
    body: '無料。スコープを擦り合わせた上で、詳細つきのお見積りを提出します。',
  },
  {
    num: 'STEP 03',
    title: 'ご契約',
    body: '着手時に 50%、納品時に 50%。請求書払い（30日サイト）。',
  },
  {
    num: 'STEP 04',
    title: '着手',
    body: 'キックオフから納品まで、毎週進捗を共有します。',
  },
];

export default function PricePage() {
  return (
    <>
      <section className="cs-hero wrap">
        <div className="cs-hero__nombre reveal">
          PRICE &nbsp;/&nbsp; SERVICES & FEES &nbsp;/&nbsp; 2026
        </div>
        <h1 className="cs-hero__title reveal" data-delay="1">
          正直な値段、
          <br />
          誠実な仕事。
        </h1>
        <p className="cs-hero__lead reveal" data-delay="2">
          下記は、現在お引き受けしている標準的なお仕事と、その目安額です。事業のかたちや、ご相談の深さによって変動しますので、詳細はお気軽にお問い合わせください。お見積りは無料です。
        </p>
      </section>

      <section className="cs-section wrap">
        <div className="cs-section__head reveal">
          <span className="cs-section__num">01 &nbsp;/&nbsp; SERVICES</span>
          <h2 className="cs-section__title">提供サービスと料金。</h2>
        </div>

        {services.map((s) => (
          <div key={s.num} className="price-service">
            <div className="price-service__head reveal">
              <div className="price-service__top">
                <span className="price-service__num">{s.num}</span>
                <span className="price-service__period">{s.period}</span>
              </div>
              <h3 className="price-service__title">{s.title}</h3>
              <p className="price-service__desc">{s.description}</p>
            </div>

            <div className="price-tiers">
              {s.tiers.map((t, i) => (
                <div
                  key={t.name}
                  className="price-tier reveal"
                  data-delay={String(Math.min(i + 1, 4))}
                >
                  <div className="price-tier__top">
                    <h4 className="price-tier__name">{t.name}</h4>
                    <span className="price-tier__price">
                      {t.price}
                      {t.priceUnit ? <em>{t.priceUnit}</em> : null}
                    </span>
                  </div>
                  <p className="price-tier__subtitle">{t.subtitle}</p>
                  <p className="price-tier__pitch">{t.pitch}</p>
                  <ul className="price-tier__items">
                    {t.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {t.note ? (
                    <p className="price-tier__note">{t.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="cs-section wrap">
        <div className="cs-section__head reveal">
          <span className="cs-section__num">02 &nbsp;/&nbsp; WORKFLOW</span>
          <h2 className="cs-section__title">お取引の流れ。</h2>
        </div>
        <div className="cs-process">
          {workflow.map((w, i) => (
            <div
              key={w.num}
              className="cs-process__step reveal"
              data-delay={String(i + 1)}
            >
              <span className="num">{w.num}</span>
              <h4>{w.title}</h4>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-section wrap">
        <div className="cs-section__head reveal">
          <span className="cs-section__num">03 &nbsp;/&nbsp; NOTE</span>
          <h2 className="cs-section__title">価格についての、補足。</h2>
        </div>
        <div className="cs-section__body reveal" data-delay="1">
          <div></div>
          <div className="body">
            <p>
              記載の金額は、外税・実費（撮影・印刷・各種ライセンス等）を含みません。スコープに応じて、お見積り時に明細をお示しします。
            </p>
            <p>
              大規模案件（コーポレートサイト30ページ以上、複数プラットフォーム展開等）は別途お見積りいたします。長期のアドバイザリー・社内デザインチーム立ち上げ支援も承っています。
            </p>
            <p>
              NPO・教育機関・公共領域は、内容により減額のご相談を承ります。
            </p>
          </div>
        </div>
      </section>

      <section className="cta wrap">
        <div className="cta__inner">
          <div className="nombre reveal" style={{ marginBottom: 32 }}>
            CONTACT
          </div>
          <h2 className="cta__title reveal" data-delay="1">
            まずは、概算からでも。
            <br />
            お気軽にどうぞ。
          </h2>
          <Link className="cta__mail reveal" data-delay="2" href="/contact">
            ご相談・お見積りはこちら<span className="dot"></span>
          </Link>
        </div>
      </section>
    </>
  );
}
