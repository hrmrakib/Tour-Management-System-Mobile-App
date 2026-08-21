import React from "react";
import { View, ViewProps } from "react-native";

interface ThemedViewProps extends ViewProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "none";
}

const ThemedView: React.FC<ThemedViewProps> = ({
  className = "",
  children,
  variant = "primary",
  ...props
}) => {
  // Map variants directly to your registered Tailwind theme color variables
  // - "primary" handles your main screen canvas background
  // - "secondary" handles cards or sub-sections via your surface color variable
  const variantClass = {
    primary: "bg-background dark:bg-background",
    secondary: "bg-surface dark:bg-surface",
    tertiary: "bg-transparent dark:bg-transparent",
    none: "",
  }[variant];

  return (
    <View className={`flex-1 ${variantClass} ${className}`} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
