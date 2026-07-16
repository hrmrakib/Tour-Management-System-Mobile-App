import React from "react";
import { View, ViewProps } from "react-native";

interface ThemedViewProps extends ViewProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
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
  const variantClass = variant === "primary" ? "bg-background" : "bg-surface";

  return (
    <View className={`flex-1 ${variantClass} ${className}`} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
