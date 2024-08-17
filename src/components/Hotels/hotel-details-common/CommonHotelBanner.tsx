// 2 aug 13.01 added more width for hotelName
import React from 'react';

interface CommonHotelBannerProps {
  hotelName: string;
  hotelLocation: string;
  hotelSpecificLocation: string;
  style_3?: boolean;
}

const CommonHotelBanner: React.FC<CommonHotelBannerProps> = ({
  hotelName,
  hotelLocation,
  hotelSpecificLocation,
  style_3,
}) => {
  return (
    <div className="row">
      <div className="col-lg-10">  {/* Increased column width from col-lg-6 to col-lg-10 */}
        <h3 className="property-title">{hotelName}</h3>
        <div className="d-flex flex-wrap mt-10">
          <div className={`list-type text-uppercase mt-15 me-3 ms-3 ${style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"}`}>
            {hotelLocation}
          </div>
          <div className="address mt-15">
            <i className="bi bi-geo-alt"></i> Location: {hotelSpecificLocation}
          </div>
        </div>
      </div>
      <div className="col-lg-2 text-lg-end"> {/* Reduced column width from col-lg-6 to col-lg-2 */}
        <div className="d-inline-block md-mt-40">
          <ul className="style-none d-flex align-items-center action-btns">
            {/* Your action buttons go here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonHotelBanner;

// // with star rating array
// interface CommonHotelBannerProps {
//   hotelName: string;
//   hotelLocation: string;
//   hotelSpecificLocation: string;
//   style_3?: boolean;
//   // starRating: number; // Adding the starRating prop
// }

// const CommonHotelBanner: React.FC<CommonHotelBannerProps> = ({
//   hotelName,
//   hotelLocation,
//   hotelSpecificLocation,
//   style_3,
//   // starRating,
// }) => {
//   // Generate an array of star elements based on the starRating prop
//   // const renderStars = () => {
//   //   return [...Array(starRating)].map((_, index) => (
//   //     <i key={index} className={`fa-solid fa-star ${styles.starIcon}`}></i>
//   //   ));
//   // };

//   return (
//     <div className="row">
//       <div className="col-lg-6">
//         <h3 className="property-title">{hotelName}</h3>
//         <div className="d-flex flex-wrap mt-10">
//           <div className={`list-type text-uppercase mt-15 me-3 ${style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"}`}>{hotelLocation}</div>
//           <div className="address mt-15">
//             <i className="bi bi-geo-alt"></i> Location: {hotelSpecificLocation}
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-6 text-lg-end">
//         <div className="d-inline-block md-mt-40">
//           <ul className="style-none d-flex align-items-center action-btns">
//             {/* {renderStars()} Render the stars here */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommonHotelBanner;
