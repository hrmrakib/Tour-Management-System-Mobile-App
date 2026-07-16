import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  showLabel = false,
  className = "",
}) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      activeOpacity={0.8}
      className={`flex-row items-center justify-center p-2 rounded-full bg-surface border border-customBorder ${className}`}
    >
      <View className='items-center justify-center w-8 h-8 rounded-full bg-background'>
        <Ionicons
          name={isDark ? "moon-outline" : "sunny-outline"}
          size={18}
          className='text-title'
        />
      </View>

      {showLabel && (
        <ThemedText className='ml-2 font-medium text-sm'>
          {isDark ? "Dark Mode" : "Light Mode"}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};

export default ThemeToggle;
