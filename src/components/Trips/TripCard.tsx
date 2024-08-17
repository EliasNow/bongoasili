// import Image from "next/image";
// import Link from "next/link";
// import { TripType } from "@/types/TripType";
// import React from "react";
// import Fancybox from "@/components/common/Fancybox"; // Assuming Fancybox is already set up

// interface TripCardProps {
//   trip: TripType;
//   style?: boolean;
// }

// const TripCard: React.FC<TripCardProps> = ({
//   trip,
//   style = false,
// }) => {
//   const mainImage = trip.carousel_thumb?.[0]?.img;

//   return (
//     <div className={`listing-card-seven border-20 p-20 mb-50 wow fadeInUp ${style ? "grey-bg" : ""}`}>
//       <div className="d-flex flex-wrap layout-one">
//         <div className={`img-gallery position-relative z-1 border-20 overflow-hidden ${trip.bg_img || ""}`}>
//           {mainImage ? (
//             <Image
//               src={mainImage}
//               alt={trip.title}
//               width={800}
//               height={600}
//               className="w-100"
//             />
//           ) : (
//             <div className="placeholder-image">Image not available</div>
//           )}

//           <div className={style ? "tag bg-white rounded-0 text-dark fw-500" : `border-20 tag ${trip.tag_bg}`}>
//             {trip.tags?.[0] ?? 'N/A'}
//           </div>

//           <div className="img-slider-btn">
//             {trip.carousel_thumb.length > 1 && (
//               <>
//                 <span>{trip.carousel_thumb.length} <i className="fa-regular fa-image"></i></span>

//                 <Fancybox
//                   options={{
//                     Carousel: {
//                       infinite: true,
//                     },
//                   }}
//                 >
//                   {trip.carousel_thumb.map((thumb, index) => {
//                     const imgSrc = typeof thumb.img === "string" ? thumb.img : thumb.img?.src;

//                     return (
//                       <a key={index} className="d-block" data-fancybox="gallery" href={imgSrc}>
//                         <Image
//                           src={imgSrc}
//                           alt={`Thumbnail ${index + 1}`}
//                           width={800}
//                           height={600}
//                           className="w-100"
//                         />
//                       </a>
//                     );
//                   })}
//                 </Fancybox>
//               </>
//             )}
//           </div>
//         </div>

//         <div className="property-info">
//           <Link href={trip.link || "#"} className="title tran3s mb-15">{trip.title}</Link>
//           <div className="address"><em>{trip.location}</em></div>
//           <div className="feature mt-30 mb-30 pt-30 pb-5">
//             <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
//               <li><strong>{trip.days}</strong> Days</li>
//               <li><strong>{trip.inclusions?.[1] ?? 'N/A'}</strong> {trip.details}</li>
//               <li><strong>{trip.inclusions?.[2] ?? 'N/A'}</strong> 4x4 Safari</li>
//             </ul>
//           </div>
//           <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between">
//             <strong className="price fw-500 color-dark me-auto">
//               ${trip.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//               {trip.price_text && <>/<sub>m</sub></>}
//             </strong>
//             <ul className="style-none d-flex action-icons me-4">
//               <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//               <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//               <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//             </ul>
//             <Link href={trip.link || "#"} className="btn-four rounded-circle">
//               <i className="bi bi-arrow-up-right"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//       </div>
//   );
// };

// export default TripCard;

// // works great! but no carousel image thumbnail
// //20.43 11 aug Fancybox back in the mix and fix initial image load of image in carousel
import Image from "next/image";
import Link from "next/link";
import { TripType } from "@/types/TripType";
import React from "react";
import Fancybox from "@/components/common/Fancybox"; // Assuming Fancybox is already set up

interface TripCardProps {
  trip: TripType;
  style?: boolean;
}

const TripCard: React.FC<TripCardProps> = ({
  trip,
  style = false,
}) => {
  const mainImage = trip.carousel_thumb?.[0]?.img;

  return (
    <div className={`listing-card-seven border-20 p-20 mb-50 wow fadeInUp ${style ? "grey-bg" : ""}`}>
      <div className="d-flex flex-wrap layout-one">
        <div className={`img-gallery position-relative z-1 border-20 overflow-hidden ${trip.bg_img || ""}`}>
          {mainImage ? (
            <Image
              src={mainImage}
              alt={trip.title}
              width={800}
              height={600}
              className="w-100"
            />
          ) : (
            <div className="placeholder-image">Image not available</div>
          )}

          <div className={style ? "tag bg-white rounded-0 text-dark fw-500" : `border-20 tag ${trip.tag_bg}`}>
            {trip.tags?.[0] ?? 'N/A'}
          </div>

          <div className="img-slider-btn">
            {trip.carousel_thumb.length > 1 && (
              <>
                <span>{trip.carousel_thumb.length} <i className="fa-regular fa-image"></i></span>


                <Fancybox
            options={{
              Carousel: {
                infinite: true,
              },
            }}
          >
            {trip.carousel_thumb.map((thumb, index) => {
              // If thumb.img is a StaticImageData object, we use thumb.img.src
              const imgSrc = typeof thumb.img === "string" ? thumb.img : thumb.img?.src;

              return (
                <a key={index} className="d-block" data-fancybox="gallery" href={imgSrc}>
                  <Image
                    src={imgSrc}
                    alt={`Thumbnail ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-100"
                  />
                </a>
              );
            })}
          </Fancybox>
              </>
            )}
          </div>
        </div>

        <div className="property-info">
          <Link href={trip.link || "#"} className="title tran3s mb-15">{trip.title}</Link>
          <div className="address"><em>{trip.location}</em></div>
          <div className="feature mt-30 mb-30 pt-30 pb-5">
            <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
              <li><strong>{trip.days}</strong> Days</li>
              <li><strong>{trip.inclusions?.[1] ?? 'N/A'}</strong> {trip.details}</li>
              <li><strong>{trip.inclusions?.[2] ?? 'N/A'}</strong> 4x4 Safari</li>
            </ul>
          </div>
          <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between">
            <strong className="price fw-500 color-dark me-auto">
              ${trip.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              {trip.price_text && <>/<sub>m</sub></>}
            </strong>
            <ul className="style-none d-flex action-icons me-4">
              <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
              <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
              <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
            </ul>
            <Link href={trip.link || "#"} className="btn-four rounded-circle">
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;






// // 20.36 11 aug added image error handling
// import Image from "next/image";
// import Link from "next/link";
// import { TripType } from "@/types/TripType";
// import React from "react";

// interface TripCardProps {
//   trip: TripType;
//   style?: boolean;
// }

// const TripCard: React.FC<TripCardProps> = ({
//   trip,
//   style = false,
// }) => {
//   const mainImage = trip?.carousel_thumb?.[0]?.img;

//   return (
//     <div className={`listing-card-seven border-20 p-20 mb-50 wow fadeInUp ${style ? "grey-bg" : ""}`}>
//       <div className="d-flex flex-wrap layout-one">
//         <div className={`img-gallery position-relative z-1 border-20 overflow-hidden ${trip.bg_img || ""}`}>
//           {mainImage ? (
//             <Image
//               src={mainImage}
//               alt={trip.title}
//               width={800}
//               height={600}
//               className="w-100"
//               onError={(e) => {
//                 e.currentTarget.src = '/path-to-default-image.jpg'; // Handle image loading errors
//               }}
//             />
//           ) : (
//             <div className="placeholder-image">Image not available</div>
//           )}
//           <div className={style ? "tag bg-white rounded-0 text-dark fw-500" : `border-20 tag ${trip.tag_bg}`}>
//             {trip.tags?.[0] ?? 'N/A'}
//           </div>
//         </div>
//         <div className="property-info">
//           <Link href={trip.link || "#"} className="title tran3s mb-15">{trip.title}</Link>
//           <div className="address"><em>{trip.location}</em></div>
//           <div className="feature mt-30 mb-30 pt-30 pb-5">
//             <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
//               <li><strong>{trip.days}</strong> Days</li>
//               <li><strong>{trip.inclusions?.[1] ?? 'N/A'}</strong> {trip.details}</li>
//               <li><strong>{trip.inclusions?.[2] ?? 'N/A'}</strong> 4x4 Safari</li>
//             </ul>
//           </div>
//           <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between">
//             <strong className="price fw-500 color-dark me-auto">
//               ${trip.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//               {trip.price_text && <>/<sub>m</sub></>}
//             </strong>
//             <ul className="style-none d-flex action-icons me-4">
//               <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//               <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//               <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//             </ul>
//             <Link href={trip.link || "#"} className="btn-four rounded-circle">
//               <i className="bi bi-arrow-up-right"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripCard;


// // almost works except carousel and updating image within builder.io
// // 19.08 11 aug back to square one
// import Image from "next/image";
// import Link from "next/link";
// import { TripType } from "@/types/TripType";
// import React from "react";

// interface TripCardProps {
//   trip: TripType;
//   style?: boolean;
//   // details?: string;
// }

// const TripCard: React.FC<TripCardProps> = ({
//   trip,
//   style = false,
// }) => {
//   // Check if `trip.carousel_thumb` and the first image exist
//   const mainImage = trip?.carousel_thumb?.[0]?.img;

//   return (
//     <div className={`listing-card-seven border-20 p-20 mb-50 wow fadeInUp ${style ? "grey-bg" : ""}`}>
//       <div className="d-flex flex-wrap layout-one">
//         <div className={`img-gallery position-relative z-1 border-20 overflow-hidden ${trip.bg_img || ""}`}>
//           {mainImage ? (
//             <Image
//               src={mainImage.src}
//               alt={trip.title}
//               width={mainImage.width || 800} // Set default width
//               height={mainImage.height || 600} // Set default height
//               className="w-100"
//             />
//           ) : (
//             <div className="placeholder-image">Image not available</div>
//           )}
//           <div className={style ? "tag bg-white rounded-0 text-dark fw-500" : `border-20 tag ${trip.tag_bg}`}>
//             {trip.tags?.[0] ?? 'N/A'}
//           </div>
//         </div>
//         <div className="property-info">
//           <Link href={trip.link || "#"} className="title tran3s mb-15">{trip.title}</Link>
//           <div className="address"><em>{trip.location}</em></div>
//           <div className="feature mt-30 mb-30 pt-30 pb-5">
//             <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
//               <li><strong>{trip.days}</strong> Days</li>
//               <li><strong>{trip.inclusions?.[1] ?? 'N/A'}</strong> {trip.details}</li>
//               {/* <li><strong>{trip.inclusions?.[1] ?? 'N/A'}</strong> {trip.details?.join(', ') ?? 'N/A'}</li> Joining details into a single string */}
//               <li><strong>{trip.inclusions?.[2] ?? 'N/A'}</strong> 4x4 Safari</li>
//             </ul>
//           </div>
//           <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between">
//             <strong className="price fw-500 color-dark me-auto">
//               ${trip.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//               {trip.price_text && <>/<sub>m</sub></>}
//             </strong>
//             <ul className="style-none d-flex action-icons me-4">
//               <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//               <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//               <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//             </ul>
//             <Link href={trip.link || "#"} className="btn-four rounded-circle">
//               <i className="bi bi-arrow-up-right"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripCard;
