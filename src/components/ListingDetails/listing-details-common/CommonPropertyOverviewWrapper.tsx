// 20 jul 14.30
// src/components/ListingDetails/listing-details-common/CommonPropertyOverviewWrapper.tsx
import React from "react";
// import CommonPropertyOverview from "./CommonPropertyOverview";
import CommonTripOverview from "./CommonTripOverview";

// interface PropertyOverviewData {
//   id: number;
//   icon: string; // Change from StaticImageData to string to accept URLs
//   title: string;
// }

// interface CommonPropertyOverviewWrapperProps {
//   propertyOverviewData: PropertyOverviewData[];
// }

interface TripOverviewDataType {
  id: number;
  icon: string; // Changed to string to accommodate URLs
  title: string;
}

interface CommonTripOverviewProps {
  primaryInfoTitle: string;
  tripOverviewData: TripOverviewDataType[];
}


const CommonPropertyOverviewWrapper: React.FC<CommonTripOverviewProps> = (props) => {
  return <CommonTripOverview {...props} />;
};

export default CommonPropertyOverviewWrapper;

