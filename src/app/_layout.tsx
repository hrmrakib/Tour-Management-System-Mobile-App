// import RouteDebugger from "@/components/dev/RouteDebugger";
import DraggableThemeToggle from "@/components/dev/DraggableThemeToggle";
import TabNavigation from "@/components/tabBar/TabNavigation";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        {/* ? DEBUGGING TOOLS ? ONLY SHOW IN DEV */}
        {/* <RouteDebugger /> */}
        <DraggableThemeToggle />
        {/* ? DEBUGGING TOOLS ? ONLY SHOW IN DEV */}

        <TabNavigation />
      </ThemeProvider>
    </SafeAreaView>
  );
}
