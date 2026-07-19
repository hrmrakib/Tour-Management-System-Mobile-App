import { MaterialIcons } from "@expo/vector-icons";
import ThemedButton from "../ui/ThemedButton";

const Logout = () => {
  return (
    <ThemedButton
      leftIcon={<MaterialIcons name='logout' size={20} color='#C60035' />}
      title='Logout Account'
      variant='warning'
      className='bg-[#FCE4E5]!'
      textClassName='text-[#C60035]!'
    />
  );
};

export default Logout;
