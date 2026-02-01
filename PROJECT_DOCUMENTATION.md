# Project Documentation (30 January , 2026)

This document explains the pages, routes, components, and layout of the project. It also shows the current folder structure and the exact code inside each file so you can follow along easily.

## 1) Folder structure (current, easier to scan)

```
texas-new/
├─ dist/
├─ node_modules/
├─ public/
├─ src/
│  ├─ assets/
│  │  └─ react.svg
│  ├─ components/
│  │  └─ Header.jsx
│  ├─ pages/
│  │  ├─ About.jsx
│  │  ├─ Home.jsx
│  │  └─ NotFound.jsx
│  ├─ Routes/
│  │  └─ AppRoutes.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ variable.js
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ eslint.config.js
└─ README.md
```

## 2) App layout overview

The app entry point is `src/main.jsx`. It mounts the React app into the HTML root, and renders `App`.

`App` wraps the whole application in `BrowserRouter` and then renders `AppRoutes`, which defines the pages (routes).

So the flow is:

```
index.html -> src/main.jsx -> src/App.jsx -> src/Routes/AppRoutes.jsx -> pages
```

## 3) Routes and pages

`src/Routes/AppRoutes.jsx` defines all routes:

| Route path | Page component | What it shows                  |
| ---------- | -------------- | ------------------------------ |
| `/`        | `Home`         | Home page content + header     |
| `/about`   | `About`        | About page content + header    |
| `*`        | `NotFound`     | 404 page for any unknown route |

### Pages

Each page is a React component stored in `src/pages/`.

- **Home page**: Displays the header and a short "Home" label.
- **About page**: Displays the header and the word "About".
- **NotFound page**: Shows "NotFound" when no route matches.

## 4) Components

### Header component

`src/components/Header.jsx` is used in both Home and About pages. It shows a logo, navigation links, and a button.

Important note: The `<a href="">` values are currently empty, so clicking them does not navigate. If you want navigation, you should change these to proper routes (e.g., `/`, `/about`) or use `Link` from `react-router-dom`.

## 5) File-by-file code (current)

Below is the exact code in each file so far.

### `src/main.jsx`

```jsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
```

### `src/App.jsx`

```jsx
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
```

Notes for students:

- `Header`, `Home`, and `About` are imported but not used directly in `App.jsx`. The actual page rendering happens inside `AppRoutes`.
- `BrowserRouter` enables client-side routing.

### `src/Routes/AppRoutes.jsx`

```jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
```

### `src/pages/Home.jsx`

```jsx
import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <p>Home</p>
    </div>
  );
};

export default Home;
```

### `src/pages/About.jsx`

```jsx
import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      About
    </div>
  );
};

export default About;
```

### `src/pages/NotFound.jsx`

```jsx
import React from "react";

const NotFound = () => {
  return <div>NotFound</div>;
};

export default NotFound;
```

### `src/components/Header.jsx`

```jsx
const Header = () => {
  return (
    <header className="flex items-center  justify-between px-16 py-3 text-white bg-black  ">
      <h1 className="text-3xl font-mediumx">Logo</h1>

      <nav className="space-x-5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Product</a>
        <a href="">LookBook</a>
      </nav>

      <button className="bg-amber-400 text-black/70 px-4 py-2 rounded cursor-pointer">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
```

### `src/index.css`

```css
@import "tailwindcss";
```

## 6) Summary for students

- Routes are defined in `src/Routes/AppRoutes.jsx`.
- Page components live in `src/pages/`.
- Shared UI pieces (like the header) live in `src/components/`.
- The app is mounted in `src/main.jsx`, which renders `App`.
- `App` only provides routing; it does not directly render pages.
