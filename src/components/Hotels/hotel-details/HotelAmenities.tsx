import React from "react";

interface HotelAmenitiesProps {
  amenities: { amenity: string }[];
}

const HotelAmenities: React.FC<HotelAmenitiesProps> = ({ amenities = [] }) => {
  return (
    <div>
      <h4 className="mb-20">Included Amenities</h4>
      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
        {amenities.map((item, index) => (
          <li key={index}>{item.amenity}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelAmenities;


// import React from "react";

// interface HotelAmenitiesProps {
//   amenities: { amenity: string }[];

//   // amenities: string[];
// }

// const HotelAmenities: React.FC<HotelAmenitiesProps> = ({ amenities = [] }) => {
//   if (!amenities.length) {
//     return <div>No amenities available</div>;
//   }
//   return (
//     <div>
//       <h4 className="mb-20">Included Amenities</h4>
//       <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
//         {amenities.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HotelAmenities;