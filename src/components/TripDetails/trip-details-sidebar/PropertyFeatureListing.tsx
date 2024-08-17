// 2 aug 13.58 add link to features array
import Image from "next/image";
import Link from "next/link";
import Fancybox from "@/components/common/Fancybox";
import Slider from "react-slick";

interface PropertyFeatureListingProps {
  features: {
    id: number;
    thumb: string;
    large_thumb: { src: string }[];
    tag: string;
    property_name: string;
    address: string;
    link: string; // New property for the link
  }[];
}

const settings = {
  dots: true,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
};

const PropertyFeatureListing: React.FC<PropertyFeatureListingProps> = ({ features }) => {
  return (
    <div className="feature-listing bg-white border-20 p-30">
      <h5 className="mb-40">Featured Hotels</h5>
      <Slider {...settings} className="carousel slide">
        {features.map((item) => (
          <div key={item.id} className="carousel-item">
            <div className="listing-card-one style-three border-10">
              <div className="img-gallery">
                <div className="position-relative border-10 overflow-hidden">
                  <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
                  <Link href="#" className="fav-btn tran3s">
                    <i className="fa-light fa-heart"></i>
                  </Link>
                  <Image
                    src={item.thumb}
                    className="w-100 border-10"
                    alt={item.property_name}
                    width={600}  // Adjust width and height as necessary
                    height={400}
                  />
                  <div className="img-slider-btn">
                    {item.large_thumb.length} <i className="fa-regular fa-image"></i>
                    <Fancybox
                      options={{
                        Carousel: {
                          infinite: true,
                        },
                      }}
                    >
                        {item.large_thumb.map((thumb, index) => (
                        <a
                          key={index}
                          className="d-block"
                          data-fancybox={`img${item.id}`}
                          href={thumb.src}
                        ></a>
                      ))}
                    </Fancybox>
                  </div>
                </div>
              </div>
              <div className="property-info mt-15">
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <strong className="price fw-500 color-dark">{item.property_name}</strong>
                    <div className="address m0 pt-5">{item.address}</div>
                  </div>
                  <Link href={item.link || "#"} className="btn-four rounded-circle"> {/* Use the link prop with fallback*/}
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertyFeatureListing;


// // 15.20 add src: to large thumb
// import Image from "next/image";
// import Link from "next/link";
// import Fancybox from "@/components/common/Fancybox";
// import Slider from "react-slick";

// interface PropertyFeatureListingProps {
//   features: {
//     id: number;
//     thumb: string;
//     large_thumb: { src: string }[];
//     tag: string;
//     property_name: string;
//     address: string;
//   }[];
// }

// const settings = {
//   dots: true,
//   arrows: false,
//   centerPadding: "0px",
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 3000,
// };

// const PropertyFeatureListing: React.FC<PropertyFeatureListingProps> = ({ features }) => {
//   return (
//     <div className="feature-listing bg-white border-20 p-30">
//       <h5 className="mb-40">Featured Hotels</h5>
//       <Slider {...settings} className="carousel slide">
//         {features.map((item) => (
//           <div key={item.id} className="carousel-item">
//             <div className="listing-card-one style-three border-10">
//               <div className="img-gallery">
//                 <div className="position-relative border-10 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Link href="#" className="fav-btn tran3s">
//                     <i className="fa-light fa-heart"></i>
//                   </Link>
//                   <Image
//                     src={item.thumb}
//                     className="w-100 border-10"
//                     alt={item.property_name}
//                     width={600}  // Adjust width and height as necessary
//                     height={400}
//                   />
//                   <div className="img-slider-btn">
//                     {item.large_thumb.length} <i className="fa-regular fa-image"></i>
//                     <Fancybox
//                       options={{
//                         Carousel: {
//                           infinite: true,
//                         },
//                       }}
//                     >
//                       {item.large_thumb.map((thumb, index) => (
//                         <a
//                           key={index}
//                           className="d-block"
//                           data-fancybox={`img${item.id}`}
//                           href={thumb.src}
//                         ></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info mt-15">
//                 <div className="d-flex justify-content-between align-items-end">
//                   <div>
//                     <strong className="price fw-500 color-dark">{item.property_name}</strong>
//                     <div className="address m0 pt-5">{item.address}</div>
//                   </div>
//                   <Link href="/listing_details_03" className="btn-four rounded-circle">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default PropertyFeatureListing;


// // 14.14 30 jul 24 add width and height to image or it breaks
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import Fancybox from "@/components/common/Fancybox";
// import Slider from "react-slick";

// interface PropertyFeatureListingProps {
//   features: {
//     id: number;
//     thumb: string;
//     class_name?: string;
//     large_thumb: string[];
//     // large_thumb: { src: string }[];
//     tag: string;
//     property_name: string;
//     address: string;
//   }[];
// }

// const settings = {
//   dots: true,
//   arrows: false,
//   centerPadding: "0px",
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 3000,
// };

// const PropertyFeatureListing: React.FC<PropertyFeatureListingProps> = ({ features }) => {
//   return (
//     <div className="feature-listing bg-white border-20 p-30">
//       <h5 className="mb-40">Featured Hotels</h5>
//       <Slider {...settings} className="carousel slide">
//         {features.map((item) => (
//           <div key={item.id} className={`carousel-item ${item.class_name}`}>
//             <div className="listing-card-one style-three border-10">
//               <div className="img-gallery">
//                 <div className="position-relative border-10 overflow-hidden">
//                   <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
//                   <Link href="#" className="fav-btn tran3s">
//                     <i className="fa-light fa-heart"></i>
//                   </Link>
//                   <Image src={item.thumb} className="w-100 border-10" alt="..." width={600} height={400} />
//                   <div className="img-slider-btn">
//                     03 <i className="fa-regular fa-image"></i>
//                     <Fancybox
//                       options={{
//                         Carousel: {
//                           infinite: true,
//                         },
//                       }}
//                     >
//                       {item.large_thumb.map((thumb, index) => (
//                         <a
//                           key={index}
//                           className="d-block"
//                           data-fancybox={`img${item.id}`}
//                           // href={thumb.src}
//                           href={thumb}
//                         ></a>
//                       ))}
//                     </Fancybox>
//                   </div>
//                 </div>
//               </div>
//               <div className="property-info mt-15">
//                 <div className="d-flex justify-content-between align-items-end">
//                   <div>
//                     <strong className="price fw-500 color-dark">{item.property_name}</strong>
//                     <div className="address m0 pt-5">{item.address} </div>
//                   </div>
//                   <Link href="/listing_details_03" className="btn-four rounded-circle">
//                     <i className="bi bi-arrow-up-right"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default PropertyFeatureListing;
