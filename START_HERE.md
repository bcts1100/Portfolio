# Timothy Jankowski - gameplay portfolio starter

This is a working, local website starter. It has NOT been published, and no GitHub account or repository has been changed.

## Open it first

Extract the ZIP on your computer. Open `index.html` in a browser. Keep the `assets` folder beside `index.html`; the images and video use relative file paths. No package installation, build command, server, or account login is needed for this local preview.

## What is included

- A responsive one-page portfolio with Wildblocks and Steeped project sections.
- The Wildblocks dragon image you supplied.
- A 65-second silent gameplay excerpt from the video you supplied, starting at 00:32. The browser tabs, address bar, bookmarks, and surrounding black bars were cropped out. The gameplay is not a newly generated demonstration.
- Your confirmed Unity/C#, Blender, and Autodesk Maya skills.
- Your name, Renton location, email, GitHub link, and LinkedIn profile.

Your phone number is included in your separate application resume, NOT in this public-site starter. Neither your private resume nor the large GLB source asset is included in the site. The page does not claim you created the original dragon mesh, demonstrate multiplayer networking, or have shipped these games.

## The most valuable next additions

### 1. A real Steeped gameplay capture

Record 45-90 seconds from a working build. Show movement, a tool or mining interaction, and an attack or ability that currently works. Hide development credentials and unrelated desktop content. Do not stage an unfinished feature as completed.

Add the file under `assets`, then add a video element in the Steeped article where the HTML comment indicates. Copy the Wildblocks video markup and change its filenames and caption. The current Steeped section is text-only; no gameplay capture has been fabricated.

### 2. A short technical explanation for each project

Use 150-250 words per case study. Fill these in from your actual work:

- Player goal: What should the action feel like, and what should the player understand?
- Your contribution: Which scripts, rigs, animations, and integrations did you personally create or modify? Name collaborators, asset sources, and other tools when relevant.
- Implementation: What code structure or animation setup controls the behavior? Use actual class and function names only after checking your project.
- Iteration: What concrete problem did you notice? What did you change? What was observed afterward? Do not invent playtest numbers or results.
- Tradeoff: What did your solution make easier, and what limitation remains?

For Steeped, a movement or mining interaction is a useful starting example. For Wildblocks, use one ability, a boss behavior, or the connection between an animation and its gameplay trigger. Verify what the uploaded encounter actually demonstrates before describing its rules.

### 3. One rigging and animation breakdown

Use 15-30 seconds from Blender or Maya showing your rig controls, a posed character, and an animation. This can support the Wildblocks case study rather than being presented as a separate game. Distinguish your rigging/animation work from the source model's authorship. Review any third-party asset permissions and credits before publishing.

## Publish with GitHub Pages

These steps use GitHub's documented branch-based publishing setup, checked September 8, 2026. GitHub Pages supports public repositories on GitHub Free. Only the portfolio site needs to be public; this does not require publishing your full game source.

1. Sign in to your `bcts1100` GitHub account. Create a PUBLIC repository named exactly `bcts1100.github.io`. If that repository already exists, review it before adding or replacing files. Initialize a new repository with a README so the main branch exists.
2. Upload the CONTENTS of this extracted portfolio folder to the repository root. Do not upload only the ZIP or nest everything inside another `timothy_portfolio` folder. `index.html` must be at the root and the `assets` folder must retain its name. Include the provided `.nojekyll` file where your upload method supports hidden files.
3. Open the repository's Settings, then Pages. Under Build and deployment, choose Deploy from a branch.
4. Select the branch containing the uploaded files (normally `main`) and the `/(root)` folder. Save.
5. Wait for the deployment to finish. In Settings > Pages, use Visit site and test the page, navigation, email link, LinkedIn link, and video on your phone and computer.

The user-site address is expected to be `https://bcts1100.github.io/` AFTER successful publication. That is a proposed deployment address, not a verified live site. Do not add it to your application until you have opened and checked it.

GitHub documentation:
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Before making it public

Review the email and location you are comfortable publishing. Confirm asset permissions, credits, and ownership wording. Add real implementation notes and ideally the Steeped clip. Keep private repositories, proprietary code, access tokens, and employer information out of the site. A Pages site is publicly accessible even when its source repository is private on an eligible plan.

The index page has no tracking, external font service, contact-form backend, or build dependencies. Its external links are your GitHub and LinkedIn profiles and email. The resume is maintained separately so you can decide whether to publish a phone-free copy later.
