# Timothy Jankowski - Game Developer Portfolio

Rebuilt September 8, 2026. This package is a complete static website, not a mockup.
Nothing has been published or changed in your GitHub account.

## Preview on your Windows PC

1. Right-click the ZIP and select Extract All.
2. Open the extracted folder and double-click `index.html`.
3. Keep `styles.css`, `site.js`, `assets`, and `projects` together. Do not open the page from inside the ZIP.

The site uses plain HTML, CSS, JavaScript, local images and MP4 files. No npm install,
Node server, build step, database, account, or third-party font download is needed.
The interactive scene selector and video tabs use a normal script, not a module or fetch request.

## What is included

- A new cream / forest-green / coral homepage, with interactive project previews.
- Dedicated pages for Wildblocks, Steeped, and MINE AND GRIND.
- A 48-second edited showreel, plus three longer project clips.
- Real gameplay stills and a Unity editor image from your captures.
- Mobile navigation, keyboard-operated video tabs, visible focus states, reduced-motion styling,
  native video controls, text descriptions, and basic no-JavaScript fallbacks.
- Your email, GitHub, LinkedIn, location, and a downloadable copy of the LinkedIn-updated resume.

The downloadable resume is copied unchanged from `Timothy_Jankowski_Gameplay_Resume_LinkedIn.docx`.
It may include your phone number. Publishing this site also makes that linked resume public.
Your phone number is not printed on the website pages.

## Publish with GitHub Pages

For a personal site at your account's root, the repository name is `bcts1100.github.io`.
Check for an existing repository before creating a new one. Back up an existing site before
replacing any of its files. This package does not check or change your account.

1. Create or open the intended repository on GitHub.
2. Use Add file > Upload files. Upload the EXTRACTED website files and folders, not this ZIP.
   `index.html` must be at the repository root, with `assets` and `projects` alongside it.
3. Commit the changes.
4. Open Settings > Pages. Under Build and deployment choose Deploy from a branch.
   Select your actual default branch (often `main`) and `/(root)`, then save.
5. Use the published URL reported in Pages settings. Verify the site while signed out.

Expected root-site address after a successful deployment: https://bcts1100.github.io/
That address has not been checked for an existing site or published by this task.

Each included MP4 is below GitHub's documented 25 MiB browser-upload limit. Upload the
individual files, not the approximately 38 MB ZIP. The site also uses relative file links,
so it can be placed under a project subdirectory instead of the account root.

Official instructions, checked September 8, 2026:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## Edit the site

- Homepage copy and cards: `index.html`
- Wildblocks: `projects/wildblocks.html`
- Steeped: `projects/steeped.html`
- MINE AND GRIND: `projects/mine-and-grind.html`
- Palette, spacing, responsive layout: `styles.css` (palette variables are at the top)
- Hero previews and video-tab descriptions: `site.js`
- Gameplay clips: `assets/video/`
- Posters and gallery images: `assets/images/`
- Downloadable resume: `assets/docs/Timothy-Jankowski-Resume.docx`

Changing a contact link requires updating all four HTML pages. All current links use the
exact email, GitHub and LinkedIn values you supplied. There are no placeholder profile links.

For stronger social-link previews after publication, replace each page's relative `og:image`
value with the absolute URL of `assets/images/social-preview.jpg` at your actual host.
A canonical URL is intentionally omitted until the published address is confirmed.

## Review before using in applications

Read the three contribution sections to confirm their scope. The recordings establish what
is visible in a prototype, not who authored every asset or script. The current language uses
your confirmed contributions and does not claim shipped titles, AAA credits, team size,
live-player results, production-scale multiplayer, or measured performance improvements.

MINE AND GRIND was identified by the visible Roblox Studio project tab and in-game title.
Its contribution description stays at the mining/item/pet/perk-design scope established in
our project discussions. Expand it with specific scripting responsibilities when confirmed.
Wildblocks is described as a browser-based 3D prototype; its engine/language is not guessed.

Steeped's new clip demonstrates movement, direction changes and camera follow. It does not
showcase mining, attacks or abilities. Those are described as your scripting work, not as
features proven by this recording. Resource spawning and regrowth remain design specifications.

Review any third-party model, animation, texture, environment, sound or tool credits and
permissions before public release. No ownership of every visible asset is claimed by the site.
All footage here is silent. Original uploads were left unchanged.

## Best next content addition

A short feature breakdown showing one real script or configurable system beside the game,
with your explanation of a design decision and a change made after testing. This package
provides a place for it without inventing code, test results or implementation details.

See `RESEARCH_AND_DESIGN.md` for the research rationale, and `MEDIA_NOTES.md` for source edits.
