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
  // Map your variants to NativeWind utility classes
  // "primary" resolves dynamically to light/dark background colors from your CSS variables
  const variantClass = variant === "primary" ? "bg-background" : "bg-black";

  return (
    <View
      className={`flex-1 bg-transparent dark:bg-black ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedView;
