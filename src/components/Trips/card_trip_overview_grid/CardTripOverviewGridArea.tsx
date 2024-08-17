"use client"
import Image from "next/image"
import Link from "next/link"
import ReactPaginate from "react-paginate"
import NiceSelect from "@/ui/NiceSelect"
import useTripOverviewFilter from "@/hooks/useTripOverviewFilter"
import CardTripOverviewMenu from "@/components/search-dropdown/inner-dropdown/CardTripOverviewMenu"

import icon from "@/assets/images/icon/icon_46.svg"
import featureIcon_1 from "@/assets/images/icon/icon_32.svg"
import featureIcon_2 from "@/assets/images/icon/person-outline_25.svg"

const CardTripOverviewGridArea = () => {
  const itemsPerPage = 6;
  const page = "listing_2";

  const {
    itemOffset,
    sortedProperties: sortedTrips,
    currentItems: currentTrips,
    pageCount,
    handlePageClick,
    handlePeopleChange,
    handleDaysChange,
    handleSearchChange,
    handlePriceChange,
    maxPrice,
    priceValue,
    resetFilters,
    selectedAmenities,
    handleAmenityChange,
    handleLocationChange,
    handleStatusChange,
    handleTypeChange,
  } = useTripOverviewFilter({ itemsPerPage, page });

  const handleResetFilter = () => {
    resetFilters();
  };

  return (
    <div className="property-listing-six pt-200 xl-pt-150 pb-200 xl-pb-120">
      <div className="container container-large">
        <div className="row">
          <div className="col-lg-8">
            <div className="ps-xxl-5">
              <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
                <div>Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentTrips.length}</span> of <span className="color-dark fw-500">{sortedTrips.length}</span> results</div>
                <div className="d-flex align-items-center xs-mt-20">
                  <div className="short-filter d-flex align-items-center">
                    <div className="fs-16 me-2">Sort by:</div>
                    <NiceSelect
                      className="nice-select rounded-0"
                      options={[
                        { value: "newest", text: "Newest" },
                        { value: "best_seller", text: "Best Seller" },
                        { value: "best_match", text: "Best Match" },
                        { value: "price_low", text: "Price Low" },
                        { value: "price_high", text: "Price High" },
                      ]}
                      defaultCurrent={0}
                      onChange={handleTypeChange}
                      name=""
                      placeholder=""
                    />
                  </div>
                  <Link href="/listing_06" className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                    data-bs-toggle="tooltip" title="Switch To List View"><i
                      className="fa-regular fa-bars"></i></Link>
                </div>
              </div>

              <div className="row gx-xxl-5">
                {currentTrips.map((trip: any) => (
                  <div key={trip.id} className="col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay={trip.data_delay_time}>
                    <div className="listing-card-one style-two shadow-none h-100 w-100">
                      <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                          <div className="tag fw-500">{trip.tag}</div>
                          <Link href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                          <div id={`carousel${trip.carousel}`} className="carousel slide">
                            <div className="carousel-indicators">
                              <button type="button" data-bs-target={`#carousel${trip.carousel}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target={`#carousel${trip.carousel}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target={`#carousel${trip.carousel}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                              {trip.carousel_thumb.map((item: any, i: any) => (
                                <div key={i} className={`carousel-item ${item.active}`} data-bs-interval="1000000">
                                  <Link href="/listing_details_01" className="d-block"><Image src={item.img} className="w-100" alt="..." /></Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="property-info pt-20">
                        <Link href="/listing_details_05" className="title tran3s">{trip.title}</Link>
                        <div className="address">{trip.location}</div>
                        <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                          <li className="d-flex align-items-center">
                            <Image src={featureIcon_1} alt=""
                              className="lazy-img icon me-2" />
                            <span className="fs-16"><span className="color-dark">{trip.days}</span> days</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <Image src={featureIcon_2} alt=""
                              className="lazy-img icon me-2" />
                            <span className="fs-16"><span className="color-dark">Age: {trip.minimum_age}+</span></span>
                          </li>
                          <li className="d-flex align-items-center">
                            <i className="bi bi-geo-alt me-2"></i>
                            <span className="fs-16"><span className="color-dark">{trip.country.join(" / ")}</span></span>
                          </li>
                        </ul>
                        <div
                          className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                          <strong className="price fw-500 color-dark">
                            ${trip.price.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}{trip.price_text && <>/<sub>m</sub></>}
                          </strong>                                        <Link href="/listing_details_05" className="btn-four"><i
                            className="bi bi-arrow-up-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <ReactPaginate
                breakLabel="..."
                nextLabel={<Image src={icon} alt="" className="ms-2" />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={pageCount}
                pageCount={pageCount}
                previousLabel={<Image src={icon} alt="" className="ms-2" />}
                renderOnZeroPageCount={null}
                className="pagination-one square d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-60 lg-pt-30"
              />
            </div>
          </div>

          <div className="col-lg-4 order-lg-first">
            <div className="advance-search-panel dot-bg md-mt-80">
              <div className="main-bg rounded-0">
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
                  handleLocationChange={handleLocationChange}
                  handleStatusChange={handleStatusChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTripOverviewGridArea;