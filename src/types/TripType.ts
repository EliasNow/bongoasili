// src/types/TripType.ts
import { StaticImageData } from "next/image";

export interface TripType {
  people: number; // for filtering in CardTripOverview
  id: number;
  page: string;
  tags: string[];
  tag_bg?: string;
  carousel_thumb: {
    id?: string;
    img: StaticImageData;
    active?: string;
  }[];
  thumb?: StaticImageData;
  bg_img?: string;
  title: string;
  address?: string;
  location: string;
  days: number;
  country: string[];
  price: number;
  price_text?: string;
  carousel?: string;
  type: string;
  status: string;
  inclusions?: string[];
  minimum_age: number;
  tailor_made: boolean;
  big_five: boolean;
  link?: string; // Add link field 8 aug 16.15
  // details?: { label: string; value: string }[]; // New generic details field
  details?: string;
  // details?: string[];
}
