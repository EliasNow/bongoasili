// "use client"
// import NiceSelect from "@/ui/NiceSelect"
// import MediaGallery from "./MediaGallery"
// import Review from "@/components/inner-pages/agency/agency-details/Review"
// import Sidebar from "./Sidebar"
// import CommonBanner from "../listing-details-common/CommonBanner"
// import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview"
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList"
// import CommonAmenities from "../listing-details-common/CommonAmenities"
// import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour"
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan"
// import CommonNearbyList from "../listing-details-common/CommonNearbyList"
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty"
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore"
// import CommonLocation from "../listing-details-common/CommonLocation"
// import CommonReviewForm from "../listing-details-common/CommonReviewForm"

// const ListingDetailsOneArea = () => {

//    const selectHandler = (e: any) => { };

//    return (
//       <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//          <div className="container">
//             <CommonBanner />
//             <MediaGallery />
//             <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//                <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
//                <CommonPropertyOverview />
//             </div>
//             <div className="row">
//                <div className="col-xl-8">
//                   <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//                      <h4 className="mb-20">Overview</h4>
//                      <p className="fs-20 lh-lg">Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel
//                         dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in
//                         sociis. Nisl enim integer neque nec.</p>
//                   </div>
//                   <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//                      <h4 className="mb-20">Property Features</h4>
//                      <p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.</p>
//                      <div className="accordion-style-two mt-45">
//                         <CommonPropertyFeatureList />
//                      </div>
//                   </div>
//                   <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonAmenities />
//                   </div>
//                   <div className="property-video-tour mb-50">
//                      <CommonPropertyVideoTour />
//                   </div>
//                   <CommonPropertyFloorPlan style={false} />
//                   <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonNearbyList />
//                   </div>
//                   <CommonSimilarProperty />
//                   <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonProPertyScore />
//                   </div>
//                   <div className="property-location mb-50">
//                      <CommonLocation />
//                   </div>

//                   <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
//                      <div className="position-relative z-1">
//                         <div className="d-sm-flex justify-content-between align-items-center mb-10">
//                            <h4 className="m0 xs-pb-30">Reviews</h4>
//                            <NiceSelect className="nice-select"
//                               options={[
//                                  { value: "01", text: "Newest" },
//                                  { value: "02", text: "Best Seller" },
//                                  { value: "03", text: "Best Match" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={selectHandler}
//                               name=""
//                               placeholder="" />
//                         </div>
//                         <Review style={true} />
//                      </div>
//                   </div>
//                   <div className="review-form bg-white shadow4 border-20 p-40">
//                      <CommonReviewForm />
//                   </div>
//                </div>
//                <Sidebar />
//             </div>
//          </div>
//       </div>
//    )
// }

// export default ListingDetailsOneArea



// updated listing one area for visual editing with corresponding registered
// components in builder-registry (accepts props) 18 jul 17.52
// src/components/ListingDetails/listing-details-1/ListingDetailsOneArea.tsx

// import NiceSelect from "@/ui/NiceSelect"
// import MediaGallery from "./MediaGallery"
// import Review from "@/components/inner-pages/agency/agency-details/Review"
// import Sidebar from "./Sidebar"
// import CommonBanner from "../listing-details-common/CommonBanner"
// import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview"
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList"
// import CommonAmenities from "../listing-details-common/CommonAmenities"
// import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour"
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan"
// import CommonNearbyList from "../listing-details-common/CommonNearbyList"
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty"
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore"
// import CommonLocation from "../listing-details-common/CommonLocation"
// import CommonReviewForm from "../listing-details-common/CommonReviewForm"

// const ListingDetailsOneArea = () => {

//    const selectHandler = (e: any) => { };

//    return (
//       <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//          <div className="container">
//             <CommonBanner style_3={false} />
//             <MediaGallery />
//             <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//                <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
//                <CommonPropertyOverview />
//             </div>
//             <div className="row">
//                <div className="col-xl-8">
//                   <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//                      <h4 className="mb-20">Overview</h4>
//                      <p className="fs-20 lh-lg">Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel
//                         dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in
//                         sociis. Nisl enim integer neque nec.</p>
//                   </div>
//                   <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//                      <h4 className="mb-20">Property Features</h4>
//                      <p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.</p>
//                      <div className="accordion-style-two mt-45">
//                         <CommonPropertyFeatureList />
//                      </div>
//                   </div>
//                   <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonAmenities />
//                   </div>
//                   <div className="property-video-tour mb-50">
//                      <CommonPropertyVideoTour />
//                   </div>
//                   <CommonPropertyFloorPlan style={false} />
//                   <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonNearbyList />
//                   </div>
//                   <CommonSimilarProperty />
//                   <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonProPertyScore />
//                   </div>
//                   <div className="property-location mb-50">
//                      <CommonLocation />
//                   </div>

//                   <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
//                      <div className="position-relative z-1">
//                         <div className="d-sm-flex justify-content-between align-items-center mb-10">
//                            <h4 className="m0 xs-pb-30">Reviews</h4>
//                            <NiceSelect className="nice-select"
//                               options={[
//                                  { value: "01", text: "Newest" },
//                                  { value: "02", text: "Best Seller" },
//                                  { value: "03", text: "Best Match" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={selectHandler}
//                               name=""
//                               placeholder="" />
//                         </div>
//                         <Review style={true} />
//                      </div>
//                   </div>
//                   <div className="review-form bg-white shadow4 border-20 p-40">
//                      <CommonReviewForm />
//                   </div>
//                </div>
//                <Sidebar />
//             </div>
//          </div>
//       </div>
//    )
// }

// export default ListingDetailsOneArea





// "use client";
// import { useState } from "react";

// import NiceSelect from "@/ui/NiceSelect";
// import MediaGallery from "./MediaGallery";
// import Review from "@/components/inner-pages/agency/agency-details/Review";
// import Sidebar from "./Sidebar";
// import CommonBanner from "../listing-details-common/CommonBanner";
// import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview";
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
// import CommonAmenities from "../listing-details-common/CommonAmenities";
// import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
// import CommonNearbyList from "../listing-details-common/CommonNearbyList";
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
// import CommonLocation from "../listing-details-common/CommonLocation";
// import CommonReviewForm from "../listing-details-common/CommonReviewForm";

// const ListingDetailsOneArea = () => {
//    const [category, setCategory] = useState<string>("1");
//    const [listedIn, setListedIn] = useState<string>("1");

//    return (
//       <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//          <div className="container">
//             <CommonBanner style_3={false} />
//             <MediaGallery />
//             <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//                <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
//                <CommonPropertyOverview />
//             </div>
//             <div className="row">
//                <div className="col-xl-8">
//                   <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//                      <h4 className="mb-20">Overview</h4>
//                      <p className="fs-20 lh-lg">
//                         Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.
//                      </p>
//                   </div>
//                   <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//                      <h4 className="mb-20">Property Features</h4>
//                      <p className="fs-20 lh-lg">
//                         Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
//                      </p>
//                      <div className="accordion-style-two mt-45">
//                         <CommonPropertyFeatureList />
//                      </div>
//                   </div>
//                   <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonAmenities />
//                   </div>
//                   <div className="property-video-tour mb-50">
//                      <CommonPropertyVideoTour />
//                   </div>
//                   <CommonPropertyFloorPlan style={false} />
//                   <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonNearbyList />
//                   </div>
//                   <CommonSimilarProperty />
//                   <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
//                      <CommonProPertyScore />
//                   </div>
//                   <div className="property-location mb-50">
//                      <CommonLocation />
//                   </div>
//                   <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
//                      <div className="position-relative z-1">
//                         <div className="d-sm-flex justify-content-between align-items-center mb-10">
//                            <h4 className="m0 xs-pb-30">Reviews</h4>
//                            <NiceSelect
//                               className="nice-select"
//                               options={[
//                                  { value: "01", text: "Newest" },
//                                  { value: "02", text: "Best Seller" },
//                                  { value: "03", text: "Best Match" },
//                               ]}
//                               defaultCurrent={0}
//                               onChange={setCategory}
//                               name="category"
//                               placeholder=""
//                            />
//                         </div>
//                         <Review style={true} />
//                      </div>
//                   </div>
//                   <div className="review-form bg-white shadow4 border-20 p-40">
//                      <CommonReviewForm />
//                   </div>
//                </div>
//                <Sidebar />
//             </div>
//          </div>
//       </div>
//    );
// };

// export default ListingDetailsOneArea;


// 19 jul 16.30 making it dynamic (changed common banner)
// src/components/ListingDetails/listing-details-1/ListingDetailsOneArea.tsx
// "use client";
// import { useState } from "react";

// import NiceSelect from "@/ui/NiceSelect";
// import MediaGallery from "./MediaGallery";
// import Review from "@/components/inner-pages/agency/agency-details/Review";
// import Sidebar from "./Sidebar";
// import CommonBanner from "../listing-details-common/CommonBanner";
// import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview";
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
// import CommonAmenities from "../listing-details-common/CommonAmenities";
// import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
// import CommonNearbyList from "../listing-details-common/CommonNearbyList";
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
// import CommonLocation from "../listing-details-common/CommonLocation";
// import CommonReviewForm from "../listing-details-common/CommonReviewForm";

// const ListingDetailsOneArea = () => {
//   const [category, setCategory] = useState<string>("1");
//   const [listedIn, setListedIn] = useState<string>("1");

//   return (
//     <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//       <div className="container">
//         <CommonBanner
//           title="Kenya Dream Safari"
//           location="Kenya"
//           price="Price: $3,500 p.p."
//           extras="Est. extras: $400* visa, drinks, tips, souvenirs"
//           style_3={false}
//         />
//         <MediaGallery />
//         <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//           <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
//           <CommonPropertyOverview />
//         </div>
//         <div className="row">
//           <div className="col-xl-8">
//             <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//               <h4 className="mb-20">Overview</h4>
//               <p className="fs-20 lh-lg">
//                 Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.
//               </p>
//             </div>
//             <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//               <h4 className="mb-20">Property Features</h4>
//               <p className="fs-20 lh-lg">
//                 Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
//               </p>
//               <div className="accordion-style-two mt-45">
//                 <CommonPropertyFeatureList />
//               </div>
//             </div>
//             <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//               <CommonAmenities />
//             </div>
//             <div className="property-video-tour mb-50">
//               <CommonPropertyVideoTour />
//             </div>
//             <CommonPropertyFloorPlan style={false} />
//             <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
//               <CommonNearbyList />
//             </div>
//             <CommonSimilarProperty />
//             <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
//               <CommonProPertyScore />
//             </div>
//             <div className="property-location mb-50">
//               <CommonLocation />
//             </div>
//             <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
//               <div className="position-relative z-1">
//                 <div className="d-sm-flex justify-content-between align-items-center mb-10">
//                   <h4 className="m0 xs-pb-30">Reviews</h4>
//                   <NiceSelect
//                     className="nice-select"
//                     options={[
//                       { value: "01", text: "Newest" },
//                       { value: "02", text: "Best Seller" },
//                       { value: "03", text: "Best Match" },
//                     ]}
//                     defaultCurrent={0}
//                     onChange={setCategory}
//                     name="category"
//                     placeholder=""
//                   />
//                 </div>
//                 <Review style={true} />
//               </div>
//             </div>
//             <div className="review-form bg-white shadow4 border-20 p-40">
//               <CommonReviewForm />
//             </div>
//           </div>
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetailsOneArea;

// 19 jul 17.00
// update to allow ListingDetailsOneArea to accept props and pass them to child components
// src/components/ListingDetails/listing-details-1/ListingDetailsOneArea.tsx
// "use client";
// import { useState } from "react";

// import NiceSelect from "@/ui/NiceSelect";
// import MediaGallery from "./MediaGallery";
// import Review from "@/components/inner-pages/agency/agency-details/Review";
// import Sidebar from "./Sidebar";
// import CommonBanner from "../listing-details-common/CommonBanner";
// import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview";
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
// import CommonAmenities from "../listing-details-common/CommonAmenities";
// import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
// import CommonNearbyList from "../listing-details-common/CommonNearbyList";
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
// import CommonLocation from "../listing-details-common/CommonLocation";
// import CommonReviewForm from "../listing-details-common/CommonReviewForm";

// interface ListingDetailsOneAreaProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[]; // MediaGallery
//   smallCarousel: { src: string }[]; // MediaGallery
// }

// const ListingDetailsOneArea: React.FC<ListingDetailsOneAreaProps> = ({
//   title,
//   location,
//   price,
//   extras,
//   style_3 = false,
//   bigCarousel,
//   smallCarousel,
// }) => {
//   const [category, setCategory] = useState<string>("1");
//   const [listedIn, setListedIn] = useState<string>("1");

// //   return (
// //     <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
// //       <div className="container">
// //         <CommonBanner
// //           title={title}
// //           location={location}
// //           price={price}
// //           extras={extras}
// //           style_3={style_3}
// //         />
// //         <MediaGallery />
// //         <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
// //           <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
// //           <CommonPropertyOverview />
// //         </div>
// //         <div className="row">
// //           <div className="col-xl-8">
// //             <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
// //               <h4 className="mb-20">Overview</h4>
// //               <p className="fs-20 lh-lg">
// //                 Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.
// //               </p>
// //             </div>
// //             <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
// //               <h4 className="mb-20">Property Features</h4>
// //               <p className="fs-20 lh-lg">
// //                 Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
// //               </p>
// //               <div className="accordion-style-two mt-45">
// //                 <CommonPropertyFeatureList />
// //               </div>
// //             </div>
// //             <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
// //               <CommonAmenities />
// //             </div>
// //             <div className="property-video-tour mb-50">
// //               <CommonPropertyVideoTour />
// //             </div>
// //             <CommonPropertyFloorPlan style={false} />
// //             <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
// //               <CommonNearbyList />
// //             </div>
// //             <CommonSimilarProperty />
// //             <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
// //               <CommonProPertyScore />
// //             </div>
// //             <div className="property-location mb-50">
// //               <CommonLocation />
// //             </div>
// //             <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
// //               <div className="position-relative z-1">
// //                 <div className="d-sm-flex justify-content-between align-items-center mb-10">
// //                   <h4 className="m0 xs-pb-30">Reviews</h4>
// //                   <NiceSelect
// //                     className="nice-select"
// //                     options={[
// //                       { value: "01", text: "Newest" },
// //                       { value: "02", text: "Best Seller" },
// //                       { value: "03", text: "Best Match" },
// //                     ]}
// //                     defaultCurrent={0}
// //                     onChange={setCategory}
// //                     name="category"
// //                     placeholder=""
// //                   />
// //                 </div>
// //                 <Review style={true} />
// //               </div>
// //             </div>
// //             <div className="review-form bg-white shadow4 border-20 p-40">
// //               <CommonReviewForm />
// //             </div>
// //           </div>
// //           <Sidebar />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// return (
//    <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//      <div className="container">
//        <CommonBanner title={title} location={location} price={price} extras={extras} style_3={style_3} />
//        <MediaGallery bigCarousel={bigCarousel} smallCarousel={smallCarousel} style={style_3} />
//        <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//          <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
//          <CommonPropertyOverview />
//        </div>
//        <div className="row">
//          <div className="col-xl-8">
//            <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//              <h4 className="mb-20">Overview</h4>
//              <p className="fs-20 lh-lg">
//                Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.
//              </p>
//            </div>
//            <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//              <h4 className="mb-20">Property Features</h4>
//              <p className="fs-20 lh-lg">
//                Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
//              </p>
//              <div className="accordion-style-two mt-45">
//                <CommonPropertyFeatureList />
//              </div>
//            </div>
//            <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//              <CommonAmenities />
//            </div>
//            <div className="property-video-tour mb-50">
//              <CommonPropertyVideoTour />
//            </div>
//            <CommonPropertyFloorPlan style={false} />
//            <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
//              <CommonNearbyList />
//            </div>
//            <CommonSimilarProperty />
//            <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
//              <CommonProPertyScore />
//            </div>
//            <div className="property-location mb-50">
//              <CommonLocation />
//            </div>
//            <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
//              <div className="position-relative z-1">
//                <div className="d-sm-flex justify-content-between align-items-center mb-10">
//                  <h4 className="m0 xs-pb-30">Reviews</h4>
//                  <NiceSelect
//                    className="nice-select"
//                    options={[
//                      { value: "01", text: "Newest" },
//                      { value: "02", text: "Best Seller" },
//                      { value: "03", text: "Best Match" },
//                    ]}
//                    defaultCurrent={0}
//                    onChange={setCategory}
//                    name="category"
//                    placeholder=""
//                  />
//                </div>
//                <Review style={true} />
//              </div>
//            </div>
//            <div className="review-form bg-white shadow4 border-20 p-40">
//              <CommonReviewForm />
//            </div>
//          </div>
//          <Sidebar />
//        </div>
//      </div>
//    </div>
//  );
// };

// export default ListingDetailsOneArea;

// update that shit 19.41 (Last working version 20 jul 14.40)
// "use client";
// import { useState } from "react";

// import NiceSelect from "@/ui/NiceSelect";
// import MediaGallery from "./MediaGallery";
// import Review from "@/components/inner-pages/agency/agency-details/Review";
// import Sidebar from "./Sidebar";
// import CommonBanner from "../listing-details-common/CommonBanner";
// import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview";
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
// import CommonAmenities from "../listing-details-common/CommonAmenities";
// import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
// import CommonNearbyList from "../listing-details-common/CommonNearbyList";
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
// import CommonLocation from "../listing-details-common/CommonLocation";
// import CommonReviewForm from "../listing-details-common/CommonReviewForm";

// interface ListingDetailsOneAreaProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
// }

// const ListingDetailsOneArea: React.FC<ListingDetailsOneAreaProps> = ({
//   title,
//   location,
//   price,
//   extras,
//   style_3 = false,
//   bigCarousel,
//   smallCarousel,
// }) => {
//   const [category, setCategory] = useState<string>("1");
//   const [listedIn, setListedIn] = useState<string>("1");

//   return (
//     <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//       <div className="container">
//         <CommonBanner title={title} location={location} price={price} extras={extras} style_3={style_3} />
//         <MediaGallery bigCarousel={bigCarousel} smallCarousel={smallCarousel} style={style_3} />
//         <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//           <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
//           <CommonPropertyOverview />
//         </div>
//         <div className="row">
//           <div className="col-xl-8">
//             <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//               <h4 className="mb-20">Overview</h4>
//               <p className="fs-20 lh-lg">
//                 Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.
//               </p>
//             </div>
//             <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//               <h4 className="mb-20">Property Features</h4>
//               <p className="fs-20 lh-lg">
//                 Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
//               </p>
//               <div className="accordion-style-two mt-45">
//                 <CommonPropertyFeatureList />
//               </div>
//             </div>
//             <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//               <CommonAmenities />
//             </div>
//             <div className="property-video-tour mb-50">
//               <CommonPropertyVideoTour />
//             </div>
//             <CommonPropertyFloorPlan style={false} />
//             <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
//               <CommonNearbyList />
//             </div>
//             <CommonSimilarProperty />
//             <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
//               <CommonProPertyScore />
//             </div>
//             <div className="property-location mb-50">
//               <CommonLocation />
//             </div>
//             <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
//               <div className="position-relative z-1">
//                 <div className="d-sm-flex justify-content-between align-items-center mb-10">
//                   <h4 className="m0 xs-pb-30">Reviews</h4>
//                   <NiceSelect
//                     className="nice-select"
//                     options={[
//                       { value: "01", text: "Newest" },
//                       { value: "02", text: "Best Seller" },
//                       { value: "03", text: "Best Match" },
//                     ]}
//                     defaultCurrent={0}
//                     onChange={(value) => setCategory(value)}
//                     name="category"
//                     placeholder=""
//                   />
//                 </div>
//                 <Review style={true} />
//               </div>
//             </div>
//             <div className="review-form bg-white shadow4 border-20 p-40">
//               <CommonReviewForm />
//             </div>
//           </div>
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetailsOneArea;

// 20 jul 18.22 renaming to commonpropertyoverview:
"use client";
import { useState } from "react";

import NiceSelect from "@/ui/NiceSelect";
import MediaGallery from "./MediaGallery";
import Review from "@/components/inner-pages/agency/agency-details/Review";
import Sidebar from "./Sidebar";
import CommonBanner from "../listing-details-common/CommonBanner";
import CommonTripOverview from "../listing-details-common/CommonTripOverview";
import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
import CommonAmenities from "../listing-details-common/CommonAmenities";
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
import CommonNearbyList from "../listing-details-common/CommonNearbyList";
import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
import CommonLocation from "../listing-details-common/CommonLocation";
import CommonReviewForm from "../listing-details-common/CommonReviewForm";



interface ListingDetailsOneAreaProps {
  title: string;
  location: string;
  price: string;
  extras: string;
  style_3?: boolean;
  bigCarousel: { src: string }[]; // MediaGallery
  smallCarousel: { src: string }[]; // MediaGallery
  tripOverviewData: { id: number; icon: string; title: string }[]; // Add tripOverviewData prop
  primaryInfoTitle: string; // Add primaryInfoTitle prop
}

const ListingDetailsOneArea: React.FC<ListingDetailsOneAreaProps> = ({
  title,
  location,
  price,
  extras,
  style_3 = false,
  bigCarousel,
  smallCarousel,
  tripOverviewData, // Add tripOverviewData prop
  primaryInfoTitle, // Add primaryInfoTitle prop
}) => {
  const [category, setCategory] = useState<string>("1");
  const [listedIn, setListedIn] = useState<string>("1");

  return (
    <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
      <div className="container">
        <CommonBanner title={title} location={location} price={price} extras={extras} style_3={style_3} />
        <MediaGallery bigCarousel={bigCarousel} smallCarousel={smallCarousel} style={style_3} />
        <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
          <h4 className="sub-title-one mb-40 lg-mb-20">Trip Overview</h4>
          <CommonTripOverview primaryInfoTitle={primaryInfoTitle} tripOverviewData={tripOverviewData} /> {/* Pass tripOverviewData and primaryInfoTitle */}
        </div>
        <div className="row">
          <div className="col-xl-8">
            <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
              <h4 className="mb-20">Overview</h4>
              <p className="fs-20 lh-lg">
                Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.
              </p>
            </div>
            <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
              <h4 className="mb-20">Property Features</h4>
              <p className="fs-20 lh-lg">
                Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
              </p>
              <div className="accordion-style-two mt-45">
                <CommonPropertyFeatureList />
              </div>
            </div>
            <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
              <CommonAmenities />
            </div>
            <div className="property-video-tour mb-50">
              <CommonPropertyVideoTour />
            </div>
            <CommonPropertyFloorPlan style={false} />
            <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
              <CommonNearbyList />
            </div>
            <CommonSimilarProperty />
            <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
              <CommonProPertyScore />
            </div>
            <div className="property-location mb-50">
              <CommonLocation />
            </div>
            <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
              <div className="position-relative z-1">
                <div className="d-sm-flex justify-content-between align-items-center mb-10">
                  <h4 className="m0 xs-pb-30">Reviews</h4>
                  <NiceSelect
                    className="nice-select"
                    options={[
                      { value: "01", text: "Newest" },
                      { value: "02", text: "Best Seller" },
                      { value: "03", text: "Best Match" },
                    ]}
                    defaultCurrent={0}
                    onChange={setCategory}
                    name="category"
                    placeholder=""
                  />
                </div>
                <Review style={true} />
              </div>
            </div>
            <div className="review-form bg-white shadow4 border-20 p-40">
              <CommonReviewForm />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsOneArea;



// // 14.40
// // src/components/ListingDetails/listing-details-1/ListingDetailsOneArea.tsx
// "use client";
// import { useState } from "react";

// import NiceSelect from "@/ui/NiceSelect";
// import MediaGallery from "./MediaGallery";
// import Review from "@/components/inner-pages/agency/agency-details/Review";
// import Sidebar from "./Sidebar";
// import CommonBanner from "../listing-details-common/CommonBanner";
// import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview";
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
// import CommonAmenities from "../listing-details-common/CommonAmenities";
// import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
// import CommonNearbyList from "../listing-details-common/CommonNearbyList";
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
// import CommonLocation from "../listing-details-common/CommonLocation";
// import CommonReviewForm from "../listing-details-common/CommonReviewForm";

// interface ListingDetailsOneAreaProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[]; // MediaGallery
//   smallCarousel: { src: string }[]; // MediaGallery
//   propertyOverviewData: { id: number; icon: string; title: string }[]; // Add propertyOverviewData prop
//   primaryInfoTitle: string; //
// }

// const ListingDetailsOneArea: React.FC<ListingDetailsOneAreaProps> = ({
//   title,
//   location,
//   price,
//   extras,
//   style_3 = false,
//   bigCarousel,
//   smallCarousel,
//   propertyOverviewData, // Add propertyOverviewData prop
//   primaryInfoTitle, // Add propertyOverviewTitle prop
// }) => {
//   const [category, setCategory] = useState<string>("1");
//   const [listedIn, setListedIn] = useState<string>("1");

//   return (
//     <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//       <div className="container">
//         <CommonBanner title={title} location={location} price={price} extras={extras} style_3={style_3} />
//         <MediaGallery bigCarousel={bigCarousel} smallCarousel={smallCarousel} style={style_3} />
//         <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//           {/* <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4> */}
//           <CommonPropertyOverview title={primaryInfoTitle} propertyOverviewData={propertyOverviewData} /> {/* Pass propertyOverviewData and propertyOverviewTitle */}

//           {/* <CommonPropertyOverview propertyOverviewData={propertyOverviewData} /> Pass propertyOverviewData */}
//         </div>
//         <div className="row">
//           <div className="col-xl-8">
//             <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//               <h4 className="mb-20">Primary Description Title</h4>
//               <p className="fs-20 lh-lg">
//                 Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.
//               </p>
//             </div>
//             <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//               <h4 className="mb-20">Property Features</h4>
//               <p className="fs-20 lh-lg">
//                 Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
//               </p>
//               <div className="accordion-style-two mt-45">
//                 <CommonPropertyFeatureList />
//               </div>
//             </div>
//             <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//               <CommonAmenities />
//             </div>
//             <div className="property-video-tour mb-50">
//               <CommonPropertyVideoTour />
//             </div>
//             <CommonPropertyFloorPlan style={false} />
//             <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
//               <CommonNearbyList />
//             </div>
//             <CommonSimilarProperty />
//             <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
//               <CommonProPertyScore />
//             </div>
//             <div className="property-location mb-50">
//               <CommonLocation />
//             </div>
//             <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
//               <div className="position-relative z-1">
//                 <div className="d-sm-flex justify-content-between align-items-center mb-10">
//                   <h4 className="m0 xs-pb-30">Reviews</h4>
//                   <NiceSelect
//                     className="nice-select"
//                     options={[
//                       { value: "01", text: "Newest" },
//                       { value: "02", text: "Best Seller" },
//                       { value: "03", text: "Best Match" },
//                     ]}
//                     defaultCurrent={0}
//                     onChange={setCategory}
//                     name="category"
//                     placeholder=""
//                   />
//                 </div>
//                 <Review style={true} />
//               </div>
//             </div>
//             <div className="review-form bg-white shadow4 border-20 p-40">
//               <CommonReviewForm />
//             </div>
//           </div>
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetailsOneArea;


// 13.58 20 jul take paths and urls update
// "use client";
// import { useState } from "react";

// import NiceSelect from "@/ui/NiceSelect";
// import MediaGallery from "./MediaGallery";
// import Review from "@/components/inner-pages/agency/agency-details/Review";
// import Sidebar from "./Sidebar";
// import CommonBanner from "../listing-details-common/CommonBanner";
// import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview";
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
// import CommonAmenities from "../listing-details-common/CommonAmenities";
// import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
// import CommonNearbyList from "../listing-details-common/CommonNearbyList";
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
// import CommonLocation from "../listing-details-common/CommonLocation";
// import CommonReviewForm from "../listing-details-common/CommonReviewForm";

// interface ListingDetailsOneAreaProps {
//   title: string;
//   location: string;
//   price: string;
//   extras: string;
//   style_3?: boolean;
//   bigCarousel: { src: string }[];
//   smallCarousel: { src: string }[];
// }

// const ListingDetailsOneArea: React.FC<ListingDetailsOneAreaProps> = ({
//   title,
//   location,
//   price,
//   extras,
//   style_3 = false,
//   bigCarousel,
//   smallCarousel,
// }) => {
//   const [category, setCategory] = useState<string>("1");
//   const [listedIn, setListedIn] = useState<string>("1");

//   return (
//     <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
//       <div className="container">
//         <CommonBanner title={title} location={location} price={price} extras={extras} style_3={style_3} />
//         <MediaGallery bigCarousel={bigCarousel} smallCarousel={smallCarousel} style={style_3} />
//         <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
//           <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
//           <CommonPropertyOverview />
//         </div>
//         <div className="row">
//           <div className="col-xl-8">
//             <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//               <h4 className="mb-20">Overview</h4>
//               <p className="fs-20 lh-lg">
//                 Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.
//               </p>
//             </div>
//             <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
//               <h4 className="mb-20">Property Features</h4>
//               <p className="fs-20 lh-lg">
//                 Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
//               </p>
//               <div className="accordion-style-two mt-45">
//                 <CommonPropertyFeatureList />
//               </div>
//             </div>
//             <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
//               <CommonAmenities />
//             </div>
//             <div className="property-video-tour mb-50">
//               <CommonPropertyVideoTour />
//             </div>
//             <CommonPropertyFloorPlan style={false} />
//             <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
//               <CommonNearbyList />
//             </div>
//             <CommonSimilarProperty />
//             <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
//               <CommonProPertyScore />
//             </div>
//             <div className="property-location mb-50">
//               <CommonLocation />
//             </div>
//             <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
//               <div className="position-relative z-1">
//                 <div className="d-sm-flex justify-content-between align-items-center mb-10">
//                   <h4 className="m0 xs-pb-30">Reviews</h4>
//                   <NiceSelect
//                     className="nice-select"
//                     options={[
//                       { value: "01", text: "Newest" },
//                       { value: "02", text: "Best Seller" },
//                       { value: "03", text: "Best Match" },
//                     ]}
//                     defaultCurrent={0}
//                     onChange={setCategory}
//                     name="category"
//                     placeholder=""
//                   />
//                 </div>
//                 <Review style={true} />
//               </div>
//             </div>
//             <div className="review-form bg-white shadow4 border-20 p-40">
//               <CommonReviewForm />
//             </div>
//           </div>
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetailsOneArea;
