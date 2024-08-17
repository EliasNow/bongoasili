// // 8 aug some width and height
// import tripThumb_seronera from "@/assets/images/hotels/Acacia_Collections/acacia_seronera_luxury_camp/seronera-camp-0.png";
// import tripThumb_cub from "@/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_1043_lion_cub.jpg";
// import tripThumb_elephants from "@/assets/images/hotels/Manyara's_Secret/safari/DSC3767.jpg";
// import tripThumb_girlView from "@/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_0615.jpg";
// import tripThumb_seronera_long from "@/assets/images/hotels/Acacia_Collections/acacia_seronera_luxury_camp/seronera-camp-1.png";

// const trip_listing_data = [
//   {
//     id: 1,
//     page: "listing_2",
//     tags: ["Family", "Safari", "Safari & Beach"],
//     carousel_thumb: [
//       { img: { src: tripThumb_seronera, width: 800, height: 600 }, active: "active" },
//       { img: { src: tripThumb_cub, width: 800, height: 600 } },
//       { img: { src: tripThumb_elephants, width: 800, height: 600 } },
//       { img: { src: tripThumb_girlView, width: 800, height: 600 } },
//     ],
//     title: "Family Safari: Tanzania",
//     location: "Lake Manyara, Tarangire, Serengeti, Zanzibar",
//     days: 14,
//     country: ["Tanzania"],
//     price: 5778,
//     carousel: "1",
//     status: "Available",
//     type: "Best Match",
//     inclusions: ["Guided Tours", "Meals Included", "Transportation"],
//     minimum_age: 4,
//     tailor_made: true,
//     big_five: true,
//     people: 1,
//     link: "/trips/tanzania/family-safari-tanzania",
//   },
//   {
//     id: 2,
//     page: "listing_3",
//     tags: ["Family", "Safari", "Safari & Beach"],
//     carousel_thumb: [
//       { img: { src: tripThumb_seronera_long, width: 800, height: 600 } },
//       { img: { src: tripThumb_girlView, active: "active", width: 800, height: 600 } },
//       { img: { src: tripThumb_cub, width: 800, height: 600 } },
//       { img: { src: tripThumb_elephants, width: 800, height: 600 } },
//     ],
//     title: "Family Safari: Tanzania",
//     location: "Lake Manyara, Tarangire, Serengeti, Zanzibar",
//     days: 14,
//     country: ["Tanzania"],
//     price: 5778,
//     carousel: "1",
//     status: "Available",
//     type: "Best Match",
//     inclusions: ["4x4", "Flights", "Park Fees"],
//     minimum_age: 4,
//     tailor_made: true,
//     big_five: true,
//     people: 1,
//     link: "/trips/tanzania/family-safari-tanzania",
//   },
//   {
//     id: 3,
//     page: "listing_3",
//     tags: ["Family", "Safari", "Safari & Beach"],
//     carousel_thumb: [
//       { img: { src: tripThumb_seronera, active: "active", width: 800, height: 600 } },
//       { img: { src: tripThumb_cub, width: 800, height: 600 } },
//       { img: { src: tripThumb_elephants, width: 800, height: 600 } },
//       { img: { src: tripThumb_girlView, width: 800, height: 600 } },
//     ],
//     title: "Family Safari: Kenya",
//     location: "Lake Nakuru, Masaai Mara, Mombasa",
//     days: 12,
//     country: ["Kenya"],
//     price: 4987,
//     carousel: "1",
//     status: "Available",
//     type: "Best Match",
//     inclusions: ["4x4", "Park Fees"],
//     minimum_age: 4,
//     tailor_made: true,
//     big_five: true,
//     people: 1,
//     link: "/trips/tanzania/family-safari-tanzania",
//   },
// ];
      
// export default trip_listing_data;

// 7 aug 14.50 let's import TripType from now on:
// src/data/inner-data/TripListingData.ts
import { StaticImageData } from "next/image";
import { TripType } from "@/types/TripType";

import tripThumb_seronera from "@/assets/images/hotels/Acacia_Collections/acacia_seronera_luxury_camp/seronera-camp-0.png";
import tripThumb_cub from "@/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_1043_lion_cub.jpg";
import tripThumb_elephants from "@/assets/images/hotels/Manyara's_Secret/safari/DSC3767.jpg";
import tripThumb_girlView from "@/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_0615.jpg";

import tripThumb_seronera_long from "@/assets/images/hotels/Acacia_Collections/acacia_seronera_luxury_camp/seronera-camp-1.png";


const trip_listing_data: TripType[] = [
  {
    id: 1,
    page: "listing_2",
    tags: ["Family", "Safari", "Safari & Beach"],
    carousel_thumb: [
      { img: tripThumb_seronera, active: "active" },
      { img: tripThumb_cub },
      { img: tripThumb_elephants },
      { img: tripThumb_girlView },
    ],
    title: "Family Safari: Tanzania",
    location: "Lake Manyara, Tarangire, Serengeti, Zanzibar",
    days: 14,
    country: ["Tanzania"],
    price: 5778,
    carousel: "1",
    status: "Available",
    type: "Best Match",
    inclusions: ["Guided Tours", "Meals", "Transportation"],
    minimum_age: 4,
    tailor_made: true,
    big_five: true,
    people: 1,
    link: "/trips/tanzania/family-safari-tanzania", // Add link field
  },
  {
    id: 2,
    page: "listing_3",
    tags: ["Family", "Safari", "Safari & Beach"],
    carousel_thumb: [
      { img: tripThumb_seronera_long },
      { img: tripThumb_girlView, active: "active" },
      { img: tripThumb_cub },
      { img: tripThumb_elephants },
   
    ],
    title: "Family Safari: Tanzania",
    location: "Lake Manyara, Tarangire, Serengeti, Zanzibar",
    days: 14,
    country: ["Tanzania"],
    price: 5778,
    carousel: "1",
    status: "Available",
    type: "Best Match",
    inclusions: ["4x4", "Flights", "Park Fees"],
    minimum_age: 4,
    tailor_made: true,
    big_five: true,
    people: 1,
    link: "/trips/tanzania/family-safari-tanzania",
    details: "hello",
  },
  {
    id: 3,
    page: "listing_3",
    tags: ["Family", "Safari", "Safari & Beach"],
    carousel_thumb: [
      { img: tripThumb_seronera, active: "active" },
      { img: tripThumb_cub },
      { img: tripThumb_elephants },
      { img: tripThumb_girlView },
    ],
    title: "Family Safari: Kenya",
    location: "Lake Nakuru, Masaai Mara, Mombasa",
    days: 12,
    country: ["Kenya"],
    price: 4987,
    carousel: "1",
    status: "Available",
    type: "Best Match",
    inclusions: ["4x4", "Park Fees"],
    minimum_age: 4,
    tailor_made: true,
    big_five: true,
    people: 1,
    link: "/trips/tanzania/family-safari-tanzania", // Add link field
  },
];

export default trip_listing_data;

// // 4 aug 16.52
// import { StaticImageData } from "next/image";
// import tripThumb_seronera from "@/assets/images/hotels/Acacia_Collections/acacia_seronera_luxury_camp/seronera-camp-0.png";
// import tripThumb_cub from "@/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_1043_lion_cub.jpg";
// import tripThumb_elephants from "@/assets/images/hotels/Manyara's_Secret/safari/DSC3767.jpg";
// import tripThumb_girlView from "@/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_0615.jpg";

// // Define Trip interface with the properties you need
// interface Trip {
//   id: number;
//   page: string;
//   tags: string[];
//   tag_bg?: string;
//   carousel_thumb: {
//     id?: string;
//     img: StaticImageData;
//     active?: string;
//   }[];
//   thumb?: StaticImageData;
//   bg_img?: string;
//   title: string;
//   address?: string;
//   location: string;
//   days: number;
//   country: string[];
//   price: number;
//   price_text?: string;
//   carousel?: string;
//   type: string;
//   status: string;
//   inclusions?: string[];
//   minimum_age: number;
//   tailor_made: boolean;
//   big_five: boolean;
// }

// // Define TripType with the properties you need
// interface TripType {
//   id: number;
//   page: string;
//   tags: string[];
//   tag_bg?: string;
//   carousel_thumb: {
//     id?: string;
//     img: StaticImageData;
//     active?: string;
//   }[];
//   thumb?: StaticImageData;
//   bg_img?: string;
//   title: string;
//   address?: string;
//   location: string;
//   days: number;
//   country: string[];
//   price: number;
//   price_text?: string;
//   carousel?: string;
//   type: string;
//   status: string;
//   inclusions?: string[];
//   minimum_age: number;
//   tailor_made: boolean;
//   big_five: boolean;
  
// }

// const trip_listing_data: TripType[] = [
//   {
//     id: 1,
//     page: "listing_2",
//     tags: ["Family", "Safari", "Safari & Beach"],
//     carousel_thumb: [
//       { img: tripThumb_seronera, active: "active" },
//       { img: tripThumb_cub },
//       { img: tripThumb_elephants },
//       { img: tripThumb_girlView },
//     ],
//     title: "Family Safari: Tanzania",
//     location: "Lake Manyara, Tarangire, Serengeti, Zanzibar",
//     days: 14,
//     country: ["Tanzania"],
//     price: 5778,
//     carousel: "1",
//     status: "Available",
//     type: "Best Match",
//     inclusions: ["Guided Tours", "Meals Included", "Transportation"],
//     minimum_age: 4,
//     tailor_made: true,
//     big_five: true,
//   },
// ];

// export default trip_listing_data;



// import { StaticImageData } from "next/image";

// import tripThumb_1 from "@/assets/images/listing/img_01.jpg";
// import tripThumb_2 from "@/assets/images/listing/img_02.jpg";
// import tripThumb_3 from "@/assets/images/listing/img_03.jpg";
// import tripThumb_4 from "@/assets/images/listing/img_04.jpg";
// import tripThumb_5 from "@/assets/images/listing/img_05.jpg";
// import tripThumb_6 from "@/assets/images/listing/img_06.jpg";
// import tripThumb_7 from "@/assets/images/listing/img_27.jpg";
// import tripThumb_8 from "@/assets/images/listing/img_26.jpg";
// import tripThumb_9 from "@/assets/images/listing/img_17.jpg";
// // import tripThumb_10 from "@/assets/images/listing/img_18.jpg";
// import tripThumb_10 from "@/assets/images/trips/family_safari.jpg";
// import tripThumb_11 from "@/assets/images/listing/img_19.jpg";
// import tripThumb_12 from "@/assets/images/listing/img_32.jpg";
// import tripThumb_13 from "@/assets/images/listing/img_33.jpg";
// import tripThumb_14 from "@/assets/images/listing/img_34.jpg";
// import tripThumb_15 from "@/assets/images/listing/img_30.jpg";
// import tripThumb_16 from "@/assets/images/listing/img_39.jpg";
// import tripThumb_17 from "@/assets/images/listing/img_40.jpg";
// import tripThumb_18 from "@/assets/images/listing/img_41.jpg";
// import tripThumb_19 from "@/assets/images/listing/img_42.jpg";

// import tripThumb_seronera from "@/assets/images/hotels/Acacia_Collections/acacia_seronera_luxury_camp/seronera-camp-0.png"

// // import trip
// import tripThumb_cub from "@/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_1043_lion_cub.jpg"
// import tripThumb_elephants from "@/assets/images/hotels/Manyara's_Secret/safari/DSC3767.jpg"
// import tripThumb_girlView from "@/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_0615.jpg"

// interface TripType {
//   id: number;
//   page: string;
//   tags: string[];
//   tag_bg?: string;
//   carousel_thumb: {
//     id?: string;
//     img: StaticImageData;
//     active?: string;
//   }[];
//   thumb?: StaticImageData;
//   bg_img?: string;
//   title: string;
//   address?: string;
//   location: string;
//   days: number;
//   country: string[];
//   price: number;
//   price_text?: string;
//   carousel?: string;
//   type: string;
//   status: string;
//   inclusions?: string[];
//   minimum_age: number;
//   tailor_made: boolean;
//   big_five: boolean;
// }

// const trip_listing_data: TripType[] = [
//   {
//     id: 1,
//     page: "listing_2",
//     tags: ["Family","Safari", "Safari & Beach"],
//     carousel_thumb: [{ img: tripThumb_seronera, active: "active" }, { img: tripThumb_cub }, { img: tripThumb_elephants
//      }, { img: tripThumb_girlView }],
//     title: "Family Safari: Tanzania",
//     location: "Lake Manyara, Tarangire, Serengeti, Zanzibar",
//     days: 14,
//     country: ["Tanzania"],
//     price: 5778,
//     carousel: "1",
//     status: "Available",
//     type: "Best Match",
//     inclusions: ["Guided Tours", "Meals Included", "Transportation"],
//     minimum_age: 4,
//     tailor_made: true,
//     big_five: true,
//   },
//   // {
//   //   id: 2,
//   //   page: "listing_2",
//   //   tags: ["Luxury", "Safari"],
//   //   carousel_thumb: [{ img: tripThumb_4, active: "active" }, { img: tripThumb_5 }, { img: tripThumb_6 }],
//   //   title: "Kicheche Luxury Safari",
//   //   location: "Maasai Mara, Kenya",
//   //   days: 10,
//   //   country: ["Kenya"],
//   //   price: 8000,
//   //   carousel: "2",
//   //   status: "Available",
//   //   type: "Luxury",
//   //   inclusions: ["Luxury Accommodation", "Private Guide", "All-Inclusive"],
//   //   minimum_age: 4,
//   //   tailor_made: true,
//   //   big_five: true,
//   // },
//   // {
//   //   id: 3,
//   //   page: "listing_2",
//   //   tags: ["Adventure", "Flying Safari"],
//   //   carousel_thumb: [{ img: tripThumb_7, active: "active" }, { img: tripThumb_8 }, { img: tripThumb_9 }],
//   //   title: "Flying Safari",
//   //   location: "Serengeti, Tanzania",
//   //   days: 5,
//   //   country: ["Tanzania"],
//   //   price: 3500,
//   //   carousel: "3",
//   //   status: "Available",
//   //   type: "Adventure",
//   //   inclusions: ["Flight Transfers", "Safari Tours", "Accommodation"],
//   //   minimum_age: 4,
//   //   tailor_made: true,
//   //   big_five: true,
//   // },
//   // {
//   //   id: 4,
//   //   page: "listing_2",
//   //   tags: ["Family", "Safari"],
//   //   carousel_thumb: [{ img: tripThumb_10, active: "active" }, { img: tripThumb_11 }, { img: tripThumb_12 }],
//   //   title: "Family Safari: Kenya & Tanzania",
//   //   location: "Nairobi, Kenya & Arusha, Tanzania",
//   //   days: 14,
//   //   country: ["Kenya", "Tanzania"],
//   //   price: 12000,
//   //   carousel: "4",
//   //   status: "Available",
//   //   type: "Family",
//   //   inclusions: ["Family Activities", "Guided Tours", "Meals Included"],
//   //   minimum_age: 4,
//   //   tailor_made: true,
//   //   big_five: true,
//   // },
//   // {
//   //   id: 5,
//   //   page: "listing_2",
//   //   tags: ["Migration", "Safari"],
//   //   carousel_thumb: [{ img: tripThumb_13, active: "active" }, { img: tripThumb_14 }, { img: tripThumb_15 }],
//   //   title: "Great Migration Safari",
//   //   location: "Serengeti, Tanzania",
//   //   days: 9,
//   //   country: ["Tanzania"],
//   //   price: 7000,
//   //   carousel: "5",
//   //   status: "Available",
//   //   type: "Migration",
//   //   inclusions: ["Migration Viewing", "Guided Tours", "Meals Included"],
//   //   minimum_age: 4,
//   //   tailor_made: true,
//   //   big_five: true,
//   // },
//   // {
//   //   id: 6,
//   //   page: "listing_2",
//   //   tags: ["Camping", "Safari"],
//   //   carousel_thumb: [{ img: tripThumb_16, active: "active" }, { img: tripThumb_17 }, { img: tripThumb_18 }],
//   //   title: "Camping Safari: Kenya",
//   //   location: "Maasai Mara, Kenya",
//   //   days: 7,
//   //   country: ["Kenya"],
//   //   price: 2500,
//   //   carousel: "6",
//   //   status: "Available",
//   //   type: "Camping",
//   //   inclusions: ["Camping Gear", "Guided Tours", "Meals Included"],
//   //   minimum_age: 4,
//   //   tailor_made: true,
//   //   big_five: true,
//   // },
//   // {
//   //   id: 7,
//   //   page: "listing_2",
//   //   tags: ["Adventure", "Hiking"],
//   //   carousel_thumb: [{ img: tripThumb_16, active: "active" }, { img: tripThumb_17 }, { img: tripThumb_18 }],
//   //   title: "Mount Kilimanjaro Ascent",
//   //   location: "Mount Kilimanjaro, Tanzania",
//   //   days: 9,
//   //   country: ["Tanzania"],
//   //   price: 6000,
//   //   carousel: "7",
//   //   status: "Available",
//   //   type: "Hiking",
//   //   inclusions: ["Guides", "Meals Included", "Camping Gear"],
//   //   minimum_age: 10,
//   //   tailor_made: true,
//   //   big_five: false,
//   // },
//   // {
//   //   id: 8,
//   //   page: "listing_2",
//   //   tags: ["Luxury", "Safari"],
//   //   carousel_thumb: [{ img: tripThumb_16, active: "active" }, { img: tripThumb_17 }, { img: tripThumb_18 }],
//   //   title: "South Africa & Victoria Falls",
//   //   location: "Cape Town, Kruger, Victoria Falls",
//   //   days: 9,
//   //   country: ["South Africa", "Zimbabwe"],
//   //   price: 9000,
//   //   carousel: "8",
//   //   status: "Available",
//   //   type: "Luxury",
//   //   inclusions: ["Guided Tours", "Luxury Accommodation", "Meals Included"],
//   //   minimum_age: 4,
//   //   tailor_made: true,
//   //   big_five: true,
//   // },
//   // {
//   //   id: 9,
//   //   page: "listing_2",
//   //   tags: ["Safari", "Flying Safari"],
//   //   carousel_thumb: [{ img: tripThumb_19, active: "active" }, { img: tripThumb_15 }, { img: tripThumb_18 }],
//   //   title: "Gorilla Safari: Uganda",
//   //   location: "Entebbe, Murchison Falls, Kibale, Bwindi",
//   //   days: 11,
//   //   country: ["Uganda"],
//   //   price: 7500,
//   //   carousel: "9",
//   //   status: "Available",
//   //   type: "Safari",
//   //   inclusions: ["Flight Transfers", "Gorilla Tracking Permits", "Meals Included"],
//   //   minimum_age: 4,
//   //   tailor_made: true,
//   //   big_five: true,
//   // }
// ];

// export default trip_listing_data;

