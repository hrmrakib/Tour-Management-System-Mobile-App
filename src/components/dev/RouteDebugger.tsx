import { useGlobalSearchParams, useSegments } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function RouteDebugger() {
  const segments = useSegments();
  const params = useGlobalSearchParams();

  // 1. Reconstruct the pathname from segments
  // This converts ['product', '[id]'] into '/product/[id]'
  const pathname = "/" + segments.join("/");

  // 2. Format query params (if any exist) into a string: ?key=value&foo=bar
  const paramKeys = Object.keys(params);
  const queryString = paramKeys.length
    ? "?" + paramKeys.map((key) => `${key}=${params[key]}`).join("&")
    : "";

  // 3. (Optional) Reconstruct the actual filled URL: /product/123
  // Replaces placeholders like '[id]' or '[...rest]' with their actual values
  let actualUrl =
    "/" +
    segments
      .map((segment) => {
        // Clean up brackets to get the param key name (e.g., '[id]' -> 'id')
        const cleanKey = segment.replace(/[\[\]]/g, "");
        if (segment.startsWith("[") && params[cleanKey]) {
          return params[cleanKey];
        }
        return segment;
      })
      .join("/");

  return (
    <SafeAreaView className='bg-[#1c1c1e]'>
      <View className='p-3 border-b border-[#2c2c2e]'>
        {/* <Text className="text-[#ff9500] text-[11px] font-bold uppercase mb-[6px] tracking-[0.5px]">Route Debugger</Text> */}

        <View className='flex-row items-center mb-1'>
          <Text className='text-[#eaeaea] text-[12px] font-semibold w-23'>
            Current URL:{" "}
          </Text>
          <Text className='text-[#4cd964] font-[Courier] text-[13px] font-bold flex-1'>
            {actualUrl}
          </Text>
        </View>

        <View className='flex-row items-center mb-1'>
          <Text className='text-[#eaeaea] text-[12px] font-semibold w-23'>
            File Path:{" "}
          </Text>
          <Text className='text-[#8e8e93] font-[Courier] text-[12px] flex-1'>
            {pathname}
            {queryString}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
