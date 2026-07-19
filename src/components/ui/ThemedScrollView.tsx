import { ScrollView, ScrollViewProps } from "react-native";

interface ThemedScrollViewProps extends ScrollViewProps {
  className?: string;
  contentContainerClassName?: string;
}

const ThemedScrollView = ({
  className,
  contentContainerClassName,
  children,
  ...props
}: ThemedScrollViewProps) => {
  return (
    <ScrollView
      // Applies flex-1 and bg-surface by default, but allows overrides via the className prop
      className={`flex-1 bg-surface ${className || ""}`}
      // Passes down NativeWind's content container styles
      contentContainerClassName={contentContainerClassName}
      // Passes down all other ScrollView props (like showsVerticalScrollIndicator)
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default ThemedScrollView;
