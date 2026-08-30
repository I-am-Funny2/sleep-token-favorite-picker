# Sleep Token Song Ranker

A fan-made favorite picker for ranking Sleep Token songs through repeated preference choices.

**Live site:**  
https://i-am-funny2.github.io/sleep-token-favorite-picker/

## Features

### Ranking

- 59 Sleep Token songs
- Pick or pass between randomly presented songs
- Undo and redo previous choices
- Final ranked favorites list
- Ranking progress saved automatically in the browser

### Sharing Results

- Copy the current ranking as text
- Export current favorites as a shareable PNG image

### Save & Transfer

- Export ranking progress as a JSON save file
- Import a save file to resume a ranking
- Copy a share code to transfer ranking progress through chat or messaging
- Import a share code to resume another ranking state

### Interface

- Responsive desktop and mobile layout

## How to Rank Accurately

For the most consistent results, use the same question throughout the ranking:

> Which song would I rather keep and listen to, taking the whole song and my personal attachment to it into account?

When choosing:

- Select one song if you clearly prefer it.
- Select multiple songs if they feel effectively tied but stronger than the others shown.
- Use **Pass** only if you genuinely cannot separate any of the songs in the current group.
- Avoid ranking based on what you think your results *should* look like.
- Relisten only when you genuinely cannot remember a song well enough or two songs are extremely close.

The picker builds the final ranking from many smaller preference decisions, so instinctive choices are usually more useful than over-analyzing each comparison.

## Save & Transfer

Ranking progress is saved automatically in your browser.

There are two additional ways to back up or transfer a ranking:

- **Export Save / Import Save** — downloads or restores the ranking as a JSON save file.
- **Copy Share Code / Import Share Code** — converts the current ranking state into a compact text code that can be sent through Discord, chat, messaging, or another text-based service.

Both methods restore the ranking session itself, including current progress and unresolved comparisons.

Importing a save or share code replaces the ranking progress currently stored in that browser.

## Export Image

Current favorites can be exported as a PNG image for easy sharing.

The exported image includes:

- Current ranking progress
- Up to the Top 20 favorites
- Rank numbers
- Album or release artwork
- Song titles
- Album or release names

If fewer than 20 favorites have been ranked, the image includes all currently ranked favorites.

## Included Music

The picker contains 59 Sleep Token songs across:

- One
- Two
- Sundowning
- This Place Will Become Your Tomb
- Take Me Back to Eden
- Even in Arcadia
- Standalone releases
- Officially released covers

Alternate versions of the same Sleep Token composition are generally excluded so that the same song does not compete against itself.

## Credits

This project uses and modifies the Favorite Picker sorting engine originally created by Butterfree / Dragonfree / antialiasis.

The original picker code is distributed under the MIT License. See [LICENSE](LICENSE).

Development and implementation were assisted by ChatGPT from OpenAI. All project decisions, testing, revisions, and final implementation were reviewed and carried out by the project author.

## Disclaimer

This is an unofficial fan-made project.

It is not affiliated with, sponsored by, or endorsed by Sleep Token or their record labels.

Sleep Token names, music, artwork, and related intellectual property belong to their respective rights holders.
