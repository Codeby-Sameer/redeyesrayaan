# Rayaan — GIF Creator Portfolio

A simple, modern, stylish one-page portfolio website tailored for Rayaan's GIPHY Creator Application (`@redeyesrayaan`).

## 📁 Project Structure

```text
portfolio/
├── index.html        # Main semantic HTML5 single-page structure
├── style.css         # Modern dark theme styles (Plus Jakarta Sans, charcoal & violet accent)
├── script.js        # Minimal vanilla JS for smooth interactions
├── assets/
│   └── gifs/         # Directory to put your .gif files
└── README.md         # Instructions and replacement guide
```

---

## 🎨 How to Replace the Placeholder GIFs

In [`index.html`](file:///home/sameer/redeyesrayaan/portfolio/index.html), locate the `<section class="gifs-section" id="gifs">`. Each card is structured simply with clear comments.

### Option A: Using a direct GIPHY link (easiest)

1. Find the GIF on GIPHY and copy the direct media link (e.g. `https://media.giphy.com/media/BFPWGd1sKAHHA27DT4/giphy.gif`).
2. Add a card in [`index.html`](file:///home/sameer/redeyesrayaan/portfolio/index.html):

```html
<article class="gif-card">
  <a href="https://giphy.com/gifs/BFPWGd1sKAHHA27DT4" target="_blank" rel="noopener noreferrer" class="gif-card-link" aria-label="View Reaction on GIPHY">
    <div class="gif-media-wrapper">
      <img 
        src="https://media.giphy.com/media/BFPWGd1sKAHHA27DT4/giphy.gif" 
        alt="Nervous Sweat Reaction GIF" 
        loading="lazy" 
        class="gif-media"
      />
      <span class="gif-badge">GIF</span>
    </div>
    <div class="gif-info">
      <span class="gif-category">Reaction</span>
      <h3 class="gif-title">Nervous Sweat</h3>
    </div>
  </a>
</article>
```

### Option B: Using your own local `.gif` file

1. Save your GIF file in the `assets/gifs/` folder (e.g., `assets/gifs/reaction.gif`).
2. Put `src="assets/gifs/reaction.gif"` on the `<img>` tag.

---

## 🚀 How to Preview Locally

You can open `index.html` directly in any web browser, or launch a lightweight local server:

```bash
# Using Python 3 (built-in)
python3 -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 🌐 Deploying for your GIPHY Application

This portfolio is static with zero dependencies. You can host it free in under 2 minutes using:
- **GitHub Pages**: Push this repo to GitHub, go to `Settings > Pages`, and select `main` branch.
- **Vercel / Netlify**: Drag-and-drop the portfolio folder into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant HTTPS deployment.
# redeyesrayaan
