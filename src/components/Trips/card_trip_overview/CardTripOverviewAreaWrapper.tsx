import React from "react";
import CardTripOverviewArea from "./CardTripOverviewArea";
import { CardTripOverviewAreaProps } from "@/types/CardTripOverviewAreaProps"; // Import the props interface

interface CardTripOverviewAreaWrapperProps extends CardTripOverviewAreaProps {
  // Add other necessary props if needed
}

const CardTripOverviewAreaWrapper: React.FC<CardTripOverviewAreaWrapperProps> = (props) => {
  return <CardTripOverviewArea {...props} />;
};

export default CardTripOverviewAreaWrapper;
