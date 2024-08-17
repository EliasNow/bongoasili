// 17.34 8 aug pass TripCard props (entire trip object)
import { TripType } from "@/types/TripType";
import TripCard from "./TripCard";
import React from "react";

interface TripListProps {
  trips: TripType[];
  style: boolean;
}

const TripList: React.FC<TripListProps> = ({ trips = [], style }) => { // make sure default is empty array
  return (
    <div className="row gx-xxl-5">
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          style={style}
        />
      ))}
    </div>
  );
};

export default TripList;
