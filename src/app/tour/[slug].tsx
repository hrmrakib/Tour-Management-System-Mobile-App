import ThemedView from "@/components/ui/ThemedView";
import { ITour } from "@/types/tour/tour.type";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// --- MOCK DATA ---
// In a real app, you would fetch this data using the `slug` from your API or global state.
const MOCK_TOUR: ITour = {
  title: "Old Dhaka Heritage Walk",
  slug: "old-dhaka-heritage-walk",
  description:
    "Discover the rich history, architecture, and culinary delights of Old Dhaka. Walk through the bustling streets and experience the vibrant culture that has thrived for centuries.",
  images: [require("../../../assets/tour/5.jpg")], // Ensure this path is correct in your project
  location: "Old Dhaka",
  costFrom: 2000,
  startDate: "2026-08-25T14:00:00.000Z",
  endDate: "2026-08-25T20:00:00.000Z",
  departureLocation: "Curzon Hall, DU",
  arrivalLocation: "Ahsan Manzil",
  included: ["Walking guide", "Street food tasting", "Entry tickets"],
  excluded: ["Transport to meeting point"],
  amenities: ["Bottled water", "Audio headsets"],
  tourPlan: [
    "14:00: Curzon Hall",
    "15:30: Lalbagh Fort",
    "17:00: Star Mosque",
    "18:30: Ahsan Manzil and Dinner",
  ],
  maxGuest: 20,
  minAge: 12,
  division: "Dhaka Division" as any,
  tourType: "Heritage & Cultural" as any,
};

const TourDetails = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();

  // In production: const tour = useFetchTourBySlug(slug);
  const tour = MOCK_TOUR;

  // Format date helper
  const formatDate = (date?: string) => {
    if (!date) return "TBA";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <View className='flex-1 bg-white'>
      {/* Hide default header to use custom image header */}
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        {/* --- HERO IMAGE & BACK BUTTON --- */}
        <View className='relative w-full h-80'>
          <Image
            source={tour.images?.[0]}
            className='w-full h-full object-cover'
            resizeMode='cover'
          />
          {/* Top Gradient/Overlay for readability could go here */}

          <TouchableOpacity
            onPress={() => router.back()}
            className='absolute top-12 left-5 bg-white/30 p-2 rounded-full backdrop-blur-md'
            style={styles.blurBackground}
          >
            <Ionicons name='chevron-back' size={24} color='#fff' />
          </TouchableOpacity>
        </View>

        {/* --- MAIN CONTENT OVERLAPPING IMAGE --- */}
        <ThemedView className='-mt-8 rounded-t-3xl px-5 pt-6 pb-24 shadow-sm'>
          {/* Tags & Badges */}
          <View className='flex-row items-center justify-between mb-3'>
            <View className='bg-teal-50 px-3 py-1.5 rounded-md'>
              <Text className='text-teal-700 font-bold text-xs uppercase tracking-wider'>
                {tour.tourType as unknown as string}
              </Text>
            </View>
            <View className='flex-row items-center'>
              <Ionicons name='star' size={16} color='#fbbf24' />
              <Text className='text-slate-700 dark:text-slate-300 font-bold ml-1'>
                4.8
              </Text>
              <Text className='text-slate-400 dark:text-slate-300 text-xs ml-1'>
                (120 reviews)
              </Text>
            </View>
          </View>

          {/* Title & Location */}
          <Text className='text-slate-900 dark:text-slate-300 font-black text-3xl mb-2 leading-tight'>
            {tour.title}
          </Text>
          <View className='flex-row items-center mb-6'>
            <Ionicons name='location' size={18} color='#0d9488' />
            <Text className='text-slate-500 dark:text-slate-300 font-medium ml-1.5 text-base'>
              {tour.location}, {tour.division as unknown as string}
            </Text>
          </View>

          {/* Quick Stats Row */}
          <View className='flex-row justify-between bg-slate-50 p-4 rounded-2xl mb-6'>
            <View className='items-center'>
              <Ionicons name='time-outline' size={22} color='#0d9488' />
              <Text className='text-slate-400 dark:text-slate-800 text-xs mt-1'>
                Duration
              </Text>
              <Text className='text-slate-800 font-bold text-sm'>1 Day</Text>
            </View>
            <View className='items-center'>
              <Ionicons name='people-outline' size={22} color='#0d9488' />
              <Text className='text-slate-400 dark:text-slate-800 text-xs mt-1'>
                Group Size
              </Text>
              <Text className='text-slate-800 font-bold text-sm'>
                Max {tour.maxGuest}
              </Text>
            </View>
            <View className='items-center'>
              <Ionicons name='body-outline' size={22} color='#0d9488' />
              <Text className='text-slate-400 dark:text-slate-800 text-xs mt-1'>
                Min Age
              </Text>
              <Text className='text-slate-800 font-bold text-sm'>
                {tour.minAge}+ yrs
              </Text>
            </View>
          </View>

          {/* Description */}
          <Text className='text-slate-800 dark:text-slate-300 font-bold text-xl mb-2'>
            Overview
          </Text>
          <Text className='text-slate-500 dark:text-slate-300 text-base leading-relaxed mb-6'>
            {tour.description}
          </Text>

          {/* Dates & Locations */}
          <Text className='text-slate-800 dark:text-slate-300 font-bold text-xl mb-3'>
            Schedule
          </Text>
          <View className='border border-slate-100 rounded-2xl p-4 mb-6 space-y-3'>
            <View className='flex-row items-center mb-3'>
              <View className='w-10 h-10 rounded-full bg-teal-50 items-center justify-center mr-3'>
                <Ionicons name='calendar-outline' size={20} color='#0d9488' />
              </View>
              <View>
                <Text className='text-slate-400 dark:text-slate-300 text-xs'>
                  Start Date
                </Text>
                <Text className='text-slate-800 dark:text-slate-300 font-semibold'>
                  {formatDate(tour.startDate)}
                </Text>
              </View>
            </View>
            <View className='flex-row items-center'>
              <View className='w-10 h-10 rounded-full bg-teal-50 items-center justify-center mr-3'>
                <Ionicons name='bus-outline' size={20} color='#0d9488' />
              </View>
              <View>
                <Text className='text-slate-400 dark:text-slate-300 text-xs'>
                  Departure
                </Text>
                <Text className='text-slate-800 dark:text-slate-300 font-semibold'>
                  {tour.departureLocation}
                </Text>
              </View>
            </View>
          </View>

          {/* Included & Excluded */}
          <View className='flex-row mb-6'>
            <View className='flex-1 pr-2'>
              <Text className='text-slate-800 dark:text-slate-300 font-bold text-lg mb-3'>
                Included
              </Text>
              {tour.included?.map((item, index) => (
                <View key={index} className='flex-row items-start mb-2'>
                  <Ionicons
                    name='checkmark-circle'
                    size={18}
                    color='#10b981'
                    className='mt-0.5'
                  />
                  <Text className='text-slate-600 dark:text-slate-300 ml-2 flex-1'>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
            <View className='flex-1 pl-2'>
              <Text className='text-slate-800 dark:text-slate-300 font-bold text-lg mb-3'>
                Excluded
              </Text>
              {tour.excluded?.map((item, index) => (
                <View key={index} className='flex-row items-start mb-2'>
                  <Ionicons
                    name='close-circle'
                    size={18}
                    color='#ef4444'
                    className='mt-0.5'
                  />
                  <Text className='text-slate-600 dark:text-slate-300 ml-2 flex-1'>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Tour Plan / Itinerary */}
          <Text className='text-slate-800 dark:text-slate-300 font-bold text-xl mb-4'>
            Tour Plan
          </Text>
          <View className='pl-2 mb-6'>
            {tour.tourPlan?.map((plan, index) => (
              <View key={index} className='flex-row mb-4'>
                {/* Timeline Line & Dot */}
                <View className='items-center mr-4'>
                  <View className='w-3 h-3 bg-teal-500 rounded-full z-10' />
                  {index !== (tour.tourPlan?.length || 0) - 1 && (
                    <View className='w-0.5 h-full bg-teal-100 absolute top-3' />
                  )}
                </View>
                {/* Content */}
                <View className='-mt-1 flex-1'>
                  <Text className='text-slate-800 dark:text-slate-300 font-semibold text-base mb-1'>
                    Step {index + 1}
                  </Text>
                  <Text className='text-slate-500 dark:text-slate-300'>
                    {plan}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ThemedView>
      </ScrollView>

      {/* --- STICKY BOTTOM BOOKING BAR --- */}
      <ThemedView
        className='absolute bottom-0 w-full px-5 py-4 border-t border-slate-100 flex-row items-center justify-between'
        style={{ paddingBottom: 30 }} // Extra padding for iPhone home indicator
      >
        <View>
          <Text className='text-slate-400 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-0.5'>
            Total Price
          </Text>
          <Text className='text-slate-900 dark:text-slate-300 font-black text-2xl'>
            ৳{tour.costFrom?.toLocaleString()}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className='bg-teal-600 px-8 py-3.5 rounded-2xl'
          style={styles.shadowButton}
        >
          <Text className='text-white font-bold text-base text-center'>
            Book Now
          </Text>
        </TouchableOpacity>
      </ThemedView>
    </View>
  );
};

const styles = StyleSheet.create({
  blurBackground: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  shadowButton: {
    shadowColor: "#0d9488",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
});

export default TourDetails;
