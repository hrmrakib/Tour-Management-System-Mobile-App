import EditProfile from "@/components/account/EditProfile";
import Avatar from "@/components/ui/Avatar";
import ThemedText from "@/components/ui/ThemedText";
import ThemedView from "@/components/ui/ThemedView";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";

export type TUser = {
  name: string;
  photo: string;
  email: string;
  phone: string;
  address: string;
  role: string;
};

const Account = () => {
  const [editMode, setEditMode] = useState(false);
  const user: TUser = {
    name: "Mofiz Ahmed",
    photo: require("@/assets/me.avif"),
    email: "mofizahmed@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    role: "User",
  };

  const handleChangeMode = () => {
    setEditMode(!editMode);
  };

  return (
    <ThemedView>
      <View className='bg-surface flex items-center justify-center pt-16 pb-6 rounded-b-2xl rounded-tl-2xl'>
        {/* Avatar */}
        <View className='relative flex items-center justify-center shadow-lg rounded-full p-1'>
          <Avatar url={user.photo} name='Profile' size={100} />

          <View className='absolute bg-transparent bottom-2 right-0 rounded-full'>
            <MaterialIcons name='verified' size={24} color='green' />
          </View>
        </View>

        {/* User info */}
        <ThemedText variant='title' className='mt-4'>
          {user.name}
        </ThemedText>
        <ThemedText variant='caption' className='mt-1'>
          {user.email}
        </ThemedText>
        <View className='bg-[#F0F9FF] rounded-full px-2.5 py-1 flex-row items-center justify-center gap-2 mt-2.5'>
          <ThemedText
            variant='medium'
            className='text-[#4285B9] dark:text-primary'
          >
            Role: {user.role}
          </ThemedText>
        </View>
      </View>

      <View className='w-[80%] mx-auto bg-surface mt-8 rounded-2xl p-4'>
        <View className='w-full flex flex-row items-center justify-between'>
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
        <EditProfile user={user} />
      </View>
    </ThemedView>
  );
};

export default Account;
