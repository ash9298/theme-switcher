# React Theme Switcher App

A modern React + TypeScript application with dynamic theme switching, responsive design, API integration, and routing. Built with Vite and styled-components.

---

## Features

- Multiple themes with context-based switching
- Theme persistence using localStorage
- Responsive design with styled-components
- Product data fetched from [Fake Store API](https://fakestoreapi.com/products)
- React Router for multi-page navigation (Home, About, Contact)
- TypeScript for type safety
- Subtle animations and transitions

---

## Setup Instructions

### 1. Clone the repository

```sh
git clone https://github.com/your-username/theme-switcher.git
cd theme-switcher
```

### 2. Install dependencies

```sh
npm install
```

### 3. Run the development server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app in action.

---

## Directory Structure

```
src
├── assets          # Static assets like images and fonts
├── components      # Reusable React components
├── hooks           # Custom React hooks
├── pages           # Page components for routing
├── styles          # Global styles and theme definitions
├── App.tsx         # Main App component
├── main.tsx        # Entry point for React
└── vite-env.d.ts   # Vite environment types
```

---

## Customization

To customize the themes, modify the `ThemeProvider` in `src/styles/ThemeProvider.tsx`. Update the `lightTheme` and `darkTheme` objects with your desired styles.

---

## Deployment

For deploying the app, you can use any static site hosting service like Vercel, Netlify, or GitHub Pages. Build the app using

```sh
npm run build
```

and deploy the `dist` folder.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [Vite](https://vitejs.dev/) - Blazing fast build tool
- [React Router](https://reactrouter.com/) - Declarative routing for React.js
- [Styled Components](https://styled-components.com/) - Visual primitives for the component age
- [Fake Store API](https://fakestoreapi.com/) - Fake API for testing and prototyping
  git add .
  git commit -m "Update README with setup, customization, and deployment instructions"
