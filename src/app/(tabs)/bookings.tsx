import ThemedText from "@/components/ui/ThemedText";
import ThemedView from "@/components/ui/ThemedView";

const Bookings = () => {
  return (
    <ThemedView>
      <ThemedText
        variant='title'
        className='text-center text-lg font-bold py-5'
      >
        Bookings
      </ThemedText>
    </ThemedView>
  );
};

export default Bookings;
