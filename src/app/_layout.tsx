// import { ThemeProvider } from "@/context/ThemeContext";
import "@/global.css";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ThemeProvider> */}
      {/* Removed SafeAreaView from here so the navigator can scale fully */}
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name='index'
          options={{
            title: "Home",
          }}
        />
      </Tabs>
      {/* </ThemeProvider> */}
    </SafeAreaView>
  );
}
