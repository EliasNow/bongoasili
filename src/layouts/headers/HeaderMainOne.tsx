
// // adapted from src/layouts/headers/HeaderOne.tsx
// "use client"
// import NavMenu from "./Menu/NavMenu"
// import Link from "next/link"
// import Image from "next/image"
// import { useState } from "react"
// import UseSticky from "@/hooks/UseSticky"
// import LoginModal from "@/modals/LoginModal"

// // import logo_1 from "@/assets/images/logo/logo_01.svg";
// // import Bongo_Asili from "@/assets/images/logo/Bongo_Asili.svg"
// // import Bongo_Asili from "@/assets/images/logo/Bongo Asili EASpec_edited_crop_resize.svg"
// import Bongo_Asili from "@/assets/images/logo/Bongo_Asili-removebg-preview.png"

// const HeaderMainOne = ({ style }: any) => {
//    const { sticky } = UseSticky();

//    return (
//       <>
//          <header className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${sticky ? "fixed" : ""}`}>
//             {!style && <div className="alert-wrapper text-center">
//                <p className="fs-16 m0 text-white"> Site Under Construction - Get in touch for more info</p>
//                {/* <p className="fs-16 m0 text-white"><Link href="/listing_01" className="fw-500">Last Minute</Link> Safaris. Offer ends — <span>This Sunday</span></p> */}
//             </div>}
//             <div className="inner-content gap-one">
//                <div className="top-header position-relative">
//                   <div className="d-flex align-items-center justify-content-between">
//                      <div className="logo order-lg-0">
//                         <Link href="/" className="d-flex align-items-center">
//                            <Image src={Bongo_Asili} alt="Bongo Asili" width={130} height={82} />
//                         </Link>
//                      </div>
//                      <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
//                         <ul className="d-flex align-items-center style-none">
//                            {/* <li>
//                               <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one"><i className="fa-regular fa-lock"></i> <span>Login</span></Link>
//                            </li> */}
//                            <li className="d-none d-md-inline-block ms-3">
//                               <Link href="/trips/tripoverview/" className="btn-two" target="_blank"><span>Find Trips</span> <i className="fa-thin fa-arrow-up-right"></i></Link>
//                            </li>
//                         </ul>
//                      </div>
//                      <nav className="navbar navbar-expand-lg p0 order-lg-2">
//                         <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
//                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
//                            aria-label="Toggle navigation">
//                            <span></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                            {/* <NavMenu /> */}
//                         </div>
//                      </nav>
//                   </div>
//                </div>
//             </div>
//          </header>
//          {/* <LoginModal /> */}
//       </>
//    ) 
// }

// export default HeaderMainOne


// 17 aug 21.09 refactored to increase LCP loading speed of logo
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import UseSticky from "@/hooks/UseSticky";
// import Bongo_Asili from "@/assets/images/logo/Bongo_Asili-removebg-preview.png";

// const HeaderMainOne = ({ style }: any) => {
//   const { sticky } = UseSticky();

//   return (
//     <>
//       <header className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${sticky ? "fixed" : ""}`}>
//         {!style && (
//           <div className="alert-wrapper text-center">
//             <p className="fs-16 m0 text-white"> Site Under Construction - Get in touch for more info</p>
//           </div>
//         )}
//         <div className="inner-content gap-one">
//           <div className="top-header position-relative">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="logo order-lg-0">
//                 <Link href="/" className="d-flex align-items-center">
//                   <Image
//                     src={Bongo_Asili}
//                     alt="Bongo Asili"
//                     width={130}
//                     height={82}
//                     priority={true}  // Ensures this image loads quickly
//                   />
//                 </Link>
//               </div>
//               <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
//                 <ul className="d-flex align-items-center style-none">
//                   <li className="d-none d-md-inline-block ms-3">
//                     <Link href="/trips/tripoverview/" className="btn-two" target="_blank">
//                       <span>Find Trips</span> <i className="fa-thin fa-arrow-up-right"></i>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <nav className="navbar navbar-expand-lg p0 order-lg-2">
//                 <button
//                   className="navbar-toggler d-block d-lg-none"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarNav"
//                   aria-controls="navbarNav"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                   {/* <NavMenu /> */}
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default HeaderMainOne;

// 01.01 18 aug we use <picture> and have old png as fallback
import React from "react";
import Link from "next/link";
import Image from "next/image";
import UseSticky from "@/hooks/UseSticky";

// Import the AVIF and PNG images
import Bongo_Asili_AVIF from "@/assets/images/logo/Bongo_Asili-removebg-preview.avif";
import Bongo_Asili_PNG from "@/assets/images/logo/Bongo_Asili-removebg-preview.png";

const HeaderMainOne = ({ style }: any) => {
  const { sticky } = UseSticky();

  return (
    <>
      <header className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${sticky ? "fixed" : ""}`}>
        {!style && (
          <div className="alert-wrapper text-center">
            <p className="fs-16 m0 text-white"> Site Under Construction - Get in touch for more info</p>
          </div>
        )}
        <div className="inner-content gap-one">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  {/* Use the <picture> element for AVIF with PNG fallback */}
                  <picture>
                    <source srcSet={Bongo_Asili_AVIF.src} type="image/avif" />
                    <img
                      src={Bongo_Asili_PNG.src} // Fallback to PNG
                      alt="Bongo Asili"
                      width={130}
                      height={82}
                      style={{ display: "block" }} // Ensures image is displayed properly
                      loading="lazy" // Ensures this image loads quickly
                    />
                  </picture>
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li className="d-none d-md-inline-block ms-3">
                    <Link href="/trips/tripoverview/" className="btn-two" target="_blank">
                      <span>Find Trips</span> <i className="fa-thin fa-arrow-up-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* <NavMenu /> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMainOne;
