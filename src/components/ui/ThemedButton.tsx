import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface ThemedButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
  textClassName?: string;
  variant?: "primary" | "secondary" | "warning";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const ThemedButton = ({
  title,
  className,
  textClassName,
  variant = "primary",
  leftIcon,
  rightIcon,
  ...props
}: ThemedButtonProps) => {
  // Map the variant to your global.css NativeWind classes
  let bgClass = "";
  let textColorClass = "";

  switch (variant) {
    case "primary":
      bgClass = "bg-primary";
      textColorClass = "text-white";
      break;
    case "warning":
      bgClass = "bg-warning";
      textColorClass = "text-white";
      break;
    case "secondary":
      bgClass = "bg-surface border border-customBorder"; // Added a subtle border for the secondary variant
      textColorClass = "text-text";
      break;
    default:
      bgClass = "bg-primary";
      textColorClass = "text-white";
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // Added flex-row, gap-x-2 for perfect icon spacing, and merged dynamic classes
      className={`flex-row items-center justify-center py-3 px-6 rounded-lg gap-x-2 ${bgClass} ${className || ""}`}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && <View>{leftIcon}</View>}

      {/* Button Text */}
      <Text
        className={`text-[16px] font-semibold ${textColorClass} ${textClassName || ""}`}
      >
        {title}
      </Text>

      {/* Right Icon */}
      {rightIcon && <View>{rightIcon}</View>}
    </TouchableOpacity>
  );
};

export default ThemedButton;
