
import HeaderOne from "@/layouts/headers/HeaderOne";
import FancyBanner from "@/components/common/FancyBanner";
import FooterFour from "@/layouts/footers/FooterFour";
import HotelTripDetailsOneWrapper from "./HotelTripDetailsOneWrapper";

const HotelTripDetailsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <HotelTripDetailsOneWrapper

        hotelName={"Sarova Stanley"}
        hotelLocation={"Nairobi"} hotelSpecificLocation={"Nairobi, Kenya"}
        // starRating={5} // doesn't look good & not relevant (or only relevant for 5* lodges)

        // HotelGallery
        bigCarousel={[{ src: "/default-image.jpg" }]}
        smallCarousel={[{ src: "/default-thumbnail.jpg" }]}
        mainTripDescriptionTitle="Overview" //
        mainTripDescription="<p>Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.</p>" //
        primaryInfoTitle="Trip Overview"
        tripOverviewData={[{ id: 1, icon: "/default-icon.svg", title: "Safari Adventure" }]}
        similarTripsTitle="Similar Trips You May Like"
        amenities={[{ amenity: "wifi" }]} // Pass the amenities
        // HotelMapLocation
        hotelMapTitle=""
        hotelMapAddress=""
        />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default HotelTripDetailsOne;
