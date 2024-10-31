# Academic Bridge Interview Challenge - Todos App

A todo list application built with React, TypeScript, and Vite as part of the Academic Bridge interview challenge.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Git

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd todos-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
touch .env
```

Edit the `.env` file with base url `https://dummyjson.com`.

## Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Testing

This project uses Vitest for testing. To run the test suite:

```bash
# Run tests once
npm test
# or
yarn test

# Run tests in watch mode
npm run test:watch
# or
yarn test:watch

# Generate test coverage report
npm run test:coverage
# or
yarn test:coverage
```

## Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   └── rootComponents/
│   ├── utils/
│   └── tests/
├── tests/
│   ├── components/
│   └── utils/
├── .env.example
├── .env
└── ...
```

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Toast notifications for user feedback
- Responsive design
- Type-safe development with TypeScript

## Tech Stack

- React 18
- TypeScript
- Vite
- Vitest for testing
- DaisyUI for UI components
- TailwindCSS for styling

## Contributing

This is an interview challenge project, but if you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT License](LICENSE)
