// chatgpt 16.50 making ListingDetailsOneArea editable in builder.io visual editor
// src/components/ListingDetails/listing-details-1/ListingDetailsOneAreaWrapper.tsx
// import React from "react";
// import ListingDetailsOneArea from "./ListingDetailsOneArea";
// import { BuilderComponent } from "@builder.io/react";

// interface ListingDetailsOneAreaWrapperProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[]; // MediaGallery
//   smallCarousel: { src: string }[]; // MediaGallery
// }

// const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
//   return (
//     <ListingDetailsOneArea {...props} />
//   );
// };

// export default ListingDetailsOneAreaWrapper;

// 17.41 troubleshooting (it's the same code)
// src/components/ListingDetails/listing-details-1/ListingDetailsOneAreaWrapper.tsx
// import React from "react";
// import ListingDetailsOneArea from "./ListingDetailsOneArea";
// import { BuilderComponent } from "@builder.io/react";

// interface ListingDetailsOneAreaWrapperProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[]; // MediaGallery
//   smallCarousel: { src: string }[]; // MediaGallery
// }

// const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
//   return <ListingDetailsOneArea {...props} />;
  
// };

// export default ListingDetailsOneAreaWrapper;

// another attempt at media gallery @ 18.18 19 jul 24
// src/components/ListingDetails/listing-details-1/ListingDetailsOneAreaWrapper.tsx
// import React from "react";
// import ListingDetailsOneArea from "./ListingDetailsOneArea";

// interface ListingDetailsOneAreaWrapperProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
// }

// const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
//   const { bigCarousel, smallCarousel } = props;

//   return (
//     <ListingDetailsOneArea
//       {...props}
//       bigCarousel={bigCarousel || [{ src: "/default-image.jpg" }]}
//       smallCarousel={smallCarousel || [{ src: "/default-thumbnail.jpg" }]}
//     />
//   );
// };

// export default ListingDetailsOneAreaWrapper;

// 19 jul 19.33 new wrapper (to try and pass those fucking images)
// never tried out this version:
// "use client";
// import ListingDetailsOneArea from "@/components/ListingDetails/listing-details-1/ListingDetailsOneArea";
// import { Builder } from "@builder.io/react";

// const ListingDetailsOneAreaWrapper = (props) => {
//   const { 
//     title, 
//     location, 
//     price, 
//     extras, 
//     style_3, 
//     bigCarousel = [{ src: "/default-image.jpg" }],
//     smallCarousel = [{ src: "/default-thumbnail.jpg" }]
//   } = props;

//   return (
//     <ListingDetailsOneArea
//       title={title}
//       location={location}
//       price={price}
//       extras={extras}
//       style_3={style_3}
//       bigCarousel={bigCarousel}
//       smallCarousel={smallCarousel}
//     />
//   );
// };

// export default ListingDetailsOneAreaWrapper;

// 19.41
// import React from "react";
// import ListingDetailsOneArea from "./ListingDetailsOneArea";

// interface ListingDetailsOneAreaWrapperProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
// }

// const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
//   const { bigCarousel, smallCarousel } = props;

//   return (
//     <ListingDetailsOneArea
//       {...props}
//       bigCarousel={bigCarousel.length ? bigCarousel : [{ src: "/default-image.jpg" }]}
//       smallCarousel={smallCarousel.length ? smallCarousel : [{ src: "/default-thumbnail.jpg" }]}
//     />
//   );
// };

// export default ListingDetailsOneAreaWrapper;

// another 19.45
// import React from "react";
// import ListingDetailsOneArea from "./ListingDetailsOneArea";

// interface ListingDetailsOneAreaWrapperProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
// }

// const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
//   const { bigCarousel, smallCarousel } = props;

//   return (
//     <ListingDetailsOneArea
//       {...props}
//       bigCarousel={bigCarousel?.length ? bigCarousel : [{ src: "/default-image.jpg" }]}
//       smallCarousel={smallCarousel?.length ? smallCarousel : [{ src: "/default-thumbnail.jpg" }]}
//     />
//   );
// };

// export default ListingDetailsOneAreaWrapper;

// 18.23 renaming to commontripoverview:
import React from "react";
import ListingDetailsOneArea from "./ListingDetailsOneArea";

interface ListingDetailsOneAreaWrapperProps {
  title: string;
  location: string;
  price: string;
  extras: string;
  style_3?: boolean;
  bigCarousel: { src: string }[];
  smallCarousel: { src: string }[];
  tripOverviewData: { id: number; icon: string; title: string }[];
  primaryInfoTitle: string; // Add primaryInfoTitle prop
}

const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
  const { bigCarousel, smallCarousel, tripOverviewData, primaryInfoTitle } = props;

  return (
    <ListingDetailsOneArea
      {...props}
      bigCarousel={bigCarousel?.length ? bigCarousel : [{ src: "/default-image.jpg" }]}
      smallCarousel={smallCarousel?.length ? smallCarousel : [{ src: "/default-thumbnail.jpg" }]}
      tripOverviewData={tripOverviewData?.length ? tripOverviewData : [{ id: 1, icon: "/default-icon.svg", title: "Default Title 1" }]}
      primaryInfoTitle={primaryInfoTitle} // Pass primaryInfoTitle
    />
  );
};

export default ListingDetailsOneAreaWrapper;



// // 17.51 edit passing propertyoverviewtitle props:
// import React from "react";
// import ListingDetailsOneArea from "./ListingDetailsOneArea";

// interface ListingDetailsOneAreaWrapperProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
//   propertyOverviewData: { id: number; icon: string; title: string }[];
//   propertyOverviewTitle: string; // Add propertyOverviewTitle prop
// }

// const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
//   const { bigCarousel, smallCarousel, propertyOverviewData, propertyOverviewTitle } = props;

//   return (
//     <ListingDetailsOneArea
//       {...props}
//       bigCarousel={bigCarousel?.length ? bigCarousel : [{ src: "/default-image.jpg" }]}
//       smallCarousel={smallCarousel?.length ? smallCarousel : [{ src: "/default-thumbnail.jpg" }]}
//       propertyOverviewData={propertyOverviewData?.length ? propertyOverviewData : [{ id: 1, icon: "/default-icon.svg", title: "Default Title 1" }]}
//       primaryInfoTitle={propertyOverviewTitle}
//     />
//   );
// };

// export default ListingDetailsOneAreaWrapper;


// 14.38 passing props (commonpropertyoverview)
// src/components/ListingDetails/listing-details-1/ListingDetailsOneAreaWrapper.tsx
// import React from "react";
// import ListingDetailsOneArea from "./ListingDetailsOneArea";

// import icon_2 from "@/assets/images/icon/icon_48.svg"; //
// import icon_3 from "@/assets/images/icon/icon_49.svg"; //
// import icon_4 from "@/assets/images/icon/icon_50.svg"; // 

// interface ListingDetailsOneAreaWrapperProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
//   propertyOverviewData: { id: number; icon: string; title: string }[];
//   // propertyOverviewTitle: string; 

// }

// const defaultPropertyOverviewData = [
//   { id: 1, icon: icon_2.src, title: "Default Title 1" },
//   { id: 2, icon: icon_3.src, title: "Default Title 2" },
//   { id: 3, icon: icon_4.src, title: "Default Title 3" },
// ];

// const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
//   const {
//     title,
//     location,
//     price,
//     extras,
//     style_3,
//     bigCarousel,
//     smallCarousel,
//     // propertyOverviewData, // Add propertyOverviewData prop
//     propertyOverviewData = defaultPropertyOverviewData,

//   } = props;

//   return (
//     <ListingDetailsOneArea
//       title={title}
//       location={location}
//       price={price}
//       extras={extras}
//       style_3={style_3}
//       bigCarousel={bigCarousel?.length ? bigCarousel : [{ src: "/default-image.jpg" }]}
//       smallCarousel={smallCarousel?.length ? smallCarousel : [{ src: "/default-thumbnail.jpg" }]}
//       propertyOverviewData={propertyOverviewData}

//       // propertyOverviewData={propertyOverviewData || [
//       //   { id: 1, icon: "/default-icon.jpg", title: "Default Title 1" },
//       //   { id: 2, icon: "/default-icon.jpg", title: "Default Title 2" },
//       //   { id: 3, icon: "/default-icon.jpg", title: "Default Title 3" },
//       // ]} // Add default data for propertyOverviewData
//     />
//   );
// };

// export default ListingDetailsOneAreaWrapper;



// 14.00 update to 
// import React from "react";
// import ListingDetailsOneArea from "./ListingDetailsOneArea";

// interface ListingDetailsOneAreaWrapperProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
// }

// const ListingDetailsOneAreaWrapper: React.FC<ListingDetailsOneAreaWrapperProps> = (props) => {
//   const { bigCarousel, smallCarousel } = props;

//   const validBigCarousel = bigCarousel?.length ? bigCarousel : [{ src: "/default-image.jpg" }];
//   const validSmallCarousel = smallCarousel?.length ? smallCarousel : [{ src: "/default-thumbnail.jpg" }];

//   return (
//     <ListingDetailsOneArea
//       {...props}
//       bigCarousel={validBigCarousel}
//       smallCarousel={validSmallCarousel}
//     />
//   );
// };

// export default ListingDetailsOneAreaWrapper;

