// 15.36
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//         settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips?: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.length > 0 ? (
//           trips.map((item) => (
//             <div key={item.id} className="item">
//               <div className="listing-card-one shadow4 style-three border-30 mb-50">
//                 <div className="img-gallery p-15">
//                   <div className="position-relative border-20 overflow-hidden">
//                     <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                     <Image src={item.thumb || "/default-image.jpg"} className="w-100 border-20" alt={item.title} />
//                     <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                       <i className="bi bi-arrow-up-right"></i>
//                     </Link>
//                     <div className="img-slider-btn">
//                       {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                       <Fancybox options={{ Carousel: { infinite: true } }}>
//                         {item.carousel_thumb.map((thumb) => (
//                           <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                         ))}
//                       </Fancybox>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="property-info pe-4 ps-4">
//                   <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                   <div className="address m0 pb-5">{item.location}</div>
//                   <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                     <strong className="price fw-500 color-dark">${item.price}</strong>
//                     <ul className="style-none d-flex action-icons">
//                       <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No Similar trips available</div>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;



// 16.20
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: "0px",
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips }) => {
//   if (!trips || trips.length === 0) {
//     return <div>No Similar trips available</div>;
//   }

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb} className="w-100 border-20" alt="..." />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={thumb.img.src}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">
//                   {item.title}
//                 </Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-heart"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-bookmark"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-circle-plus"></i>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;



// 17.20 GOLDEN!!!!
// adding width and height
"use client";
import Fancybox from "@/components/common/Fancybox";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { TripDataType } from "@/types/TripDataType";

const setting = {
  dots: true,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

interface CommonSimilarTripsProps {
  title: string;
  trips?: TripDataType[];
}

const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
  if (!trips || trips.length === 0) {
    return <div>No Similar trips available</div>;
  }

  return (
    <div className="similar-property">
      <h4 className="mb-40">{title}</h4>
      <Slider {...setting} className="similar-listing-slider-one">
        {trips.map((item) => (
          <div key={item.id} className="item">
            <div className="listing-card-one shadow4 style-three border-30 mb-50">
              <div className="img-gallery p-15">
                <div className="position-relative border-20 overflow-hidden">
                  <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
                  <Image 
                    src={typeof item.thumb === "string" ? item.thumb : item.thumb?.src || "/default-image.jpg"}
                    width={500} // Add appropriate width
                    height={300} // Add appropriate height
                    className="w-100 border-20"
                    alt={item.title}
                  />
                  <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <div className="img-slider-btn">
                    {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
                    <Fancybox options={{ Carousel: { infinite: true } }}>
                      {item.carousel_thumb.map((thumb, index) => (
                        <a 
                          key={index} 
                          className="d-block" 
                          data-fancybox="gallery2" 
                          href={typeof thumb.img === "string" ? thumb.img : thumb.img.src || "/default-image.jpg"}
                        >
                          <Image 
                            src={typeof thumb.img === "string" ? thumb.img : thumb.img.src || "/default-image.jpg"} 
                            width={500} // Add appropriate width
                            height={300} // Add appropriate height
                            alt={`Carousel thumb ${index + 1}`}
                          />
                        </a>
                      ))}
                    </Fancybox>
                  </div>
                </div>
              </div>
              <div className="property-info pe-4 ps-4">
                <Link href="/listing_details_06" className="title tran3s">
                  {item.title}
                </Link>
                <div className="address m0 pb-5">{item.location}</div>
                <div className="pl-footer m0 d-flex align-items-center justify-content-between">
                  <strong className="price fw-500 color-dark">${item.price}</strong>
                  <ul className="style-none d-flex action-icons">
                    <li>
                      <Link href="#">
                        <i className="fa-light fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-light fa-bookmark"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-light fa-circle-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommonSimilarTrips;






// // 17.11 24 jul
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: "0px",
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips?: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => { // added trips = [] instead of trips
//   if (!trips || trips.length === 0) {
//     return <div>No Similar trips available</div>;
//   }

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={typeof item.thumb === "string" ? item.thumb : item.thumb?.src || "/default-image.jpg"} className="w-100 border-20" alt={item.title} />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={typeof thumb.img === "string" ? thumb.img : thumb.img.src || "/default-image.jpg"}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">
//                   {item.title}
//                 </Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-heart"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-bookmark"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-circle-plus"></i>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;




// 16.50 24 jul
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: "0px",
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips }) => {
//   if (!trips || trips.length === 0) {
//     return <div>No Similar trips available</div>;
//   }

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={typeof item.thumb === 'string' ? item.thumb : item.thumb?.src || "/default-image.jpg"} className="w-100 border-20" alt={item.title} />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={typeof thumb.img === 'string' ? thumb.img : thumb.img.src || "/default-image.jpg"}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">
//                   {item.title}
//                 </Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-heart"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-bookmark"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#">
//                         <i className="fa-light fa-circle-plus"></i>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;



// // // 24 jul 16.14 // last working ?!!!
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb} className="w-100 border-20" alt="..." />
//                   <Link href="/listing_details_06"
//                     className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;



// //15.28 edit last working version
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//         settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips?: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.length > 0 ? (
//           trips.map((item) => (
//             <div key={item.id} className="item">
//               <div className="listing-card-one shadow4 style-three border-30 mb-50">
//                 <div className="img-gallery p-15">
//                   <div className="position-relative border-20 overflow-hidden">
//                     <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                     <Image src={item.thumb || "/default-image.jpg"} className="w-100 border-20" alt={item.title} />
//                     <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                       <i className="bi bi-arrow-up-right"></i>
//                     </Link>
//                     <div className="img-slider-btn">
//                       {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                       <Fancybox options={{ Carousel: { infinite: true } }}>
//                         {item.carousel_thumb.map((thumb) => (
//                           <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                         ))}
//                       </Fancybox>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="property-info pe-4 ps-4">
//                   <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                   <div className="address m0 pb-5">{item.location}</div>
//                   <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                     <strong className="price fw-500 color-dark">${item.price}</strong>
//                     <ul className="style-none d-flex action-icons">
//                       <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No Similar trips available</div>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.length > 0 ? (
//           trips.map((item) => (
//             <div key={item.id} className="item">
//               <div className="listing-card-one shadow4 style-three border-30 mb-50">
//                 <div className="img-gallery p-15">
//                   <div className="position-relative border-20 overflow-hidden">
//                     <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                     <Image src={item.thumb as string} className="w-100 border-20" alt="..." />
//                     <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                       <i className="bi bi-arrow-up-right"></i>
//                     </Link>
//                     <div className="img-slider-btn">
//                       {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                       <Fancybox options={{ Carousel: { infinite: true } }}>
//                         {item.carousel_thumb.map((thumb) => (
//                           <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={thumb.img as string}></a>
//                         ))}
//                       </Fancybox>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="property-info pe-4 ps-4">
//                   <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                   <div className="address m0 pb-5">{item.location}</div>
//                   <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                     <strong className="price fw-500 color-dark">${item.price}</strong>
//                     <ul className="style-none d-flex action-icons">
//                       <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No similar trips available</div>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// // 24 jul 14.57
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.length > 0 ? (
//           trips.map((item) => (
//             <div key={item.id} className="item">
//               <div className="listing-card-one shadow4 style-three border-30 mb-50">
//                 <div className="img-gallery p-15">
//                   <div className="position-relative border-20 overflow-hidden">
//                     <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                     <Image src={item.thumb as string} className="w-100 border-20" alt="..." />
//                     <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                       <i className="bi bi-arrow-up-right"></i>
//                     </Link>
//                     <div className="img-slider-btn">
//                       {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                       <Fancybox options={{ Carousel: { infinite: true } }}>
//                         {item.carousel_thumb.map((thumb) => (
//                           <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={thumb.img as string}></a>
//                         ))}
//                       </Fancybox>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="property-info pe-4 ps-4">
//                   <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                   <div className="address m0 pb-5">{item.location}</div>
//                   <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                     <strong className="price fw-500 color-dark">${item.price}</strong>
//                     <ul className="style-none d-flex action-icons">
//                       <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No similar trips available</div>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;



// // 24 jul 14.48
// // src/components/ListingDetails/listing-details-common/CommonSimilarTrips.tsx
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { TripDataType } from "@/types/TripDataType";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.length > 0 ? (
//           trips.map((item) => (
//             <div key={item.id} className="item">
//               <div className="listing-card-one shadow4 style-three border-30 mb-50">
//                 <div className="img-gallery p-15">
//                   <div className="position-relative border-20 overflow-hidden">
//                     <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                     <Image src={item.thumb} className="w-100 border-20" alt="..." />
//                     <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                       <i className="bi bi-arrow-up-right"></i>
//                     </Link>
//                     <div className="img-slider-btn">
//                       {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                       <Fancybox options={{ Carousel: { infinite: true } }}>
//                         {item.carousel_thumb.map((thumb) => (
//                           <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                         ))}
//                       </Fancybox>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="property-info pe-4 ps-4">
//                   <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                   <div className="address m0 pb-5">{item.location}</div>
//                   <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                     <strong className="price fw-500 color-dark">${item.price}</strong>
//                     <ul className="style-none d-flex action-icons">
//                       <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No similar trips available</div>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// // check for trips array 17.10
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface TripDataType {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: {
//     id: string;
//     img: string;
//   }[];
//   title: string;
//   location: string;
//   price: number;
// }

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.length > 0 ? (
//           trips.map((item) => (
//             <div key={item.id} className="item">
//               <div className="listing-card-one shadow4 style-three border-30 mb-50">
//                 <div className="img-gallery p-15">
//                   <div className="position-relative border-20 overflow-hidden">
//                     <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                     <Image src={item.thumb} className="w-100 border-20" alt="..." />
//                     <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                       <i className="bi bi-arrow-up-right"></i>
//                     </Link>
//                     <div className="img-slider-btn">
//                       {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                       <Fancybox options={{ Carousel: { infinite: true } }}>
//                         {item.carousel_thumb.map((thumb) => (
//                           <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                         ))}
//                       </Fancybox>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="property-info pe-4 ps-4">
//                   <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                   <div className="address m0 pb-5">{item.location}</div>
//                   <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                     <strong className="price fw-500 color-dark">${item.price}</strong>
//                     <ul className="style-none d-flex action-icons">
//                       <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                       <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No similar trips available</div>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;



// // make dynamic 17.05
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface TripDataType {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: {
//     id: string;
//     img: string;
//   }[];
//   title: string;
//   location: string;
//   price: number;
// }

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: TripDataType[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb} className="w-100 border-20" alt="..." />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb) => (
//                         <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// // 15.45 increment from here (chatgpt revert prompt)
// "use client";

// import React from "react";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import trip_data from "@/data/trip-data/DefaultTripData";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };


// interface TripDataType {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: {
//     id: string;
//     img: string;
//   }[];
//   title: string;
//   location: string;
//   price: number;
// }

// interface CommonSimilarTripsProps {
//   title: string;
//   trips?: typeof trip_data;
//   // trips: TripDataType[];

// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = trip_data }) => {
// // const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb ? item.thumb : "/default-thumbnail.jpg"} className="w-100 border-20" alt={item.title} />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface Trip {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: { id?: string; img: string }[];
//   title: string;
//   location: string;
//   price: number;
// }

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: Trip[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   const defaultImage = "/path/to/default/image.jpg"; // Update this path to your default image

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb || defaultImage} className="w-100 border-20" alt={item.title} />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// // 15.20
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface Trip {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: { id?: string; img: string }[];
//   title: string;
//   location: string;
//   price: number;
// }

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: Trip[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   const defaultImage = "/path/to/default/image.jpg"; // Update this path to your default image

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb || defaultImage} className="w-100 border-20" alt={item.title} />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// // 15.09
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface Trip {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: { id?: string; img: string }[];
//   title: string;
//   location: string;
//   price: number;
// }

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: Trip[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   const defaultImage = "/default-image.jpg"; // Update this path to your default image

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb || defaultImage} className="w-100 border-20" alt={item.title} />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;

// // boo
// // ensuring trips has a default value of an empty array if not provided
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//         settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface Trip {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: { id?: string; img: string }[];
//   title: string;
//   location: string;
//   price: number;
// }

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: Trip[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips = [] }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb} className="w-100 border-20" alt={item.title} />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// // 14.42 allowing CommonSimilarTrips to accept an arry of trip data including images URLS via props
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface Trip {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: { id?: string; img: string }[];
//   title: string;
//   location: string;
//   price: number;
// }

// interface CommonSimilarTripsProps {
//   title: string;
//   trips: Trip[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title, trips }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trips.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb} className="w-100 border-20" alt={item.title} />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={thumb.img}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;



// // 14.20 adding our default trip data
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import trip_data from "@/data/trip-data/DefaultTripData";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {trip_data.filter((items) => items.page === "kenya_trip_1").map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb ? item.thumb : ""} className="w-100 border-20" alt="..." />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel && <i className="fa-regular fa-image"></i>}
//                     <Fancybox
//                       options={{
//                         Carousel: {
//                           infinite: true,
//                         },
//                       }}
//                     >
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.location}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;




// // this works
// // merging CommonSimilarTrips with CommonSimilarProperty 13.56
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import property_data from "@/data/home-data/PropertyData";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {property_data.filter((items) => items.page == "home_3_property_2").map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb ? item.thumb : ""} className="w-100 border-20" alt="..." />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel} <i className="fa-regular fa-image"></i>
//                     <Fancybox
//                       options={{
//                         Carousel: {
//                           infinite: true,
//                         },
//                       }}
//                     >
//                       {item.carousel_thumb.map((thumb: any, index: any) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.address}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;




// // this works
// // 13.29 another title prop added attempt
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//         settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         <div className="item">
//           <div className="listing-card-one shadow4 style-three border-30 mb-50">
//             <div className="img-gallery p-15">
//               <div className="position-relative border-20 overflow-hidden">
//                 {/* Image and link elements here */}
//               </div>
//             </div>
//             <div className="property-info pe-4 ps-4">
//               {/* Additional info here */}
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// // added title prop 13.19
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// // import { TripData } from "@/types/TripData";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   title: string;
//   // tripData: TripData[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ title }) => {
//   // const tripData: TripData[] = [];

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">{title}</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {/* {tripData.map((item) => ( */}
//         <div className="item">
//           <div className="listing-card-one shadow4 style-three border-30 mb-50">
//             <div className="img-gallery p-15">
//               <div className="position-relative border-20 overflow-hidden">
//                 {/* <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                 <Image src={item.thumb} className="w-100 border-20" alt="..." />
//                 <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                   <i className="bi bi-arrow-up-right"></i>
//                 </Link>
//                 <div className="img-slider-btn">
//                   {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                   <Fancybox options={{ Carousel: { infinite: true } }}>
//                     {item.carousel_thumb.map((thumb) => (
//                       <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
//                     ))}
//                   </Fancybox>
//                 </div> */}
//               </div>
//             </div>
//             <div className="property-info pe-4 ps-4">
//               {/* <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//               <div className="address m0 pb-5">{item.address}</div>
//               <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                 <strong className="price fw-500 color-dark">${item.price}</strong>
//                 <ul className="style-none d-flex action-icons">
//                   <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                   <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                   <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                 </ul>
//               </div> */}
//             </div>
//           </div>
//         </div>
//         {/* ))} */}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;




// // this works no props
// // 23 jul 13.11 (without TripData)
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// // import { TripData } from "@/types/TripData";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// // interface CommonSimilarTripsProps {
// //   tripData: TripData[];
// // }

// const CommonSimilarTrips: React.FC = () => {
//   // const tripData: TripData[] = [];

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">Similar Trips You May Like</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {/* {tripData.map((item) => ( */}
//         <div className="item">
//           <div className="listing-card-one shadow4 style-three border-30 mb-50">
//             <div className="img-gallery p-15">
//               <div className="position-relative border-20 overflow-hidden">
//                 {/* <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                 <Image src={item.thumb} className="w-100 border-20" alt="..." />
//                 <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                   <i className="bi bi-arrow-up-right"></i>
//                 </Link>
//                 <div className="img-slider-btn">
//                   {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                   <Fancybox options={{ Carousel: { infinite: true } }}>
//                     {item.carousel_thumb.map((thumb) => (
//                       <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
//                     ))}
//                   </Fancybox>
//                 </div> */}
//               </div>
//             </div>
//             <div className="property-info pe-4 ps-4">
//               {/* <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//               <div className="address m0 pb-5">{item.address}</div>
//               <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                 <strong className="price fw-500 color-dark">${item.price}</strong>
//                 <ul className="style-none d-flex action-icons">
//                   <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                   <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                   <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                 </ul>
//               </div> */}
//             </div>
//           </div>
//         </div>
//         {/* ))} */}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// //21.33
// "use client";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// // import { TripData } from "@/types/TripData";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// // interface CommonSimilarTripsProps {
// //   tripData: TripData[];
// // }

// // const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ tripData }) => {
//   const CommonSimilarTrips: React.FC = () => {

//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">Similar Trips You May Like</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {/* {tripData.map((item) => ( */}
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb} className="w-100 border-20" alt="..." />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb) => (
//                         <a key={thumb.id} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.address}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         {/* ))} */}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;

// // 21.18
// "use client";
// import { TripData } from "@/types/TripData";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   tripData: TripData[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ tripData }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">Similar Trips You May Like</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {tripData.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb ? item.thumb : ""} className="w-100 border-20" alt="..." />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.address}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;


// "use client";
// import { TripData } from "@/types/TripData";
// import Fancybox from "@/components/common/Fancybox";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";

// const setting = {
//   dots: true,
//   arrows: false,
//   centerPadding: '0px',
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// interface CommonSimilarTripsProps {
//   tripData: TripData[];
// }

// const CommonSimilarTrips: React.FC<CommonSimilarTripsProps> = ({ tripData }) => {
//   return (
//     <div className="similar-property">
//       <h4 className="mb-40">Similar Trips You May Like</h4>
//       <Slider {...setting} className="similar-listing-slider-one">
//         {tripData.map((item) => (
//           <div key={item.id} className="item">
//             <div className="listing-card-one shadow4 style-three border-30 mb-50">
//               <div className="img-gallery p-15">
//                 <div className="position-relative border-20 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Image src={item.thumb ? item.thumb : ""} className="w-100 border-20" alt="..." />
//                   <Link href="/listing_details_06" className="btn-four inverse rounded-circle position-absolute">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                   <div className="img-slider-btn">
//                     {item.carousel_thumb.length > 0 && <i className="fa-regular fa-image"></i>}
//                     <Fancybox options={{ Carousel: { infinite: true } }}>
//                       {item.carousel_thumb.map((thumb, index) => (
//                         <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info pe-4 ps-4">
//                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
//                 <div className="address m0 pb-5">{item.address}</div>
//                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
//                   <strong className="price fw-500 color-dark">${item.price}</strong>
//                   <ul className="style-none d-flex action-icons">
//                     <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                     <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CommonSimilarTrips;

