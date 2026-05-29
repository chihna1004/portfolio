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

const aura: CaseStudy = {
  slug: 'aura-botanique',
  order: 1,
  nombreLine: 'CASE 001 / AURA BOTANIQUE / 2024',
  shortTitle: 'AURA BOTANIQUE',
  heroTitle: (
    <>
      植物のしずけさを、
      <br />
      画面に置く。
    </>
  ),
  lead:
    'ナチュラルコスメブランド「AURA BOTANIQUE」のEC・ブランドサイト刷新。植物本来の質感を伝えるための、編集的な構成とビジュアル設計を行いました。',
  meta: {
    period: '2024（制作期間 約3ヶ月）',
    tools: 'Figma / Shopify\n撮影ディレクション',
  },
  fv: {
    num: 'FIG-01',
    label: 'FIGURE 01 / FIRST VIEW — BOTANICAL STILL LIFE',
    caption: 'ブランドの輪郭を、季節の植物と余白で描き直した。',
  },
  productionUrl: null,
  prev: null,
  next: { slug: 'ignite-gym-tokyo', label: 'NEXT / CASE 002 →', title: 'IGNITE GYM TOKYO' },
};

const ignite: CaseStudy = {
  slug: 'ignite-gym-tokyo',
  order: 2,
  nombreLine: 'CASE 002 / IGNITE GYM TOKYO / 2024',
  shortTitle: 'IGNITE GYM TOKYO',
  heroTitle: (
    <>
      結果に本気を、
      <br />
      過程に誇りを。
    </>
  ),
  lead:
    '完全個室・短期集中型パーソナルジム「IGNITE GYM TOKYO」の新規LP。大手競合がひしめく市場に後発参入するブランドの、ファーストビューから無料カウンセリング予約までを一本化しました。',
  meta: {
    period: '2024（制作期間 約2週間）',
    tools: 'Figma / Next.js\nTailwind CSS / TypeScript',
  },
  fv: {
    num: 'FIG-01',
    label: 'FIGURE 01 / FIRST VIEW — THE STILL LIVE',
    caption: 'ブランド姿勢の輪郭。60日後ではなく、今日からの自分。',
  },
  productionUrl: null,
  prev: { slug: 'aura-botanique', label: '← PREV / CASE 001', title: 'AURA BOTANIQUE' },
  next: { slug: 'yui-kobayashi', label: 'NEXT / CASE 003 →', title: 'YUI KOBAYASHI' },
};

const yui: CaseStudy = {
  slug: 'yui-kobayashi',
  order: 3,
  nombreLine: 'CASE 003 / YUI KOBAYASHI / 2024',
  shortTitle: 'YUI KOBAYASHI',
  heroTitle: (
    <>
      手しごとを、
      <br />
      静かに伝える。
    </>
  ),
  lead:
    '陶芸家・小林結（Yui Kobayashi）の作家ポートフォリオサイト。器の質感と作家の言葉を、読みもののように設計しました。',
  meta: {
    period: '2024（制作期間 約1ヶ月）',
    tools: 'Figma / Next.js\n撮影ディレクション',
  },
  fv: {
    num: 'FIG-01',
    label: 'FIGURE 01 / FIRST VIEW — KILN AND LIGHT',
    caption: '焼き上がりを待つ朝の窯。作家の時間の流れを、そのまま画面に。',
  },
  productionUrl: null,
  prev: { slug: 'ignite-gym-tokyo', label: '← PREV / CASE 002', title: 'IGNITE GYM TOKYO' },
  next: null,
};

export const caseStudies: Record<string, CaseStudy> = {
  'aura-botanique': aura,
  'ignite-gym-tokyo': ignite,
  'yui-kobayashi': yui,
};

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
    title: 'AURA BOTANIQUE',
    year: '2024',
    caption:
      'ナチュラルコスメブランドのEC・ブランドサイト刷新。「商品を売る」より先に「物語を読む」体験を置き、ブランドの精神性を伝える編集設計を行いました。CVR 1.7倍、20-30代比率 +29pt。',
    tags: ['UX STRATEGY', 'EC / SHOPIFY', 'BRAND SYSTEM'],
    href: '/work/aura-botanique',
    moreLabel: '事例を読む',
    visualLabel: 'PROJECT-001 / KEY VISUAL',
  },
  {
    num: '002',
    title: 'IGNITE GYM TOKYO',
    year: '2024',
    caption:
      '完全個室・短期集中型パーソナルジムの新規LP。大手競合がひしめく市場への後発参入を、ファーストビューから無料カウンセリング予約までを一本化しました。',
    tags: ['LP DESIGN', 'NEXT.JS', 'TAILWIND'],
    href: '/work/ignite-gym-tokyo',
    moreLabel: '事例を読む',
    visualLabel: 'PROJECT-002 / KEY VISUAL',
  },
  {
    num: '003',
    title: 'YUI KOBAYASHI',
    year: '2024',
    caption:
      '陶芸家・小林結の作家ポートフォリオサイト。器の質感と作家の言葉を、読みもののように設計。撮影から運用ガイドまで一貫して伴走しました。',
    tags: ['BRAND SITE', 'PHOTOGRAPHY', 'EDITORIAL'],
    href: '/work/yui-kobayashi',
    moreLabel: '事例を読む',
    visualLabel: 'PROJECT-003 / KEY VISUAL',
  },
  {
    num: '004',
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
    href: '/work#004',
    moreLabel: '事例（準備中）',
    visualLabel: 'PROJECT-004 / KEY VISUAL',
  },
  {
    num: '005',
    title: (
      <>
        老舗茶舗「松濤園」
        <br />
        ECサイト刷新
      </>
    ),
    year: '2024',
    caption:
      'シリーズ第二弾の事例として、別フェーズの内容を予定。詳細は近日公開。',
    tags: ['EC / SHOPIFY', 'CONTENT', 'OPERATION'],
    href: '/work#005',
    moreLabel: '事例（準備中）',
    visualLabel: 'PROJECT-005 / KEY VISUAL',
  },
];
