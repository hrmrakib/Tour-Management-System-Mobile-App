import ThemedText from "@/components/ui/ThemedText";
import ThemedView from "@/components/ui/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView className='flex-1 p-5 gap-3 '>
      <ThemedText variant='title'>Home is not house!</ThemedText>
      <ThemedText variant='title'>Home is not house!</ThemedText>
      <ThemedText variant='title'>Home is not house!</ThemedText>
    </ThemedView>
  );
}
