
"use client";
//note: watch out with importing components from different directories with the same name
import BLockFeatureOneHomeOne from "@/components/homes/home-one/BLockFeatureOne";
import { builder, Builder } from "@builder.io/react";
import CommonPropertyOverviewWrapper from "@/components/ListingDetails/listing-details-common/CommonPropertyOverviewWrapper";
import trip_data from "@/data/trip-data/DefaultTripData";
import TripDetailsOneAreaWrapper from "@/components/TripDetails/trip-details-1/TripDetailsOneAreaWrapper";
import AgencyFormOne from "./components/forms/AgencyFormOne";
import AgencyFormTwo from "./components/forms/AgencyFormTwo";
import AgentArea from "./components/homes/home-one/AgentArea";
import AgentAreaInnerPages from "./components/inner-pages/agent/agent/AgentArea";
import Banner from "./components/homes/home-one/Banner"; //home-one
import BLockFeatureFive from "./components/homes/home-one/BLockFeatureFive";
import BLockFeatureFour from "./components/homes/home-one/BLockFeatureFour";
// import BLockFeatureOne from "./components/homes/home-one/BLockFeatureOne";
import BLockFeatureThree from "./components/homes/home-one/BLockFeatureThree";
import BLockFeatureTwo from "./components/homes/home-one/BLockFeatureTwo";
import BlogForm from "./components/forms/BlogForm";
import BrandOne from "./components/common/brand/BrandOne";
import BrandThree from "./components/common/brand/BrandThree";
import BrandTwo from "./components/common/brand/BrandTwo";
import BreadcrumbOne from "./components/common/breadcrumb/BreadcrumbOne";
import BreadcrumbThree from "./components/common/breadcrumb/BreadcrumbThree";
import BreadcrumbTwo from "./components/common/breadcrumb/BreadcrumbTwo";
import CardStyleOne from "./components/common/CardStyleOne";
import CardStyleTwo from "./components/common/CardStyleTwo";
import CardTripOverviewAreaWrapper from "./components/Trips/card_trip_overview/CardTripOverviewAreaWrapper";
import CommonBanner from "./components/ListingDetails/listing-details-common/CommonBanner";
import CommonMainTripDescription from "./components/TripDetails/trip-details-common/CommonMainTripDescription";
import CommonPropertyOverview from "./components/ListingDetails/listing-details-common/CommonPropertyOverview";
import CommonReviewForm from "./components/ListingDetails/listing-details-common/CommonReviewForm";
import CommonSimilarTrips from "./components/ListingDetails/listing-details-common/CommonSimilarTrips";
import ContactForm from "./components/forms/ContactForm";
import Counter from "./components/Counter/Counter";
import FancyBanner from "./components/common/FancyBanner";
import FancyBannerOne from "./components/homes/home-one/FancyBannerOne";
import FancyBannerThree from "./components/homes/home-one/FancyBannerThree";
import Feedback from "./components/homes/home-one/Feedback";
// import FancyBanner from "./components/common/FancyBanner";
import FooterFour from "./layouts/footers/FooterFour";
import FooterOne from "./layouts/footers/FooterOne";
import HeaderHeader from "./layouts/headers/HeaderHeader";
import HeaderMainOne from "./layouts/headers/HeaderMainOne";
import HeaderMainTwo from "./layouts/headers/HeaderMainTwo";
import HeaderOne from "./layouts/headers/HeaderOne"; // home-one
import HeaderTwo from "./layouts/headers/HeaderTwo";
import HomeFiveBlockFeatureTwo from "./components/homes/home-five/HomeFiveBLockFeatureTwo";
import HotelAmenities from "./components/Hotels/hotel-details/HotelAmenities";
import HotelTripDetailsOneWrapper from "./components/Hotels/hotel-details/HotelTripDetailsOneWrapper";
import ListingDetailsFiveArea from "./components/ListingDetails/listing-details-5/ListingDetailsFiveArea";
import ListingDetailsOne from "./components/ListingDetails/listing-details-1/index";
import ListingDetailsOneArea from "./components/ListingDetails/listing-details-1/ListingDetailsOneArea";
import ListingDetailsOneAreaWrapper from "./components/ListingDetails/listing-details-1/ListingDetailsOneAreaWrapper";
import ListingDetailsTwoArea from "./components/ListingDetails/listing-details-2/ListingDetailsTwoArea";
import MediaGallery from "./components/ListingDetails/listing-details-1/MediaGallery";
import NavMenuWithChildren from "./components/Menu/NavMenuWithChildren";
// import NavMenu from "./components/Menu/NavMenu";
import Property from "./components/homes/home-one/Property";
import Review from "./components/inner-pages/agency/agency-details/Review";
import Sidebar from "./components/ListingDetails/listing-details-1/Sidebar";
import TripInclusions from "./components/TripDetails/trip-details-1/TripInclusions";
import VideoPopup from "./modals/VideoPopup";
// import TripDetailsScheduleForm from "./components/TripDetails/trip-details-sidebar/TripDetailsScheduleForm";
import YourJourneyMap from "./components/TripDetails/trip-details-common/YourJourneyMap";
import TripOverviewAreaWrapper from "./components/Trips/trip_overview/TripOverviewAreaWrapper";
import TripCard from "./components/Trips/TripCard";
import TripList from "./components/Trips/TripList";
import trip_listing_data from "./data/inner-data/TripListingData";
import CardTripOverviewArea from "./components/Trips/card_trip_overview/CardTripOverviewArea";

import awesome_thumb from "@/assets/images/hotels/Sarova/Sarova_Stanley/Sarova_Stanley_Front_View.jpeg";
import VideoBackground from "./components/video/VideoBackground";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// 18 aug has aws cloudfront url hardcoded
// Builder.registerComponent(VideoBackground, {
//   name: 'VideoBackground',
//   inputs: [
//     {
//       name: 'videoUrl',
//       type: 'url',
//       defaultValue: 'https://d4he32tg3z2m0.cloudfront.net/Serengeti_vid_cut.mp4', // Default video URL
//       required: true,
//       friendlyName: 'Video URL',
//     },
//     {
//       name: 'autoPlay',
//       type: 'boolean',
//       defaultValue: true,
//       friendlyName: 'Auto Play',
//     },
//     {
//       name: 'muted',
//       type: 'boolean',
//       defaultValue: true,
//       friendlyName: 'Muted',
//     },
//     {
//       name: 'loop',
//       type: 'boolean',
//       defaultValue: true,
//       friendlyName: 'Loop',
//     },
//   ],
// });

Builder.registerComponent(TripList, {
  name: 'TripList',
  inputs: [
    {
      name: 'trips',
      type: 'list',
      subFields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'days', type: 'number' },
        { name: 'price', type: 'number' },
        { name: 'details', type: 'string' },
        // { name: 'inclusions', type: 'list', subFields: [{
        //   name: "inclusion",
        //   type: 'string',
        // }] },
        { name: 'link', type: 'string' },
        {
          name: 'carousel_thumb',
          type: 'list',
          subFields: [
            {
              name: 'img',
              type: 'file',
              allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
            },
            { name: 'active', type: 'string' },
          ],
        },
      ],
      defaultValue: trip_listing_data,
    },
    { name: 'style', type: 'boolean', defaultValue: false },
  ],
});

const defaultTrip = trip_listing_data[0];

// 19.08 11 aug 
Builder.registerComponent(TripCard, {
  name: 'TripCard',
  inputs: [
    {
      name: 'trip',
      type: 'object',
      subFields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'days', type: 'number' },
        { name: 'price', type: 'number' },
        // { name: 'inclusions', type: 'list', subFields: [{ name: "inclusion", type: 'string'}] },
        { name: "details", type: "string"},
        { name: 'link', type: 'string' },
        // { name: 'tags', type: 'list', subFields: [{ name: "tag", type: "string" }] },
        {
          name: 'carousel_thumb',
          type: 'list',
          subFields: [
            { name: 'img', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
            { name: 'active', type: 'string' },
          ],
        },
        // { name: "details", type: "list", subFields: [{name: "detail", type: "string"}]},
      ],
      defaultValue: trip_listing_data[0],
    },
    { name: 'style', type: 'boolean', defaultValue: false },
  ],
});

// 11 aug 18.20 separate fields:
// Builder.registerComponent(TripCard, {
//   name: 'TripCard',
//   inputs: [
//     { name: 'id', type: 'number', defaultValue: trip_listing_data[0].id },
//     { name: 'title', type: 'string', defaultValue: trip_listing_data[0].title },
//     { name: 'location', type: 'string', defaultValue: trip_listing_data[0].location },
//     { name: 'days', type: 'number', defaultValue: trip_listing_data[0].days },
//     { name: 'price', type: 'number', defaultValue: trip_listing_data[0].price },
//     { 
//       name: 'inclusions', 
//       type: 'list', 
//       subFields: [{ type: 'string', name: "" }],
//       defaultValue: trip_listing_data[0].inclusions,
//     },
//     { name: 'link', type: 'string', defaultValue: trip_listing_data[0].link },
//     { 
//       name: 'tags', 
//       type: 'list', 
//       subFields: [{ type: 'string', name: "" }],
//       defaultValue: trip_listing_data[0].tags,
//     },
//     { 
//       name: 'carousel_thumb', 
//       type: 'list', 
//       subFields: [
//         { 
//           name: 'img', 
//           type: 'file', 
//           allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
//           defaultValue: trip_listing_data[0].carousel_thumb[0]?.img,
//         },
//         { name: 'active', type: 'string', defaultValue: trip_listing_data[0].carousel_thumb[0]?.active },
//       ],
//     },
//     { name: 'style', type: 'boolean', defaultValue: false },
//     { name: 'flightPath', type: 'string', defaultValue: 'DAR-ZNZ-DAR' },
//   ],
// });



// Builder.registerComponent(TripCard, {
//   name: 'TripCard',
//   inputs: [
//         { name: 'style', type: 'boolean', defaultValue: false },
//         { name: 'id', type: 'number' },
//         { name: 'title', type: 'string' },
//         // { name: 'trip', type: 'TripType', defaultValue: trip_listing_data[1] }, // doesn't work
//         // { name: 'location', type: 'string' },
//         { name: 'days', type: 'number' },
//         { name: 'price', type: 'number' },
//         // { name: 'inclusions', type: 'list', subFields: [{ type: 'string', name: "" }] },
//         { name: 'link', type: 'string' },
//         // { name: 'tags', type: 'list', subFields: [{ type: 'string', name: "" }] },
//         {
//           name: 'carousel_thumb',
//           type: 'list',
//           subFields: [
//             { name: 'img', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
//             { name: 'active', type: 'string' },
//           ],
//         },
//       // defaultValue: trip_listing_data[1], // has long seronera image
//     // { name: 'flightPath', type: 'string', defaultValue: 'DAR-ZNZ-DAR' },
//   ],
// });

// Builder.registerComponent(TripCard, {
//   name: 'TripCard',
//   inputs: [
//     {
//       name: 'trip',
//       type: 'object',
//       subFields: [
//         { name: 'id', type: 'number' },
//         { name: 'title', type: 'string' },
//         { name: 'location', type: 'string' },
//         { name: 'days', type: 'number' },
//         { name: 'price', type: 'number' },
//         { name: 'inclusions', type: 'list', subFields: [{ type: 'string', name: "" }] },
//         // { name: 'link', type: 'string' },
//         { name: 'tags', type: 'list', subFields: [{ type: 'string', name: "" }] },
//         {
//           name: 'carousel_thumb',
//           type: 'list',
//           subFields: [
//             { name: 'img', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
//             { name: 'active', type: 'string' },
//           ],
//         },
//       ],
//       defaultValue: trip_listing_data[0],
//     },
//     { name: 'style', type: 'boolean', defaultValue: false },
//     { name: 'flightPath', type: 'string', defaultValue: 'DAR-ZNZ-DAR' },
//   ],
// });

// Builder.registerComponent(TripCard, {
//   name: "TripCard",
//   inputs: [
//     // Directly define each input prop without using an object structure
//     { name: "title", type: "string", defaultValue: "Family Safari: Tanzania" },
//     { name: "location", type: "string", defaultValue: "Lake Manyara, Tarangire, Serengeti, Zanzibar" },
//     { name: "days", type: "number", defaultValue: 14 },
//     { name: "price", type: "number", defaultValue: 5778 },
//     {
//       name: "inclusions",
//       type: "list",
//       subFields: [{ type: "string", name: "Inclusion" }],
//       defaultValue: ["Guided Tours", "Meals Included", "Transportation"],
//     },
//     { name: "link", type: "string", defaultValue: "/trips/tanzania/family-safari-tanzania" },
//     {
//       name: "tags",
//       type: "list",
//       subFields: [{ type: "string", name: "Tag" }],
//       defaultValue: ["Family", "Safari", "Safari & Beach"],
//     },
//     {
//       name: "carousel_thumb",
//       type: "file",
//       allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
//       defaultValue: awesome_thumb,
//     },
//     { name: "style", type: "boolean", defaultValue: false },
//   ],
// });

// Builder.registerComponent(TripCard, {
//   name: 'TripCard',
//   inputs: [
//     {
//       name: 'trip',
//       type: 'object',
//       subFields: [
//         { name: 'id', type: 'number' },
//         { name: 'title', type: 'string' },
//         { name: 'location', type: 'string' },
//         { name: 'days', type: 'number' },
//         { name: 'price', type: 'number' },
//         { name: 'inclusions', type: 'list', subFields: [{ type: 'string', name: "" }] },
//         // { name: 'link', type: 'string' },
//         { name: 'tags', type: 'list', subFields: [{ type: 'string', name: "" }] },
//         {
//           name: 'carousel_thumb',
//           type: 'list',
//           subFields: [
//             { name: 'img', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
//             { name: 'active', type: 'string' },
//           ],
//         },
//       ],
//       defaultValue: trip_listing_data[0],
//     },
//     { name: 'style', type: 'boolean', defaultValue: false },
//     // { name: 'flightPath', type: 'string', defaultValue: 'DAR-ZNZ-DAR' },
//   ],
// });

Builder.registerComponent(CardTripOverviewArea, {
  name: 'CardTripOverviewArea',
  inputs: [
    { name: 'style', type: 'boolean', defaultValue: false },
    { name: 'page', type: 'string', defaultValue: "listing_2" },
    { name: 'itemsPerPage', type: 'number', defaultValue: 5 },
    {
      name: 'trips',
      type: 'list',
      subFields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'days', type: 'number' },
        { name: 'price', type: 'number' },
        { name: 'details', type: 'string' },
        // {
        //   name: 'inclusions',
        //   type: 'list',
        //   subFields: [{ name: 'inclusion', type: 'string' }],
        // },
        { name: 'link', type: 'string' },
        // { name: 'flightPath', type: 'string', defaultValue: 'DAR-ZNZ-DAR' },
        {
          name: 'carousel_thumb',
          type: 'list',
          subFields: [
            {
              name: 'img',
              type: 'file',
              allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
            },
            { name: 'active', type: 'string' },
          ],
        },
      ],
      defaultValue: trip_listing_data,
    },
  ],
});

Builder.registerComponent(CardTripOverviewAreaWrapper, {
  name: 'CardTripOverviewAreaWrapper',
  inputs: [
    { name: 'style', type: 'boolean', defaultValue: false },
    { name: 'page', type: 'string', defaultValue: "listing_2" },
    { name: 'itemsPerPage', type: 'number', defaultValue: 5 },
    {
      name: 'trips',
      type: 'list',
      subFields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'days', type: 'number' },
        { name: 'price', type: 'number' },
        { name: 'details', type: 'string' },
        // {
        //   name: 'inclusions',
        //   type: 'list',
        //   subFields: [{ name: 'inclusion', type: 'string' }],
        // },
        // { name: 'link', type: 'string' },
        // { name: 'flightPath', type: 'string', defaultValue: 'DAR-ZNZ-DAR' },
        {
          name: 'carousel_thumb',
          type: 'list',
          subFields: [
            {
              name: 'img',
              type: 'file',
              allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
            },
            { name: 'active', type: 'string' },
          ],
        },
      ],
      defaultValue: trip_listing_data,
    },
  ],
});

// just the wrapper (not passing props)
Builder.registerComponent(TripOverviewAreaWrapper, {
  name: "TripOverviewAreaWrapper",
});
// Builder.registerComponent(TripOverviewAreaWrapper, {
//   name: "TripOverviewAreaWrapper",
//   inputs: [
//     {
//       name: "trips",
//       type: "list",
//       subFields: [
//         { name: "id", type: "number", defaultValue: 1 },
//         { name: "tag", type: "string", defaultValue: "Safari" },
//         { name: "title", type: "string", defaultValue: "Kenya Dream Safari" },
//         { name: "address", type: "string", defaultValue: "Kenya" },
//         { name: "price", type: "number", defaultValue: 3500 },
//         { name: "price_text", type: "string", defaultValue: "p.p." },
//         {
//           name: "property_info",
//           type: "object",
//           subFields: [
//             { name: "sqft", type: "number", defaultValue: 500 },
//             { name: "bed", type: "number", defaultValue: 2 },
//             { name: "bath", type: "number", defaultValue: 1 },
//           ],
//         },
//         {
//           name: "carousel_thumb",
//           type: "list",
//           subFields: [
//             { name: "img", type: "file", defaultValue: bigCarousel_1.src },
//             { name: "active", type: "string", defaultValue: "active" },
//           ],
//         },
//       ],
//       defaultValue: [
//         {
//           id: 1,
//           tag: "Safari",
//           title: "Kenya Dream Safari",
//           address: "Kenya",
//           price: 3500,
//           price_text: "p.p.",
//           property_info: {
//             sqft: 500,
//             bed: 2,
//             bath: 1,
//           },
//           carousel_thumb: [
//             { img: bigCarousel_1.src, active: "active" },
//             { img: bigCarousel_2.src, active: "" },
//             { img: bigCarousel_3.src, active: "" },
//             { img: bigCarousel_4.src, active: "" },
//           ],
//         },
//         // Add more trips as needed
//       ],
//     },
//   ],
// });

Builder.registerComponent(HotelAmenities, {
  name: "HotelAmenities",
  inputs: [
    {
      name: "amenities",
      type: "list",
      subFields: [{ name: "amenity", type: "string" }],
    },
  ],
});

Builder.registerComponent(TripInclusions, {
  name: "TripInclusions",
  inputs: [
    {
      name: "inclusions",
      type: "list",
      subFields: [{ name: "inclusion", type: "string" }],
    },
  ],
});
// Register the HotelTripDetailsOneWrapper component with Builder.io

Builder.registerComponent(HotelTripDetailsOneWrapper, {
  name: "HotelTripDetailsOneWrapper",
  inputs: [
    // CommonHotelBanner
    { name: "hotelName", type: "string", defaultValue: "Sarova Stanley" },
    { name: "hotelLocation", type: "string", defaultValue: "Kenya" },
    {
      name: "hotelSpecificLocation",
      type: "string",
      defaultValue: "Nairobi, Kenya",
    },
    {
      name: "bigCarousel",
      type: "list",
      subFields: [
        { name: "src", type: "file", allowedFileTypes: ["jpg", "png"] },
      ],
    },
    {
      name: "smallCarousel",
      type: "list",
      subFields: [
        { name: "src", type: "file", allowedFileTypes: ["jpg", "png"] },
      ],
    },
    {
      name: "mainTripDescriptionTitle",
      type: "string",
      defaultValue: "Overview",
    },
    {
      name: "mainTripDescription",
      type: "html",
      defaultValue:
        "<p>Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.</p>",
    },
    {
      name: "primaryInfoTitle",
      type: "string",
      defaultValue: "Highlights @",
    },
    {
      name: "tripOverviewData",
      type: "list",
      subFields: [
        { name: "id", type: "number" },
        { name: "icon", type: "file", allowedFileTypes: ["svg", "png"] },
        { name: "title", type: "string" },
      ],
    },
    {
      name: "similarTripsTitle",
      type: "string",
      defaultValue: "Similar Trips You May Like",
    },
    {
      name: "amenities",
      type: "list",
      subFields: [{ name: "amenity", type: "string", defaultValue: "Wifi" }],
    },
    { name: "mapTitle", type: "string", defaultValue: "Your Safari" },
    { name: "hotelMapTitle", type: "string", defaultValue: "Hotel Location" },
    { name: "hotelMapAddress", type: "string", defaultValue: "Nairobi Kenya" },
  ],
});

Builder.registerComponent(YourJourneyMap, {
  name: "YourJourneyMap",
  inputs: [
    { name: "title", type: "string", defaultValue: "Your Safari" },
    {
      name: "mapSrc",
      type: "string",
      defaultValue:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd",
    },
  ],
});

Builder.registerComponent(CommonMainTripDescription, {
  name: "CommonMainTripDescription",
  inputs: [
    { name: "title", type: "string", defaultValue: "Overview" },
    {
      name: "description",
      type: "richText",
      defaultValue:
        "<p>Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.</p>",
    },
  ],
});

Builder.registerComponent(CommonSimilarTrips, {
  name: "CommonSimilarTrips",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Similar Trips You May Like",
    },
    {
      name: "trips",
      type: "list",
      subFields: [
        { name: "id", type: "number" },
        { name: "tag", type: "string" },
        {
          name: "thumb",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
        },
        {
          name: "carousel_thumb",
          type: "list",
          subFields: [
            { name: "id", type: "string" },
            {
              name: "img",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png"],
            },
          ],
        },
        { name: "title", type: "string" },
        { name: "location", type: "string" },
        { name: "price", type: "number" },
      ],
      defaultValue: trip_data,
    },
  ],
});
// 30 jul 14.06

Builder.registerComponent(TripDetailsOneAreaWrapper, {
  name: "TripDetailsOneAreaWrapper",
  inputs: [
    { name: "title", type: "string", defaultValue: "Kenya Dream Safari" },
    { name: "location", type: "string", defaultValue: "Kenya" },
    { name: "parks", type: "string", defaultValue: "Mara / Amboseli" },
    { name: "price", type: "string", defaultValue: "Price: $3,500 p.p." },
    {
      name: "extras",
      type: "string",
      defaultValue: "Est. extras: $400* visa, drinks, tips, souvenirs",
    },
    {
      name: "bigCarousel",
      type: "list",
      subFields: [{ name: "src", type: "file" }],
    },
    {
      name: "smallCarousel",
      type: "list",
      subFields: [{ name: "src", type: "file" }],
    },
    {
      name: "mainTripDescriptionTitle",
      type: "string",
      defaultValue: "Overview",
    },
    {
      name: "mainTripDescription",
      type: "richText",
      defaultValue:
        "<p>Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.</p>",
    },
    {
      name: "primaryInfoTitle",
      type: "string",
      defaultValue: "Trip Overview",
    },
    {
      name: "tripOverviewData",
      type: "list",
      subFields: [
        { name: "id", type: "number" },
        { name: "icon", type: "file" },
        { name: "title", type: "string" },
      ],
    },
    {
      name: "tripDaysData",
      type: "list",
      subFields: [
        { name: "id", type: "number" },
        { name: "title", type: "string" },
        { name: "description", type: "string" },
      ],
      // defaultValue: [
      //   {
      //     id: 101,
      //     title: "Day 1: Arrival in Nairobi @Stanley Sarova",
      //     description: "You'll be greeted by us at Jomo Kenyatta International Airport (NBO). We've got a visit planned to Sheldrick's Elephant Orphanage. Dinner will be at the infamous Carnivore restaurant. Where they'll keep bringing you feed till you surrender (literally!; you'll have to put down the flag mounted on your table)",
      //   },
      //   {
      //     id: 102,
      //     title: "Day 2: Maasai Mara @Mara Kicheche",
      //     description: "We'll drive to Mara today and make our first real game drive, exciting!",
      //   },
      //   {
      //     id: 103,
      //     title: "Day 3: Amboseli @Tawi Lodge",
      //     description: "The home of Elephant. If you're lucky you'll capture the perfect picture with a Mt. Kilimanjaro backdrop.",
      //   },
      // ],
      defaultValue: [
        {
          id: 101,
          title:
            "Day 1: Amsterdam - Kilimanjaro International Airport (JRO) - Arusha @Serena",
          description:
            "Depart Amsterdam on a KLM flight to Kilimanjaro International Airport. Upon arrival, a personal guide will welcome you and facilitate your transfer to the Arusha Serena Hotel. This 4-star establishment, situated near Arusha and close to the airport, offers comfortable bed and breakfast lodging. More details can be found at Serena Hotels.",
        },
        {
          id: 102,
          title: "Day 2: Arusha - Tarangire National Park @Acacia",
          description:
            "After breakfast, your guide will brief you before you depart for Tarangire National Park. The drive features a rich tapestry of agricultural lands and arid regions, dotted with Maasai herding livestock. You\u2019ll have opportunities to stop for photos along this picturesque route. Your first safari in Tarangire awaits in the afternoon, where elephants and diverse wildlife abound. Tonight, you\u2019ll rest at Acacia Tarangire Luxury Lodge, a tented lodge blending luxury with a wilderness feel. More information is available at Acacia Collections.",
        },
        {
          id: 103,
          title: "Day 3: Tarangire National Park @Acacia",
          description:
            "Embark on an early morning game drive to see the active wildlife at sunrise. Enjoy the vast open plains and the rich animal sightings. You'll spend another serene night at Acacia Tarangire Luxury Camp, nestled in the heart of the park.",
        },
        {
          id: 104,
          title: "Day 4: Tarangire - Lake Manyara @Manyara's Secret",
          description:
            "Journey to Lake Manyara National Park, renowned for its flocks of flamingos and dense wildlife populations. The drive is short, allowing ample time to explore and enjoy the park\u2019s offerings. Stay at Manyara Secrets Lodge, where you can unwind with a view over the park and perhaps venture out to a local Maasai village or cycle through the savannah.",
        },
        {
          id: 105,
          title: "Day 5: Lake Manyara @Manyara's Secret",
          description:
            "Start with an early game drive, then the day is yours to relax by the pool or engage in other activities. An evening game drive concludes your day, maximizing your wildlife encounters. Overnight at Manyara Secrets Lodge.",
        },
        {
          id: 106,
          title: "Day 6: Lake Manyara - Serengeti @Acacia Seronera",
          description:
            "Set off early for Serengeti National Park. The drive through the park to Seronera, the heart of the Serengeti, is scenic and filled with potential animal sightings. Your accommodation at Acacia Seronera Luxury Camp offers a quiet, intimate setting, perfect for experiencing the natural beauty and sounds of the Serengeti.",
        },
        {
          id: 107,
          title: "Day 7: Serengeti National Park @Acacia Seronera",
          description:
            "Spend another full day in the Serengeti National Park with morning and afternoon game drives. Explore the vast savannahs and experience the rich wildlife. Relax and enjoy the amenities at the Acacia Seronera Luxury Camp, where you can unwind in comfort after your safari adventures.",
        },
        {
          id: 108,
          title: "Day 8: Serengeti - Ngorongoro @Ngorongoro Serena",
          description:
            "Depart from the Serengeti to the Ngorongoro Crater, known for its dense concentration of wildlife. Arrive in time for lunch at the Ngorongoro Serena Safari Lodge, positioned on the crater\u2019s rim with stunning views.",
        },
        {
          id: 109,
          title: "Day 9: Ngorongoro @Ngorongoro Serena",
          description:
            "After breakfast, descend into the Ngorongoro Crater for a comprehensive game drive where you can see buffalo, elephants, zebras, giraffes, lions, and more. A picnic lunch will be enjoyed within the crater. You are limited to a six-hour stay in the crater due to its popularity. Return to the comfort of the Ngorongoro Serena Safari Lodge for the evening.",
        },
        {
          id: 1010,
          title: "Day 10: Ngorongoro - Arusha - Zanzibar @Ocean Paradise",
          description:
            "Transfer to Arusha's local airport for your flight to Zanzibar. Upon arrival, head to the Ocean Paradise Resort & Spa for a relaxing beach holiday. Settle into this beachfront resort on the East Coast of Zanzibar, designed in traditional Swahili style, and start your seaside relaxation.",
        },
        {
          id: 1011,
          title: "Day 11: Zanzibar @Ocean Paradise",
          description:
            "Enjoy a full day at your leisure at the Ocean Paradise Resort & Spa. Take advantage of the resort's extensive facilities and beautiful beachfront location.",
        },
        {
          id: 1012,
          title: "Day 12: Zanzibar @Ocean Paradise",
          description:
            "Continue your relaxation or explore more of what Zanzibar has to offer. The resort's amenities provide perfect options for both leisure and adventure.",
        },
        {
          id: 1013,
          title: "Day 13: Zanzibar (ZNZ) - Amsterdam (AMS)",
          description:
            "After a morning at leisure, transfer to Zanzibar airport for your KLM flight back to Amsterdam.",
        },
        {
          id: 1014,
          title: "Day 14: Arrival at Schiphol in Amsterdam (AMS)",
          description:
            "Arrive back in Amsterdam, concluding your journey filled with unforgettable experiences and memories.",
        },
      ],
    },
    {
      name: "similarTripsTitle",
      type: "string",
      defaultValue: "Similar Trips You May Like",
    },
    {
      name: "trips",
      type: "list",
      subFields: [
        { name: "id", type: "number" },
        { name: "tag", type: "string" },
        {
          name: "thumb",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
        },
        {
          name: "carousel_thumb",
          type: "list",
          subFields: [
            { name: "id", type: "string" },
            {
              name: "img",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
            },
          ],
        },
        { name: "title", type: "string" },
        { name: "location", type: "string" },
        { name: "price", type: "number" },
      ],
    },
    {
      name: "inclusions",
      type: "list",
      subFields: [{ name: "inclusion", type: "string", defaultValue: "Wifi" }],
    },
    { name: "mapTitle", type: "string", defaultValue: "Your Safari" },
    {
      name: "mapSrc",
      type: "string",
      defaultValue:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd",
    },
    { name: "contactName", type: "string", defaultValue: "Andrew" },
    { name: "contactRole", type: "string", defaultValue: "Travel Director" },
    { name: "contactLocation", type: "string", defaultValue: "Amsterdam, NL" },
    {
      name: "contactEmail",
      type: "string",
      defaultValue: "andrew@bongoasili.com",
    },
    { name: "contactPhone", type: "string", defaultValue: "+31 6 12345678" },
    {
      name: "features",
      type: "list",
      subFields: [
        { name: "id", type: "number" },
        {
          name: "thumb",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp", "avif"],
        },
        // { name: "class_name", type: "string", defaultValue: "" },
        {
          name: "large_thumb",
          type: "list",
          subFields: [
            {
              name: "src",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "webp", "avif"],
            },
          ],
        },
        { name: "tag", type: "string" },
        { name: "property_name", type: "string" },
        { name: "address", type: "string" },
        { name: "link", type: "string", defaultValue: "/listing_details_03" }, // New link field
      ],
      defaultValue: [
        {
          id: 1,
          thumb:
            "/assets/images/hotels/Serena/Serena_Arusha/lakedulutiserena-33.avif",
          large_thumb: [
            { src: "/assets/images/listing/img_large_01.jpg" },
            { src: "/assets/images/listing/img_large_02.jpg" },
            { src: "/assets/images/listing/img_large_03.jpg" },
          ],
          tag: "Arusha",
          property_name: "Arusha Serena Hotel",
          address: "Tengeru Rd, Arusha",
        },
        {
          id: 2,
          thumb:
            "/assets/images/hotels/Serena/Serena_Arusha/lakedulutiserena-33.avif",
          large_thumb: [
            { src: "/assets/images/listing/img_large_01.jpg" },
            { src: "/assets/images/listing/img_large_02.jpg" },
            { src: "/assets/images/listing/img_large_03.jpg" },
          ],
          tag: "Arusha",
          property_name: "Serena Arusha",
          address: "Tengeru Rd, Tanzania",
        },
        {
          id: 3,
          thumb: "/assets/images/listing/img_15.jpg",
          large_thumb: [
            { src: "/assets/images/listing/img_large_01.jpg" },
            { src: "/assets/images/listing/img_large_02.jpg" },
            { src: "/assets/images/listing/img_large_03.jpg" },
          ],
          tag: "Amboseli",
          property_name: "Hotel Amboseli",
          address: "120 Elgin St. Celina, Delaware",
        },
        {
          id: 4,
          thumb: "/assets/images/listing/img_15.jpg",
          large_thumb: [
            { src: "/assets/images/listing/img_large_01.jpg" },
            { src: "/assets/images/listing/img_large_02.jpg" },
            { src: "/assets/images/listing/img_large_03.jpg" },
          ],
          tag: "Amboseli",
          property_name: "Hotel Amboseli",
          address: "Sweden",
        },
        {
          id: 5,
          thumb: "/assets/images/hotels/Sarova_Stanley_Front_View.jpeg",
          large_thumb: [
            { src: "/assets/images/listing/img_large_01.jpg" },
            { src: "/assets/images/listing/img_large_02.jpg" },
            { src: "/assets/images/listing/img_large_03.jpg" },
          ],
          tag: "Nairobi",
          property_name: "Sarova Stanley",
          address: "Kimathi Street, Nairobi",
        },
      ],
    },
  ],
});

Builder.registerComponent(CommonPropertyOverview, {
  name: "CommonPropertyOverview",
  inputs: [
    {
      name: "propertyOverviewData",
      type: "list",
      subFields: [
        { name: "id", type: "number" },
        {
          name: "icon",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
          required: true,
          defaultValue: "/default-icon.svg",
        },
        { name: "title", type: "string" },
      ],
    },
  ],
});

Builder.registerComponent(CommonPropertyOverviewWrapper, {
  name: "CommonPropertyOverview",
  inputs: [
    {
      name: "propertyOverviewData",
      type: "list",
      subFields: [
        { name: "id", type: "number", required: true },
        {
          name: "icon",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
          required: true,
        },
        { name: "title", type: "string", required: true },
      ],
      defaultValue: [
        { id: 1, icon: "/default-icon.svg", title: "Default Title 1" },
        { id: 2, icon: "/default-icon.svg", title: "Default Title 2" },
        { id: 3, icon: "/default-icon.svg", title: "Default Title 3" },
      ],
    },
  ],
});

Builder.registerComponent(HeaderOne, {
  name: "HeaderOne",
  inputs: [
    {
      name: "style",
      type: "boolean",
      defaultValue: true,
    },
  ],
});

Builder.registerComponent(HeaderMainOne, {
  name: "HeaderMainOne",
  inputs: [
    {
      name: "style",
      type: "boolean",
      defaultValue: true,
    },
  ],
});

Builder.registerComponent(ListingDetailsOne, {
  name: "ListingDetailsOne",
});

Builder.registerComponent(ListingDetailsOneArea, {
  name: "ListingDetailsOneArea",
});
// 19.04 takes default images now:

Builder.registerComponent(MediaGallery, {
  name: "MediaGallery",
  inputs: [
    {
      name: "bigCarousel",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
          required: true,
          defaultValue: "/default-image.jpg",
        },
      ],
    },
    {
      name: "smallCarousel",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
          required: true,
          defaultValue: "/default-thumbnail.jpg",
        },
      ],
    },
    { name: "style", type: "boolean", defaultValue: false },
  ],
});

Builder.registerComponent(ListingDetailsOneAreaWrapper, {
  name: "ListingDetailsOneAreaWrapper",
  inputs: [
    { name: "title", type: "string", defaultValue: "Kenya Dream Safari" },
    { name: "location", type: "string", defaultValue: "Kenya" },
    { name: "price", type: "string", defaultValue: "Price: $3,500 p.p." },
    {
      name: "extras",
      type: "string",
      defaultValue: "Est. extras: $400* visa, drinks, tips, souvenirs",
    },
    { name: "style_3", type: "boolean", defaultValue: false },
    {
      name: "bigCarousel",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp", "string"],
          required: true,
          defaultValue: "/default-image.jpg",
        },
      ],
    },
    {
      name: "smallCarousel",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp", "string"],
          required: true,
          defaultValue: "/default-thumbnail.jpg",
        },
      ],
    },
    {
      name: "propertyOverviewData",
      type: "list",
      subFields: [
        { name: "id", type: "number", required: true, defaultValue: 1 },
        {
          name: "icon",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp", "string"],
          required: true,
          defaultValue: "/default-icon.svg",
        },
        {
          name: "title",
          type: "string",
          required: true,
          defaultValue: "Default Title",
        },
      ],
    },
    { name: "primaryInfoTitle", type: "string", defaultValue: "Trip Overview" }, // Add primaryInfoTitle
  ],
});
// new common banner 19 jul 16.29
// trying to make listing_details_01 dynamic

Builder.registerComponent(CommonBanner, {
  name: "CommonBanner",
  inputs: [
    { name: "title", type: "string", defaultValue: "Kenya Dream Safari" },
    { name: "location", type: "string", defaultValue: "Kenya" },
    { name: "price", type: "string", defaultValue: "Price: $3,500 p.p." },
    {
      name: "extras",
      type: "string",
      defaultValue: "Est. extras: $400* visa, drinks, tips, souvenirs",
    },
    { name: "style_3", type: "boolean", defaultValue: false },
  ],
});

Builder.registerComponent(Sidebar, {
  name: "Sidebar",
});

Builder.registerComponent(Review, {
  name: "Review",
  inputs: [
    {
      name: "style",
      type: "boolean",
      defaultValue: true,
    },
  ],
});

Builder.registerComponent(FooterFour, {
  name: "FooterFour",
});

Builder.registerComponent(HomeFiveBlockFeatureTwo, {
  name: "HomeFiveBlockFeatureTwo",
  inputs: [
    {
      name: "featureItems",
      type: "list",
      subFields: [
        { name: "id", type: "number", required: true },
        { name: "title", type: "string", required: true },
        { name: "desc", type: "text", required: true },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "png", "gif"],
          required: true,
        },
        { name: "link", type: "url", required: true },
        { name: "data_delay_time", type: "string", required: true },
        { name: "item_bg", type: "string", required: true },
      ],
      required: true,
      defaultValue: [
        {
          id: 1,
          title: "Default Title",
          desc: "Default Description",
          image: "default-image.jpg",
          link: "/default-link",
          data_delay_time: "0s",
          item_bg: "default-bg",
        },
      ],
    },
    {
      name: "sectionTitle",
      type: "string",
      required: true,
      defaultValue: "Popular Destinations",
    },
    {
      name: "buttonText",
      type: "string",
      required: true,
      defaultValue: "Explore All",
    },
    {
      name: "buttonLink",
      type: "url",
      required: true,
      defaultValue: "/listing_04",
    },
    {
      name: "style",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(AgencyFormOne, {
  name: "AgencyFormOne",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(AgentAreaInnerPages, {
  name: "AgentAreaInnerPages",
});

Builder.registerComponent(AgencyFormTwo, {
  name: "AgencyFormTwo",
});

Builder.registerComponent(Banner, {
  name: "Banner",
});

Builder.registerComponent(BLockFeatureFive, {
  name: "BLockFeatureFive",
});

Builder.registerComponent(BLockFeatureFour, {
  name: "BLockFeatureFour",
});

Builder.registerComponent(BLockFeatureOneHomeOne, {
  name: "BLockFeatureOne",
});

Builder.registerComponent(BLockFeatureTwo, {
  name: "BLockFeatureTwo",
});

Builder.registerComponent(BlogForm, {
  name: "BlogForm",
});

Builder.registerComponent(BrandOne, {
  name: "BrandOne",
});

Builder.registerComponent(BrandThree, {
  name: "BrandThree",
});

Builder.registerComponent(BrandTwo, {
  name: "BrandTwo",
});

Builder.registerComponent(BreadcrumbOne, {
  name: "BreadcrumbOne",
});

Builder.registerComponent(BreadcrumbThree, {
  name: "BreadcrumbThree",
});

Builder.registerComponent(BreadcrumbTwo, {
  name: "BreadcrumbTwo",
});

Builder.registerComponent(CardStyleOne, {
  name: "CardStyleOne",
  inputs: [
    {
      name: "style",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(CardStyleTwo, {
  name: "CardStyleTwo",
});

Builder.registerComponent(ContactForm, {
  name: "ContactForm",
});

Builder.registerComponent(VideoPopup, {
  name: "VideoPopup",
});

Builder.registerComponent(Feedback, {
  name: "Feedback",
});

Builder.registerComponent(BLockFeatureThree, {
  name: "BLockFeatureThree",
});

Builder.registerComponent(Property, {
  name: "Property",
});

Builder.registerComponent(FancyBannerOne, {
  name: "FancyBannerOne",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(FancyBanner, {
  name: "FancyBanner",
});

Builder.registerComponent(FancyBannerThree, {
  name: "FancyBannerThree",
});

Builder.registerComponent(FooterOne, {
  name: "FooterOne",
});

Builder.registerComponent(HeaderHeader, {
  name: "HeaderHeader",
});

Builder.registerComponent(HeaderTwo, {
  name: "HeaderTwo",
  inputs: [
    {
      name: "style_1",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "style_2",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "loginText",
      type: "string",
      defaultValue: "Login",
    },
    {
      name: "signUpText",
      type: "string",
      defaultValue: "Sign up",
    },
    {
      name: "addListingText",
      type: "string",
      defaultValue: "Add Listing",
    },
    {
      name: "contactNumber",
      type: "string",
      defaultValue: "+757 699-4478",
    },
  ],
});

Builder.registerComponent(NavMenuWithChildren, {
  name: "NavMenu",
  inputs: [
    {
      name: "menuData",
      type: "list",
      defaultValue: [
        {
          id: 1,
          title: "Home",
          link: "#",
          has_dropdown: true,
          sub_menus: [
            { link: "/", title: "Home 01" },
            { link: "/home-two", title: "Home 02" },
            { link: "/home-three", title: "Home 03" },
            { link: "/home-four", title: "Home 04" },
            { link: "/home-five", title: "Home 05" },
            { link: "/home-six", title: "Home 06" },
            { link: "/home-seven", title: "Home 07" },
          ],
        },
        {
          id: 2,
          title: "Listing",
          link: "#",
          class_name: "mega-dropdown-sm",
          has_dropdown: true,
          menu_column: [
            {
              id: 1,
              mega_title: "Listing Type",
              mega_menus: [
                { link: "/listing_01", title: "Grid Sidebar-1" },
                { link: "/listing_05", title: "Grid Sidebar-2" },
                { link: "/listing_02", title: "List Sidebar-1" },
                { link: "/listing_06", title: "List Sidebar-2" },
                { link: "/listing_03", title: "Grid Top Filter-1" },
                { link: "/listing_07", title: "Grid Top Filter-2" },
                { link: "/listing_04", title: "List Top Filter-1" },
                { link: "/listing_08", title: "List Top Filter-2" },
                { link: "/listing_09", title: "Grid Banner Filter-1" },
              ],
            },
            {
              id: 2,
              mega_title: "Listing Type",
              mega_menus: [
                { link: "/listing_11", title: "Grid Banner Filter-2" },
                { link: "/listing_10", title: "List Banner Filter-1" },
                { link: "/listing_12", title: "List Banner Filter-2" },
                { link: "/listing_13", title: "Grid Fullwidth" },
                { link: "/listing_14", title: "Grid Fullwidth Map-1" },
                { link: "/listing_16", title: "Grid Fullwidth Map-2" },
                { link: "/listing_15", title: "List Fullwidth Map-1" },
                { link: "/listing_17", title: "List Fullwidth Map-2" },
              ],
            },
            {
              id: 3,
              mega_title: "Single Listing",
              mega_menus: [
                { link: "/listing_details_01", title: "Listing Details-1" },
                { link: "/listing_details_02", title: "Listing Details-2" },
                { link: "/listing_details_03", title: "Listing Details-3" },
                { link: "/listing_details_04", title: "Listing Details-4" },
                { link: "/listing_details_05", title: "Listing Details-5" },
                { link: "/listing_details_06", title: "Listing Details-6" },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Pages",
          link: "#",
          class_name: "mega-dropdown-sm",
          has_dropdown: true,
          menu_column: [
            {
              id: 1,
              mega_title: "Essential",
              mega_menus: [
                { link: "/about_us_01", title: "About us -1" },
                { link: "/about_us_02", title: "About us -2" },
                { link: "/agency", title: "Agency" },
                { link: "/agency_details", title: "Agency Details" },
                { link: "/agent", title: "Agent" },
                { link: "/agent_details", title: "Agent Details" },
              ],
            },
            {
              id: 2,
              mega_title: "Features",
              mega_menus: [
                { link: "/project_01", title: "Project -1" },
                { link: "/project_02", title: "Project -2" },
                { link: "/project_03", title: "Project -3" },
                { link: "/project_04", title: "Project -4" },
                { link: "/project_details_01", title: "Project Details" },
                { link: "/service_01", title: "Service -1" },
                { link: "/service_02", title: "Service -2" },
                { link: "/service_details", title: "Service Details" },
              ],
            },
            {
              id: 3,
              mega_title: "Others",
              mega_menus: [
                { link: "/compare", title: "Property Compare" },
                { link: "/pricing_01", title: "Pricing -1" },
                { link: "/pricing_02", title: "Pricing -2" },
                { link: "/contact", title: "Contact Us" },
                { link: "/faq", title: "FAQ's" },
                { link: "/not-found", title: "404-Error" },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Blog",
          link: "#",
          has_dropdown: true,
          sub_menus: [
            { link: "/blog_01", title: "Blog Grid" },
            { link: "/blog_02", title: "Blog List" },
            { link: "/blog_03", title: "Blog 2 column" },
            { link: "/blog_details", title: "Blog Details" },
          ],
        },
      ],
      subFields: [
        { name: "id", type: "number", required: true },
        { name: "title", type: "string", required: true },
        { name: "link", type: "url", required: true },
        { name: "class_name", type: "string" },
        { name: "has_dropdown", type: "boolean" },
        {
          name: "sub_menus",
          type: "list",
          subFields: [
            { name: "title", type: "string", required: true },
            { name: "link", type: "url", required: true },
          ],
        },
        {
          name: "menu_column",
          type: "list",
          subFields: [
            { name: "id", type: "number", required: true },
            { name: "mega_title", type: "string", required: true },
            {
              name: "mega_menus",
              type: "list",
              subFields: [
                { name: "title", type: "string", required: true },
                { name: "link", type: "url", required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(ListingDetailsTwoArea, {
  name: "ListingDetailsTwoArea",
});

Builder.registerComponent(ListingDetailsFiveArea, {
  name: "ListingDetailsFiveArea",
});

Builder.registerComponent(CommonReviewForm, {
  name: "CommonReviewForm",
});

Builder.registerComponent(HeaderMainTwo, {
  name: "HeaderMainTwo",
});
