// 24 jul 14.55
import { StaticImageData } from "next/image";

export interface TripDataType {
    id: number;
    page: string;
    tag: string;
    tag_bg?: string;
    thumb?: string | StaticImageData; // Allow both string and StaticImageData
    carousel_thumb: {
      id?: string;
      img: string | StaticImageData; // Allow both string and StaticImageData
      active?: string;
    }[];
    title: string;
    location: string;
    property_info: {
      icon: string | StaticImageData; // Allow both string and StaticImageData
      feature: string;
      total_feature: number;
    }[];
    data_delay_time?: string;
    price: number;
    price_text?: string;
    carousel?: string;
    // link: string; // Add link field 8 aug 16.15
  }
  

// // src/types/TripDataType.ts
// export interface TripDataType {
//     id: number;
//     page: string;
//     tag: string;
//     tag_bg?: string;
//     thumb?: string;
//     carousel_thumb: {
//       id?: string;
//       img: string;
//       active?: string;
//     }[];
//     title: string;
//     location: string;
//     property_info: {
//       icon: string;
//       feature: string;
//       total_feature: number;
//     }[];
//     data_delay_time?: string;
//     price: number;
//     price_text?: string;
//     carousel?: string;
//   }
  