import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* (tabs) group handles the tab bar */}
      <Stack.Screen name="(tabs)" />
      {/* free-trial is a stack screen pushed on top of tabs */}
      <Stack.Screen name="free-trial" />
    </Stack>
  );
}
