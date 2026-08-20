import WelcomeHeader from "@/components/home/WelcomeHeader";
import TourCard from "@/components/tour/TourCard";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { toursData } from "@/constants/data";
import { ITour } from "@/types/tour/tour.type";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedScrollView
      // You can still hide the scrollbar
      className='flex-1 gap-3 '
      showsVerticalScrollIndicator={false}
    >
      {/* <StatusBar barStyle='dark-content' hidden={false} /> */}
      <WelcomeHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='px-5 pt-5 pb-10 gap-3 pb-10'
      >
        <ThemedText variant='title'>
          Hey, hello there! Cholo ghurte zay
        </ThemedText>

        <View className='flex-row items-center justify-between px-6'>
          <ThemedText variant='semibold'>Tours Available (5)</ThemedText>
          <Link href='/search' className='flex-row items-center gap-1'>
            <Ionicons name='search-outline' size={24} className='text-title' />
          </Link>
        </View>

        {toursData.map((tour: ITour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </ScrollView>
    </ThemedScrollView>
  );
}
