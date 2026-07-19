import { TUser } from "@/app/account";
import ThemedText from "@/components/ui/ThemedText";
import { View } from "react-native";
import ThemedButton from "../ui/ThemedButton";
import ThemedInput from "../ui/ThemedInput";

const EditProfile = ({
  user,
  handleChangeMode,
}: {
  user: TUser;
  handleChangeMode: () => void;
}) => {
  const handleSave = () => {
    console.log("save");
  };
  return (
    <View className='bg-surface mt-8 rounded-2xl p-4'>
      <ThemedText variant='semibold'>Edit Profile Detail</ThemedText>

      <ThemedInput
        label='Full Name'
        defaultValue={user.name}
        containerClassName='mt-4'
        inputClassName='text-title'
        placeholder='Your Full Name'
      />
      <ThemedInput
        label='Phone Number'
        defaultValue={user.phone}
        containerClassName='mt-2'
        inputClassName='text-title'
        placeholder='Your Phone Number'
      />
      <ThemedInput
        label='Address'
        defaultValue={user.address}
        containerClassName='mt-2'
        inputClassName='text-title'
        placeholder='Your Address'
        multiline
      />

      <View className='w-full flex-row gap-4 mt-4'>
        <View className='flex-1'>
          <ThemedButton
            onPress={handleChangeMode}
            title='Cancel'
            className='w-full bg-transparent border border-customBorder'
            textClassName='text-text!'
          />
        </View>

        <View className='flex-1'>
          <ThemedButton title='Save Changes' className='w-full' />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
