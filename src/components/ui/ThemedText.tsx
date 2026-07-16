import React from "react";
import { Text, TextProps } from "react-native";

interface ThemedTextProps extends TextProps {
  variant?: "default" | "semibold" | "bold" | "title" | "caption";
}

const ThemedText: React.FC<ThemedTextProps> = ({
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  let variantMapping = "text-text text-base font-normal";

  switch (variant) {
    case "semibold":
      variantMapping = "text-text text-base font-semibold";
      break;
    case "bold":
      variantMapping = "text-text text-base font-bold";
      break;
    case "title":
      variantMapping =
        "text-title dark:text-title text-2xl font-bold tracking-tight";
      break;
    case "caption":
      variantMapping = "text-text text-sm font-medium opacity-80";
      break;
    default:
      variantMapping = "text-text text-base font-normal";
  }

  return (
    <Text className={`${variantMapping} ${className}`} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
