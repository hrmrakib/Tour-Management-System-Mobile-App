import { Link } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import ThemedText from "../ui/ThemedText";
import ThemedView from "../ui/ThemedView";

const WelcomeHeader = () => {
  return (
    <ThemedView className='w-full bg-white dark:bg-transparent border-b border-gray-200 dark:border-gray-600 h-24 flex flex-row justify-between items-center'>
      <View className='px-5'>
        <ThemedText variant='caption'>Welcome, Explorer</ThemedText>
        <ThemedText className='text-3xl! font-bold'>Rakib</ThemedText>
      </View>
      <Link href='/account' className='px-5'>
        <Image
          source={require("../../../assets/user/1.png")}
          className='w-13 h-13 rounded-full border-2 border-primary dark:border-primary'
        />
      </Link>
    </ThemedView>
  );
};

export default WelcomeHeader;
