import { ITour } from "@/types/tour/tour.type";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ThemedView from "../ui/ThemedView";

export interface TourCardProps {
  tour: ITour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        router.push({
          pathname: "/tour/[slug]",
          params: { slug: tour.slug },
        })
      }
      className='w-full max-w-sm bg-white rounded-3xl overflow-hidden my-4 self-center'
      style={styles.cardShadow}
    >
      {/* Header Image & Badges */}
      <ThemedView className='relative w-full h-56'>
        <Image
          source={tour.images?.[0]}
          className='w-full h-full object-cover'
          resizeMode='cover'
        />

        {/* Location Badge (Top Left) */}
        <View className='absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full flex-row items-center'>
          <Ionicons name='location-outline' size={14} color='#0d9488' />
          <Text className='text-slate-800 font-bold text-xs ml-1'>
            {tour.location}
          </Text>
        </View>

        {/* Category Badge (Top Right) */}
        <View className='absolute top-4 right-4 bg-teal-600 px-3 py-1.5 rounded-full'>
          <Text className='text-white font-bold text-[10px] tracking-widest uppercase'>
            {tour.tourType}
          </Text>
        </View>
      </ThemedView>

      {/* Card Content body */}
      <ThemedView className='p-5'>
        <Text className='text-teal-600 dark:text-teal-300 font-bold text-[11px] tracking-wider uppercase mb-1'>
          {tour.division}
        </Text>

        <Text className='text-teal-900 dark:text-teal-500 font-extrabold text-xl mb-2 leading-tight'>
          {tour.title}
        </Text>

        <Text
          className='text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6'
          numberOfLines={2}
        >
          {tour.description}
        </Text>

        {/* Pricing Footer */}
        <View className='flex-row items-end justify-between pt-4 border-t border-slate-100'>
          <View>
            <Text className='text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-0.5'>
              Pricing starts from
            </Text>
            <View className='flex-row items-center'>
              <Text className='text-slate-900 dark:text-slate-300 font-black text-xl'>
                ৳{tour.costFrom?.toLocaleString()}
              </Text>
            </View>
          </View>

          <View className='flex-row items-center'>
            <Text className='text-teal-600 font-bold text-sm mr-1'>
              View Details
            </Text>
            <Ionicons name='chevron-forward' size={16} color='#0d9488' />
          </View>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
};

// Platform-specific shadows are often more reliable using StyleSheet than NativeWind utility classes
const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
});

export default TourCard;
