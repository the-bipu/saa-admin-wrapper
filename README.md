<p align="center">
  <img src="./assets/images/icon.png" alt="SAA Admin Logo" width="140" />
</p>

<h1 align="center">SAA Admin Wrapper</h1>

<p align="center">
  A React Native mobile app that wraps the SAA Admin portal in a native shell.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/NativeWind-v4-38BDF8?style=flat&logo=tailwindcss&logoColor=white" alt="NativeWind" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey" alt="Platform" />
  <img src="https://img.shields.io/github/license/the-bipu/saa-admin-wrapper" alt="License" />
  <img src="https://img.shields.io/github/last-commit/the-bipu/saa-admin-wrapper" alt="Last Commit" />
  <img src="https://img.shields.io/github/stars/the-bipu/saa-admin-wrapper?style=social" alt="Stars" />
</p>

---

## About

**SAA Admin Wrapper** is a React Native mobile application for the admin side of SAA. It's totally dependent on the website — the app loads the SAA Admin portal inside a native WebView, giving admins app-like access to management features on Android and iOS without a full native rebuild. It's built on top of a NativeWind (TailwindCSS) template for fast, utility-first styling.

## Features

- **React Native** — cross-platform native shell for iOS and Android
- **WebView Wrapper** — loads the SAA Admin portal directly inside the app
- **NativeWind** — TailwindCSS utility classes for React Native
- **TypeScript** — type safety throughout
- **ESLint** — consistent code linting
- **Pre-configured tooling** — ready to build and run out of the box

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React Native |
| Styling | NativeWind v4 (TailwindCSS) |
| Language | TypeScript |
| Bundler | Metro |
| Transpiler | Babel |
| Build/Deploy | EAS (Expo Application Services) |
| Linting | ESLint |

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- React Native development environment ([setup guide](https://reactnative.dev/docs/environment-setup))
- Xcode & CocoaPods (for iOS)
- Android Studio & Android SDK (for Android)

## Project Structure

```
saa-admin-wrapper/
├── app/                    # Main application code
├── assets/                 # Images, fonts, and other assets
├── components/             # Reusable components
├── constants/              # App constants and configuration
├── hooks/                  # Custom React hooks
├── scripts/                # Build and utility scripts
├── .vscode/                # VSCode settings
├── app.json                # App configuration
├── eas.json                 # EAS build/deploy configuration
├── babel.config.js          # Babel configuration
├── eslint.config.js         # ESLint configuration
├── global.css                # Global styles
├── metro.config.js           # Metro bundler configuration
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/the-bipu">the-bipu</a></p>