# Mark Christian Portfolio

A ready-to-deploy React + Vite + Tailwind portfolio site built from your current portfolio copy, links, and uploaded proof assets.

## Included

- Professional hero section
- Why hire me section
- Services, proof cards, case studies, tools, who I help
- Real contact email and profile links
- Uploaded portfolio images stored in `public/assets`
- Basic test coverage with Vitest and Testing Library

## Local setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload all files from this project folder.
3. Push the repository to GitHub.
4. Sign in to Vercel.
5. Import the GitHub repository.
6. Vercel should detect Vite automatically.
7. Click **Deploy**.
8. After deployment, you will get a public `*.vercel.app` URL.

## Add your own domain later

Inside Vercel, open your project settings and add your custom domain. Then update the DNS records at your domain registrar.

## Files to edit later

- `src/App.jsx` for copy, sections, and links
- `public/assets/` for photos or certificates
- `src/index.css` for global styles
