import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1C1C1E",
          borderTopColor: "#333",
          borderTopWidth: 0.5,
        },
        tabBarActiveTintColor: "#FF2D55",
        tabBarInactiveTintColor: "#888",
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          const icons: Record<
            string,
            { active: IoniconsName; inactive: IoniconsName }
          > = {
            index: { active: "home", inactive: "home-outline" },
            radio: { active: "radio", inactive: "radio-outline" },
            library: { active: "library", inactive: "library-outline" },
            search: { active: "search", inactive: "search-outline" },
          };
          const icon = icons[route.name];
          const iconName: IoniconsName = focused ? icon.active : icon.inactive;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="radio" options={{ title: "Radio" }} />
      <Tabs.Screen name="library" options={{ title: "Library" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
    </Tabs>
  );
}
