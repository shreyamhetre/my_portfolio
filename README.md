<img src="https://capsule-render.vercel.app/api?type=rect&color=F2ECE1&height=180&section=header&text=Portfolio&fontSize=50&fontColor=3A4A5E&fontAlignY=42&desc=Shreya%20Mhetre%20%C2%B7%20AI%20Engineer&descSize=16&descAlignY=68&descColor=7C93B0" width="100%" alt="Shreya Mhetre portfolio" />
<img src="https://capsule-render.vercel.app/api?type=rect&color=E5262A&height=4&section=header" width="100%" alt="" />

<div align="center">

<a href="https://shreyamhetre.github.io/my_portfolio/"><img src="https://img.shields.io/badge/Live_site-7C93B0?style=for-the-badge&logo=githubpages&logoColor=white" alt="Live site"/></a>
<a href="https://www.linkedin.com/in/shreya-mhetre-768a79246"><img src="https://img.shields.io/badge/LinkedIn-7C93B0?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="mailto:shreyamhetre2002@gmail.com"><img src="https://img.shields.io/badge/Email-7C93B0?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>

</div>

<br/>

## Overview

The personal portfolio of Shreya Mhetre, an AI Engineer in Pune building production LLM systems, agentic RAG pipelines and full-stack AI products on AWS.

It is a single-page React site with an editorial design: serif headlines, thin rules and a restrained palette. It covers experience, selected projects, skills, education and contact, and links to a downloadable resume.

<table>
<tr>
<td width="33%" valign="top">
<b>Design</b><br/>
<sub>Editorial layout with Fraunces and Inter, numbered sections and subtle scroll reveals</sub>
</td>
<td width="33%" valign="top">
<b>Responsive</b><br/>
<sub>Fluid typography and layouts that adapt from phones to wide desktops</sub>
</td>
<td width="33%" valign="top">
<b>Content-driven</b><br/>
<sub>All copy lives in one file, <code>src/data.js</code>, so updates never touch the layout</sub>
</td>
</tr>
</table>

## Palette

| Colour | Hex | Share | Used for |
|---|---|---|---|
| Coconut Milk | `#F2ECE1` | 60% | Page background, cards |
| Faded Denim | `#7C93B0` | 30% | Project band, tinted blocks, structure |
| Lacquer Red | `#E5262A` | 10% | Small accents and hover states |

## Tech

<sub><code>React 19</code> <code>Create React App</code> <code>lucide-react</code> <code>CSS</code> <code>gh-pages</code></sub>

## Run locally

```bash
git clone https://github.com/shreyamhetre/my_portfolio.git
cd my_portfolio
npm install
npm start
```

Then open <http://localhost:3000/my_portfolio/>.

## Project structure

```text
public/        index.html, resume.pdf, robots.txt
src/
  App.js       page sections and layout
  data.js      all content: profile, experience, projects, skills
  index.css    design tokens and styles
```

## Build and deploy

```bash
npm run build     # production build in /build
npm run deploy    # publishes /build to the gh-pages branch
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F2ECE1,70:7C93B0,100:E5262A&height=6&section=footer" width="100%" alt="" />
