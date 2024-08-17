// 11.53 added to match using new trip_listing_data (also changed; TripOverviewMenu, useTripOverviewFilter, TripOverviewArea)
import React from "react";
import PriceRange from "@/components/common/PriceRange";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";

interface TripOverviewModalProps {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBedroomChange: (val: string) => void;
  handleBathroomChange: (val: string) => void;
  handlePriceChange: (val: [number, number]) => void;
  maxPrice: number;
  priceValue: [number, number];
  handleResetFilter: () => void;
  selectedAmenities: string[];
  handleAmenityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (val: string) => void;
  handleStatusChange: (val: string) => void;
  handleCountryChange: (val: string) => void; // Added this prop 7 aug 15.14
}

const amenities_data: string[] = [
  "A/C & Heating",
  "Garages",
  "Garden",
  "Disabled Access",
  "Swimming Pool",
  "Parking",
  "Wifi",
  "Pet Friendly",
  "Ceiling Height",
  "Fireplace",
  "Play Ground",
  "Elevator",
];

const TripOverviewModal: React.FC<TripOverviewModalProps> = ({
  handleSearchChange,
  handleBedroomChange,
  handleBathroomChange,
  handlePriceChange,
  maxPrice,
  priceValue,
  handleResetFilter,
  selectedAmenities = [], // default empty array
  handleAmenityChange,
  handleLocationChange,
  handleStatusChange,
  handleCountryChange, // Added this prop 7 aug 15.14

}) => {
  const handlePriceChangeWrapper = (val: number[]) => {
    if (val.length === 2) {
      handlePriceChange([val[0], val[1]]);
    }
  };

  return (
    <div className="modal fade" id="advanceFilterModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close ms-auto mt-20 me-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-regular fa-xmark"></i>
                </button>
                <div className="advance-search-panel">
                  <div className="main-bg border-0">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row gx-lg-5">
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">I’m looking to...</div>
                            <NiceSelect
                              className="nice-select fw-normal"
                              options={[
                                { value: "adventure", text: "Adventure" },
                                { value: "beach_holiday", text: "Beach Holiday" },
                                { value: "camping", text: "Camping" },
                                { value: "flying_safari", text: "Flying Safari" },
                                { value: "hiking", text: "Hiking" },
                                { value: "honeymoon", text: "Honeymoon" },
                                { value: "luxury", text: "Luxury" },
                                { value: "mountain_climbing", text: "Mountain Climbing" },
                                { value: "safari", text: "Safari" },
                                { value: "safari_beach", text: "Safari & Beach" },
                              ]}
                              defaultCurrent={0}
                              onChange={(val) => handleStatusChange(val)}
                              name=""
                              placeholder=""
                            />
                          </div>
                        </div>
                        {/* changed to country 7 aug 15.14 */}
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">Country</div> {/* Added Country filter */}
                            <NiceSelect
                              className="nice-select fw-normal"
                              options={[
                                { value: "", text: "Any" },
                                { value: "Kenya", text: "Kenya" },
                                { value: "Kenya & Tanzania", text: "Kenya & Tanzania" },
                                { value: "Namibia", text: "Namibia" },
                                { value: "South Africa", text: "South Africa" },
                                { value: "Tanzania", text: "Tanzania" },
                                { value: "Uganda", text: "Uganda" },
                                { value: "Zanzibar", text: "Zanzibar" },
                              ]}
                              defaultCurrent={0}
                              onChange={(val) => handleCountryChange(val)}
                              name=""
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">Keyword</div>
                            <input
                              onChange={handleSearchChange}
                              type="text"
                              placeholder="adventure, beach, safari"
                              className="type-input"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">Trip ID</div>
                            <input type="text" placeholder="TRP45203014" className="type-input" />
                          </div>
                        </div>
                        <div className="col-12">
                          <h6 className="block-title fw-bold mb-30">Amenities</h6>
                          <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
                            {amenities_data.map((list, i) => (
                              <li key={i}>
                                <input
                                  type="checkbox"
                                  name="Amenities"
                                  value={list}
                                  checked={selectedAmenities.includes(list)}
                                  onChange={handleAmenityChange}
                                />
                                <label>{list}</label>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h6 className="block-title fw-bold mt-45 mb-20">Price range</h6>
                          <div className="price-ranger">
                            <div className="price-input d-flex align-items-center justify-content-between pt-5">
                              <div className="field d-flex align-items-center">
                                <input
                                  type="number"
                                  className="input-min"
                                  value={priceValue[0]}
                                  onChange={(e) =>
                                    handlePriceChange([Number(e.target.value), priceValue[1]])
                                  }
                                />
                              </div>
                              <div className="divider-line"></div>
                              <div className="field d-flex align-items-center">
                                <input
                                  type="number"
                                  className="input-max"
                                  value={priceValue[1]}
                                  onChange={(e) =>
                                    handlePriceChange([priceValue[0], Number(e.target.value)])
                                  }
                                />
                              </div>
                              <div className="currency ps-1">USD</div>
                            </div>
                          </div>
                          <PriceRange
                            MAX={maxPrice}
                            MIN={0}
                            STEP={1}
                            values={priceValue}
                            handleChanges={handlePriceChangeWrapper}
                          />
                        </div>
                        <div className="col-12">
                          <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
                            <i className="fa-light fa-magnifying-glass"></i>
                            <span>Search</span>
                          </button>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-between form-widget">
                            <a
                              onClick={handleResetFilter}
                              style={{ cursor: "pointer" }}
                              className="tran3s"
                            >
                              <i className="fa-regular fa-arrows-rotate"></i>
                              <span>Reset Filter</span>
                            </a>
                            <Link href="#" className="tran3s">
                              <i className="fa-regular fa-star"></i>
                              <span>Save Search</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripOverviewModal;


// // this works! @11.53 29 jul
// // 28 jul 18.40 pass string directly to change handler
// // update handlePriceChange to go from accepting a tuple to an array of numbers
// import React from "react";
// import PriceRange from "@/components/common/PriceRange";
// import NiceSelect from "@/ui/NiceSelect";
// import Link from "next/link";

// interface TripOverviewModalProps {
//   handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleBedroomChange: (val: string) => void;
//   handleBathroomChange: (val: string) => void;
//   handlePriceChange: (val: [number, number]) => void;
//   maxPrice: number;
//   priceValue: [number, number];
//   handleResetFilter: () => void;
//   selectedAmenities: string[];
//   handleAmenityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleLocationChange: (val: string) => void;
//   handleStatusChange: (val: string) => void;
// }

// const amenities_data: string[] = [
//   "A/C & Heating",
//   "Garages",
//   "Garden",
//   "Disabled Access",
//   "Swimming Pool",
//   "Parking",
//   "Wifi",
//   "Pet Friendly",
//   "Ceiling Height",
//   "Fireplace",
//   "Play Ground",
//   "Elevator",
// ];

// const TripOverviewModal: React.FC<TripOverviewModalProps> = ({
//   handleSearchChange,
//   handleBedroomChange,
//   handleBathroomChange,
//   handlePriceChange,
//   maxPrice,
//   priceValue,
//   handleResetFilter,
//   selectedAmenities = [], // default empty array
//   handleAmenityChange,
//   handleLocationChange,
//   handleStatusChange,
// }) => {
//   const handlePriceChangeWrapper = (val: number[]) => {
//     if (val.length === 2) {
//       handlePriceChange([val[0], val[1]]);
//     }
//   };
//   return (
//     <div className="modal fade" id="advanceFilterModal" tabIndex={-1} aria-hidden="true">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-8 m-auto">
//               <div className="modal-content">
//                 <button
//                   type="button"
//                   className="btn-close ms-auto mt-20 me-4"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <i className="fa-regular fa-xmark"></i>
//                 </button>
//                 <div className="advance-search-panel">
//                   <div className="main-bg border-0">
//                     <form onSubmit={(e) => e.preventDefault()}>
//                       <div className="row gx-lg-5">
//                         <div className="col-md-6">
//                           <div className="input-box-one mb-35">
//                             <div className="label">I’m looking to...</div>
//                             <NiceSelect
//                               className="nice-select fw-normal"
//                               options={[
//                                 { value: "apartments", text: "Buy Apartments" },
//                                 { value: "condos", text: "Rent Condos" },
//                                 { value: "houses", text: "Sell Houses" },
//                                 { value: "industrial", text: "Rent Industrial" },
//                                 { value: "villas", text: "Sell Villas" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={(val) => handleStatusChange(val)}
//                               name=""
//                               placeholder=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-box-one mb-35">
//                             <div className="label">Location</div>
//                             <NiceSelect
//                               className="nice-select location fw-normal"
//                               options={[
//                                 { value: "spain", text: "Spain" },
//                                 { value: "mexico", text: "Acapulco, Mexico" },
//                                 { value: "germany", text: "Berlin, Germany" },
//                                 { value: "france", text: "Cannes, France" },
//                                 { value: "india", text: "Delhi, India" },
//                                 { value: "giza", text: "Giza, Egypt" },
//                                 { value: "cuba", text: "Havana, Cuba" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={(val) => handleLocationChange(val)}
//                               name=""
//                               placeholder=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-box-one mb-35">
//                             <div className="label">Keyword</div>
//                             <input
//                               onChange={handleSearchChange}
//                               type="text"
//                               placeholder="buy, home, loft, apartment"
//                               className="type-input"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-box-one mb-35">
//                             <div className="label">Property ID</div>
//                             <input type="text" placeholder="EM45203014" className="type-input" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="input-box-one mb-40">
//                             <div className="label">Bedroom</div>
//                             <NiceSelect
//                               className="nice-select fw-normal"
//                               options={[
//                                 { value: "1", text: "1" },
//                                 { value: "2", text: "2" },
//                                 { value: "3", text: "3" },
//                                 { value: "4", text: "4" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={(val) => handleBedroomChange(val)}
//                               name=""
//                               placeholder=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="input-box-one mb-40">
//                             <div className="label">Bath</div>
//                             <NiceSelect
//                               className="nice-select fw-normal"
//                               options={[
//                                 { value: "1", text: "1" },
//                                 { value: "2", text: "2" },
//                                 { value: "3", text: "3" },
//                                 { value: "4", text: "4" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={(val) => handleBathroomChange(val)}
//                               name=""
//                               placeholder=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-12">
//                           <h6 className="block-title fw-bold mb-30">Amenities</h6>
//                           <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
//                             {amenities_data.map((list, i) => (
//                               <li key={i}>
//                                 <input
//                                   type="checkbox"
//                                   name="Amenities"
//                                   value={list}
//                                   checked={selectedAmenities.includes(list)}
//                                   onChange={handleAmenityChange}
//                                 />
//                                 <label>{list}</label>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="col-md-6">
//                           <h6 className="block-title fw-bold mt-45 mb-20">Price range</h6>
//                           <div className="price-ranger">
//                             <div className="price-input d-flex align-items-center justify-content-between pt-5">
//                               <div className="field d-flex align-items-center">
//                                 <input
//                                   type="number"
//                                   className="input-min"
//                                   value={priceValue[0]}
//                                   onChange={(e) =>
//                                     handlePriceChange([Number(e.target.value), priceValue[1]])
//                                   }
//                                 />
//                               </div>
//                               <div className="divider-line"></div>
//                               <div className="field d-flex align-items-center">
//                                 <input
//                                   type="number"
//                                   className="input-max"
//                                   value={priceValue[1]}
//                                   onChange={(e) =>
//                                     handlePriceChange([priceValue[0], Number(e.target.value)])
//                                   }
//                                 />
//                               </div>
//                               <div className="currency ps-1">USD</div>
//                             </div>
//                           </div>
//                           <PriceRange
//                             MAX={maxPrice}
//                             MIN={0}
//                             STEP={1}
//                             values={priceValue}
//                             // handleChanges={handlePriceChange}
//                             handleChanges={handlePriceChangeWrapper}
//                           />
//                         </div>
//                         <div className="col-md-6">
//                           <h6 className="block-title fw-bold mt-45 mb-20">SQFT</h6>
//                           <div className="d-flex align-items-center sqf-ranger">
//                             <input type="text" placeholder="Min" />
//                             <div className="divider"></div>
//                             <input type="text" placeholder="Max" />
//                           </div>
//                         </div>
//                         <div className="col-12">
//                           <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
//                             <i className="fa-light fa-magnifying-glass"></i>
//                             <span>Search</span>
//                           </button>
//                         </div>
//                         <div className="col-12">
//                           <div className="d-flex justify-content-between form-widget">
//                             <a
//                               onClick={handleResetFilter}
//                               style={{ cursor: "pointer" }}
//                               className="tran3s"
//                             >
//                               <i className="fa-regular fa-arrows-rotate"></i>
//                               <span>Reset Filter</span>
//                             </a>
//                             <Link href="#" className="tran3s">
//                               <i className="fa-regular fa-star"></i>
//                               <span>Save Search</span>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripOverviewModal;




// //17.56
// import React from "react";
// import PriceRange from "@/components/common/PriceRange";
// import NiceSelect from "@/ui/NiceSelect";
// import Link from "next/link";

// interface TripOverviewModalProps {
//   handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleBedroomChange: (val: string) => void;
//   handleBathroomChange: (val: string) => void;
//   handlePriceChange: (val: [number, number]) => void;
//   maxPrice: number;
//   priceValue: [number, number];
//   handleResetFilter: () => void;
//   selectedAmenities: string[];
//   handleAmenityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleLocationChange: (val: string) => void;
//   handleStatusChange: (val: string) => void;
// }

// const amenities_data: string[] = [
//   "A/C & Heating",
//   "Garages",
//   "Garden",
//   "Disabled Access",
//   "Swimming Pool",
//   "Parking",
//   "Wifi",
//   "Pet Friendly",
//   "Ceiling Height",
//   "Fireplace",
//   "Play Ground",
//   "Elevator",
// ];

// const TripOverviewModal: React.FC<TripOverviewModalProps> = ({
//   handleSearchChange,
//   handleBedroomChange,
//   handleBathroomChange,
//   handlePriceChange,
//   maxPrice,
//   priceValue,
//   handleResetFilter,
//   selectedAmenities = [], // default empty array
//   handleAmenityChange,
//   handleLocationChange,
//   handleStatusChange,
// }) => {
//   return (
//     <div className="modal fade" id="advanceFilterModal" tabIndex={-1} aria-hidden="true">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-8 m-auto">
//               <div className="modal-content">
//                 <button
//                   type="button"
//                   className="btn-close ms-auto mt-20 me-4"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <i className="fa-regular fa-xmark"></i>
//                 </button>
//                 <div className="advance-search-panel">
//                   <div className="main-bg border-0">
//                     <form onSubmit={(e) => e.preventDefault()}>
//                       <div className="row gx-lg-5">
//                         <div className="col-md-6">
//                           <div className="input-box-one mb-35">
//                             <div className="label">I’m looking to...</div>
//                             <NiceSelect
//                               className="nice-select fw-normal"
//                               options={[
//                                 { value: "apartments", text: "Buy Apartments" },
//                                 { value: "condos", text: "Rent Condos" },
//                                 { value: "houses", text: "Sell Houses" },
//                                 { value: "industrial", text: "Rent Industrial" },
//                                 { value: "villas", text: "Sell Villas" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={(val) => handleStatusChange(val.value)}
//                               name=""
//                               placeholder=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-box-one mb-35">
//                             <div className="label">Location</div>
//                             <NiceSelect
//                               className="nice-select location fw-normal"
//                               options={[
//                                 { value: "spain", text: "Spain" },
//                                 { value: "mexico", text: "Acapulco, Mexico" },
//                                 { value: "germany", text: "Berlin, Germany" },
//                                 { value: "france", text: "Cannes, France" },
//                                 { value: "india", text: "Delhi, India" },
//                                 { value: "giza", text: "Giza, Egypt" },
//                                 { value: "cuba", text: "Havana, Cuba" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={(val) => handleLocationChange(val.value)}
//                               name=""
//                               placeholder=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-box-one mb-35">
//                             <div className="label">Keyword</div>
//                             <input
//                               onChange={handleSearchChange}
//                               type="text"
//                               placeholder="buy, home, loft, apartment"
//                               className="type-input"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-box-one mb-35">
//                             <div className="label">Property ID</div>
//                             <input type="text" placeholder="EM45203014" className="type-input" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="input-box-one mb-40">
//                             <div className="label">Bedroom</div>
//                             <NiceSelect
//                               className="nice-select fw-normal"
//                               options={[
//                                 { value: "1", text: "1" },
//                                 { value: "2", text: "2" },
//                                 { value: "3", text: "3" },
//                                 { value: "4", text: "4" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={(val) => handleBedroomChange(val.value)}
//                               name=""
//                               placeholder=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="input-box-one mb-40">
//                             <div className="label">Bath</div>
//                             <NiceSelect
//                               className="nice-select fw-normal"
//                               options={[
//                                 { value: "1", text: "1" },
//                                 { value: "2", text: "2" },
//                                 { value: "3", text: "3" },
//                                 { value: "4", text: "4" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={(val) => handleBathroomChange(val.value)}
//                               name=""
//                               placeholder=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-12">
//                           <h6 className="block-title fw-bold mb-30">Amenities</h6>
//                           <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
//                             {amenities_data.map((list, i) => (
//                               <li key={i}>
//                                 <input
//                                   type="checkbox"
//                                   name="Amenities"
//                                   value={list}
//                                   checked={selectedAmenities.includes(list)}
//                                   onChange={handleAmenityChange}
//                                 />
//                                 <label>{list}</label>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="col-md-6">
//                           <h6 className="block-title fw-bold mt-45 mb-20">Price range</h6>
//                           <div className="price-ranger">
//                             <div className="price-input d-flex align-items-center justify-content-between pt-5">
//                               <div className="field d-flex align-items-center">
//                                 <input
//                                   type="number"
//                                   className="input-min"
//                                   value={priceValue[0]}
//                                   onChange={(e) =>
//                                     handlePriceChange([Number(e.target.value), priceValue[1]])
//                                   }
//                                 />
//                               </div>
//                               <div className="divider-line"></div>
//                               <div className="field d-flex align-items-center">
//                                 <input
//                                   type="number"
//                                   className="input-max"
//                                   value={priceValue[1]}
//                                   onChange={(e) =>
//                                     handlePriceChange([priceValue[0], Number(e.target.value)])
//                                   }
//                                 />
//                               </div>
//                               <div className="currency ps-1">USD</div>
//                             </div>
//                           </div>
//                           <PriceRange
//                             MAX={maxPrice}
//                             MIN={0}
//                             STEP={1}
//                             values={priceValue}
//                             handleChanges={handlePriceChange}
//                           />
//                         </div>
//                         <div className="col-md-6">
//                           <h6 className="block-title fw-bold mt-45 mb-20">SQFT</h6>
//                           <div className="d-flex align-items-center sqf-ranger">
//                             <input type="text" placeholder="Min" />
//                             <div className="divider"></div>
//                             <input type="text" placeholder="Max" />
//                           </div>
//                         </div>
//                         <div className="col-12">
//                           <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
//                             <i className="fa-light fa-magnifying-glass"></i>
//                             <span>Search</span>
//                           </button>
//                         </div>
//                         <div className="col-12">
//                           <div className="d-flex justify-content-between form-widget">
//                             <a
//                               onClick={handleResetFilter}
//                               style={{ cursor: "pointer" }}
//                               className="tran3s"
//                             >
//                               <i className="fa-regular fa-arrows-rotate"></i>
//                               <span>Reset Filter</span>
//                             </a>
//                             <Link href="#" className="tran3s">
//                               <i className="fa-regular fa-star"></i>
//                               <span>Save Search</span>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripOverviewModal;
