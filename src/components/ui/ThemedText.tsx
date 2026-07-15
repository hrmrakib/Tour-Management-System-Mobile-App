import React from "react";
import { Text, TextProps } from "react-native";

interface ThemedTextProps extends TextProps {
  variant?: "default" | "semibold" | "bold" | "title" | "caption";
}

const ThemedText: React.FC<ThemedTextProps> = ({
  variant = "default",
  children,
  className,
  ...props
}) => {
  let variantMapping = 

  return <Text>{children}</Text>;
};

export default ThemedText;
