// 8 aug 13.28
import React, { useState, ChangeEvent } from "react";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import TripOverviewModal from "@/modals/TripOverviewModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import trip_listing_data from "@/data/inner-data/TripListingData";
import useFilteredTrips from "@/hooks/useFilteredTrips";
import { TripType } from "@/types/TripType";

interface TripOverviewMenuProps {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange: (value: [number, number]) => void;
  maxPrice: number;
  handleResetFilter: () => void;
  selectedAmenities: string[];
  handleAmenityChange: (value: string[]) => void;
  handleLocationChange: (value: string) => void;
  handleStatusChange: (value: string) => void;
  handlePriceDropChange: (value: string) => void;
  priceValue: [number, number];
  handleCountryChange: (value: string) => void; // Added this prop
}

const TripOverviewMenu: React.FC<TripOverviewMenuProps> = ({
  handleSearchChange,
  handlePriceChange,
  maxPrice,
  handleResetFilter,
  selectedAmenities,
  handleAmenityChange,
  handleLocationChange,
  handleStatusChange,
  handlePriceDropChange,
  priceValue,
  handleCountryChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const { filteredTrips, updateFilters } = useFilteredTrips(trip_listing_data as TripType[]);

  const handlePriceChangeWrapper = (val: [number, number]) => {
    handlePriceChange(val);
    updateFilters({ priceRange: val });
  };

  const handleLocationChangeWrapper = (location: string) => {
    handleLocationChange(location);
    updateFilters({ location });
  };
// update 8 aug 13.38 reset filter for "Any"
  const handleCountryChangeWrapper = (country: string) => {
    handleCountryChange(country === "Any" ? "" : country);
    updateFilters({ country: country === "Any" ? "" : country });
  };

  const handleStatusChangeWrapper = (status: string) => {
    handleStatusChange(status);
    updateFilters({ status });
  };

  const handleAmenityChangeWrapper = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const newAmenities = checked
      ? [...selectedAmenities, value]
      : selectedAmenities.filter((amenity: string) => amenity !== value);
    handleAmenityChange(newAmenities);
    updateFilters({ amenities: newAmenities });
  };

  const handleResetFilterWrapper = () => {
    handleResetFilter();
    updateFilters({
      location: "",
      priceRange: [0, maxPrice],
      amenities: [],
      status: "",
    });
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row gx-0 align-items-center">
          <div className="col-xxl-2 col-xl-3 col-sm-6">
            <div className="input-box-one border-left">
              <div className="label">Departure Date</div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date as Date)}
                className="nice-select fw-normal"
                placeholderText="Select date"
              />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="input-box-one border-left">
              <div className="label">Country</div>
              <NiceSelect
                className="nice-select location fw-normal"
                options={[
                  { value: "Any", text: "Any" },
                  { value: "Kenya", text: "Kenya" },
                  { value: "Kenya & Tanzania", text: "Kenya & Tanzania" },
                  { value: "Namibia", text: "Namibia" },
                  { value: "South Africa", text: "South Africa" },
                  { value: "Tanzania", text: "Tanzania" },
                  { value: "Uganda", text: "Uganda" },
                  { value: "Zanzibar", text: "Zanzibar" },
                ]}
                defaultCurrent={0}
                onChange={handleCountryChangeWrapper}
                name=""
                placeholder=""
              />
            </div>
          </div>
          <div className="col-xl-3 col-sm-4">
            <div className="input-box-one border-left">
              <div className="label">Price per guest</div>
              <NiceSelect
                className="nice-select fw-normal"
                options={[
                  { value: "0", text: "0 - $2,999" },
                  { value: "3000", text: "$3,000 - $4,999" },
                  { value: "5000", text: "$5,000 - $9,999" },
                  { value: "10000", text: "$10,000+" },
                ]}
                defaultCurrent={0}
                onChange={(value) => {
                  const numValue = Number(value);
                  let val: [number, number];
                  if (numValue === 0) {
                    val = [0, 2999];
                  } else if (numValue === 3000) {
                    val = [3000, 4999];
                  } else if (numValue === 5000) {
                    val = [5000, 9999];
                  } else {
                    val = [10000, maxPrice];
                  }
                  handlePriceChangeWrapper(val);
                }}
                name=""
                placeholder=""
              />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-1">
            <div className="input-box-one lg-mt-20">
              <div className="d-flex align-items-center justify-content-center justify-content-xl-end">
                <Link
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#advanceFilterModal"
                  className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center"
                >
                  <span className="me-3 d-xl-none d-xxl-block">ADVANCED Search</span>
                  <i className="fa-light fa-sliders-up"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      <TripOverviewModal
        handleSearchChange={handleSearchChange}
        handlePriceChange={handlePriceChangeWrapper}
        maxPrice={maxPrice}
        priceValue={priceValue}
        handleResetFilter={handleResetFilterWrapper}
        selectedAmenities={selectedAmenities}
        handleAmenityChange={handleAmenityChangeWrapper}
        handleLocationChange={handleLocationChangeWrapper}
        handleStatusChange={handleStatusChangeWrapper}
        handleCountryChange={handleCountryChangeWrapper} // Added handleCountryChangeWrapper
        handleBedroomChange={function (val: string): void {
          throw new Error("Function not implemented.");
        } } 
        handleBathroomChange={function (val: string): void {
          throw new Error("Function not implemented.");
        } }      
      />
    </>
  );
};

export default TripOverviewMenu;

// // 16.45 priceValue tuple
// import React, { useState, ChangeEvent } from "react";
// import NiceSelect from "@/ui/NiceSelect";
// import Link from "next/link";
// import TripOverviewModal from "@/modals/TripOverviewModal";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import useFilteredTrips from "@/hooks/useFilteredTrips";
// // import { Trip } from "@/types/Trip";
// import { TripType } from "@/types/TripType";


// interface TripOverviewMenuProps {
//   handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handlePriceChange: (value: [number, number]) => void;
//   maxPrice: number;
//   handleResetFilter: () => void;
//   selectedAmenities: string[];
//   handleAmenityChange: (value: string[]) => void;
//   handleLocationChange: (value: string) => void;
//   handleStatusChange: (value: string) => void;
//   handlePriceDropChange: (value: string) => void;
//   priceValue: [number, number];
//   handleCountryChange: (value: string) => void; // Added this prop
// }

// const TripOverviewMenu: React.FC<TripOverviewMenuProps> = ({
//   handleSearchChange,
//   handlePriceChange,
//   maxPrice,
//   handleResetFilter,
//   selectedAmenities,
//   handleAmenityChange,
//   handleLocationChange,
//   handleStatusChange,
//   handlePriceDropChange,
//   priceValue,
//   handleCountryChange, // Added this prop 7 aug 15.08
// }) => {
//   const [startDate, setStartDate] = useState<Date | null>(null);

//   const { filteredTrips, updateFilters } = useFilteredTrips(trip_listing_data as TripType[]);

//   const handlePriceChangeWrapper = (val: [number, number]) => {
//     handlePriceChange(val);
//     updateFilters({ priceRange: val });
//   };

//   const handleLocationChangeWrapper = (location: string) => {
//     handleLocationChange(location);
//     updateFilters({ location });
//   };

//   // 7 aug 14.01 filter based on country
//   const handleCountryChangeWrapper = (country: string) => {
//     handleCountryChange(country);
//     updateFilters({ country });
//   };

//   const handleStatusChangeWrapper = (status: string) => {
//     handleStatusChange(status);
//     updateFilters({ status });
//   };

//   const handleAmenityChangeWrapper = (event: ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = event.target;
//     const newAmenities = checked
//       ? [...selectedAmenities, value]
//       : selectedAmenities.filter((amenity: string) => amenity !== value);
//     handleAmenityChange(newAmenities);
//     updateFilters({ amenities: newAmenities });
//   };

//   const handleResetFilterWrapper = () => {
//     handleResetFilter();
//     updateFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//     });
//   };

//   return (
//     <>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="row gx-0 align-items-center">
//           <div className="col-xxl-2 col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Departure Date</div>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date as Date)}
//                 className="nice-select fw-normal"
//                 placeholderText="Select date"
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Country</div>
//               <NiceSelect
//                 className="nice-select location fw-normal"
//                 options={[
//                   { value: "Any", text: "Any" },
//                   { value: "Kenya", text: "Kenya" },
//                   { value: "Kenya & Tanzania", text: "Kenya & Tanzania" },
//                   { value: "Namibia", text: "Namibia" },
//                   { value: "South Africa", text: "South Africa" },
//                   { value: "Tanzania", text: "Tanzania" },
//                   { value: "Uganda", text: "Uganda" },
//                   { value: "Zanzibar", text: "Zanzibar" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={handleCountryChangeWrapper}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-4">
//             <div className="input-box-one border-left">
//               <div className="label">Price per guest</div>
//               <NiceSelect
//                 className="nice-select fw-normal"
//                 options={[
//                   { value: "0", text: "0 - $2,999" },
//                   { value: "3000", text: "$3,000 - $4,999" },
//                   { value: "5000", text: "$5,000 - $9,999" },
//                   { value: "10000", text: "$10,000+" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => {
//                   const numValue = Number(value);
//                   let val: [number, number];
//                   if (numValue === 0) {
//                     val = [0, 2999];
//                   } else if (numValue === 3000) {
//                     val = [3000, 4999];
//                   } else if (numValue === 5000) {
//                     val = [5000, 9999];
//                   } else {
//                     val = [10000, maxPrice];
//                   }
//                   handlePriceChangeWrapper(val);
//                 }}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xxl-2 col-xl-1">
//             <div className="input-box-one lg-mt-20">
//               <div className="d-flex align-items-center justify-content-center justify-content-xl-end">
//                 <Link
//                   href="#"
//                   data-bs-toggle="modal"
//                   data-bs-target="#advanceFilterModal"
//                   className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center"
//                 >
//                   <span className="me-3 d-xl-none d-xxl-block">ADVANCED Search</span>
//                   <i className="fa-light fa-sliders-up"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <TripOverviewModal
//         handleSearchChange={handleSearchChange}
//         handlePriceChange={handlePriceChangeWrapper}
//         maxPrice={maxPrice}
//         priceValue={priceValue}
//         handleResetFilter={handleResetFilterWrapper}
//         selectedAmenities={selectedAmenities}
//         handleAmenityChange={handleAmenityChangeWrapper}
//         handleLocationChange={handleLocationChangeWrapper}
//         handleStatusChange={handleStatusChangeWrapper}
//         handleCountryChange={handleCountryChangeWrapper} // Added handleCountryChangeWrapper

//         handleBedroomChange={function (val: string): void {
//           throw new Error("Function not implemented.");
//         } } 
//         handleBathroomChange={function (val: string): void {
//           throw new Error("Function not implemented.");
//         } }      
        
//         />
//     </>
//   );
// };

// export default TripOverviewMenu;



// import React, { useState, ChangeEvent } from "react";
// import NiceSelect from "@/ui/NiceSelect";
// import Link from "next/link";
// import TripOverviewModal from "@/modals/TripOverviewModal";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import useFilteredTrips from "@/hooks/useFilteredTrips";
// import { Trip } from "@/types/Trip"

// interface TripOverviewMenuProps {
//   handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   handlePriceChange: (value: [number, number]) => void;
//   maxPrice: number;
//   handleResetFilter: () => void;
//   selectedAmenities: string[];
//   handleAmenityChange: (value: string[]) => void;
//   handleLocationChange: (value: string) => void;
//   handleStatusChange: (value: string) => void;
//   handlePriceDropChange: (value: string) => void;
//   priceValue: [number, number];
// }

// const TripOverviewMenu: React.FC<TripOverviewMenuProps> = ({
//   handleSearchChange,
//   handlePriceChange,
//   maxPrice,
//   handleResetFilter,
//   selectedAmenities,
//   handleAmenityChange,
//   handleLocationChange,
//   handleStatusChange,
//  }) => {
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [priceValue, setPriceValue] = useState<[number, number]>([0, maxPrice]);

//   // const { filteredTrips, updateFilters } = useFilteredTrips(trip_listing_data as Trip[]);

//   const { filteredTrips, updateFilters } = useFilteredTrips(trip_listing_data);

//   const handlePriceChangeWrapper = (val: [number, number]) => {
//     setPriceValue(val);
//     handlePriceChange(val);
//     updateFilters({ priceRange: val });
//   };

//   const handleLocationChangeWrapper = (location: string) => {
//     handleLocationChange(location);
//     updateFilters({ location });
//   };

//   const handleStatusChangeWrapper = (status: string) => {
//     handleStatusChange(status);
//     updateFilters({ status });
//   };

//   const handleAmenityChangeWrapper = (event: ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = event.target;
//     const newAmenities = checked
//       ? [...selectedAmenities, value]
//       : selectedAmenities.filter((amenity: string) => amenity !== value);
//     handleAmenityChange(newAmenities);
//     updateFilters({ amenities: newAmenities });
//   };

//   const handleResetFilterWrapper = () => {
//     handleResetFilter();
//     updateFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//     });
//   };

//   return (
//     <>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="row gx-0 align-items-center">
//           <div className="col-xxl-2 col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Departure Date</div>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date as Date)}
//                 className="nice-select fw-normal"
//                 placeholderText="Select date"
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Location</div>
//               <NiceSelect
//                 className="nice-select location fw-normal"
//                 options={[
//                   { value: "Any", text: "Any" },
//                   { value: "Kenya", text: "Kenya" },
//                   { value: "Kenya & Tanzania", text: "Kenya & Tanzania" },
//                   { value: "Namibia", text: "Namibia" },
//                   { value: "South Africa", text: "South Africa" },
//                   { value: "Tanzania", text: "Tanzania" },
//                   { value: "Uganda", text: "Uganda" },
//                   { value: "Zanzibar", text: "Zanzibar" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => handleLocationChangeWrapper(value)}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-4">
//             <div className="input-box-one border-left">
//               <div className="label">Price per guest</div>
//               <NiceSelect
//                 className="nice-select fw-normal"
//                 options={[
//                   { value: "0", text: "0 - $2,999" },
//                   { value: "3000", text: "$3,000 - $4,999" },
//                   { value: "5000", text: "$5,000 - $9,999" },
//                   { value: "10000", text: "$10,000+" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => {
//                   const numValue = Number(value);
//                   let val: [number, number];
//                   if (numValue === 0) {
//                     val = [0, 2999];
//                   }
//                   else if (numValue === 3000) {
//                     val = [3000, 4999];
//                   } else if (numValue === 5000) {
//                     val = [5000, 9999];
//                   } else {
//                     val = [10000, maxPrice];
//                   }
//                   handlePriceChangeWrapper(val);
//                 }}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xxl-2 col-xl-1">
//             <div className="input-box-one lg-mt-20">
//               <div className="d-flex align-items-center justify-content-center justify-content-xl-end">
//                 <Link
//                   href="#"
//                   data-bs-toggle="modal"
//                   data-bs-target="#advanceFilterModal"
//                   className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center"
//                 >
//                   <span className="me-3 d-xl-none d-xxl-block">ADVANCED Search</span>
//                   <i className="fa-light fa-sliders-up"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <TripOverviewModal
//         handleSearchChange={handleSearchChange}
//         handlePriceChange={handlePriceChangeWrapper}
//         maxPrice={maxPrice}
//         priceValue={priceValue}
//         handleResetFilter={handleResetFilterWrapper}
//         selectedAmenities={selectedAmenities}
//         handleAmenityChange={handleAmenityChangeWrapper}
//         handleLocationChange={handleLocationChangeWrapper}
//         handleStatusChange={handleStatusChangeWrapper}
//         handleBedroomChange={(val: string) => {}}  //
//         handleBathroomChange={(val: string) => {}} // 
//       />
//     </>
//   );
// };

// export default TripOverviewMenu;


// // 4 aug 17.00
// import React, { useState, ChangeEvent } from "react";
// import NiceSelect from "@/ui/NiceSelect";
// import Link from "next/link";
// import TripOverviewModal from "@/modals/TripOverviewModal";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import useFilteredTrips from "@/hooks/useFilteredTrips";

// interface TripOverviewMenuProps {
//   handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   // handleSearchChange: (value: string) => void;
//   handlePriceChange: (value: [number, number]) => void;
//   maxPrice: number;
//   handleResetFilter: () => void;
//   selectedAmenities: string[];
//   handleAmenityChange: (value: string[]) => void;
//   handleLocationChange: (value: string) => void;
//   handleStatusChange: (value: string) => void;
// }

// const TripOverviewMenu: React.FC<TripOverviewMenuProps> = ({
//   handleSearchChange,
//   handlePriceChange,
//   maxPrice,
//   handleResetFilter,
//   selectedAmenities,
//   handleAmenityChange,
//   handleLocationChange,
//   handleStatusChange,
// }) => {
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [priceValue, setPriceValue] = useState<[number, number]>([0, maxPrice]);

//   const { filteredTrips, updateFilters } = useFilteredTrips(trip_listing_data);

//   const handlePriceChangeWrapper = (val: [number, number]) => {
//     setPriceValue(val);
//     handlePriceChange(val);
//     updateFilters({ priceRange: val });
//   };

//   const handleLocationChangeWrapper = (location: string) => {
//     handleLocationChange(location);
//     updateFilters({ location });
//   };

//   const handleStatusChangeWrapper = (status: string) => {
//     handleStatusChange(status);
//     updateFilters({ status });
//   };

//   const handleAmenityChangeWrapper = (event: ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = event.target;
//     const newAmenities = checked
//       ? [...selectedAmenities, value]
//       : selectedAmenities.filter((amenity: string) => amenity !== value);
//     handleAmenityChange(newAmenities);
//     updateFilters({ amenities: newAmenities });
//   };

//   const handleResetFilterWrapper = () => {
//     handleResetFilter();
//     updateFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//     });
//   };

//   return (
//     <>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="row gx-0 align-items-center">
//           <div className="col-xxl-2 col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Departure Date</div>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 className="nice-select fw-normal"
//                 placeholderText="Select date"
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Location</div>
//               <NiceSelect
//                 className="nice-select location fw-normal"
//                 options={[
//                   { value: "Any", text: "Any" },
//                   { value: "Kenya", text: "Kenya" },
//                   { value: "Kenya & Tanzania", text: "Kenya & Tanzania" },
//                   { value: "Namibia", text: "Namibia" },
//                   { value: "South Africa", text: "South Africa" },
//                   { value: "Tanzania", text: "Tanzania" },
//                   { value: "Uganda", text: "Uganda" },
//                   { value: "Zanzibar", text: "Zanzibar" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => handleLocationChangeWrapper(value)}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-4">
//             <div className="input-box-one border-left">
//               <div className="label">Price per guest</div>
//               <NiceSelect
//                 className="nice-select fw-normal"
//                 options={[
//                   { value: "0", text: "0 - $2,999" },
//                   { value: "3000", text: "$3,000 - $4,999" },
//                   { value: "5000", text: "$5,000 - $9,999" },
//                   { value: "10000", text: "$10,000+" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => {
//                   const numValue = Number(value);
//                   let val: [number, number];
//                   if (numValue === 0) {
//                     val = [0, 2999];
//                   }
//                   else if (numValue === 3000) {
//                     val = [3000, 4999];
//                   } else if (numValue === 5000) {
//                     val = [5000, 9999];
//                   } else {
//                     val = [10000, maxPrice];
//                   }
//                   handlePriceChangeWrapper(val);
//                 }}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xxl-2 col-xl-1">
//             <div className="input-box-one lg-mt-20">
//               <div className="d-flex align-items-center justify-content-center justify-content-xl-end">
//                 <Link
//                   href="#"
//                   data-bs-toggle="modal"
//                   data-bs-target="#advanceFilterModal"
//                   className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center"
//                 >
//                   <span className="me-3 d-xl-none d-xxl-block">ADVANCED Search</span>
//                   <i className="fa-light fa-sliders-up"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <TripOverviewModal
//         handleSearchChange={handleSearchChange}
//         handlePriceChange={handlePriceChangeWrapper}
//         maxPrice={maxPrice}
//         priceValue={priceValue}
//         handleResetFilter={handleResetFilterWrapper}
//         selectedAmenities={selectedAmenities}
//         handleAmenityChange={handleAmenityChangeWrapper}
//         handleLocationChange={handleLocationChangeWrapper}
//         handleStatusChange={handleStatusChangeWrapper} handleBedroomChange={function (val: string): void {
//           throw new Error("Function not implemented.");
//         } } handleBathroomChange={function (val: string): void {
//           throw new Error("Function not implemented.");
//         } }      />
//     </>
//   );
// };

// export default TripOverviewMenu;


// import React, { useState, ChangeEvent } from "react";
// import NiceSelect from "@/ui/NiceSelect";
// import Link from "next/link";
// import TripOverviewModal from "@/modals/TripOverviewModal";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import useFilteredTrips from "@/hooks/useFilteredTrips";

// const TripOverviewMenu = ({
//   handleSearchChange,
//   handlePriceChange,
//   maxPrice,
//   handleResetFilter,
//   selectedAmenities,
//   handleAmenityChange,
//   handleLocationChange,
//   handleStatusChange,
// }: any) => {
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [priceValue, setPriceValue] = useState<[number, number]>([0, maxPrice]);

//   const { filteredTrips, updateFilters } = useFilteredTrips(trip_listing_data);

//   const handlePriceChangeWrapper = (val: [number, number]) => {
//     setPriceValue(val);
//     handlePriceChange(val);
//     updateFilters({ priceRange: val });
//   };

//   const handleLocationChangeWrapper = (location: string) => {
//     handleLocationChange(location);
//     updateFilters({ location });
//   };

//   const handleStatusChangeWrapper = (status: string) => {
//     handleStatusChange(status);
//     updateFilters({ status });
//   };

//   const handleAmenityChangeWrapper = (event: ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = event.target;
//     const newAmenities = checked
//       ? [...selectedAmenities, value]
//       : selectedAmenities.filter((amenity: string) => amenity !== value);
//     handleAmenityChange(newAmenities);
//     updateFilters({ amenities: newAmenities });
//   };

//   const handleResetFilterWrapper = () => {
//     handleResetFilter();
//     updateFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//     });
//   };

//   return (
//     <>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="row gx-0 align-items-center">
//           <div className="col-xxl-2 col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Departure Date</div>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 className="nice-select fw-normal"
//                 placeholderText="Select date"
//               />2
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Location</div>
//               <NiceSelect
//                 className="nice-select location fw-normal"
//                 options={[
//                   { value: "Any", text: "Any" },
//                   { value: "Kenya", text: "Kenya" },
//                   { value: "Kenya & Tanzania", text: "Kenya & Tanzania" },
//                   { value: "Namibia", text: "Namibia" },
//                   { value: "South Africa", text: "South Africa" },
//                   { value: "Tanzania", text: "Tanzania" },
//                   { value: "Uganda", text: "Uganda" },
//                   { value: "Zanzibar", text: "Zanzibar" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => handleLocationChangeWrapper(value)}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-4">
//             <div className="input-box-one border-left">
//               <div className="label">Price per guest</div>
//               <NiceSelect
//                 className="nice-select fw-normal"
//                 options={[
//                   { value: "0", text: "0 - $2,999" },
//                   { value: "3000", text: "$3,000 - $4,999" },
//                   { value: "5000", text: "$5,000 - $9,999" },
//                   { value: "10000", text: "$10,000+" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => {
//                   const numValue = Number(value);
//                   let val: [number, number];
//                   if (numValue === 0) {
//                     val = [0, 2999];
//                   }
//                   else if (numValue === 3000) {
//                     val = [3000, 4999];
//                   } else if (numValue === 5000) {
//                     val = [5000, 9999];
//                   } else {
//                     val = [10000, maxPrice];
//                   }
//                   handlePriceChangeWrapper(val);
//                 }}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xxl-2 col-xl-1">
//             <div className="input-box-one lg-mt-20">
//               <div className="d-flex align-items-center justify-content-center justify-content-xl-end">
//                 <Link
//                   href="#"
//                   data-bs-toggle="modal"
//                   data-bs-target="#advanceFilterModal"
//                   className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center"
//                 >
//                   <span className="me-3 d-xl-none d-xxl-block">ADVANCED Search</span>
//                   <i className="fa-light fa-sliders-up"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <TripOverviewModal
//         handleSearchChange={handleSearchChange}
//         handlePriceChange={handlePriceChangeWrapper}
//         maxPrice={maxPrice}
//         priceValue={priceValue}
//         handleResetFilter={handleResetFilterWrapper}
//         selectedAmenities={selectedAmenities}
//         handleAmenityChange={handleAmenityChangeWrapper}
//         handleLocationChange={handleLocationChangeWrapper}
//         handleStatusChange={handleStatusChangeWrapper} handleBedroomChange={function (val: string): void {
//           throw new Error("Function not implemented.");
//         } } handleBathroomChange={function (val: string): void {
//           throw new Error("Function not implemented.");
//         } }      />
//     </>
//   );
// };

// export default TripOverviewMenu;


// // 11.53 
// import React, { useState } from "react";
// import NiceSelect from "@/ui/NiceSelect";
// import Link from "next/link";
// import TripOverviewModal from "@/modals/TripOverviewModal";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import useFilteredTrips from "@/hooks/useFilteredTrips";

// const TripOverviewMenu = ({
//   handleSearchChange,
//   handlePriceChange,
//   maxPrice,
//   handleResetFilter,
//   selectedAmenities,
//   handleAmenityChange,
//   handleLocationChange,
//   handleStatusChange,
// }: any) => {
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [priceValue, setPriceValue] = useState<[number, number]>([0, maxPrice]);

//   const { filteredTrips, updateFilters } = useFilteredTrips(trip_listing_data);

//   const handlePriceChangeWrapper = (val: [number, number]) => {
//     setPriceValue(val);
//     handlePriceChange(val);
//     updateFilters({ priceRange: val });
//   };

//   const handleLocationChangeWrapper = (location: string) => {
//     handleLocationChange(location);
//     updateFilters({ location });
//   };

//   const handleStatusChangeWrapper = (status: string) => {
//     handleStatusChange(status);
//     updateFilters({ status });
//   };

//   const handleAmenityChangeWrapper = (amenities: string[]) => {
//     handleAmenityChange(amenities);
//     updateFilters({ amenities });
//   };

//   const handleResetFilterWrapper = () => {
//     handleResetFilter();
//     updateFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//     });
//   };

//   return (
//     <>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="row gx-0 align-items-center">
//           <div className="col-xxl-2 col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Departure Date</div>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 className="nice-select fw-normal"
//                 placeholderText="Select date"
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6">
//             <div className="input-box-one border-left">
//               <div className="label">Location</div>
//               <NiceSelect
//                 className="nice-select location fw-normal"
//                 options={[
//                   { value: "Any", text: "Any" },
//                   { value: "Kenya", text: "Kenya" },
//                   { value: "Kenya & Tanzania", text: "Kenya & Tanzania" },
//                   { value: "Namibia", text: "Namibia" },
//                   { value: "South Africa", text: "South Africa" },
//                   { value: "Tanzania", text: "Tanzania" },
//                   { value: "Uganda", text: "Uganda" },
//                   { value: "Zanzibar", text: "Zanzibar" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => handleLocationChangeWrapper(value)}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-4">
//             <div className="input-box-one border-left">
//               <div className="label">Price per guest</div>
//               <NiceSelect
//                 className="nice-select fw-normal"
//                 options={[
//                   { value: "0", text: "0 - $2,999" },
//                   { value: "3000", text: "$3,000 - $4,999" },
//                   { value: "5000", text: "$5,000 - $9,999" },
//                   { value: "10000", text: "$10,000+" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={(value) => {
//                   const numValue = Number(value);
//                   let val: [number, number];
//                   if (numValue === 0) {
//                     val = [0, 2999];
//                   }
//                   else if (numValue === 3000) {
//                     val = [3000, 4999];
//                   } else if (numValue === 5000) {
//                     val = [5000, 9999];
//                   } else {
//                     val = [10000, maxPrice];
//                   }
//                   handlePriceChangeWrapper(val);
//                 }}
//                 name=""
//                 placeholder=""
//               />
//             </div>
//           </div>
//           <div className="col-xxl-2 col-xl-1">
//             <div className="input-box-one lg-mt-20">
//               <div className="d-flex align-items-center justify-content-center justify-content-xl-end">
//                 <Link
//                   href="#"
//                   data-bs-toggle="modal"
//                   data-bs-target="#advanceFilterModal"
//                   className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center"
//                 >
//                   <span className="me-3 d-xl-none d-xxl-block">ADVANCED Search</span>
//                   <i className="fa-light fa-sliders-up"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <TripOverviewModal
//         handleSearchChange={handleSearchChange}
//         handlePriceChange={handlePriceChangeWrapper}
//         maxPrice={maxPrice}
//         priceValue={priceValue}
//         handleResetFilter={handleResetFilterWrapper}
//         selectedAmenities={selectedAmenities}
//         handleAmenityChange={handleAmenityChangeWrapper}
//         handleLocationChange={handleLocationChangeWrapper}
//         handleStatusChange={handleStatusChangeWrapper}
//       />
//     </>
//   );
// };

// export default TripOverviewMenu;
