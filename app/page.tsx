import Link from 'next/link';
import { workItems } from '@/lib/cases';

const homeSelected = workItems.slice(0, 3).map((w, i) => ({
  ...w,
  href: i === 2 ? '/work' : w.href,
  bottomLeft: w.tags.slice(0, 3).join(' / '),
  bottomRight:
    i === 0 ? '2024 →' : i === 1 ? '2023 →' : '2023',
  visualLabel:
    i === 0
      ? 'PROJECT-001 / KEY VISUAL'
      : i === 1
      ? 'PROJECT-002 / APP UI'
      : 'PROJECT-003 / GALLERY DEVICE',
  cap:
    i === 0
      ? '創業百四十年の茶舗が、若い世代へ届くために。\n「商品」より先に「物語」を置く、読むECの設計。'
      : i === 1
      ? '70代でも迷わない、一画面一目的の再設計。\nタスク完了率 +34%、問合せ件数 −42%。'
      : '作品の前で、画面を見ないで済む案内。\n音と短い言葉で、鑑賞の邪魔をしない情報設計。',
  selectedTitle:
    i === 0 ? (
      <>
        老舗茶舗「松濤園」
        <br />
        ECサイト刷新
      </>
    ) : i === 1 ? (
      <>
        地方銀行「いずみ銀行」
        <br />
        モバイルアプリ刷新
      </>
    ) : (
      <>
        県立美術館
        <br />
        館内デジタルガイド
      </>
    ),
}));

export default function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero__eyebrow reveal">
          UI / UX DESIGNER &nbsp;·&nbsp; TOKYO &nbsp;·&nbsp; SINCE 2017
        </div>
        <h1 className="hero__title reveal" data-delay="1">
          余白と言葉で、
          <br />
          静かに使いやすい
          <br />
          体験をつくる<em>.</em>
        </h1>
        <div className="hero__meta reveal" data-delay="3">
          <div>
            現在<strong>新規ご相談を受付中</strong>
          </div>
          <div>
            対応領域<strong>サービス設計 / UI / リサーチ</strong>
          </div>
          <div>
            所在地<strong>東京 — リモート可</strong>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-label reveal">
          <span className="section-label__num">001 — 003</span>
          <span className="section-label__text">SELECTED&nbsp;WORK</span>
        </div>

        <div className="selected">
          {homeSelected.map((item) => (
            <Link
              key={item.num}
              className="selected__item reveal"
              href={item.href}
            >
              <span className="selected__num">{item.num}</span>
              <div className="selected__body">
                <h3 className="selected__title">{item.selectedTitle}</h3>
                <p className="selected__cap" style={{ whiteSpace: 'pre-line' }}>
                  {item.cap}
                </p>
                <div className="selected__visual ph">
                  <span className="ph__label">{item.visualLabel}</span>
                </div>
                <div className="selected__bottom">
                  <span>{item.bottomLeft}</span>
                  <span>{item.bottomRight}</span>
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
            少ない要素で、深く届く。
            <br />
            それが、いちばん難しい。
          </h3>
          <div className="reveal" data-delay="1">
            <p>
              金融・伝統工芸・公共領域を中心に、サービスの立ち上げから運用までを一貫して伴走しています。リサーチと編集の視点を持ち込み、画面の前に「何を書くか」「何を書かないか」から関わるのが私のやり方です。
            </p>
            <p>派手な見た目より、十年後も静かに使われている設計を。</p>
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
            小さな相談から、
            <br />
            静かにはじめましょう。
          </h2>
          <Link className="cta__mail reveal" data-delay="2" href="/contact">
            ご相談・お見積りはこちら<span className="dot"></span>
          </Link>
        </div>
      </section>
    </>
  );
}
