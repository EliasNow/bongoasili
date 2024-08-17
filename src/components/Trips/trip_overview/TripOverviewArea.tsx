// 7 aug 15.05
// src/components/Trips/TripOverviewArea.tsx
import TripOverviewMenu from "@/components/search-dropdown/inner-dropdown/TripOverviewMenu";
import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import ReactPaginate from "react-paginate";
import TripMapLocation from "../TripMapLocation";
import featureIcon_1 from "@/assets/images/icon/icon_32.svg";
import featureIcon_2 from "@/assets/images/icon/person-outline_25.svg";

const select_type: string[] = [
  "All",
  "Adventure",
  "Beach Holiday",
  "Camping",
  "Family",
  "Flying Safari",
  "Hiking",
  "Honeymoon",
  "Luxury",
  "Mountain Climbing",
  "Safari",
"Safari & Beach",
];

const TripOverviewArea = () => {
  const itemsPerPage = 4;
  const page = "listing_2";

  const [selectedType, setSelectedType] = useState("All");

  const {
    itemOffset,
    sortedProperties,
    currentItems,
    pageCount,
    handlePageClick,
    handlePriceChange,
    maxPrice,
    priceValue,
    resetFilters,
    selectedAmenities,
    handleAmenityChange,
    handleLocationChange,
    handleStatusChange,
    handleTypeChange,
    handlePriceDropChange,
    handleCountryChange,
    activeFilters, // Added activeFilters to destructuring
  } = useTripOverviewFilter({ itemsPerPage, page, tag: selectedType });

  const handleResetFilter = () => {
    resetFilters();
  };

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  return (
    <div className="property-listing-eight pt-150 xl-pt-120">
      <div className="search-wrapper-three layout-two dark-bg border-0 position-relative">
        <div className="bg-wrapper rounded-0 border-0">
          <TripOverviewMenu
            handlePriceDropChange={handlePriceDropChange}
            handlePriceChange={handlePriceChange}
            maxPrice={maxPrice}
            priceValue={priceValue as [number, number]} // Ensure priceValue is treated as a tuple
            handleResetFilter={handleResetFilter}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
            handleLocationChange={handleLocationChange}
            handleStatusChange={handleStatusChange}
            handleSearchChange={(e: ChangeEvent<HTMLInputElement>) => {}}
            handleCountryChange={handleCountryChange} // Added handleCountryChange
          />
        </div>
      </div>

      <div className="row gx-0">
        <div className="col-xxl-6 col-lg-5 order-lg-last">
          <div id="google-map-area" className="h-100">
            <TripMapLocation tripLocation={activeFilters.country || "Tanzania"} />
          </div>
        </div>

        <div className="col-xxl-6 col-lg-7">
          <div className="pl-40 pr-40 pt-35 pb-60">
            <div className="listing-type-filter border-0 p0">
              <div className="wrapper">
                <ul className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
                  <li className="w-100">Select Type:</li>
                  {select_type.map((select, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className={selectedType === select ? "active" : ""}
                        onClick={() => handleTypeClick(select)}
                      >
                        {select}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mt-50 mb-30">
              <div>
                Showing{" "}
                <span className="color-dark fw-500">
                  {itemOffset + 1}–{itemOffset + currentItems.length}
                </span>{" "}
                of <span className="color-dark fw-500">{sortedProperties.length}</span> results
              </div>
              <div className="d-flex align-items-center xs-mt-20">
                <div className="short-filter d-flex align-items-center">
                  <div className="fs-16 me-2">Sort by:</div>
                  <NiceSelect
                    className="nice-select rounded-0"
                    options={[
                      { value: "price_low", text: "Price Low" },
                      { value: "price_high", text: "Price High" }
                    ]}
                    defaultCurrent={0}
                    onChange={handleTypeChange}
                    name=""
                    placeholder=""
                  />
                </div>
                <Link
                  href="/#"
                  className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                  data-bs-toggle="tooltip"
                  title="Switch To List View"
                >
                  <i className="fa-regular fa-bars"></i>
                </Link>
              </div>
            </div>

            <div className="row gx-xxl-5">
              {currentItems.map((item: any) => (
                <div key={item.id} className="col-md-6 d-flex mb-40 wow fadeInUp">
                  <div className="listing-card-one style-two shadow-none h-100 w-100">
                    <div className="img-gallery">
                      <div className="position-relative overflow-hidden">
                        {/* Render each tag separately without commas */}
                        {item.tags.map((tag: string, index: number) => (
                          <div key={index} className="tag fw-500">{tag}</div>
                        ))}
                        <Link href="#" className="fav-btn tran3s">
                          <i className="fa-light fa-heart"></i>
                        </Link>
                        <div id={`carousel${item.carousel}`} className="carousel slide">
                          <div className="carousel-indicators">
                            <button
                              type="button"
                              data-bs-target={`#carousel${item.carousel}`}
                              data-bs-slide-to="0"
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"
                            ></button>
                            <button
                              type="button"
                              data-bs-target={`#carousel${item.carousel}`}
                              data-bs-slide-to="1"
                              aria-label="Slide 2"
                            ></button>
                            <button
                              type="button"
                              data-bs-target={`#carousel${item.carousel}`}
                              data-bs-slide-to="2"
                              aria-label="Slide 3"
                            ></button>
                          </div>
                          <div className="carousel-inner">
                            {item.carousel_thumb.map((thumb: any, i: any) => (
                              <div key={i} className={`carousel-item ${thumb.active}`} data-bs-interval="1000000">
                                <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="d-block">
                                  <Image src={thumb.img} className="w-100" alt="..." />
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="property-info pt-20">
                      <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="title tran3s">
                        {item.title}
                      </Link>
                      <div className="address">{item.location}</div>
                      <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                        <li className="d-flex align-items-center">
                          <Image src={featureIcon_1} alt="" className="lazy-img icon me-2" />
                          <span className="fs-16">
                            <span className="color-dark">{item.days}</span> days
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <Image src={featureIcon_2} alt="" className="lazy-img icon me-2" />
                          <span className="fs-16">
                            <span className="color-dark">Age: {item.minimum_age}+</span>
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-geo-alt me-2"></i>
                          <span className="fs-16">
                            <span className="color-dark">{item.country.join(" / ")}</span>
                          </span>
                        </li>
                      </ul>
                      <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                        <strong className="price fw-500 color-dark">
                          ${item.price.toLocaleString({
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}{" "}
                          {item.price_text && (
                            <>
                              / <sub>m</sub>
                            </>
                          )}
                        </strong>
                        <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="btn-four">
                          <i className="bi bi-arrow-up-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-25">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<i className="fa-regular fa-chevron-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={pageCount}
                pageCount={pageCount}
                previousLabel={<i className="fa-regular fa-chevron-left"></i>}
                renderOnZeroPageCount={null}
                className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripOverviewArea;

// // 7 aug 14.05 country location filter from useFilteredTrips hook
// import TripOverviewMenu from "@/components/search-dropdown/inner-dropdown/TripOverviewMenu";
// import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
// import NiceSelect from "@/ui/NiceSelect";
// import Image from "next/image";
// import Link from "next/link";
// import { ChangeEvent, useState } from "react";
// import ReactPaginate from "react-paginate";
// import TripMapLocation from "./TripMapLocation"; // Import new component
// import featureIcon_1 from "@/assets/images/icon/icon_32.svg";
// import featureIcon_2 from "@/assets/images/icon/person-outline_25.svg";

// const select_type: string[] = [
//   "All",
//   "Adventure",
//   "Beach Holiday",
//   "Camping",
//   "Family",
//   "Flying Safari",
//   "Hiking",
//   "Honeymoon",
//   "Luxury",
//   "Mountain Climbing",
//   "Safari",
//   "Safari & Beach",
// ];

// const TripOverviewArea = () => {
//   const itemsPerPage = 4;
//   const page = "listing_2";

//   const [selectedType, setSelectedType] = useState("All");

//   const {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handlePriceChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handleAmenityChange,
//     handleLocationChange,
//     handleStatusChange,
//     handleTypeChange,
//     handlePriceDropChange,
//     activeFilters, // Destructure the active filters
//   } = useTripOverviewFilter({ itemsPerPage, page, tag: selectedType });

//   const handleResetFilter = () => {
//     resetFilters();
//   };

//   const handleTypeClick = (type: string) => {
//     setSelectedType(type);
//   };

//   return (
//     <div className="property-listing-eight pt-150 xl-pt-120">
//       <div className="search-wrapper-three layout-two dark-bg border-0 position-relative">
//         <div className="bg-wrapper rounded-0 border-0">
//           <TripOverviewMenu
//             handlePriceDropChange={handlePriceDropChange}
//             handlePriceChange={handlePriceChange}
//             maxPrice={maxPrice}
//             priceValue={priceValue as [number, number]} // Ensure priceValue is treated as a tuple
//             handleResetFilter={handleResetFilter}
//             selectedAmenities={selectedAmenities}
//             handleAmenityChange={handleAmenityChange}
//             handleLocationChange={handleLocationChange}
//             handleStatusChange={handleStatusChange} 
//             handleSearchChange={(e: ChangeEvent<HTMLInputElement>) => {}}
//           />
//         </div>
//       </div>

//       <div className="row gx-0">
//         <div className="col-xxl-6 col-lg-5 order-lg-last">
//           <div id="google-map-area" className="h-100">
//             <TripMapLocation tripLocation={activeFilters.country || "Tanzania"} />
//           </div>
//         </div>

//         <div className="col-xxl-6 col-lg-7">
//           <div className="pl-40 pr-40 pt-35 pb-60">
//             <div className="listing-type-filter border-0 p0">
//               <div className="wrapper">
//                 <ul className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
//                   <li className="w-100">Select Type:</li>
//                   {select_type.map((select, i) => (
//                     <li key={i}>
//                       <Link
//                         href="#"
//                         className={selectedType === select ? "active" : ""}
//                         onClick={() => handleTypeClick(select)}
//                       >
//                         {select}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mt-50 mb-30">
//               <div>
//                 Showing{" "}
//                 <span className="color-dark fw-500">
//                   {itemOffset + 1}–{itemOffset + currentItems.length}
//                 </span>{" "}
//                 of <span className="color-dark fw-500">{sortedProperties.length}</span> results
//               </div>
//               <div className="d-flex align-items-center xs-mt-20">
//                 <div className="short-filter d-flex align-items-center">
//                   <div className="fs-16 me-2">Sort by:</div>
//                   <NiceSelect
//                     className="nice-select rounded-0"
//                     options={[
//                       { value: "price_low", text: "Price Low" },
//                       { value: "price_high", text: "Price High" }
//                     ]}
//                     defaultCurrent={0}
//                     onChange={handleTypeChange}
//                     name=""
//                     placeholder=""
//                   />
//                 </div>
//                 <Link
//                   href="/#"
//                   className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
//                   data-bs-toggle="tooltip"
//                   title="Switch To List View"
//                 >
//                   <i className="fa-regular fa-bars"></i>
//                 </Link>
//               </div>
//             </div>

//             <div className="row gx-xxl-5">
//               {currentItems.map((item: any) => (
//                 <div key={item.id} className="col-md-6 d-flex mb-40 wow fadeInUp">
//                   <div className="listing-card-one style-two shadow-none h-100 w-100">
//                     <div className="img-gallery">
//                       <div className="position-relative overflow-hidden">
//                         {/* Render each tag separately without commas */}
//                         {item.tags.map((tag: string, index: number) => (
//                           <div key={index} className="tag fw-500">{tag}</div>
//                         ))}
//                         <Link href="#" className="fav-btn tran3s">
//                           <i className="fa-light fa-heart"></i>
//                         </Link>
//                         <div id={`carousel${item.carousel}`} className="carousel slide">
//                           <div className="carousel-indicators">
//                             <button
//                               type="button"
//                               data-bs-target={`#carousel${item.carousel}`}
//                               data-bs-slide-to="0"
//                               className="active"
//                               aria-current="true"
//                               aria-label="Slide 1"
//                             ></button>
//                             <button
//                               type="button"
//                               data-bs-target={`#carousel${item.carousel}`}
//                               data-bs-slide-to="1"
//                               aria-label="Slide 2"
//                             ></button>
//                             <button
//                               type="button"
//                               data-bs-target={`#carousel${item.carousel}`}
//                               data-bs-slide-to="2"
//                               aria-label="Slide 3"
//                             ></button>
//                           </div>
//                           <div className="carousel-inner">
//                             {item.carousel_thumb.map((thumb: any, i: any) => (
//                               <div key={i} className={`carousel-item ${thumb.active}`} data-bs-interval="1000000">
//                                 <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="d-block">
//                                   <Image src={thumb.img} className="w-100" alt="..." />
//                                 </Link>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="property-info pt-20">
//                       <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="title tran3s">
//                         {item.title}
//                       </Link>
//                       <div className="address">{item.location}</div>
//                       <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
//                         <li className="d-flex align-items-center">
//                           <Image src={featureIcon_1} alt="" className="lazy-img icon me-2" />
//                           <span className="fs-16">
//                             <span className="color-dark">{item.days}</span> days
//                           </span>
//                         </li>
//                         <li className="d-flex align-items-center">
//                           <Image src={featureIcon_2} alt="" className="lazy-img icon me-2" />
//                           <span className="fs-16">
//                             <span className="color-dark">Age: {item.minimum_age}+</span>
//                           </span>
//                         </li>
//                         <li className="d-flex align-items-center">
//                           <i className="bi bi-geo-alt me-2"></i>
//                           <span className="fs-16">
//                             <span className="color-dark">{item.country.join(" / ")}</span>
//                           </span>
//                         </li>
//                       </ul>
//                       <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
//                         <strong className="price fw-500 color-dark">
//                           ${item.price.toLocaleString({
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2
//                           })}{" "}
//                           {item.price_text && (
//                             <>
//                               / <sub>m</sub>
//                             </>
//                           )}
//                         </strong>
//                         <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="btn-four">
//                           <i className="bi bi-arrow-up-right"></i>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="pt-25">
//               <ReactPaginate
//                 breakLabel="..."
//                 nextLabel={<i className="fa-regular fa-chevron-right"></i>}
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={pageCount}
//                 pageCount={pageCount}
//                 previousLabel={<i className="fa-regular fa-chevron-left"></i>}
//                 renderOnZeroPageCount={null}
//                 className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripOverviewArea;


// // 7 aug 00.17 add TripMapLocation
// import TripOverviewMenu from "@/components/search-dropdown/inner-dropdown/TripOverviewMenu";
// import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
// import NiceSelect from "@/ui/NiceSelect";
// import Image from "next/image";
// import Link from "next/link";
// import { ChangeEvent, useState } from "react";
// import ReactPaginate from "react-paginate";
// import TripMapLocation from "./TripMapLocation"; // Import new component
// import featureIcon_1 from "@/assets/images/icon/icon_32.svg";
// import featureIcon_2 from "@/assets/images/icon/person-outline_25.svg";

// const select_type: string[] = [
//   "All",
//   "Adventure",
//   "Beach Holiday",
//   "Camping",
//   "Family",
//   "Flying Safari",
//   "Hiking",
//   "Honeymoon",
//   "Luxury",
//   "Mountain Climbing",
//   "Safari",
//   "Safari & Beach",
// ];

// const TripOverviewArea = () => {
//   const itemsPerPage = 4;
//   const page = "listing_2";

//   const [selectedType, setSelectedType] = useState("All");

//   const {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handlePriceChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handleAmenityChange,
//     handleLocationChange,
//     handleStatusChange,
//     handleTypeChange,
//     handlePriceDropChange,
//   } = useTripOverviewFilter({ itemsPerPage, page, tag: selectedType });

//   const handleResetFilter = () => {
//     resetFilters();
//   };

//   const handleTypeClick = (type: string) => {
//     setSelectedType(type);
//   };

//   return (
//     <div className="property-listing-eight pt-150 xl-pt-120">
//       <div className="search-wrapper-three layout-two dark-bg border-0 position-relative">
//         <div className="bg-wrapper rounded-0 border-0">
//           <TripOverviewMenu
//             handlePriceDropChange={handlePriceDropChange}
//             handlePriceChange={handlePriceChange}
//             maxPrice={maxPrice}
//             priceValue={priceValue as [number, number]} // Ensure priceValue is treated as a tuple
//             handleResetFilter={handleResetFilter}
//             selectedAmenities={selectedAmenities}
//             handleAmenityChange={handleAmenityChange}
//             handleLocationChange={handleLocationChange}
//             handleStatusChange={handleStatusChange} handleSearchChange={function (e: ChangeEvent<HTMLInputElement>): void {
//               throw new Error("Function not implemented.");
//             } }          />
//         </div>
//       </div>

//       <div className="row gx-0">
//         <div className="col-xxl-6 col-lg-5 order-lg-last">
//           <div id="google-map-area" className="h-100">
//             <TripMapLocation tripLocation={currentItems[0]?.country[0] || "Tanzania"} />
//           </div>
//         </div>

//         <div className="col-xxl-6 col-lg-7">
//           <div className="pl-40 pr-40 pt-35 pb-60">
//             <div className="listing-type-filter border-0 p0">
//               <div className="wrapper">
//                 <ul className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
//                   <li className="w-100">Select Type:</li>
//                   {select_type.map((select, i) => (
//                     <li key={i}>
//                       <Link
//                         href="#"
//                         className={selectedType === select ? "active" : ""}
//                         onClick={() => handleTypeClick(select)}
//                       >
//                         {select}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mt-50 mb-30">
//               <div>
//                 Showing{" "}
//                 <span className="color-dark fw-500">
//                   {itemOffset + 1}–{itemOffset + currentItems.length}
//                 </span>{" "}
//                 of <span className="color-dark fw-500">{sortedProperties.length}</span> results
//               </div>
//               <div className="d-flex align-items-center xs-mt-20">
//                 <div className="short-filter d-flex align-items-center">
//                   <div className="fs-16 me-2">Sort by:</div>
//                   <NiceSelect
//                     className="nice-select rounded-0"
//                     options={[
//                       { value: "price_low", text: "Price Low" },
//                       { value: "price_high", text: "Price High" }
//                     ]}
//                     defaultCurrent={0}
//                     onChange={handleTypeChange}
//                     name=""
//                     placeholder=""
//                   />
//                 </div>
//                 <Link
//                   // href="/listing_17"
//                   href="/#"
//                   className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
//                   data-bs-toggle="tooltip"
//                   title="Switch To List View"
//                 >
//                   <i className="fa-regular fa-bars"></i>
//                 </Link>
//               </div>
//             </div>

//             <div className="row gx-xxl-5">
//               {currentItems.map((item: any) => (
//                 <div key={item.id} className="col-md-6 d-flex mb-40 wow fadeInUp">
//                   <div className="listing-card-one style-two shadow-none h-100 w-100">
//                     <div className="img-gallery">
//                       <div className="position-relative overflow-hidden">
//                         {/* Render each tag separately without commas */}
//                         {item.tags.map((tag: string, index: number) => (
//                           <div key={index} className="tag fw-500">{tag}</div>
//                         ))}
//                         <Link href="#" className="fav-btn tran3s">
//                           <i className="fa-light fa-heart"></i>
//                         </Link>
//                         <div id={`carousel${item.carousel}`} className="carousel slide">
//                           <div className="carousel-indicators">
//                             <button
//                               type="button"
//                               data-bs-target={`#carousel${item.carousel}`}
//                               data-bs-slide-to="0"
//                               className="active"
//                               aria-current="true"
//                               aria-label="Slide 1"
//                             ></button>
//                             <button
//                               type="button"
//                               data-bs-target={`#carousel${item.carousel}`}
//                               data-bs-slide-to="1"
//                               aria-label="Slide 2"
//                             ></button>
//                             <button
//                               type="button"
//                               data-bs-target={`#carousel${item.carousel}`}
//                               data-bs-slide-to="2"
//                               aria-label="Slide 3"
//                             ></button>
//                           </div>
//                           <div className="carousel-inner">
//                             {item.carousel_thumb.map((thumb: any, i: any) => (
//                               <div key={i} className={`carousel-item ${thumb.active}`} data-bs-interval="1000000">
//                                 <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="d-block">
//                                   <Image src={thumb.img} className="w-100" alt="..." />
//                                 </Link>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="property-info pt-20">
//                       <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="title tran3s">
//                         {item.title}
//                       </Link>
//                       <div className="address">{item.location}</div>
//                       <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
//                         <li className="d-flex align-items-center">
//                           <Image src={featureIcon_1} alt="" className="lazy-img icon me-2" />
//                           <span className="fs-16">
//                             <span className="color-dark">{item.days}</span> days
//                           </span>
//                         </li>
//                         <li className="d-flex align-items-center">
//                           <Image src={featureIcon_2} alt="" className="lazy-img icon me-2" />
//                           <span className="fs-16">
//                             <span className="color-dark">Age: {item.minimum_age}+</span>
//                           </span>
//                         </li>
//                         <li className="d-flex align-items-center">
//                           <i className="bi bi-geo-alt me-2"></i>
//                           <span className="fs-16">
//                             <span className="color-dark">{item.country.join(" / ")}</span>
//                           </span>
//                         </li>
//                       </ul>
//                       <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
//                         <strong className="price fw-500 color-dark">
//                           ${item.price.toLocaleString({
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2
//                           })}{" "}
//                           {item.price_text && (
//                             <>
//                               / <sub>m</sub>
//                             </>
//                           )}
//                         </strong>
//                         <Link href="/trips/Tanzania/Family_Safari_Tanzania" className="btn-four">
//                           <i className="bi bi-arrow-up-right"></i>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="pt-25">
//               <ReactPaginate
//                 breakLabel="..."
//                 nextLabel={<i className="fa-regular fa-chevron-right"></i>}
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={pageCount}
//                 pageCount={pageCount}
//                 previousLabel={<i className="fa-regular fa-chevron-left"></i>}
//                 renderOnZeroPageCount={null}
//                 className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripOverviewArea;
