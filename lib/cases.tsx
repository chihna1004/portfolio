import React from 'react';

export type CaseFigure = {
  num: string;
  label: string;
  caption: string;
};

export type CaseStudy = {
  slug: string;
  order: number;
  nombreLine: string;
  shortTitle: string;
  heroTitle: React.ReactNode;
  lead: string;
  meta: { period: string; tools: string };
  fv: CaseFigure;
  productionUrl: string | null;
  productionLabel?: string;
  next: { slug: string; label: string; title: string } | null;
  prev: { slug: string; label: string; title: string } | null;
};

const tea: CaseStudy = {
  slug: 'tea',
  order: 1,
  nombreLine: 'CASE 001 / 松濤園 / 2024',
  shortTitle: '松濤園 EC刷新',
  heroTitle: (
    <>
      商品より先に、
      <br />
      物語を置く。
    </>
  ),
  lead:
    '創業百四十年の茶舗・松濤園。「贈答需要に頼った定番EC」から「日常で茶を選び直すための読み物としてのEC」へ。コンテンツ・IA・ビジュアル・購買フローを統合的に再設計しました。',
  meta: {
    period: '2024.04 — 2024.10\n（制作期間 約6ヶ月）',
    tools: 'Figma / Notion\nMaze / Shopify',
  },
  fv: {
    num: 'FIG-01',
    label: 'FIGURE 01 / FIRST VIEW — TEA STILL LIFE',
    caption:
      'リニューアル後のトップ。最初に来るのは商品ではなく、季節の一文と一枚の写真。',
  },
  productionUrl: null,
  prev: null,
  next: { slug: 'bank', label: 'NEXT / CASE 002 →', title: 'いずみ銀行 アプリ刷新' },
};

const bank: CaseStudy = {
  slug: 'bank',
  order: 2,
  nombreLine: 'CASE 002 / いずみ銀行 / 2023 — 2024',
  shortTitle: 'いずみ銀行 アプリ刷新',
  heroTitle: (
    <>
      七十代でも、
      <br />
      迷わない銀行に。
    </>
  ),
  lead:
    '利用者の四割が65歳以上という地方銀行のモバイルアプリ全面リニューアル。情報の引き算、文字の大きさ、読み上げ、フィードバック音まで含めて、十ヶ月かけて再設計しました。',
  meta: {
    period: '2023.06 — 2024.03\n（制作期間 約10ヶ月）',
    tools: 'Figma / Dovetail\nOptimal Workshop',
  },
  fv: {
    num: 'FIG-01',
    label: 'FIGURE 01 / FIRST VIEW — TASK ORIENTED HOME',
    caption:
      '新ホーム画面。「振込」「残高を見る」「通帳の代わり」の三つだけ。それ以外は二階層目へ。',
  },
  productionUrl: null,
  prev: { slug: 'tea', label: '← PREV / CASE 001', title: '松濤園 EC刷新' },
  next: null,
};

export const caseStudies: Record<string, CaseStudy> = { tea, bank };

export function getCase(slug: string): CaseStudy | null {
  return caseStudies[slug] ?? null;
}

export function getAllCaseSlugs(): string[] {
  return Object.values(caseStudies)
    .sort((a, b) => a.order - b.order)
    .map((c) => c.slug);
}

export type WorkItem = {
  num: string;
  title: React.ReactNode;
  year: string;
  caption: string;
  tags: string[];
  href: string;
  moreLabel: string;
  visualLabel: string;
};

export const workItems: WorkItem[] = [
  {
    num: '001',
    title: (
      <>
        老舗茶舗「松濤園」
        <br />
        ECサイト刷新
      </>
    ),
    year: '2024',
    caption:
      '創業百四十年の茶舗のEC再構築。「商品を売る」より先に「茶を読む」体験を置き、ブランドの精神性を伝える編集設計を行いました。',
    tags: ['UX STRATEGY', 'EC / SHOPIFY', 'BRAND SYSTEM', 'RESEARCH'],
    href: '/work/tea',
    moreLabel: '事例を読む',
    visualLabel: 'PROJECT-001 / HERO STILL',
  },
  {
    num: '002',
    title: (
      <>
        地方銀行「いずみ銀行」
        <br />
        モバイルアプリ刷新
      </>
    ),
    year: '2023 — 2024',
    caption:
      '70代の利用者比率が高い地方銀行アプリのフルリニューアル。一画面一目的に絞り、文字24pxを基本に再構成しました。',
    tags: ['MOBILE APP', 'ACCESSIBILITY', 'DESIGN SYSTEM', 'FIELD RESEARCH'],
    href: '/work/bank',
    moreLabel: '事例を読む',
    visualLabel: 'PROJECT-002 / APP SCREENS',
  },
  {
    num: '003',
    title: (
      <>
        県立美術館
        <br />
        館内デジタルガイド
      </>
    ),
    year: '2023',
    caption:
      '鑑賞中に画面を見ないで済む案内体験を目指し、骨伝導イヤホンと最小限の物理ボタンによる導線を設計しました。',
    tags: ['SERVICE DESIGN', 'AUDIO UI', 'CULTURE'],
    href: '/work#003',
    moreLabel: '事例（準備中）',
    visualLabel: 'PROJECT-003 / DEVICE IN GALLERY',
  },
  {
    num: '004',
    title: (
      <>
        自治体ポータル
        <br />
        アクセシビリティ改修
      </>
    ),
    year: '2022 — 2023',
    caption:
      '人口十万の市の電子申請ポータルを、WCAG 2.2 AA 準拠に。実装ガイドラインと職員向け運用教材まで提供しました。',
    tags: ['GOVERNMENT', 'WCAG 2.2', 'GUIDELINE'],
    href: '/work#004',
    moreLabel: '事例（準備中）',
    visualLabel: 'PROJECT-004 / PORTAL UI',
  },
  {
    num: '005',
    title: (
      <>
        クラフトビール醸造所
        <br />
        タップルームのオーダー体験
      </>
    ),
    year: '2021',
    caption:
      'タップルームの卓上QRオーダー。会話を中断させない、片手で完結する三タップ注文設計を行いました。',
    tags: ['F&B', 'QR ORDER', 'MOBILE WEB'],
    href: '/work#005',
    moreLabel: '事例（準備中）',
    visualLabel: 'PROJECT-005 / QR ORDER FLOW',
  },
];
