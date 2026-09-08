# Research and design notes

Research checked September 8, 2026. The site layout, colors and code are an original
implementation for Tim's work. Other developers' assets, copy, site code, logos and
commercial-game screenshots have not been reused.

## Portfolio references

**Riot Games - Portfolio and Reel Suggestions**
https://www.riotgames.com/en/portfolio-and-reel-suggestions

Relevant guidance: lead with a few strong pieces; keep motion work concise; make it
accessible; show rigs in context and make collaboration credits clear. Applied here:
a 48-second reel, longer optional clips, explicit contribution descriptions, and
project imagery taken from actual development captures. Riot's art/reel advice is
supporting guidance, not an asserted teamLFG hiring requirement.

**German Lopez / Gerlogu - Games**
https://gerlogu.com/portfolio/games/

Reference for project-by-project contribution breakdowns, separating a game's context
from the designer's actual work. Applied here: each case-study page has contribution
scope, footage observations, development notes and project imagery. Tim's pages do
not borrow this developer's accomplishments or imply equivalent shipped experience.

**Kris Horowitz**
https://kris.life/

Reference for a personal identity, a direct design focus, and project entries with
clear role labels. Applied here: Tim's name and specialty are visible immediately,
with the work one click away. The cream, forest, coral and project accent palette
is our design choice, not a claim about a hiring preference or conversion result.

**Bruno Simon**
https://bruno-simon.com/

Reference for a portfolio with an unmistakably playful identity and interactive
exploration. Applied selectively: small scene-switching controls and tactile cards.
Tim's work is not locked behind a game, loading sequence or mandatory interaction.

## Design direction: Playable Worlds

- Warm ivory instead of a uniformly dark page.
- Forest-green typography and surfaces, with coral and project-specific accents.
- A large Code / Characters / Play headline and real gameplay imagery.
- Slightly tilted preview cards, editor-window details and simple scene controls.
- Individual project pages with enough technical context to be useful to reviewers.
- Motion only on interaction; reduced-motion preferences are respected.
- No fake skill scores, inflated counters, client logos, testimonials or shipped-game claims.

This direction is a visual and editorial judgment, not evidence that a particular color,
animation or layout will increase interview rates.

## Implementation references

Native video controls, posters and on-demand preload hints:
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video

Reduced-motion preference:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion

GitHub Pages setup and browser upload limits:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## Scope of testing

Responsive layouts were rendered in Chromium at desktop/tablet/mobile widths, including
1440, 1024, 768, 680, 390 and 360 CSS pixels on the homepage. The three project pages
were checked at 1440, 768, 390 and 360 pixels. Mobile navigation, Escape handling,
scene switching, video-tab selection and arrow-key tab navigation were exercised.
Internal file links and assets were checked locally. All four actual MP4 files were decoded, played and seeked in Chromium using their original file bytes in memory. No media decoding errors were reported.

This environment blocks file/localhost navigation in the installed browser. Layout checks
therefore rendered the actual page markup, styles and scripts with original image bytes
inlined in-memory. That is not a test of a deployed host or real mobile hardware. Perform a
final check on the published URL in your usual browsers and on a phone before applying.

No tracking, analytics, advertising, external font files, framework bundles or backend
services are included. The resume is an unchanged copy of your supplied revised document.
