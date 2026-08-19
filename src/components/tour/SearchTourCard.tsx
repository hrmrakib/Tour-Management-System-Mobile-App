import { ITour } from "@/types/tour/tour.type";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ThemedView from "../ui/ThemedView";

export interface SearchTourCardProps {
  tour: ITour;
}

const SearchTourCard: React.FC<SearchTourCardProps> = ({ tour }) => {
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
      className='w-full bg-white dark:bg-slate-800 rounded-[24px] p-3 flex-row mb-4 border border-slate-100 dark:border-slate-700'
      style={styles.cardShadow}
    >
      {/* Left Image */}
      <View className='w-[110px] h-[110px] rounded-2xl overflow-hidden mr-4'>
        {tour.images && tour.images.length > 0 ? (
          <Image
            source={tour.images[0]}
            className='w-full h-full object-cover'
            resizeMode='cover'
          />
        ) : (
          <View className='w-full h-full bg-slate-200 dark:bg-slate-700 items-center justify-center'>
            <Ionicons name="image-outline" size={24} color="#94a3b8" />
          </View>
        )}
      </View>

      {/* Right Content */}
      <View className='flex-1 py-1 flex-col justify-between'>
        <View>
          <View className='flex-row items-center mb-1.5'>
            <Ionicons name='location-outline' size={14} color='#10b981' />
            <Text className='text-slate-400 dark:text-slate-400 font-bold text-[10px] ml-1 uppercase tracking-widest'>
              {tour.location || "UNKNOWN"}
            </Text>
          </View>

          <Text className='text-slate-900 dark:text-white font-extrabold text-[15px] leading-tight' numberOfLines={2}>
            {tour.title}
          </Text>
        </View>

        <View className='flex-row items-center justify-between'>
          <Text className='text-slate-400 font-bold text-[11px]'>
            Starts from
          </Text>
          <Text className='text-[#10b981] font-black text-lg'>
            ৳{tour.costFrom?.toLocaleString() || "0"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
});

export default SearchTourCard;
