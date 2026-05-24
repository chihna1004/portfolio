# sen. — Portfolio

UI/UX Designer **sen.** のポートフォリオサイト。装飾を引き算し、思想を残す。

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS（ベースのみ。ほとんどの実装は `app/globals.css` のCSS変数 + class設計）
- next/font（Shippori Mincho / Zen Kaku Gothic New / JetBrains Mono）

## Local development

```bash
npm install
npm run dev
```

http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — ヒーロー + Selected Work + About 抜粋 + CTA |
| `/work` | Work一覧 |
| `/work/[slug]` | Case Study 詳細（FV + 概要 + meta + 本番URL） |
| `/about` | プロフィール + 3つの約束 |
| `/price` | 料金（4サービス × ティア型パッケージ） |
| `/contact` | お問い合わせ |

## Design tokens

`app/globals.css` の `:root` を参照。

- 背景: `#F8F6F2`（生成り）
- テキスト: `#1A1A1A`（墨）
- アクセント: `#C8102E`（朱赤、画面に一点）
- 罫線: `#E5E2DC`（基本的に使わず、余白で区切る）

## Deployment

Vercel での自動デプロイを想定。
