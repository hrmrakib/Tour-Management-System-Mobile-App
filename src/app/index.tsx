import ThemedInput from "@/components/ui/ThemedInput";
import ThemedText from "@/components/ui/ThemedText";
import ThemeToggle from "@/components/ui/ThemedToggle";
import ThemedView from "@/components/ui/ThemedView";
import { StatusBar, Switch } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView className='flex-1 p-5 gap-3 '>
      <StatusBar barStyle='dark-content' hidden={false} />
      <ThemedText variant='title'>I Love You</ThemedText>
      <ThemedText variant='title'>I Love You at night</ThemedText>
      <ThemedText variant='title'>I Love You at mid-night 😋</ThemedText>

      <ThemedInput label='You email' />

      <Switch />

      <ThemeToggle showLabel />
    </ThemedView>
  );
}
