import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface ThemedInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
  inputClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  multiline?: boolean;
}

const ThemedInput = ({
  label,
  error,
  containerClassName,
  inputClassName,
  leftIcon,
  rightIcon,
  onFocus,
  onBlur,
  secureTextEntry,
  multiline,
  ...props
}: ThemedInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  // Dynamically determine the border class based on state
  const borderClass = error
    ? "border-warning"
    : isFocused
      ? "border-primary"
      : "border-transparent";

  return (
    <View className={`w-full mb-3.75 ${containerClassName || ""}`}>
      {/* Label */}
      {label && (
        <Text className='text-title text-[14px] font-semibold mb-2 ml-1'>
          {label}
        </Text>
      )}

      {/* Wrapper View to hold Icons + Input */}
      <View
        className={`bg-surface flex-row border rounded-[10px] px-3.75 w-full ${borderClass} ${
          multiline ? "py-3 items-start" : "h-12.5 items-center"
        }`}
        style={{
          // Preserved inline shadows for accurate React Native rendering
          shadowColor: "#0000008b",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
        }}
      >
        {/* Render Left Icon */}
        {leftIcon && (
          <View className={`mr-2.5 ${multiline ? "mt-1" : ""}`}>
            {leftIcon}
          </View>
        )}

        {/* Text Input */}
        <TextInput
          className={`text-text flex-1 text-[16px] ${
            multiline ? "min-h-25" : "h-full"
          } ${inputClassName || ""}`}
          style={multiline && { textAlignVertical: "top" }}
          // NativeWind supports placeholderClassName directly
          placeholderClassName='text-iconColor'
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry && !passwordVisible}
          multiline={multiline}
          {...props}
        />

        {/* Render Right Icon OR Password Toggle */}
        {secureTextEntry ? (
          <TouchableOpacity
            className='p-1 ml-1.25'
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              className='color-iconColor' // NativeWind v4 applies this to the icon
            />
          </TouchableOpacity>
        ) : (
          rightIcon && (
            <View className={`ml-2.5 ${multiline ? "mt-1" : ""}`}>
              {rightIcon}
            </View>
          )
        )}
      </View>

      {/* Error Text */}
      {error && (
        <Text className='text-warning text-[12px] mt-1 ml-1'>{error}</Text>
      )}
    </View>
  );
};

export default ThemedInput;
