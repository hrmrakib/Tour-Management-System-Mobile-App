import { TUser } from "@/app/account";
import ThemedText from "@/components/ui/ThemedText";
import { View } from "react-native";

const EditProfile = ({ user }: { user: TUser }) => {
  return (
    <View>
      <ThemedText variant='title'>Edit Profile Detail</ThemedText>
    </View>
  );
};

export default EditProfile;
