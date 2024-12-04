module.exports = {
  expo: {
    name: "sentry-repro",
    owner: "...",
    slug: "...",
    scheme: "app",
    newArchEnabled: true,
    version: "0.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    jsEngine: "hermes",
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    plugins: [
      "expo-router",
      [
        "@sentry/react-native/expo",
        {
          organization: "...",
          project: "...",
          url: "https://sentry.io/",
        },
      ],
    ],
  },
}
