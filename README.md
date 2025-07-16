# Urmila Constructions Web

This is a modern React + Vite web application for Urmila Constructions.

## Features
- Built with React, TypeScript, Vite, and Tailwind CSS
- Responsive design
- Contact form with EmailJS integration
- Ready for deployment on Vercel or GitHub Pages

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Development server
```bash
npm run dev
```
App will be available at `http://localhost:8080` (or as shown in your terminal).

### 3. Build for production
```bash
npm run build
```
Output will be in the `dist` folder.

### 4. Preview production build
```bash
npm run preview
```

## Deployment

### Deploy to Vercel
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com), import your repo, and deploy. Use `dist` as the output directory.

### Deploy to GitHub Pages
1. Make sure the `base` in `vite.config.ts` is set to `/urmila-constructions-web/`.
2. Run:
   ```bash
   npm run deploy
   ```
3. Set GitHub Pages source to the `gh-pages` branch.

## Contact Form Setup (EmailJS)
1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Set up your email service and template.
3. Add your Service ID, Template ID, and Public Key in `Contact.tsx`.

## License
This project is for demonstration and internal use.
