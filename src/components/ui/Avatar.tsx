import { Image, Text, View } from "react-native";

interface AvatarProps {
  url?: string;
  name?: string;
  size?: number;
  isOnline?: boolean;
}

export default function Avatar({
  url,
  name,
  size = 48,
  isOnline,
}: AvatarProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <View
      className='relative items-center justify-center'
      style={{ width: size, height: size }}
    >
      {url ? (
        <Image
          source={{ uri: url }}
          resizeMode='cover'
          className='rounded-full'
          style={{ width: size, height: size }}
        />
      ) : (
        <View
          className='items-center justify-center rounded-full bg-surface border border-customBorder'
          style={{ width: size, height: size }}
        >
          <Text
            className='font-bold text-title'
            style={{ fontSize: size * 0.4 }}
          >
            {name ? getInitials(name) : "?"}
          </Text>
        </View>
      )}

      {isOnline !== undefined && (
        <View
          className={`absolute bottom-0 right-0 rounded-full border-2 border-background ${
            isOnline ? "bg-success" : "bg-iconColor"
          }`}
          style={{
            width: size * 0.25,
            height: size * 0.25,
          }}
        />
      )}
    </View>
  );
}
