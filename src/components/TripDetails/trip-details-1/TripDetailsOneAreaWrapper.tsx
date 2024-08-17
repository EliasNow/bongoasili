// 30 jul 13.22 edit pass PropertyFeatureListing props
import React from "react";
import TripDetailsOneArea from "./TripDetailsOneArea";

interface TripDetailsOneAreaWrapperProps {
  title: string;
  location: string;
  parks: string;
  price: string;
  extras: string;
  style_3?: boolean;
  bigCarousel: { src: string }[];
  smallCarousel: { src: string }[];
  mainTripDescriptionTitle: string;
  mainTripDescription: string;
  tripOverviewData: { id: number; icon: string; title: string }[];
  primaryInfoTitle: string;
  tripDaysData: { id: number; title: string; description: string }[];
  similarTripsTitle: string;
  inclusions: { inclusion: string }[];
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
    // large_thumb: string[];
    large_thumb: { src: string }[];
    tag: string;
    property_name: string;
    address: string;
    link: string;
  }[];
}

const TripDetailsOneAreaWrapper: React.FC<TripDetailsOneAreaWrapperProps> = (props) => {
  return <TripDetailsOneArea {...props} />;
};

export default TripDetailsOneAreaWrapper;
