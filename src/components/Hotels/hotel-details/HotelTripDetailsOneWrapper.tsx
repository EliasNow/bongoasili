import React from "react";
import HotelTripDetailsOne from "./HotelTripDetailsOne";

interface HotelTripDetailsOneWrapperProps {
// CommonHotelBanner
hotelName: string;
hotelLocation: string;
hotelSpecificLocation: string;
// starRating: number;
style_3?: boolean;
bigCarousel: { src: string }[];
smallCarousel: { src: string }[];
mainTripDescriptionTitle: string;
mainTripDescription: string;
tripOverviewData: { id: number; icon: string; title: string }[];
primaryInfoTitle: string;
similarTripsTitle: string;
amenities: {amenity: string }[];
// HotelMapLocation
hotelMapTitle: string;
hotelMapAddress: string;
}

const HotelTripDetailsOneWrapper: React.FC<HotelTripDetailsOneWrapperProps> = (props) => {
  return (
    <>
    <HotelTripDetailsOne {...props}  />
    </>

  );
};

export default HotelTripDetailsOneWrapper;