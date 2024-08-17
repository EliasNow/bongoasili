//25 jul 17.52
import React from "react";

interface TripInclusionsProps {
  inclusions: { inclusion: string }[];
}
//By accessing item.amenity inside the li element, you ensure that you're passing a string (which is a valid ReactNode) to the li element.
// const TripInclusions: React.FC<TripInclusionsProps> = ({ inclusions = [] }) => {
//   return (
//     <div>
//       <h4 className="mb-20">Included</h4>
//       <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
//         {inclusions.map((item, index) => (
//           <li key={index}>
//             <i className="bi bi-check-circle"></i> 
//             {item.inclusion}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const TripInclusions: React.FC<TripInclusionsProps> = ({ inclusions = [] }) => {
  return (
    <div>
      <h4 className="mb-20">Included in Your Safari</h4>
      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
        {inclusions.map((item, index) => (
          <li key={index}>{item.inclusion}</li>
        ))}
      </ul>
    </div>
  );
};

export default TripInclusions;
