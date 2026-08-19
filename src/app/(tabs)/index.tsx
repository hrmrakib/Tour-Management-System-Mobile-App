import TourCard from "@/components/tour/TourCard";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { toursData } from "@/constants/data";
import { ITour } from "@/types/tour/tour.type";
import { ScrollView, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedScrollView
      // You can still hide the scrollbar
      className='flex-1 p-5 gap-3 '
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle='dark-content' hidden={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='p-5 gap-3 pb-10'
      >
        <ThemedText variant='title'>
          Hey, hello there! Cholo ghurte zay
        </ThemedText>

        <ThemedText variant='semibold'>Tours Available (5)</ThemedText>
        {toursData.map((tour: ITour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </ScrollView>
    </ThemedScrollView>
  );
}
