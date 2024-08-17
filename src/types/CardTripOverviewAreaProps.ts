// 17.00 8 aug
// src/types/CardTripOverviewAreaProps.ts
import { TripType } from "@/types/TripType";

export interface CardTripOverviewAreaProps {
  style?: boolean;
  page: string;
  itemsPerPage: number;
  trips: TripType[];
  // Add other necessary props if needed
}
