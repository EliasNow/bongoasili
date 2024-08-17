// 25 jul 16.24 adding HotelGallery:
"use client";
import { useState } from "react";
import HotelGallery from "./HotelGallery";
// import Sidebar from "../../TripDetails/trip-details-1/Sidebar";
import CommonTripOverview from "../../TripDetails/trip-details-common/CommonTripOverview";
// import CommonTripBanner from "../../TripDetails/trip-details-common/CommonTripBanner";
import CommonMainTripDescription from "@/components/TripDetails/trip-details-common/CommonMainTripDescription";
import HotelAmenities from "./HotelAmenities";
import CommonHotelBanner from "../hotel-details-common/CommonHotelBanner";
import HotelMapLocation from "./HotelMapLocation";

interface HotelTripDetailsOneProps {
// CommonHotelBanner
hotelName: string;
hotelLocation: string;
hotelSpecificLocation: string;
// starRating: number; 
style_3?: boolean;
  bigCarousel: { src: string }[];
  smallCarousel: { src: string }[];
  tripOverviewData: { id: number; icon: string; title: string }[];
  primaryInfoTitle: string;
  // this component may have to be renamed if used in this context:
  mainTripDescriptionTitle: string;
  mainTripDescription: string;
    // amenities: string[];
  amenities: { amenity: string }[];

// HotelMapLocation
hotelMapTitle: string;
hotelMapAddress: string;

}

const HotelTripDetailsOne: React.FC<HotelTripDetailsOneProps> = ({
// CommonHotelBanner
hotelName,
hotelLocation,
hotelSpecificLocation,
// starRating,
style_3,
bigCarousel,
smallCarousel,
tripOverviewData,
primaryInfoTitle,
mainTripDescriptionTitle,
mainTripDescription,
amenities, //
// HotelMapLocation
hotelMapTitle,
hotelMapAddress,

}) => {
  const [category, setCategory] = useState<string>("1");

  return (
    <div className="trip-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
      <div className="container">
        <CommonHotelBanner hotelName={hotelName} hotelLocation={hotelLocation} hotelSpecificLocation={hotelSpecificLocation} style_3={style_3} />
        <div className="mb-20">
          <HotelGallery bigCarousel={bigCarousel} smallCarousel={smallCarousel} />
        </div>
        <div className="row">
          <div className="col-xl-8">
            <CommonMainTripDescription title={mainTripDescriptionTitle} description={mainTripDescription} />
            <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
              <CommonTripOverview primaryInfoTitle={primaryInfoTitle} tripOverviewData={tripOverviewData} />
            </div>
            <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
              <HotelAmenities amenities={amenities} />
            </div>
            <div className="property-location mb-50">
              <HotelMapLocation hotelMapTitle={hotelMapTitle} hotelMapAddress={hotelMapAddress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelTripDetailsOne;
