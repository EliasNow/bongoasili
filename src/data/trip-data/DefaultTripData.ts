

// 24 jul 14.56
import { TripDataType } from "@/types/TripDataType";

import tripThumb_1 from "@/assets/images/listing/img_01.jpg";
import tripThumb_2 from "@/assets/images/listing/img_02.jpg";
import tripThumb_3 from "@/assets/images/listing/img_03.jpg";
import tripThumb_4 from "@/assets/images/listing/img_04.jpg";
import tripThumb_5 from "@/assets/images/listing/img_05.jpg";
import tripThumb_6 from "@/assets/images/listing/img_06.jpg";

import tripLargThumb_1 from "@/assets/images/listing/img_large_01.jpg";
import tripLargThumb_2 from "@/assets/images/listing/img_large_02.jpg";
import tripLargThumb_3 from "@/assets/images/listing/img_large_03.jpg";
import tripLargThumb_4 from "@/assets/images/listing/img_large_04.jpg";
import tripLargThumb_5 from "@/assets/images/listing/img_large_05.jpg";
import tripLargThumb_6 from "@/assets/images/listing/img_large_06.jpg";

import tripIcon_1 from "@/assets/images/icon/icon_04.svg";
import tripIcon_2 from "@/assets/images/icon/icon_05.svg";
import tripIcon_3 from "@/assets/images/icon/icon_06.svg";

const trip_data: TripDataType[] = [
  {
    id: 1,
    page: "kenya_trip_1",
    tag: "Safari",
    thumb: tripThumb_1,
    carousel_thumb: [
      { id: "1", img: tripLargThumb_1, active: "active" },
      { id: "2", img: tripLargThumb_2 },
      { id: "3", img: tripLargThumb_3 },
    ],
    title: "Kenya Family Safari",
    location: "Kenya: Mara / Amboseli",
    property_info: [
      { icon: tripIcon_1, feature: "sqft", total_feature: 2340 },
      { icon: tripIcon_2, feature: "bed", total_feature: 4 },
      { icon: tripIcon_3, feature: "bath", total_feature: 3 },
    ],
    price: 4800,
    carousel: "03",
  },
  {
    id: 2,
    page: "kenya_trip_1",
    tag: "Honeymoon",
    thumb: tripThumb_2,
    carousel_thumb: [
      { id: "4", img: tripLargThumb_4 },
      { id: "5", img: tripLargThumb_5 },
      { id: "6", img: tripLargThumb_6 },
    ],
    title: "Romantic Getaway in Zanzibar",
    location: "Zanzibar, Tanzania",
    property_info: [
      { icon: tripIcon_1, feature: "sqft", total_feature: 1500 },
      { icon: tripIcon_2, feature: "bed", total_feature: 1 },
      { icon: tripIcon_3, feature: "bath", total_feature: 1 },
    ],
    price: 3500,
    carousel: "04",
  },
  // Add more trip data as needed
];

export default trip_data;



// // // 15.44 chatgpt prompt trying to revert back to earlier version that worked and increment from there
// import { StaticImageData } from "next/image";

// import tripThumb_1 from "@/assets/images/listing/img_01.jpg";
// import tripThumb_2 from "@/assets/images/listing/img_02.jpg";
// import tripThumb_3 from "@/assets/images/listing/img_03.jpg";
// import tripThumb_4 from "@/assets/images/listing/img_04.jpg";
// import tripThumb_5 from "@/assets/images/listing/img_05.jpg";
// import tripThumb_6 from "@/assets/images/listing/img_06.jpg";

// import tripLargThumb_1 from "@/assets/images/listing/img_large_01.jpg";
// import tripLargThumb_2 from "@/assets/images/listing/img_large_02.jpg";
// import tripLargThumb_3 from "@/assets/images/listing/img_large_03.jpg";
// import tripLargThumb_4 from "@/assets/images/listing/img_large_04.jpg";
// import tripLargThumb_5 from "@/assets/images/listing/img_large_05.jpg";
// import tripLargThumb_6 from "@/assets/images/listing/img_large_06.jpg";

// import tripIcon_1 from "@/assets/images/icon/icon_04.svg";
// import tripIcon_2 from "@/assets/images/icon/icon_05.svg";
// import tripIcon_3 from "@/assets/images/icon/icon_06.svg";

// interface TripDataType {
//   id: number;
//   page: string;
//   tag: string;
//   tag_bg?: string;
//   thumb?: StaticImageData;
//   carousel_thumb: {
//     id?: string;
//     img: StaticImageData;
//     active?: string;
//   }[];
//   title: string;
//   location: string;
//   property_info: {
//     icon: StaticImageData;
//     feature: string;
//     total_feature: number;
//   }[];
//   data_delay_time?: string;
//   price: number;
//   price_text?: string;
//   carousel?: string;
// }

// const trip_data: TripDataType[] = [
//   {
//     id: 1,
//     page: "kenya_trip_1",
//     tag: "Safari",
//     thumb: tripThumb_1,
//     carousel_thumb: [
//       { id: "1", img: tripLargThumb_1, active: "active" },
//       { id: "2", img: tripLargThumb_2 },
//       { id: "3", img: tripLargThumb_3 },
//     ],
//     title: "Kenya Family Safari",
//     location: "Kenya: Mara / Amboseli",
//     property_info: [
//       { icon: tripIcon_1, feature: "sqft", total_feature: 2340 },
//       { icon: tripIcon_2, feature: "bed", total_feature: 4 },
//       { icon: tripIcon_3, feature: "bath", total_feature: 3 },
//     ],
//     price: 4800,
//     carousel: "03",
//   },
//   {
//     id: 2,
//     page: "kenya_trip_1",
//     tag: "Honeymoon",
//     thumb: tripThumb_2,
//     carousel_thumb: [
//       { id: "4", img: tripLargThumb_4 },
//       { id: "5", img: tripLargThumb_5 },
//       { id: "6", img: tripLargThumb_6 },
//     ],
//     title: "Romantic Getaway in Zanzibar",
//     location: "Zanzibar, Tanzania",
//     property_info: [
//       { icon: tripIcon_1, feature: "sqft", total_feature: 1500 },
//       { icon: tripIcon_2, feature: "bed", total_feature: 1 },
//       { icon: tripIcon_3, feature: "bath", total_feature: 1 },
//     ],
//     price: 3500,
//     carousel: "04",
//   },
//   // Add more trip data as needed
// ];

// export default trip_data;


// // 15.28
// // src/data/trip-data/DefaultTripData.ts
// const defaultTripData = [
//   {
//     id: 1,
//     tag: "Safari",
//     thumb: "/images/trip_thumb_1.jpg",
//     carousel_thumb: [
//       { id: "1", img: "/images/carousel_thumb_1.jpg" },
//       { id: "2", img: "/images/carousel_thumb_2.jpg" },
//       { id: "3", img: "/images/carousel_thumb_3.jpg" },
//     ],
//     title: "Kenya Family Safari",
//     location: "Kenya: Mara / Amboseli",
//     price: 4800,
//   },
//   {
//     id: 2,
//     tag: "Honeymoon",
//     thumb: "/images/trip_thumb_2.jpg",
//     carousel_thumb: [
//       { id: "4", img: "/images/carousel_thumb_4.jpg" },
//       { id: "5", img: "/images/carousel_thumb_5.jpg" },
//       { id: "6", img: "/images/carousel_thumb_6.jpg" },
//     ],
//     title: "Zanzibar Honeymoon",
//     location: "Zanzibar, Tanzania",
//     price: 3200,
//   },
//   // Add more trip data as needed
// ];

// export default defaultTripData;


// // 15.22
// // src/data/trip-data/DefaultTripData.ts
// const defaultTripData = [
//   {
//     id: 1,
//     tag: "Safari",
//     thumb: "/images/trip_thumb_1.jpg",
//     carousel_thumb: [
//       { id: "1", img: "/images/carousel_thumb_1.jpg" },
//       { id: "2", img: "/images/carousel_thumb_2.jpg" },
//       { id: "3", img: "/images/carousel_thumb_3.jpg" },
//     ],
//     title: "Kenya Family Safari",
//     location: "Kenya: Mara / Amboseli",
//     price: 4800,
//   },
//   {
//     id: 2,
//     tag: "Honeymoon",
//     thumb: "/images/trip_thumb_2.jpg",
//     carousel_thumb: [
//       { id: "4", img: "/images/carousel_thumb_4.jpg" },
//       { id: "5", img: "/images/carousel_thumb_5.jpg" },
//       { id: "6", img: "/images/carousel_thumb_6.jpg" },
//     ],
//     title: "Zanzibar Honeymoon",
//     location: "Zanzibar, Tanzania",
//     price: 3200,
//   },
//   // Add more trip data as needed
// ];

// export default defaultTripData;


// // 23. jul 14.19
// import { StaticImageData } from "next/image";

// import tripThumb_1 from "@/assets/images/listing/img_01.jpg";
// import tripThumb_2 from "@/assets/images/listing/img_02.jpg";
// import tripThumb_3 from "@/assets/images/listing/img_03.jpg";
// import tripThumb_4 from "@/assets/images/listing/img_04.jpg";
// import tripThumb_5 from "@/assets/images/listing/img_05.jpg";
// import tripThumb_6 from "@/assets/images/listing/img_06.jpg";

// import tripLargThumb_1 from "@/assets/images/listing/img_large_01.jpg";
// import tripLargThumb_2 from "@/assets/images/listing/img_large_02.jpg";
// import tripLargThumb_3 from "@/assets/images/listing/img_large_03.jpg";
// import tripLargThumb_4 from "@/assets/images/listing/img_large_04.jpg";
// import tripLargThumb_5 from "@/assets/images/listing/img_large_05.jpg";
// import tripLargThumb_6 from "@/assets/images/listing/img_large_06.jpg";

// import tripIcon_1 from "@/assets/images/icon/icon_04.svg";
// import tripIcon_2 from "@/assets/images/icon/icon_05.svg";
// import tripIcon_3 from "@/assets/images/icon/icon_06.svg";

// interface TripDataType {
//   id: number;
//   page: string;
//   tag: string;
//   tag_bg?: string;
//   thumb?: StaticImageData;
//   carousel_thumb: {
//     id?: string;
//     img: StaticImageData;
//     active?: string;
//   }[];
//   title: string;
//   location: string;
//   property_info: {
//     icon: StaticImageData;
//     feature: string;
//     total_feature: number;
//   }[];
//   data_delay_time?: string;
//   price: number;
//   price_text?: string;
//   carousel?: string;
// }

// const trip_data: TripDataType[] = [
//   {
//     id: 1,
//     page: "kenya_trip_1",
//     tag: "Safari",
//     thumb: tripThumb_1,
//     carousel_thumb: [
//       { id: "1", img: tripLargThumb_1, active: "active" },
//       { id: "2", img: tripLargThumb_2 },
//       { id: "3", img: tripLargThumb_3 },
//     ],
//     title: "Kenya Family Safari",
//     location: "Kenya: Mara / Amboseli",
//     property_info: [
//       { icon: tripIcon_1, feature: "sqft", total_feature: 2340 },
//       { icon: tripIcon_2, feature: "bed", total_feature: 4 },
//       { icon: tripIcon_3, feature: "bath", total_feature: 3 },
//     ],
//     price: 4800,
//     carousel: "03",
//   },
//   {
//     id: 2,
//     page: "kenya_trip_1",
//     tag: "Honeymoon",
//     thumb: tripThumb_2,
//     carousel_thumb: [
//       { id: "4", img: tripLargThumb_4 },
//       { id: "5", img: tripLargThumb_5 },
//       { id: "6", img: tripLargThumb_6 },
//     ],
//     title: "Romantic Getaway in Zanzibar",
//     location: "Zanzibar, Tanzania",
//     property_info: [
//       { icon: tripIcon_1, feature: "sqft", total_feature: 1500 },
//       { icon: tripIcon_2, feature: "bed", total_feature: 1 },
//       { icon: tripIcon_3, feature: "bath", total_feature: 1 },
//     ],
//     price: 3500,
//     carousel: "04",
//   },
//   // Add more trip data as needed
// ];

// export default trip_data;


// import { TripData } from "@/types/TripData";

// const defaultTripData: TripData[] = [
//   {
//     id: 1,
//     tag: "Popular",
//     thumb: "/images/trip_thumb_1.jpg",
//     carousel_thumb: [{ id: 1 }],
//     title: "Amazing Trip to Paris",
//     address: "Paris, France",
//     price: "1200",
//   },
//   {
//     id: 2,
//     tag: "New",
//     thumb: "/images/trip_thumb_2.jpg",
//     carousel_thumb: [{ id: 2 }],
//     title: "Explore the Alps",
//     address: "Swiss Alps, Switzerland",
//     price: "1500",
//   },
//   // Add more default data as needed
// ];

// export default defaultTripData;
