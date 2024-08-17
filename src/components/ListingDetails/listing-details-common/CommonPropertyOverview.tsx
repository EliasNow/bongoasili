// 16.36 edit (builder visual editor breaks when adding a svg)
import Image from "next/image";

interface PropertyOverviewDataType {
  id: number;
  icon: string; // Changed to string to accommodate URLs
  title: string;
}

interface CommonPropertyOverviewProps {
  title: string, // 17.45
  propertyOverviewData: PropertyOverviewDataType[];
}

const CommonPropertyOverview: React.FC<CommonPropertyOverviewProps> = ({
  title, //
  propertyOverviewData = [
    { id: 1, icon: "/default-icon.svg", title: "Default Title 1" },
    { id: 2, icon: "/default-icon.svg", title: "Default Title 2" },
    { id: 3, icon: "/default-icon.svg", title: "Default Title 3" },
  ],
}) => {
  return (
    <div>
      <h4 className="mb-20">{title}</h4>
      <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
        {propertyOverviewData.map((item) => (
          <li key={item.id}>
            <Image src={item.icon} alt="" className="lazy-img icon" width={50} height={50} />
            <span className="fs-20 color-dark">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
//   return (
//     <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
//       {propertyOverviewData.map((item) => (
//         <li key={item.id}>
//           <Image src={item.icon} alt="" className="lazy-img icon" width={50} height={50} />
//           <span className="fs-20 color-dark">{item.title}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default CommonPropertyOverview;






// // 14.30 (last working version 16.36)
// // src/components/ListingDetails/listing-details-common/CommonPropertyOverview.tsx
// import React from "react";
// import Image from "next/image";

// import icon_2 from "@/assets/images/icon/icon_48.svg";
// import icon_3 from "@/assets/images/icon/icon_49.svg";
// import icon_4 from "@/assets/images/icon/icon_50.svg";

// // interface PropertyOverviewData {
// //   id: number;
// //   icon: string; // Change from StaticImageData to string to accept URLs
// //   title: string;
// // }

// interface PropertyOverviewItem {
//   id: number;
//   icon: string;
//   title: string;
// }

// interface CommonPropertyOverviewProps {
//   // propertyOverviewData: PropertyOverviewData[];
//   propertyOverviewData: PropertyOverviewItem[];
// }

// const defaultPropertyOverviewData: PropertyOverviewItem[] = [ //
//   {
//     id: 1,
//     icon: icon_2.src,
//     title: "Default Title 1",
//   },
//   {
//     id: 2,
//     icon: icon_3.src,
//     title: "Default Title 2",
//   },
//   {
//     id: 3,
//     icon: icon_4.src,
//     title: "Default Title 3",
//   },
// ];

// const CommonPropertyOverview: React.FC<CommonPropertyOverviewProps> = ({
//   propertyOverviewData = defaultPropertyOverviewData,
// }) => {
//   return (
//     <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
//       {propertyOverviewData.map((item) => (
//         <li key={item.id}>
//           <Image src={item.icon} alt="" className="lazy-img icon" width={24} height={24} />
//           <span className="fs-20 color-dark">{item.title}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const CommonPropertyOverview: React.FC<CommonPropertyOverviewProps> = ({ propertyOverviewData }) => {
//   return (
//     <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
//       {propertyOverviewData.map((item) => (
//         <li key={item.id}>
//           <Image src={item.icon} alt="" className="lazy-img icon" width={50} height={50} /> {/* Add width and height */}
//           <span className="fs-20 color-dark">{item.title}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// Default props for standalone usage
// CommonPropertyOverview.defaultProps = {
//   propertyOverviewData: [
//     { id: 1, icon: "/default-icon.jpg", title: "Default Title 1" },
//     { id: 2, icon: "/default-icon.jpg", title: "Default Title 2" },
//     { id: 3, icon: "/default-icon.jpg", title: "Default Title 3" },
//   ],
// };

// export default CommonPropertyOverview;


// og version
// import Image, { StaticImageData } from "next/image"

// import icon_1 from "@/assets/images/icon/icon_47.svg"
// import icon_2 from "@/assets/images/icon/icon_48.svg"
// import icon_3 from "@/assets/images/icon/icon_49.svg"
// import icon_4 from "@/assets/images/icon/icon_50.svg"
// import icon_5 from "@/assets/images/icon/icon_51.svg"

// interface DataType {
//    id: number;
//    icon: StaticImageData;
//    title: string;
// }[];

// const property_overview_data: DataType[] = [
//    {
//       id: 1,
//       icon: icon_1,
//       title: "Sqft . 3,720",
//    },
//    {
//       id: 2,
//       icon: icon_2,
//       title: "Bed . 03",
//    },
//    {
//       id: 3,
//       icon: icon_3,
//       title: "Bath . 2",
//    },
//    {
//       id: 4,
//       icon: icon_4,
//       title: "Kitchen . 01",
//    },
//    {
//       id: 5,
//       icon: icon_5,
//       title: "Type . Apartment",
//    },
// ]

// const CommonPropertyOverview = () => {
//    return (
//       <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
//          {property_overview_data.map((item) => (
//             <li key={item.id}>
//                <Image src={item.icon} alt="" className="lazy-img icon" />
//                <span className="fs-20 color-dark">{item.title}</span>
//             </li>
//          ))}
//       </ul>
//    )
// }

// export default CommonPropertyOverview
