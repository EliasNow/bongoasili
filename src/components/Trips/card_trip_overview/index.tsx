// import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import HeaderOne from "@/layouts/headers/HeaderOne"
import CardTripOverviewAreaWrapper from "./CardTripOverviewAreaWrapper"
import FooterBongo from "@/layouts/footers/FooterBongo"
import trip_listing_data from "@/data/inner-data/TripListingData"

const CardTripOverview = () => {
   return (
      <>
         <HeaderOne style={true} />
         {/* <CardTripOverviewAreaWrapper page={"listing_3"} itemsPerPage={5} trips={trip_listing_data} /> */}
         <CardTripOverviewAreaWrapper page={"listing_3"} itemsPerPage={5} trips={[]} />
         <FancyBanner />
         <FooterBongo />
      </>
   )
}

export default CardTripOverview;