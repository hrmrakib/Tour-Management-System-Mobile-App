import { TUser } from "@/app/account";
import { View } from "react-native";
import ThemedText from "../ui/ThemedText";

const ProfileDetail = ({
  user,
  handleChangeMode,
}: {
  user: TUser;
  handleChangeMode: () => void;
}) => {
  return (
    <View className='bg-surface mt-8 rounded-2xl p-4'>
      <View className='w-full flex flex-row items-center justify-between pb-4 border-b  border-gray-200!'>
        <ThemedText variant='medium' className=''>
          Personal Details
        </ThemedText>
        <ThemedText
          onPress={handleChangeMode}
          variant='semibold'
          className='underline text-primary!'
        >
          Edit Profile
        </ThemedText>
      </View>

      <View className='gap-y-4 mt-4'>
        <View className='flex flex-row items-center justify-between'>
          <ThemedText variant='default'>Name:</ThemedText>
          <ThemedText variant='medium'>{user.name}</ThemedText>
        </View>
        <View className='flex flex-row items-center justify-between'>
          <ThemedText variant='default'>Verified address:</ThemedText>
          <ThemedText variant='medium' className='flex-1 ml-5'>
            {user.address.slice(0, 25) + "..."}
          </ThemedText>
        </View>
        <View className='flex flex-row items-center justify-between'>
          <ThemedText variant='default'>Account security:</ThemedText>
          <ThemedText variant='medium' className='text-primary!'>
            Encrypted Tokens
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetail;
