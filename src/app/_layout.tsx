import "@/global.css";

import { Tabs } from "expo-router";
export default function RootLayout() {
  return (
    <Tabs
      // tabBar={}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
        }}
      />
      {/* <Tabs.Screen name='explore' options={{ title: "Explore" }} /> */}
    </Tabs>
  );
}
