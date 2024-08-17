// // src/data/trip-data/DefaultTripData.ts
// import { TripDataType } from "@/types/TripDataType";

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

export interface TripData {
    id: number;
    tag: string;
    thumb: string;
    carousel_thumb: { id: number }[];
    title: string;
    address: string;
    price: string;
  }
  