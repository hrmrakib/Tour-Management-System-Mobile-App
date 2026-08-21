import React from "react";
import { View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
  useSafeArea?: boolean;
}

export default function Container({
  children,
  className = "",
  useSafeArea = false,
  ...props
}: ContainerProps) {
  const Component = useSafeArea ? SafeAreaView : View;

  return (
    // The outer view ensures the screen background fills the whole device
    <View className='flex-1 w-full'>
      <Component
        // w-full: Takes full width
        // self-center: Perfectly centers it inside the parent View (replaces mx-auto)
        // px-5: Standard horizontal padding
        className={`flex-1 w-full self-center px-6 ${className}`}
        style={[{ maxWidth: 1280 }, props.style]} // Fallback to ensure maxWidth strictly applies
        {...props}
      >
        {children}
      </Component>
    </View>
  );
}
