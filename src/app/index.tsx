import TourCard from "@/components/tour/TourCard";
import ThemedText from "@/components/ui/ThemedText";
import ThemedView from "@/components/ui/ThemedView";
import { toursData } from "@/constants/data";
import { ITour } from "@/types/tour/tour.type";
import { ScrollView, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView className='flex-1 p-5 gap-3 '>
      <StatusBar barStyle='dark-content' hidden={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='p-5 gap-3 pb-10'
      >
        <ThemedText variant='title'>
          Hey, hello there! Chola ghurte zay
        </ThemedText>

        <ThemedText variant='semibold'>Tours Available (5)</ThemedText>
        {toursData.map((tour: ITour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}
