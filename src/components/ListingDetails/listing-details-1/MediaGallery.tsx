// import Image, { StaticImageData } from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// import bigCarousel_1 from "@/assets/images/listing/img_43.jpg"
// import bigCarousel_2 from "@/assets/images/listing/img_44.jpg"
// import bigCarousel_3 from "@/assets/images/listing/img_45.jpg"
// import bigCarousel_4 from "@/assets/images/listing/img_46.jpg"

// import smallCarousel_1 from "@/assets/images/listing/img_43_s.jpg"
// import smallCarousel_2 from "@/assets/images/listing/img_44_s.jpg"
// import smallCarousel_3 from "@/assets/images/listing/img_45_s.jpg"
// import smallCarousel_4 from "@/assets/images/listing/img_46_s.jpg"

// const largeThumb: string[] = ["1", "2", "3"];

// interface DataType {
//   big_carousel: StaticImageData[];
//   small_carousel: StaticImageData[];
// }

// const gallery_data: DataType = {
//   big_carousel: [bigCarousel_1, bigCarousel_2, bigCarousel_3, bigCarousel_4],
//   small_carousel: [smallCarousel_1, smallCarousel_2, smallCarousel_3, smallCarousel_4],
// }

// const { big_carousel, small_carousel } = gallery_data;

// const MediaGallery = ({ style }: any) => {
//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={` bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox
//                   options={{
//                     Carousel: {
//                       infinite: true,
//                     },
//                   }}
//                 >
//                   {largeThumb.map((thumb: any, index: any) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
//                   ))}
//                 </Fancybox>
//               </div>

//               <div className="carousel-inner">
//                 {big_carousel.map((carousel, index) => (
//                   <div key={index} className="carousel-item active">
//                     <Image src={carousel} alt="" className="w-100 border-20" />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider"
//                 data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider"
//                 data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {small_carousel.map((carousel, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className="active"
//                 aria-current="true" aria-label="Slide 1">
//                 <Image src={carousel} alt="" className="w-100 border-10" />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MediaGallery


//make dynamic for import into builder.io 18.06 18/7/24

// src/components/ListingDetails/listing-details-1/MediaGallery.tsx

// "use client";
// import React from "react";
// import Image, { StaticImageData } from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarouselImages: { src: string }[];
//   smallCarouselImages: { src: string }[];
//   style?: boolean;
// }

// const defaultBigCarouselImages = [
//   { src: "/assets/images/listing/img_43.jpg" },
//   { src: "/assets/images/listing/img_44.jpg" },
//   { src: "/assets/images/listing/img_45.jpg" },
//   { src: "/assets/images/listing/img_46.jpg" },
// ];

// const defaultSmallCarouselImages = [
//   { src: "/assets/images/listing/img_43_s.jpg" },
//   { src: "/assets/images/listing/img_44_s.jpg" },
//   { src: "/assets/images/listing/img_45_s.jpg" },
//   { src: "/assets/images/listing/img_46_s.jpg" },
// ];

// const largeThumb = [
//   "/assets/images/listing/img_large_01.jpg",
//   "/assets/images/listing/img_large_02.jpg",
//   "/assets/images/listing/img_large_03.jpg",
// ];

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarouselImages = defaultBigCarouselImages,
//   smallCarouselImages = defaultSmallCarouselImages,
//   style = false,
// }) => {
//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb, index) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={thumb}></a>
//                   ))}
//                 </Fancybox>
//               </div>
//               <div className="carousel-inner">
//                 {bigCarouselImages.map((image, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                     <Image src={image.src} alt="" className="w-100 border-20" width={800} height={600} />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarouselImages.map((image, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={i} className={i === 0 ? "active" : ""}>
//                 <Image src={image.src} alt="" className="w-100 border-10" width={150} height={100} />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;

// src/components/ListingDetails/listing-details-1/MediaGallery.tsx

// "use client";
// import React from "react";
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarouselImages: { src: string }[];
//   smallCarouselImages: { src: string }[];
//   style?: boolean;
// }

// const defaultBigCarouselImages = [
//   { src: "/assets/images/listing/img_43.jpg" },
//   { src: "/assets/images/listing/img_44.jpg" },
//   { src: "/assets/images/listing/img_45.jpg" },
//   { src: "/assets/images/listing/img_46.jpg" },
// ];

// const defaultSmallCarouselImages = [
//   { src: "/assets/images/listing/img_43_s.jpg" },
//   { src: "/assets/images/listing/img_44_s.jpg" },
//   { src: "/assets/images/listing/img_45_s.jpg" },
//   { src: "/assets/images/listing/img_46_s.jpg" },
// ];

// const largeThumb = [
//   "/assets/images/listing/img_large_01.jpg",
//   "/assets/images/listing/img_large_02.jpg",
//   "/assets/images/listing/img_large_03.jpg",
// ];

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarouselImages = defaultBigCarouselImages,
//   smallCarouselImages = defaultSmallCarouselImages,
//   style = false,
// }) => {
//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb, index) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={thumb}></a>
//                   ))}
//                 </Fancybox>
//               </div>
//               <div className="carousel-inner">
//                 {bigCarouselImages.map((image, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                     <Image src={image.src} alt="" className="w-100 border-20" />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarouselImages.map((image, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={i} className={i === 0 ? "active" : ""}>
//                 <Image src={image.src} alt="" className="w-100 border-10" />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;

//18 jul 18.20

// src/components/ListingDetails/listing-details-1/MediaGallery.tsx

// "use client";
// import React from "react";
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarouselImages?: { src: string }[];
//   smallCarouselImages?: { src: string }[];
//   style?: boolean;
// }

// const defaultBigCarouselImages = [
//   { src: "/assets/images/listing/img_43.jpg" },
//   { src: "/assets/images/listing/img_44.jpg" },
//   { src: "/assets/images/listing/img_45.jpg" },
//   { src: "/assets/images/listing/img_46.jpg" },
// ];

// const defaultSmallCarouselImages = [
//   { src: "/assets/images/listing/img_43_s.jpg" },
//   { src: "/assets/images/listing/img_44_s.jpg" },
//   { src: "/assets/images/listing/img_45_s.jpg" },
//   { src: "/assets/images/listing/img_46_s.jpg" },
// ];

// const largeThumb = [
//   "/assets/images/listing/img_large_01.jpg",
//   "/assets/images/listing/img_large_02.jpg",
//   "/assets/images/listing/img_large_03.jpg",
// ];

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarouselImages = defaultBigCarouselImages,
//   smallCarouselImages = defaultSmallCarouselImages,
//   style = false,
// }) => {
//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb, index) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={thumb}></a>
//                   ))}
//                 </Fancybox>
//               </div>
//               <div className="carousel-inner">
//                 {bigCarouselImages.map((image, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                     <Image src={image.src} alt="" className="w-100 border-20" width={800} height={600} />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarouselImages.map((image, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={i} className={i === 0 ? "active" : ""}>
//                 <Image src={image.src} alt="" className="w-100 border-10" width={200} height={150} />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;



// 18.44
// src/components/ListingDetails/listing-details-1/MediaGallery.tsx
// "use client";
// import React from "react";
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarouselImages?: { src: string }[];
//   smallCarouselImages?: { src: string }[];
//   style?: boolean;
// }

// const defaultBigCarouselImages = [
//   { src: "/assets/images/listing/img_43.jpg" },
//   { src: "/assets/images/listing/img_44.jpg" },
//   { src: "/assets/images/listing/img_45.jpg" },
//   { src: "/assets/images/listing/img_46.jpg" },
// ];

// const defaultSmallCarouselImages = [
//   { src: "/assets/images/listing/img_43_s.jpg" },
//   { src: "/assets/images/listing/img_44_s.jpg" },
//   { src: "/assets/images/listing/img_45_s.jpg" },
//   { src: "/assets/images/listing/img_46_s.jpg" },
// ];

// const largeThumb = [
//   "/assets/images/listing/img_large_01.jpg",
//   "/assets/images/listing/img_large_02.jpg",
//   "/assets/images/listing/img_large_03.jpg",
// ];

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarouselImages = defaultBigCarouselImages,
//   smallCarouselImages = defaultSmallCarouselImages,
//   style = false,
// }) => {
//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row" data-ride="carousel">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 See all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb, index) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={thumb}></a>
//                   ))}
//                 </Fancybox>
//               </div>
//               <div className="carousel-inner">
//                 {bigCarouselImages.map((image, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                     <Image src={image.src} alt="" className="w-100 border-20" width={800} height={600} />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarouselImages.map((image, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={i} className={i === 0 ? "active" : ""}>
//                 <Image src={image.src} alt="" className="w-100 border-10" width={200} height={150} />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;

// src/components/ListingDetails/listing-details-1/MediaGallery.tsx
// "use client";
// import React from "react";
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarouselImages?: { src: string }[];
//   smallCarouselImages?: { src: string }[];
//   style?: boolean;
// }

// const defaultBigCarouselImages = [
//   { src: "/assets/images/listing/img_43.jpg" },
//   { src: "/assets/images/listing/img_44.jpg" },
//   { src: "/assets/images/listing/img_45.jpg" },
//   { src: "/assets/images/listing/img_46.jpg" },
// ];

// const defaultSmallCarouselImages = [
//   { src: "/assets/images/listing/img_43_s.jpg" },
//   { src: "/assets/images/listing/img_44_s.jpg" },
//   { src: "/assets/images/listing/img_45_s.jpg" },
//   { src: "/assets/images/listing/img_46_s.jpg" },
// ];

// const largeThumb = [
//   "/assets/images/listing/img_large_01.jpg",
//   "/assets/images/listing/img_large_02.jpg",
//   "/assets/images/listing/img_large_03.jpg",
// ];

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarouselImages = defaultBigCarouselImages,
//   smallCarouselImages = defaultSmallCarouselImages,
//   style = false,
// }) => {
//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row" data-bs-ride="carousel">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 See all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb, index) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={thumb}></a>
//                   ))}
//                 </Fancybox>
//               </div>
//               <div className="carousel-inner">
//                 {bigCarouselImages.map((image, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                     <Image src={image.src} alt="" className="w-100 border-20" width={800} height={600} />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarouselImages.map((image, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={i} className={`active`} aria-current="true" aria-label={`Slide ${i + 1}`}>
//                 <Image src={image.src} alt="" className="w-100 border-10" width={160} height={90} />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;

// edit MediaGallery to do the same
// 17.23

// src/components/ListingDetails/listing-details-1/MediaGallery.tsx
// "use client";
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
//   style?: boolean;
// }

// const MediaGallery: React.FC<MediaGalleryProps> = ({ bigCarousel, smallCarousel, style }) => {
//   const largeThumb: string[] = ["1", "2", "3"];

//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb: any, index: any) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
//                   ))}
//                 </Fancybox>
//               </div>

//               <div className="carousel-inner">
//                 {bigCarousel.map((carousel, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                     <Image src={carousel.src} alt="" className="w-100 border-20" />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarousel.map((carousel, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className={`${i === 0 ? "active" : ""}`} aria-current="true" aria-label={`Slide ${i + 1}`}>
//                 <Image src={carousel.src} alt="" className="w-100 border-10" />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;


// 17.38 troubleshooting 
// src/components/ListingDetails/listing-details-1/MediaGallery.tsx
// "use client";
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarousel?: { src: string }[];
//   smallCarousel?: { src: string }[];
//   style?: boolean;
// }

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarousel = [],
//   smallCarousel = [],
//   style = false,
// }) => {
//   const largeThumb: string[] = ["1", "2", "3"];

//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb: any, index: any) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
//                   ))}
//                 </Fancybox>
//               </div>

//               <div className="carousel-inner">
//                 {bigCarousel.map((carousel, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                     <Image src={carousel.src} alt="" className="w-100 border-20" />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarousel.map((carousel, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className={`${i === 0 ? "active" : ""}`} aria-current="true" aria-label={`Slide ${i + 1}`}>
//                 <Image src={carousel.src} alt="" className="w-100 border-10" />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;

//another attempt to update the media gallery @19 jul 18.15
// src/components/ListingDetails/listing-details-1/MediaGallery.tsx
// "use client";
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarousel?: { src: string }[];
//   smallCarousel?: { src: string }[];
//   style?: boolean;
// }

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarousel = [],
//   smallCarousel = [],
//   style = false,
// }) => {
//   const largeThumb: string[] = ["1", "2", "3"];

//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb: any, index: any) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
//                   ))}
//                 </Fancybox>
//               </div>

//               <div className="carousel-inner">
//                 {bigCarousel.length > 0 ? (
//                   bigCarousel.map((carousel, index) => (
//                     <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                       <Image src={carousel.src} alt="" className="w-100 border-20" />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="carousel-item active">
//                     <Image src="/default-image.jpg" alt="Default Image" className="w-100 border-20" />
//                   </div>
//                 )}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarousel.length > 0 ? (
//               smallCarousel.map((carousel, i) => (
//                 <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className={`${i === 0 ? "active" : ""}`} aria-current="true" aria-label={`Slide ${i + 1}`}>
//                   <Image src={carousel.src} alt="" className="w-100 border-10" />
//                 </button>
//               ))
//             ) : (
//               <button type="button" className="active">
//                 <Image src="/default-thumbnail.jpg" alt="Default Thumbnail" className="w-100 border-10" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;


// added width 18.22
// "use client";
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarousel?: { src: string }[];
//   smallCarousel?: { src: string }[];
//   style?: boolean;
// }

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarousel = [],
//   smallCarousel = [],
//   style = false,
// }) => {
//   const largeThumb: string[] = ["1", "2", "3"];

//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb: any, index: any) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
//                   ))}
//                 </Fancybox>
//               </div>

//               <div className="carousel-inner">
//                 {bigCarousel.length > 0 ? (
//                   bigCarousel.map((carousel, index) => (
//                     <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                       <Image src={carousel.src} alt="" className="w-100 border-20" width={800} height={450} />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="carousel-item active">
//                     <Image src="/default-image.jpg" alt="Default Image" className="w-100 border-20" width={800} height={450} />
//                   </div>
//                 )}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarousel.length > 0 ? (
//               smallCarousel.map((carousel, i) => (
//                 <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className={`${i === 0 ? "active" : ""}`} aria-current="true" aria-label={`Slide ${i + 1}`}>
//                   <Image src={carousel.src} alt="" className="w-100 border-10" width={160} height={90} />
//                 </button>
//               ))
//             ) : (
//               <button type="button" className="active">
//                 <Image src="/default-thumbnail.jpg" alt="Default Thumbnail" className="w-100 border-10" width={160} height={90} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;

// friday 19 jul 19.03
// updated to take default images
"use client";
import Image from "next/image";
import Fancybox from "@/components/common/Fancybox";

interface MediaGalleryProps {
  bigCarousel?: { src: string }[];
  smallCarousel?: { src: string }[];
  style?: boolean;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  bigCarousel = [],
  smallCarousel = [],
  style = false,
}) => {
  const largeThumb: string[] = ["1", "2", "3"];

  return (
    <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
      <div id="media_slider" className="carousel slide row">
        <div className="col-lg-10">
          <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
            <div className="position-relative z-1 overflow-hidden border-20">
              <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
                Sell all 37 Photos
                <Fancybox options={{ Carousel: { infinite: true } }}>
                  {largeThumb.map((thumb: any, index: any) => (
                    <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                  ))}
                </Fancybox>
              </div>

              <div className="carousel-inner">
                {bigCarousel.length > 0 ? (
                  bigCarousel.map((carousel, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <Image src={carousel.src} alt="" className="w-100 border-20" width={800} height={450} />
                    </div>
                  ))
                ) : (
                  <div className="carousel-item active">
                    <Image src="/default-image.jpg" alt="Default Image" className="w-100 border-20" width={800} height={450} />
                  </div>
                )}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
            {smallCarousel.length > 0 ? (
              smallCarousel.map((carousel, i) => (
                <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className={`${i === 0 ? "active" : ""}`} aria-current="true" aria-label={`Slide ${i + 1}`}>
                  <Image src={carousel.src} alt="" className="w-100 border-10" width={160} height={90} />
                </button>
              ))
            ) : (
              <button type="button" className="active">
                <Image src="/default-thumbnail.jpg" alt="Default Thumbnail" className="w-100 border-10" width={160} height={90} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;

// jul 13 13.57
// take paths and urls
// import Image from "next/image";
// import Fancybox from "@/components/common/Fancybox";

// interface MediaGalleryProps {
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
//   style: boolean;
// }

// const MediaGallery: React.FC<MediaGalleryProps> = ({ bigCarousel, smallCarousel, style }) => {
//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 Sell all 37 Photos
//                 <Fancybox
//                   options={{
//                     Carousel: {
//                       infinite: true,
//                     },
//                   }}
//                 >
//                   {bigCarousel.map((thumb, index) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={thumb.src}></a>
//                   ))}
//                 </Fancybox>
//               </div>
//               <div className="carousel-inner">
//                 {bigCarousel.map((carousel, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                     <Image src={carousel.src} alt="" className="w-100 border-20" width={1200} height={800} />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarousel.map((carousel, i) => (
//               <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className="active" aria-current="true" aria-label="Slide 1">
//                 <Image src={carousel.src} alt="" className="w-100 border-10" width={300} height={200} />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;
