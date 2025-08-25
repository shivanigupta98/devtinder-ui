# DevTinder UI

DevTinder UI is a React-based frontend for DevTinder, a developer matchmaking platform. Built with Vite, Redux Toolkit, React Router, Tailwind CSS, and DaisyUI.

## Features

- User authentication (login/signup)
- Profile editing
- Feed of potential connections
- Connection management
- Request handling
- Responsive UI with Tailwind CSS and DaisyUI

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Configuration

- API base URL is set in [`src/utils/constants.js`](src/utils/constants.js).
- Tailwind and DaisyUI are configured in [`tailwind.config.js`](tailwind.config.js).

## License

MIT

---

Made with ❤️ using [React](https://react.dev/), [Vite](https://vitejs.dev/), [Redux Toolkit](https://redux-toolkit.js.org/), [Tailwind CSS](https://tailwindcss.com/), and [DaisyUI](https://daisyui.com/)