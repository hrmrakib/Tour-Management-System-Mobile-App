import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { GlassView } from "expo-glass-effect";
import { Tabs } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { isDark } = useTheme();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  // 40 is for left: 20 and right: 20 margins
  const tabWidth = (width - 40) / state.routes.length;
  const pillWidth = 80;
  const pillOffset = (tabWidth - pillWidth) / 2;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(state.index * tabWidth + pillOffset, {
            damping: 20,
            stiffness: 250,
          }),
        },
      ],
    };
  });

  return (
    <View style={[styles.tabBarWrapper, { bottom: 6 }]}>
      <View style={[styles.tabBarContainer, { backgroundColor: isDark ? "rgba(30, 41, 59, 0.85)" : "rgba(255,255,255,0.7)" }]}>
        {/* Background Main Glass */}
        <GlassView
          style={StyleSheet.absoluteFill}
          colorScheme={isDark ? "dark" : "light"}
          glassEffectStyle="regular"
        />

        <View style={styles.innerContainer}>
          {/* Sliding Active Pill */}
          <Animated.View
            style={[
              styles.activePillContainer,
              { width: pillWidth },
              animatedStyle,
            ]}
          >
            <View
              style={[
                styles.activePillGlass,
                {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.06)",
                },
              ]}
            />
          </Animated.View>

          {/* Tab Items */}
          <View style={styles.tabItemsRow}>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              let iconName = "home";
              if (route.name === "index")
                iconName = isFocused ? "home" : "home-outline";
              if (route.name === "search")
                iconName = isFocused ? "search" : "search-outline";
              if (route.name === "bookings")
                iconName = isFocused ? "calendar" : "calendar-outline";
              if (route.name === "account")
                iconName = isFocused ? "person" : "person-outline";

              const activeColor = "#007AFF"; // iOS Blue, matching the screenshot's vibe

              return (
                <TouchableOpacity
                  key={route.key}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  onPress={onPress}
                  style={[styles.tabItem, { width: tabWidth }]}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={iconName as any}
                    size={22}
                    color={
                      isFocused ? activeColor : isDark ? "#888888" : "#94a3b8"
                    }
                  />
                  <Text
                    style={[
                      styles.tabLabel,
                      {
                        color: isFocused
                          ? activeColor
                          : isDark
                            ? "#888888"
                            : "#94a3b8",
                      },
                    ]}
                  >
                    {options.title || route.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarWrapper: {
    position: "absolute",
    left: 20,
    right: 20,
    height: 64,
    borderRadius: 32,
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  tabBarContainer: {
    flex: 1,
    borderRadius: 32,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
  },
  tabItemsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 64,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "700",
    marginTop: 2,
  },
  activePillContainer: {
    position: "absolute",
    top: 6,
    height: 52,
    borderRadius: 26,
    overflow: "hidden",
  },
  activePillGlass: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

function TabNavigation() {
  return (
    <Tabs
      tabBar={(props: any) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="bookings" options={{ title: "Bookings" }} />
      <Tabs.Screen name="account" options={{ title: "Account" }} />
    </Tabs>
  );
}

export default TabNavigation;
