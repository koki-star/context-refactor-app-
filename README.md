# context-refactor-app

A small React Vite project that shows how React Context can replace prop drilling when sharing user profile data across nested components.

## Run locally

```bash
npm install
npm run dev
```

## Context API in this project

The app uses `createContext` in `src/UserContext.jsx`, wraps the UI with `UserProvider`, and reads shared data with `useContext(UserContext)` inside nested components like `UserProfile` and `TestPanel`.
