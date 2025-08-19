# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brian Jhang's Edge is an Astro-based multilingual knowledge website focused on Startups × AI × Web3. It features daily content in three series: crypto analysis, AI insights, and founder notes, delivered through a "daily × weekly × monthly" content strategy.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on http://localhost:4321
- `npm run build` - Build the site for production 
- `npm run preview` - Preview the built site locally

### Content Generation
- `node scripts/crypto-draft.mjs` - Auto-generate daily crypto article drafts using top 100 crypto list rotation
- `bash tools/autofix_daily.sh` - Fix frontmatter issues and regenerate daily pages (includes git commit/push)

## Architecture

### Content Collections (src/content/config.ts)
The site uses Astro content collections with three main types:
- `daily` - Daily articles with series: "crypto", "ai", "founder"
- `weekly` - Weekly market reports 
- `monthly` - Deep-dive thematic content

All collections share a base schema with multilingual support (zh-TW, zh-CN, en) and social sharing flags.

### Key Components
- `EmbedTradingView.astro` - TradingView chart embeds for crypto content
- Main homepage (`src/pages/index.astro`) - Custom dark theme with "today's picks" logic that prioritizes today's date then falls back to latest per series

### Content Structure
Daily content is organized by series in `src/content/daily/{series}/` with MDX format. Each article includes:
- Frontmatter with title, date, series, summary, tags, links, reading time
- Social sharing configuration
- Optional ticker symbol for crypto content

### Automation
- GitHub Actions auto-deployment to Vercel on main branch push
- Daily crypto draft generation with rotation through top 100 cryptocurrencies
- Automated frontmatter fixing and link normalization

### Routing
- `/` - Homepage with today's featured articles and latest updates
- `/daily` - All daily articles index
- `/daily/[slug]` - Individual article pages with breadcrumb navigation

## Development Notes

- Uses Astro 5.x with MDX integration
- TypeScript configured with path aliases (`@/` → `src/`)
- Site deployed to brianjhang.com via Vercel
- Content drafts auto-created in Taiwan timezone (Asia/Taipei)
- Starlight integration present but primarily using custom pages

## Content Workflow

1. Auto-generate crypto drafts: `node scripts/crypto-draft.mjs`
2. Edit content in `src/content/daily/{series}/`
3. Run `bash tools/autofix_daily.sh` to fix any schema issues
4. Content automatically appears on homepage if dated today, otherwise in "latest updates"