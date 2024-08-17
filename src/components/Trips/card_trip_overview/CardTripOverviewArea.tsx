// // 20.21 8 aug no need to recalculate everything on every render:
// "use client";
// import React, { useMemo } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import ReactPaginate from "react-paginate";
// import NiceSelect from "@/ui/NiceSelect";
// import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
// import CardTripOverviewMenu from "@/components/search-dropdown/inner-dropdown/CardTripOverviewMenu";
// import TripList from "../TripList";
// import icon from "@/assets/images/icon/icon_46.svg";
// import { CardTripOverviewAreaProps } from "@/types/CardTripOverviewAreaProps";
// import trip_listing_data from "@/data/inner-data/TripListingData";

// const CardTripOverviewArea: React.FC<CardTripOverviewAreaProps> = ({ 
//   style = false, 
//   page = "listing_3", 
//   itemsPerPage = 5,
//   trips = trip_listing_data, 
// }) => {
//   const {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     handleCountryChange,
//     handlePeopleChange,
//     handleDaysChange,
//     handleStatusChange,
//     handleSearchChange,
//     activeFilters,
//   } = useTripOverviewFilter({ itemsPerPage, page });

//   const handleResetFilter = () => {
//     resetFilters();
//   };

//   // Memoize pagination properties
//   const paginationProps = useMemo(() => ({
//     breakLabel: "...",
//     nextLabel: <Image src={icon} alt="" className="ms-2" />,
//     onPageChange: handlePageClick,
//     pageRangeDisplayed: pageCount,
//     pageCount: pageCount,
//     previousLabel: <Image src={icon} alt="" className="ms-2" />,
//     renderOnZeroPageCount: null,
//     className: "pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30",
//   }), [handlePageClick, pageCount]);

//   // Memoize container class
//   const containerClass = useMemo(() => `property-listing-six ${style ? "pt-150 xl-pt-100 pb-170 xl-pb-120" : "bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120"}`, [style]);

//   return (
//     <div className={containerClass}>
//       <div className="container container-large">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="ps-xxl-5">
//               <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
//                 <div>
//                   Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span className="color-dark fw-500">{sortedProperties.length}</span> results
//                 </div>
//                 <div className="d-flex align-items-center xs-mt-20">
//                   <div className="short-filter d-flex align-items-center">
//                     <div className="fs-16 me-2">Sort by:</div>
//                     <NiceSelect
//                       className="nice-select"
//                       options={[
//                         { value: "price_low", text: "Price Low" },
//                         { value: "price_high", text: "Price High" },
//                       ]}
//                       defaultCurrent={0}
//                       onChange={handleTypeChange}
//                       name=""
//                       placeholder=""
//                     />
//                   </div>
//                   <Link href="/listing_01" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View">
//                     <i className="fa-regular fa-grid-2"></i>
//                   </Link>
//                 </div>
//               </div>

//               <TripList trips={trips} style={style} />

//               <ReactPaginate {...paginationProps} />
//             </div>
//           </div>

//           <div className="col-lg-4 order-lg-first">
//             <div className="advance-search-panel dot-bg md-mt-80">
//               <div className="main-bg">
//                 <CardTripOverviewMenu
//                   handleSearchChange={handleSearchChange}
//                   handlePeopleChange={handlePeopleChange}
//                   handleDaysChange={handleDaysChange}
//                   handlePriceChange={handlePriceChange}
//                   maxPrice={maxPrice}
//                   priceValue={priceValue}
//                   handleResetFilter={handleResetFilter}
//                   selectedAmenities={selectedAmenities}
//                   handleAmenityChange={handleAmenityChange}
//                   handleCountryChange={handleCountryChange}
//                   handleStatusChange={handleStatusChange}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTripOverviewArea;

// 17.00 8 aug passing props
"use client";
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import NiceSelect from "@/ui/NiceSelect";
import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
import CardTripOverviewMenu from "@/components/search-dropdown/inner-dropdown/CardTripOverviewMenu";
import TripList from "../TripList"; // Import the TripList component
import icon from "@/assets/images/icon/icon_46.svg";
import { CardTripOverviewAreaProps } from "@/types/CardTripOverviewAreaProps"; // Import the props interface
import trip_listing_data from "@/data/inner-data/TripListingData";

const CardTripOverviewArea: React.FC<CardTripOverviewAreaProps> = ({ 
  style = false, 
  page = "listing_3", 
  itemsPerPage = 5,
  trips = trip_listing_data, // Ensure default value
}) => {
  const {
    itemOffset,
    sortedProperties,
    currentItems,
    pageCount,
    handlePageClick,
    handleTypeChange,
    maxPrice,
    priceValue,
    resetFilters,
    selectedAmenities,
    handlePriceChange,
    handleAmenityChange,
    handleCountryChange,
    handlePeopleChange,
    handleDaysChange,
    handleStatusChange,
    handleSearchChange,
    activeFilters,
  } = useTripOverviewFilter({ itemsPerPage, page});

  const handleResetFilter = () => {
    resetFilters();
  };

  return (
    <div className={`property-listing-six ${style ? "pt-150 xl-pt-100 pb-170 xl-pb-120" : "bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120"}`}>
      <div className="container container-large">
        <div className="row">
          <div className="col-lg-8">
            <div className="ps-xxl-5">
              <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
                <div>
                  Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span className="color-dark fw-500">{sortedProperties.length}</span> results
                </div>
                <div className="d-flex align-items-center xs-mt-20">
                  <div className="short-filter d-flex align-items-center">
                    <div className="fs-16 me-2">Sort by:</div>
                    <NiceSelect
                      className="nice-select"
                      options={[
                        { value: "price_low", text: "Price Low" },
                        { value: "price_high", text: "Price High" },
                      ]}
                      defaultCurrent={0}
                      onChange={handleTypeChange}
                      name=""
                      placeholder=""
                    />
                  </div>
                  <Link href="/listing_01" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View">
                    <i className="fa-regular fa-grid-2"></i>
                  </Link>
                </div>
              </div>

              {/* Use TripList component */}
              {/* <TripList trips={currentItems} style={style} /> */}
              <TripList trips={trips} style={style} />

              <ReactPaginate
                breakLabel="..."
                nextLabel={<Image src={icon} alt="" className="ms-2" />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={pageCount}
                pageCount={pageCount}
                previousLabel={<Image src={icon} alt="" className="ms-2" />}
                renderOnZeroPageCount={null}
                className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
              />
            </div>
          </div>

          <div className="col-lg-4 order-lg-first">
            <div className="advance-search-panel dot-bg md-mt-80">
              <div className="main-bg">
                <CardTripOverviewMenu
                  handleSearchChange={handleSearchChange}
                  handlePeopleChange={handlePeopleChange}
                  handleDaysChange={handleDaysChange}
                  handlePriceChange={handlePriceChange}
                  maxPrice={maxPrice}
                  priceValue={priceValue}
                  handleResetFilter={handleResetFilter}
                  selectedAmenities={selectedAmenities}
                  handleAmenityChange={handleAmenityChange}
                  handleCountryChange={handleCountryChange}
                  handleStatusChange={handleStatusChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTripOverviewArea;




// // 16.13 8 aug more props (link & flightpath)
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import ReactPaginate from "react-paginate";
// import NiceSelect from "@/ui/NiceSelect";
// import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
// import CardTripOverviewMenu from "@/components/search-dropdown/inner-dropdown/CardTripOverviewMenu";
// import TripList from "../TripList"; // Import the TripList component
// import icon from "@/assets/images/icon/icon_46.svg";

// const CardTripOverviewArea = ({ style }: any) => {
//   const itemsPerPage = 5;
//   const page = "listing_3";

//   const {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     handleCountryChange,
//     handlePeopleChange,
//     handleDaysChange,
//     handleStatusChange,
//     handleSearchChange, // Ensure handleSearchChange is included
//     activeFilters,
//   } = useTripOverviewFilter({ itemsPerPage, page });

//   const handleResetFilter = () => {
//     resetFilters();
//   };

//   return (
//     <div className={`property-listing-six ${style ? "pt-150 xl-pt-100 pb-170 xl-pb-120" : "bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120"}`}>
//       <div className="container container-large">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="ps-xxl-5">
//               <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
//                 <div>
//                   Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span className="color-dark fw-500">{sortedProperties.length}</span> results
//                 </div>
//                 <div className="d-flex align-items-center xs-mt-20">
//                   <div className="short-filter d-flex align-items-center">
//                     <div className="fs-16 me-2">Sort by:</div>
//                     <NiceSelect
//                       className="nice-select"
//                       options={[
//                         { value: "price_low", text: "Price Low" },
//                         { value: "price_high", text: "Price High" },
//                       ]}
//                       defaultCurrent={0}
//                       onChange={handleTypeChange}
//                       name=""
//                       placeholder=""
//                     />
//                   </div>
//                   <Link href="/listing_01" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View">
//                     <i className="fa-regular fa-grid-2"></i>
//                   </Link>
//                 </div>
//               </div>

//               {/* Use TripList component */}
//               <TripList trips={currentItems} style={style} />

//               <ReactPaginate
//                 breakLabel="..."
//                 nextLabel={<Image src={icon} alt="" className="ms-2" />}
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={pageCount}
//                 pageCount={pageCount}
//                 previousLabel={<Image src={icon} alt="" className="ms-2" />}
//                 renderOnZeroPageCount={null}
//                 className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
//               />
//             </div>
//           </div>

//           <div className="col-lg-4 order-lg-first">
//             <div className="advance-search-panel dot-bg md-mt-80">
//               <div className="main-bg">
//                 <CardTripOverviewMenu
//                   handleSearchChange={handleSearchChange}
//                   handlePeopleChange={handlePeopleChange}
//                   handleDaysChange={handleDaysChange}
//                   handlePriceChange={handlePriceChange}
//                   maxPrice={maxPrice}
//                   priceValue={priceValue}
//                   handleResetFilter={handleResetFilter}
//                   selectedAmenities={selectedAmenities}
//                   handleAmenityChange={handleAmenityChange}
//                   handleCountryChange={handleCountryChange}
//                   handleStatusChange={handleStatusChange} // Keep this for now, can be removed if not needed
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTripOverviewArea;


// this works!!
// // 14.25 8 aug
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import ReactPaginate from "react-paginate";
// import NiceSelect from "@/ui/NiceSelect";
// import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
// import Fancybox from "@/components/common/Fancybox";
// import CardTripOverviewMenu from "@/components/search-dropdown/inner-dropdown/CardTripOverviewMenu";
// import icon from "@/assets/images/icon/icon_46.svg";
// import TripCard from "../TripCard"; // Import the TripCard component
// import { TripType } from "@/types/TripType";

// const CardTripOverviewArea = ({ style }: any) => {
//   const itemsPerPage = 5;
//   const page = "listing_3";

//   const {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     handleCountryChange,
//     handlePeopleChange,
//     handleDaysChange,
//     handleStatusChange,
//     handleSearchChange, // Ensure handleSearchChange is included
//     activeFilters,
//   } = useTripOverviewFilter({ itemsPerPage, page });

//   const handleResetFilter = () => {
//     resetFilters();
//   };

//   return (
//     <div className={`property-listing-six ${style ? "pt-150 xl-pt-100 pb-170 xl-pb-120" : "bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120"}`}>
//       <div className="container container-large">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="ps-xxl-5">
//               <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
//                 <div>
//                   Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span className="color-dark fw-500">{sortedProperties.length}</span> results
//                 </div>
//                 <div className="d-flex align-items-center xs-mt-20">
//                   <div className="short-filter d-flex align-items-center">
//                     <div className="fs-16 me-2">Sort by:</div>
//                     <NiceSelect
//                       className="nice-select"
//                       options={[
//                         { value: "price_low", text: "Price Low" },
//                         { value: "price_high", text: "Price High" },
//                       ]}
//                       defaultCurrent={0}
//                       onChange={handleTypeChange}
//                       name=""
//                       placeholder=""
//                     />
//                   </div>
//                   <Link href="/listing_01" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View">
//                     <i className="fa-regular fa-grid-2"></i>
//                   </Link>
//                 </div>
//               </div>

//               <div className="row gx-xxl-5">
//                 {currentItems.map((trip: TripType) => (
//                   <TripCard key={trip.id} trip={trip} style={style} /> // Use TripCard component
//                 ))}
//               </div>

//               <ReactPaginate
//                 breakLabel="..."
//                 nextLabel={<Image src={icon} alt="" className="ms-2" />}
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={pageCount}
//                 pageCount={pageCount}
//                 previousLabel={<Image src={icon} alt="" className="ms-2" />}
//                 renderOnZeroPageCount={null}
//                 className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
//               />
//             </div>
//           </div>

//           <div className="col-lg-4 order-lg-first">
//             <div className="advance-search-panel dot-bg md-mt-80">
//               <div className="main-bg">
//                 <CardTripOverviewMenu
//                   handleSearchChange={handleSearchChange}
//                   handlePeopleChange={handlePeopleChange}
//                   handleDaysChange={handleDaysChange}
//                   handlePriceChange={handlePriceChange}
//                   maxPrice={maxPrice}
//                   priceValue={priceValue}
//                   handleResetFilter={handleResetFilter}
//                   selectedAmenities={selectedAmenities}
//                   handleAmenityChange={handleAmenityChange}
//                   handleCountryChange={handleCountryChange}
//                   handleStatusChange={handleStatusChange} // Keep this for now, can be removed if not needed
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTripOverviewArea;

// // 14.02 8 aug refactored to use TripCard and TripList components
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import ReactPaginate from "react-paginate";
// import NiceSelect from "@/ui/NiceSelect";
// import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
// import CardTripOverviewMenu from "@/components/search-dropdown/inner-dropdown/CardTripOverviewMenu";
// import TripList from "@/components/Trips/TripList";
// import icon from "@/assets/images/icon/icon_46.svg";

// const CardTripOverviewArea = ({ style }: any) => {
//   const itemsPerPage = 5;
//   const page = "listing_3";

//   const {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     handleCountryChange,
//     handlePeopleChange,
//     handleDaysChange,
//     handleStatusChange,
//     handleSearchChange,
//     activeFilters,
//   } = useTripOverviewFilter({ itemsPerPage, page });

//   const handleResetFilter = () => {
//     resetFilters();
//   };

//   return (
//     <div className={`property-listing-six ${style ? "pt-150 xl-pt-100 pb-170 xl-pb-120" : "bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120"}`}>
//       <div className="container container-large">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="ps-xxl-5">
//               <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
//                 <div>
//                   Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span className="color-dark fw-500">{sortedProperties.length}</span> results
//                 </div>
//                 <div className="d-flex align-items-center xs-mt-20">
//                   <div className="short-filter d-flex align-items-center">
//                     <div className="fs-16 me-2">Short by:</div>
//                     <NiceSelect
//                       className="nice-select"
//                       options={[
//                         { value: "price_low", text: "Price Low" },
//                         { value: "price_high", text: "Price High" },
//                       ]}
//                       defaultCurrent={0}
//                       onChange={handleTypeChange}
//                       name=""
//                       placeholder=""
//                     />
//                   </div>
//                   <Link href="/listing_01" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View">
//                     <i className="fa-regular fa-grid-2"></i>
//                   </Link>
//                 </div>
//               </div>

//               <TripList trips={currentItems} style={style} />

//               <ReactPaginate
//                 breakLabel="..."
//                 nextLabel={<Image src={icon} alt="" className="ms-2" />}
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={pageCount}
//                 pageCount={pageCount}
//                 previousLabel={<Image src={icon} alt="" className="ms-2" />}
//                 renderOnZeroPageCount={null}
//                 className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
//               />
//             </div>
//           </div>

//           <div className="col-lg-4 order-lg-first">
//             <div className="advance-search-panel dot-bg md-mt-80">
//               <div className="main-bg">
//                 <CardTripOverviewMenu
//                   handleSearchChange={handleSearchChange}
//                   handlePeopleChange={handlePeopleChange}
//                   handleDaysChange={handleDaysChange}
//                   handlePriceChange={handlePriceChange}
//                   maxPrice={maxPrice}
//                   priceValue={priceValue}
//                   handleResetFilter={handleResetFilter}
//                   selectedAmenities={selectedAmenities}
//                   handleAmenityChange={handleAmenityChange}
//                   handleCountryChange={handleCountryChange}
//                   handleStatusChange={handleStatusChange}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTripOverviewArea;

// // this works@ 21.28 7 aug
// // 17.46 include handle search change
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import ReactPaginate from "react-paginate";
// import NiceSelect from "@/ui/NiceSelect";
// import useTripOverviewFilter from "@/hooks/useTripOverviewFilter";
// import Fancybox from "@/components/common/Fancybox";
// import CardTripOverviewMenu from "@/components/search-dropdown/inner-dropdown/CardTripOverviewMenu";
// import icon from "@/assets/images/icon/icon_46.svg";

// const CardTripOverviewArea = ({ style }: any) => {
//   const itemsPerPage = 5;
//   const page = "listing_3";

//   const {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     // handleLocationChange,
//     handleCountryChange,
//     handlePeopleChange,
//     handleDaysChange,
//     handleStatusChange,
//     handleSearchChange, // Ensure handleSearchChange is included
//     activeFilters,
//   } = useTripOverviewFilter({ itemsPerPage, page });

//   const handleResetFilter = () => {
//     resetFilters();
//   };

//   return (
//     <div className={`property-listing-six ${style ? "pt-150 xl-pt-100 pb-170 xl-pb-120" : "bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120"}`}>
//       <div className="container container-large">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="ps-xxl-5">
//               <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
//                 <div>
//                   Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span className="color-dark fw-500">{sortedProperties.length}</span> results
//                 </div>
//                 <div className="d-flex align-items-center xs-mt-20">
//                   <div className="short-filter d-flex align-items-center">
//                     <div className="fs-16 me-2">Short by:</div>
//                     <NiceSelect
//                       className="nice-select"
//                       options={[
//                         // { value: "newest", text: "Newest" },
//                         // { value: "best_seller", text: "Best Seller" },
//                         // { value: "best_match", text: "Best Match" },
//                         { value: "price_low", text: "Price Low" },
//                         { value: "price_high", text: "Price High" },
//                       ]}
//                       defaultCurrent={0}
//                       onChange={handleTypeChange}
//                       name=""
//                       placeholder=""
//                     />
//                   </div>
//                   <Link href="/listing_01" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View">
//                     <i className="fa-regular fa-grid-2"></i>
//                   </Link>
//                 </div>
//               </div>

//               {currentItems.map((item: any) => (
//                 <div key={item.id} className={`listing-card-seven border-20 p-20 mb-50 wow fadeInUp ${style ? "grey-bg" : ""}`}>
//                   <div className="d-flex flex-wrap layout-one">
//                     <div className={`img-gallery position-relative z-1 border-20 overflow-hidden ${item.bg_img}`}>
//                       <div className={style ? "tag bg-white rounded-0 text-dark fw-500" : `border-20 tag ${item.tag_bg}`}>{item.tag}</div>
//                       <div className="img-slider-btn">
//                         03 <i className="fa-regular fa-image"></i>
//                         <Fancybox
//                           options={{
//                             Carousel: {
//                               infinite: true,
//                             },
//                           }}
//                         >
//                           {item.carousel_thumb.map((thumb: any, index: any) => (
//                             <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
//                           ))}
//                         </Fancybox>
//                       </div>
//                     </div>
//                     <div className="property-info">
//                       <Link href="/listing_details_02" className="title tran3s mb-15">{item.title}</Link>
//                       <div className="address"><em>{item.location}</em></div>
//                       <div className="feature mt-30 mb-30 pt-30 pb-5">
//                         <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
//                           <li><strong>{item.days}</strong> Days</li>
//                           {/* <li><strong>{item.inclusions[0]}</strong></li> */}
//                           <li><strong>{item.inclusions[1]}</strong> DAR-ZNZ-DAR</li>
//                           <li><strong>{item.inclusions[2]}</strong>4x4 Safari</li>
//                         </ul>
//                       </div>
//                       <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between">
//                         <strong className="price fw-500 color-dark me-auto">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.price_text && <>/<sub>m</sub></>}</strong>
//                         <ul className="style-none d-flex action-icons me-4">
//                           <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
//                           <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
//                           <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
//                         </ul>
//                         <Link href="/listing_details_02" className="btn-four rounded-circle">
//                           <i className="bi bi-arrow-up-right"></i>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <ReactPaginate
//                 breakLabel="..."
//                 nextLabel={<Image src={icon} alt="" className="ms-2" />}
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={pageCount}
//                 pageCount={pageCount}
//                 previousLabel={<Image src={icon} alt="" className="ms-2" />}
//                 renderOnZeroPageCount={null}
//                 className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
//               />
//             </div>
//           </div>

//           <div className="col-lg-4 order-lg-first">
//             <div className="advance-search-panel dot-bg md-mt-80">
//               <div className="main-bg">
//                 <CardTripOverviewMenu
//                   handleSearchChange={handleSearchChange}
//                   handlePeopleChange={handlePeopleChange}
//                   handleDaysChange={handleDaysChange}
//                   handlePriceChange={handlePriceChange}
//                   maxPrice={maxPrice}
//                   priceValue={priceValue}
//                   handleResetFilter={handleResetFilter}
//                   selectedAmenities={selectedAmenities}
//                   handleAmenityChange={handleAmenityChange}
//                   // handleLocationChange={handleLocationChange}
//                   handleCountryChange={handleCountryChange}
//                   handleStatusChange={handleStatusChange} // Keep this for now, can be removed if not needed
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTripOverviewArea;
