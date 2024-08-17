import FancyBanner from "@/components/common/FancyBanner"
import HeaderFour from "@/layouts/headers/HeaderFour"
import CardTripOverviewGridArea from "./CardTripOverviewGridArea"
import FooterBongo from "@/layouts/footers/FooterBongo"

const CardTripOverviewGrid = () => {
   return (
      <>
         <HeaderFour />
         <CardTripOverviewGridArea />
         <FancyBanner />
         <FooterBongo />
      </>
   )
}

export default CardTripOverviewGrid;
