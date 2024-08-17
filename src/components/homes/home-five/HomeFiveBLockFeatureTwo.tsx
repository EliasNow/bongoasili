// import feature_data from "@/data/home-data/FeatureData"
// import Link from "next/link"
// import Image from "next/image"

// import titleShape from "@/assets/images/shape/title_shape_03.svg"

// const HomeFiveBLockFeatureTwo = ({ style }: any) => {
//    return (
//       <div className={`block-feature-twelve ${style ? "mt-150 xl-mt-100" : "mt-170 xl-mt-120"}`}>
//          <div className="container container-large">
//             <div className="position-relative">
//                <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
//                   {style ? <h3><span>Popular<Image src={titleShape} alt="" className="lazy-img" /></span> Destinations</h3> : <h3>Popular Destinations</h3>}
//                </div>

//                <div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
//                   {feature_data.filter((items) => items.page === "home_5_feature_1").map((item) => (
//                      <div key={item.id} className="location-card-three text-center wow fadeInUp" data-wow-delay={item.data_delay_time}>
//                         <div className={`image-bg position-relative z-1 rounded-circle overflow-hidden mb-30 ${item.item_bg}`}>
//                            <Link href="/listing_04" className="stretched-link"></Link>
//                         </div>
//                         <Link href="/listing_04" className="title"><h5>{item.title}</h5></Link>
//                         <p>{item.desc}</p>
//                      </div>
//                   ))}
//                </div>
//                <div className="section-btn text-center md-mt-50">
//                   <Link href="/listing_04" className="btn-eight"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default HomeFiveBLockFeatureTwo

//chatgpt propmt 17 jul 24 @18.23
// components/HomeFiveBlockFeatureTwo/HomeFiveBlockFeatureTwo.tsx
// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./styles.module.css";
// import titleShape from "@/assets/images/shape/title_shape_03.svg";

// interface FeatureItem {
//   id: number;
//   title: string;
//   desc: string;
//   image: string;
//   link: string;
//   data_delay_time: string;
//   item_bg: string;
// }

// interface HomeFiveBlockFeatureTwoProps {
//   featureItems: FeatureItem[];
//   sectionTitle: string;
//   buttonText: string;
//   buttonLink: string;
//   style?: boolean;
// }

// const HomeFiveBlockFeatureTwo: React.FC<HomeFiveBlockFeatureTwoProps> = ({
// //   featureItems,
//   sectionTitle,
//   buttonText,
//   buttonLink,
//   style,
// }) => {
//   return (
//     <div className={`block-feature-twelve ${style ? "mt-150 xl-mt-100" : "mt-170 xl-mt-120"}`}>
//       <div className="container container-large">
//         <div className="position-relative">
//           <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
//             {style ? (
//               <h3>
//                 <span>
//                   {sectionTitle}
//                   <Image src={titleShape} alt="" className="lazy-img" />
//                 </span>
//               </h3>
//             ) : (
//               <h3>{sectionTitle}</h3>
//             )}
//           </div>

//           <div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
//             {featureItems.map((item) => (
//               <div key={item.id} className="location-card-three text-center wow fadeInUp" data-wow-delay={item.data_delay_time}>
//                 <div className={`image-bg position-relative z-1 rounded-circle overflow-hidden mb-30 ${item.item_bg}`}>
//                   <Link href={item.link} className="stretched-link"></Link>
//                   <Image src={item.image} alt={item.title} className="lazy-img" />
//                 </div>
//                 <Link href={item.link} className="title">
//                   <h5>{item.title}</h5>
//                 </Link>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="section-btn text-center md-mt-50">
//             <Link href={buttonLink} className="btn-eight">
//               <span>{buttonText}</span> <i className="bi bi-arrow-up-right"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeFiveBlockFeatureTwo;


// components/HomeFiveBlockFeatureTwo/HomeFiveBlockFeatureTwo.tsx
// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./styles.module.css";
// import titleShape from "@/assets/images/shape/title_shape_03.svg";

// interface FeatureItem {
//   id: number;
//   title: string;
//   desc: string;
//   image: string;
//   link: string;
//   data_delay_time: string;
//   item_bg: string;
// }

// interface HomeFiveBlockFeatureTwoProps {
//   featureItems: FeatureItem[];
//   sectionTitle: string;
//   buttonText: string;
//   buttonLink: string;
//   style?: boolean;
// }

// const HomeFiveBlockFeatureTwo: React.FC<HomeFiveBlockFeatureTwoProps> = ({
//   featureItems = [],
//   sectionTitle = "Popular Destinations",
//   buttonText = "Explore All",
//   buttonLink = "/listing_04",
//   style = false,
// }) => {
//   return (
//     <div className={`block-feature-twelve ${style ? "mt-150 xl-mt-100" : "mt-170 xl-mt-120"}`}>
//       <div className="container container-large">
//         <div className="position-relative">
//           <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
//             {style ? (
//               <h3>
//                 <span>
//                   {sectionTitle}
//                   <Image src={titleShape} alt="" className="lazy-img" />
//                 </span>
//               </h3>
//             ) : (
//               <h3>{sectionTitle}</h3>
//             )}
//           </div>

//           <div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
//             {featureItems.map((item) => (
//               <div key={item.id} className="location-card-three text-center wow fadeInUp" data-wow-delay={item.data_delay_time}>
//                 <div className={`image-bg position-relative z-1 rounded-circle overflow-hidden mb-30 ${item.item_bg}`}>
//                   <Link href={item.link} className="stretched-link"></Link>
//                   <Image src={item.image} alt={item.title} className="lazy-img" />
//                 </div>
//                 <Link href={item.link} className="title">
//                   <h5>{item.title}</h5>
//                 </Link>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="section-btn text-center md-mt-50">
//             <Link href={buttonLink} className="btn-eight">
//               <span>{buttonText}</span> <i className="bi bi-arrow-up-right"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeFiveBlockFeatureTwo;

// src/components/homes/home-five/HomeFiveBlockFeatureTwo.tsx
// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import titleShape from "@/assets/images/shape/title_shape_03.svg";
// import styles from "./styles.module.css";

// interface FeatureItem {
//   id: number;
//   title: string;
//   desc: string;
//   image: string;
//   link: string;
//   data_delay_time: string;
//   item_bg: string;
// }

// interface HomeFiveBlockFeatureTwoProps {
//   featureItems: FeatureItem[];
//   sectionTitle: string;
//   buttonText: string;
//   buttonLink: string;
//   style?: boolean;
// }

// const HomeFiveBlockFeatureTwo: React.FC<HomeFiveBlockFeatureTwoProps> = ({
//   featureItems = [],
//   sectionTitle = "Popular Destinations",
//   buttonText = "Explore All",
//   buttonLink = "/listing_04",
//   style = false,
// }) => {
//   return (
//     <div className={`block-feature-twelve ${style ? "mt-150 xl-mt-100" : "mt-170 xl-mt-120"}`}>
//       <div className="container container-large">
//         <div className="position-relative">
//           <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
//             {style ? (
//               <h3>
//                 <span>
//                   {sectionTitle}
//                   <Image src={titleShape} alt="" className="lazy-img" />
//                 </span>
//               </h3>
//             ) : (
//               <h3>{sectionTitle}</h3>
//             )}
//           </div>

//           <div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
//             {featureItems.map((item) => (
//               <div key={item.id} className="location-card-three text-center wow fadeInUp" data-wow-delay={item.data_delay_time}>
//                 <div className={`image-bg position-relative z-1 rounded-circle overflow-hidden mb-30 ${item.item_bg}`}>
//                   <Link href={item.link} className="stretched-link"></Link>
//                   <Image src={item.image} alt={item.title} className="lazy-img" />
//                 </div>
//                 <Link href={item.link} className="title">
//                   <h5>{item.title}</h5>
//                 </Link>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="section-btn text-center md-mt-50">
//             <Link href={buttonLink} className="btn-eight">
//               <span>{buttonText}</span> <i className="bi bi-arrow-up-right"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeFiveBlockFeatureTwo;


//simplified for testing
// src/components/homes/home-five/HomeFiveBlockFeatureTwo.tsx
"use client";
import React from "react"; // simplified
import Link from "next/link";
import Image from "next/image";
import titleShape from "@/assets/images/shape/title_shape_03.svg";
import styles from "./styles.module.css";

interface FeatureItem {
  id: number;
  title: string;
  desc: string;
  image: string;
  link: string;
  data_delay_time: string;
  item_bg: string;
}

interface HomeFiveBlockFeatureTwoProps {
  featureItems: FeatureItem[];
  sectionTitle: string;
  buttonText: string;
  buttonLink: string;
  style?: boolean;
}

//simplified
// const HomeFiveBlockFeatureTwo: React.FC<HomeFiveBlockFeatureTwoProps> = ({
//   featureItems = [],
//   sectionTitle = "Popular Destinations",
//   buttonText = "Explore All",
//   buttonLink = "/listing_04",
//   style = false,
// }) => {
//   return (
//     <div>
//       <h1>{sectionTitle}</h1>
//       <div>
//         {featureItems.map((item) => (
//           <div key={item.id}>
//             <h2>{item.title}</h2>
//             <p>{item.desc}</p>
//             <a href={item.link}>Link</a>
//           </div>
//         ))}
//       </div>
//       <a href={buttonLink}>{buttonText}</a>
//     </div>
//   );
// };

// export default HomeFiveBlockFeatureTwo;

const HomeFiveBlockFeatureTwo: React.FC<HomeFiveBlockFeatureTwoProps> = ({
   featureItems = [],
   sectionTitle = "Popular Destinations",
   buttonText = "Explore All",
   buttonLink = "/listing_04",
   style = false,
 }) => {
   return (
     <div className={`block-feature-twelve ${style ? "mt-150 xl-mt-100" : "mt-170 xl-mt-120"}`}>
       <div className="container container-large">
         <div className="position-relative">
           <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
             {style ? (
               <h3>
                 <span>
                   {sectionTitle}
                   <Image src={titleShape} alt="" className="lazy-img" />
                 </span>{" "}
                 Destinations
               </h3>
             ) : (
               <h3>{sectionTitle}</h3>
             )}
           </div>
 
           <div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
             {featureItems.map((item) => (
               <div key={item.id} className="location-card-three text-center wow fadeInUp" data-wow-delay={item.data_delay_time}>
                 <div className={`image-bg position-relative z-1 rounded-circle overflow-hidden mb-30 ${item.item_bg}`}>
                   <Link href={item.link} className="stretched-link">
                     <Image src={item.image} alt={item.title} className="lazy-img" />
                   </Link>
                 </div>
                 <Link href={item.link} className="title">
                   <h5>{item.title}</h5>
                 </Link>
                 <p>{item.desc}</p>
               </div>
             ))}
           </div>
           <div className="section-btn text-center md-mt-50">
             <Link href={buttonLink} className="btn-eight">
               <span>{buttonText}</span> <i className="bi bi-arrow-up-right"></i>
             </Link>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default HomeFiveBlockFeatureTwo;


