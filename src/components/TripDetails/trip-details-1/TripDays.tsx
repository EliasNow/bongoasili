// trying to get that sweet accordion styling:
"use client";
import { useState } from "react";

interface TripDayType {
  id: number;
  title: string;
  description: string;
}

interface TripDaysProps {
  tripDaysData?: TripDayType[];
}

const TripDays: React.FC<TripDaysProps> = ({ tripDaysData = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!tripDaysData.length) {
    return <div>No trip days available</div>;
  }

  return (
    <div className="accordion" id="accordionTripDays"> {/* Added accordion class for consistency */}
      {tripDaysData.map((day: TripDayType, index: number) => (
        <div key={day.id} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseTripDay${day.id}`}
              aria-expanded={activeIndex === index}
              aria-controls={`collapseTripDay${day.id}`}
              onClick={() => handleToggle(index)}
            >
              {day.title}
            </button>
          </h2>
          <div
            id={`collapseTripDay${day.id}`}
            className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
            data-bs-parent="#accordionTripDays"
          >
            <div className="accordion-body">
              <p>{day.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripDays;



// add default value to keep from breaking:
// "use client";
// import { useState } from "react";

// interface TripDayType {
//   id: number;
//   title: string;
//   description: string;
// }

// interface TripDaysProps {
//   tripDaysData?: TripDayType[];
// }

// const TripDays: React.FC<TripDaysProps> = ({ tripDaysData = [] }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="accordion-style-two mt-45">
//       {tripDaysData.map((day: TripDayType, index: number) => (
//         <div key={day.id} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
//           <div className="accordion-header" onClick={() => handleToggle(index)}>
//             <h5 className="accordion-title">{day.title}</h5>
//             <span className="accordion-icon">{activeIndex === index ? "-" : "+"}</span>
//           </div>
//           <div className={`accordion-body ${activeIndex === index ? "show" : ""}`}>
//             <p>{day.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TripDays;



// // jul 22 16.59 edit to pass TripDays data props
// "use client";
// import { useState } from "react";

// interface TripDayType {
//   id: number;
//   title: string;
//   description: string;
// }

// interface TripDaysProps {
//   tripDaysData: TripDayType[];
// }

// const TripDays: React.FC<TripDaysProps> = ({ tripDaysData }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="accordion-style-two mt-45">
//       {tripDaysData.map((day: TripDayType, index: number) => (
//         <div key={day.id} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
//           <div className="accordion-header" onClick={() => handleToggle(index)}>
//             <h5 className="accordion-title">{day.title}</h5>
//             <span className="accordion-icon">{activeIndex === index ? "-" : "+"}</span>
//           </div>
//           <div className={`accordion-body ${activeIndex === index ? "show" : ""}`}>
//             <p>{day.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TripDays;



// "use client";
// import { useState } from "react";
// import { trip_days_list, TripDayType } from "@/data/inner-data/TripDaysListData";

// const TripDays = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="accordion-style-two mt-45">
//       {trip_days_list.map((day: TripDayType, index: number) => (
//         <div key={day.id} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
//           <div className="accordion-header" onClick={() => handleToggle(index)}>
//             <h5 className="accordion-title">{day.title}</h5>
//             <span className="accordion-icon">{activeIndex === index ? "-" : "+"}</span>
//           </div>
//           <div className={`accordion-body ${activeIndex === index ? "show" : ""}`}>
//             <p>{day.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TripDays;
