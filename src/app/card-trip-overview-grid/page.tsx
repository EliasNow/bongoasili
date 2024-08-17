import CardTripOverviewGrid from "@/components/Trips/card_trip_overview_grid";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Card Trip Overview Grid - Bongo Asili",
};
const index = () => {
   return (
      <Wrapper>
         <CardTripOverviewGrid />
      </Wrapper>
   )
}

export default index