# Onde as Ondas Quebram — Where the Waves Break

Site estático do documentário **Onde as Ondas Quebram** (Where the Waves Break),
de Inara Chayamiti — uma co-produção Bonde e Chayamiti.

🎬 [ondeasondasquebram.com](https://www.ondeasondasquebram.com/)
🎥 [Vimeo on demand](https://vimeo.com/ondemand/ondas)

---

## Estrutura

```
index.html          — página principal (único HTML)
styles.css          — todos os estilos
script.js           — menu mobile, language toggle, reveal animations
assets/
  images/
    wix/            — imagens de fundo extraídas do site original
    bg/             — imagens auxiliares de fundo
    *.png / *.jpg   — logos, laurels, partner logos, posters
```

## Tecnologia

- HTML5 / CSS3 / JavaScript vanilla — sem frameworks
- Fontes: Cormorant Garamond + Work Sans (Google Fonts)
- Vídeos: embed Vimeo (`background=1&autoplay=1&loop=1&muted=1`)
- Layout: CSS Grid + Flexbox
- Efeito parallax: `position: fixed` no fundo compartilhado Hero + Rent

## Deploy

Compatível com qualquer host estático: GitHub Pages, Netlify, Vercel, etc.

Para GitHub Pages: activar em **Settings → Pages → Branch: main → / (root)**.
