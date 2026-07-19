import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

function TabNavigation() {
  const { isDark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? "#121212" : "#ffffff",
          borderTopColor: isDark ? "#333333" : "#e5e5e5",
          // 1. Set a fixed height for the tab bar
          height: 65,
          // 2. Adjust padding to perfectly center the icon and label
          paddingTop: 6,
          paddingBottom: 8,
        },
        // 3. Ensure the inner items are vertically centered
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        // 4. (Optional) Adjust label spacing if the text overlaps the icon
        tabBarLabelStyle: {
          marginTop: 4,
          fontSize: 10,
        },
        tabBarActiveTintColor: isDark ? "#ffffff" : "#000000",
        tabBarInactiveTintColor: isDark ? "#888888" : "#888888",
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      {/* 1. Added Bookings Tab */}
      <Tabs.Screen
        name='bookings'
        options={{
          title: "Bookings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      {/* 2. Added Account Tab */}
      <Tabs.Screen
        name='account'
        options={{
          title: "Account",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabNavigation;
