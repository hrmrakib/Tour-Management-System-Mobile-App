import Container from "@/components/ui/Container";
import ThemedText from "@/components/ui/ThemedText";
import ThemedView from "@/components/ui/ThemedView";

const Bookings = () => {
  return (
    <Container>
      <ThemedView variant='none'>
        <ThemedText
          variant='title'
          className='text-center text-lg font-bold py-5'
        >
          Bookings
        </ThemedText>

        <ThemedText variant='title' className='text-lg font-bold py-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          itaque a laborum ipsam maxime blanditiis optio possimus minus unde,
          illo eos est labore quod velit magnam mollitia! Tempora modi nihil
          eius accusamus impedit assumenda consequatur animi blanditiis
          architecto autem necessitatibus, adipisci eligendi nostrum delectus
          maxime aut provident consectetur? Possimus, blanditiis.
        </ThemedText>
      </ThemedView>
    </Container>
  );
};

export default Bookings;
