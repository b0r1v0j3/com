# com / b0r1v0j3.com — Project Operating File

> Created: 2026-04-28  
> Local path: `/mnt/ssd2/projects/github/b0r1v0j3/com`  
> Remote: `https://github.com/b0r1v0j3/com`

## Jedna rečenica

**`com` je tvoj lični sajt / digital construct: portfolio, lični identitet i ulaz u tvoje projekte.**

## Proizvodni kontekst

- Ovo nije samo vizit karta; treba da pokaže ko si, šta gradiš i kako razmišljaš.
- Postoje dve estetike: Matrix/cyberpunk i corporate/editorial.
- Sajt treba da vodi ka projektima: Workers United, Konzorcijum, Podovi, Steel Concept, Hosty itd.

## Stack

- React 19 + Vite 7
- TailwindCSS 4 Vite plugin
- ESLint
- `react-player`

## Source of truth

Pre rada pročitati:

1. `AGENTS.md`
2. `src/App.jsx`
3. `src/data/links.json`
4. `src/components/`
5. `src/CorporateApp*` ako se dira corporate theme
6. `README.md` je još Vite template i treba ga zameniti

## Lokalni rad

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Kako agent treba da radi ovde

1. Ne mešati stilove između Matrix i Corporate teme; scope mora ostati razdvojen.
2. Za svaki projekat prikazati realan stack i realan status, ne marketing bajku.
3. Ako se menja copy, držati ton: lično, direktno, tech-forward, bez generičkog AI slenga.
4. Proveriti mobile i link preview (`og-image`, title, description).
5. README treba zameniti pravim README-jem za b0r1v0j3.com.

## Ne dirati bez eksplicitne odluke

- Ne uklanjati Matrix identitet bez jasne odluke.
- Ne pretvarati sajt u generički portfolio template.
- Ne dodavati projekte koje ne želiš javno da prikazuješ.

## Sledeći pametni koraci

1. Zameniti Vite template README pravim projektnim README-jem.
2. Napraviti centralnu “Projects” sekciju iz lokalne mape repo-a.
3. Dodati jasne statuse projekata: active, paused, client/family, personal, strategic.
4. Srediti SEO/OG image i favicon set.
