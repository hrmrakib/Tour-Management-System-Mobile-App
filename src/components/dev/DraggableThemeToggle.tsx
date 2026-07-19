/* eslint-disable react-hooks/refs */
import ThemeToggle from "@/components/ui/ThemedToggle";
import { useRef } from "react";
import { Animated, PanResponder, View } from "react-native";

export default function DraggableThemeToggle() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5;
      },
      onPanResponderGrant: () => {
        pan.extractOffset();
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
    }),
  ).current;

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 96,
        right: 20,
        zIndex: 50,
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
      }}
      {...panResponder.panHandlers}
    >
      <View className='shadow-lg rounded-full'>
        <ThemeToggle showLabel={false} />
      </View>
    </Animated.View>
  );
}
