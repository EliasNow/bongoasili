import React from "react";
import CommonTripOverview from "./CommonTripOverview";

interface TripOverviewData {
  id: number;
  icon: string; // Change from StaticImageData to string to accept URLs
  title: string;
}

interface CommonTripOverviewWrapperProps {
  primaryInfoTitle: string;
  tripOverviewData: TripOverviewData[];
}

const CommonTripOverviewWrapper: React.FC<CommonTripOverviewWrapperProps> = (props) => {
  return <CommonTripOverview {...props} />;
};

export default CommonTripOverviewWrapper;
