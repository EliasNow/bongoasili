import CardTripOverview from "@/components/Trips/card_trip_overview";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Card Trip Overview - Bongo Asili",
};
const index = () => {
   return (
      <Wrapper>
        <CardTripOverview />
      </Wrapper>
   )
}

export default index