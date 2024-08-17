// 2 aug 13.58 add link to features array in PropertyFeatureListing
"use client";
import { useState } from "react";
import MediaGallery from "./MediaGallery";
import Sidebar from "./Sidebar";
import CommonTripOverview from "../trip-details-common/CommonTripOverview";
import CommonTripBanner from "../trip-details-common/CommonTripBanner";
import TripDays from "./TripDays";
import TripInclusions from "./TripInclusions";
import CommonMainTripDescription from "../trip-details-common/CommonMainTripDescription";
import YourJourneyMap from "../trip-details-common/YourJourneyMap";

interface TripDetailsOneAreaProps {
  title: string;
  location: string;
  parks: string;
  price: string;
  extras: string;
  style_3?: boolean;
  bigCarousel: { src: string }[];
  smallCarousel: { src: string }[];
  tripOverviewData: { id: number; icon: string; title: string }[];
  primaryInfoTitle: string;
  tripDaysData: { id: number; title: string; description: string }[];
  inclusions: { inclusion: string }[];
  mainTripDescriptionTitle: string;
  mainTripDescription: string;
  mapTitle: string;
  mapSrc: string;
  contactName: string;
  contactRole: string;
  contactLocation: string;
  contactEmail: string;
  contactPhone: string;
  features?: {
    id: number;
    thumb: string;
    // class_name?: string;
    large_thumb: { src: string }[];
    tag: string;
    property_name: string;
    address: string;
    link: string; // New property for the link
  }[];
}

const TripDetailsOneArea: React.FC<TripDetailsOneAreaProps> = ({
  title,
  location,
  parks,
  price,
  extras,
  style_3 = false,
  bigCarousel,
  smallCarousel,
  tripOverviewData,
  primaryInfoTitle,
  tripDaysData = [],
  inclusions,
  mainTripDescriptionTitle,
  mainTripDescription,
  mapTitle,
  mapSrc,
  contactName,
  contactRole,
  contactLocation,
  contactEmail,
  contactPhone,
  features = [],
}) => {
  const [category, setCategory] = useState<string>("1");

  return (
    <div className="trip-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
      <div className="container">
        <CommonTripBanner title={title} location={location} parks={parks} price={price} extras={extras} style_3={style_3} />
        <div className="mb-20">
          <MediaGallery bigCarousel={bigCarousel} smallCarousel={smallCarousel} style={style_3} />
        </div>
        <div className="row">
          <div className="col-xl-8">
            <CommonMainTripDescription title={mainTripDescriptionTitle} description={mainTripDescription} />
            <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
              <CommonTripOverview primaryInfoTitle={primaryInfoTitle} tripOverviewData={tripOverviewData} />
            </div>
            <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
              <h4 className="mb-20">Itinerary / Trip Outline</h4>
              <p className="fs-20 lh-lg">Day-by-day outline of your safari.</p>
              <TripDays tripDaysData={tripDaysData} />
            </div>
            <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
              <TripInclusions inclusions={inclusions} />
            </div>
            <div className="property-location mb-50">
              <YourJourneyMap title={mapTitle} mapSrc={mapSrc} />
            </div>
          </div>
          <Sidebar 
            title={title} 
            contactName={contactName}
            contactRole={contactRole}
            contactLocation={contactLocation}
            contactEmail={contactEmail}
            contactPhone={contactPhone}
            features={features} // featured hotels
          />
        </div>
      </div>
    </div>
  );
};

export default TripDetailsOneArea;


// // 30 jul 13.22 edit pass PropertyFeatureListing props
// "use client";
// import { useState } from "react";
// import MediaGallery from "./MediaGallery";
// import Sidebar from "./Sidebar";
// import CommonTripOverview from "../trip-details-common/CommonTripOverview";
// import CommonTripBanner from "../trip-details-common/CommonTripBanner";
// import TripDays from "./TripDays";
// import TripInclusions from "./TripInclusions";
// import CommonMainTripDescription from "../trip-details-common/CommonMainTripDescription";
// import YourJourneyMap from "../trip-details-common/YourJourneyMap";

// interface TripDetailsOneAreaProps {
//   title: string;
//   location: string;
//   parks: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
//   tripOverviewData: { id: number; icon: string; title: string }[]; // do we need src: string for icon?
//   primaryInfoTitle: string;
//   tripDaysData: { id: number; title: string; description: string }[];
//   inclusions: { inclusion: string }[];
//   mainTripDescriptionTitle: string;
//   mainTripDescription: string;
//   mapTitle: string;
//   mapSrc: string;
//   contactName: string;
//   contactRole: string;
//   contactLocation: string;
//   contactEmail: string;
//   contactPhone: string;
//   features?: {
//     id: number;
//     thumb: string;
//     // class_name?: string;
//     // large_thumb: string[];
//     large_thumb: { src: string }[];
//     tag: string;
//     property_name: string;
//     address: string;
//   }[];
// }

// const TripDetailsOneArea: React.FC<TripDetailsOneAreaProps> = ({
//   title,
//   location,
//   parks,
//   price,
//   extras,
//   style_3 = false,
//   bigCarousel,
//   smallCarousel,
//   tripOverviewData,
//   primaryInfoTitle,
//   tripDaysData = [],
//   inclusions,
//   mainTripDescriptionTitle,
//   mainTripDescription,
//   mapTitle,
//   mapSrc,
//   contactName,
//   contactRole,
//   contactLocation,
//   contactEmail,
//   contactPhone,
//   features = [],
// }) => {
//   const [category, setCategory] = useState<string>("1");

//   return (
//     <div className="trip-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//       <div className="container">
//         <CommonTripBanner title={title} location={location} parks={parks} price={price} extras={extras} style_3={style_3} />
//         <div className="mb-20">
//           <MediaGallery bigCarousel={bigCarousel} smallCarousel={smallCarousel} style={style_3} />
//         </div>
//         <div className="row">
//           <div className="col-xl-8">
//             <CommonMainTripDescription title={mainTripDescriptionTitle} description={mainTripDescription} />
//             <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//               <CommonTripOverview primaryInfoTitle={primaryInfoTitle} tripOverviewData={tripOverviewData} />
//             </div>
//             <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//               <h4 className="mb-20">Itinerary / Trip Outline</h4>
//               <p className="fs-20 lh-lg">Day-by-day outline of your safari.</p>
//               <TripDays tripDaysData={tripDaysData} />
//             </div>
//             <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//               <TripInclusions inclusions={inclusions} />
//             </div>
//             <div className="property-location mb-50">
//               <YourJourneyMap title={mapTitle} mapSrc={mapSrc} />
//             </div>
//           </div>
//           <Sidebar 
//             title={title} 
//             contactName={contactName}
//             contactRole={contactRole}
//             contactLocation={contactLocation}
//             contactEmail={contactEmail}
//             contactPhone={contactPhone}
//             features={features} // featured hotels
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripDetailsOneArea;
