// // 01.01 18 aug we use <picture> and have old png as fallback
// import React from "react";
// import Link from "next/link";
// import useSticky from "@/hooks/UseSticky";

// // Import the AVIF and PNG images
// import Bongo_Asili_AVIF from "@/assets/images/logo/Bongo_Asili-removebg-preview.avif";
// import Bongo_Asili_mobile_AVIF from "@/assets/images/logo/Bongo_Asili-130.avif";
// import Bongo_Asili_PNG from "@/assets/images/logo/Bongo_Asili-removebg-preview.png";
// import Bongo_Asili_mobile_PNG from "@/assets/images/logo/Bongo_Asili-130.png";

// const HeaderMainOne = ({ style }: any) => {
//   const sticky = useSticky();  

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
//                   {/* Use the <picture> element for AVIF with PNG fallback */}
//                   <picture>
//                     <source srcSet={Bongo_Asili_AVIF.src} type="image/avif" />
//                     <img
//                       src={Bongo_Asili_PNG.src} // Fallback to PNG
//                       alt="Bongo Asili"
//                       width={130}
//                       height={82}
//                       style={{ display: "block" }} // Ensures image is displayed properly
//                     />
//                   </picture>
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

// 18 aug 22.49 add mobile logo in avif and png
import React from "react";
import Link from "next/link";
import useSticky from "@/hooks/UseSticky";

// Import the AVIF and PNG images
import Bongo_Asili_AVIF from "@/assets/images/logo/Bongo_Asili-removebg-preview.avif";
import Bongo_Asili_mobile_AVIF from "@/assets/images/logo/Bongo_Asili-130.avif";
import Bongo_Asili_PNG from "@/assets/images/logo/Bongo_Asili-removebg-preview.png";
import Bongo_Asili_mobile_PNG from "@/assets/images/logo/Bongo_Asili-130.png";

const HeaderMainOne = ({ style }: any) => {
  const sticky = useSticky();

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
                  <picture>
                    {/* Use the mobile AVIF version for screens smaller than 640px */}
                    <source srcSet={Bongo_Asili_mobile_AVIF.src} media="(max-width: 640px)" type="image/avif" />
                    {/* Use the mobile PNG version for screens smaller than 640px */}
                    <source srcSet={Bongo_Asili_mobile_PNG.src} media="(max-width: 640px)" type="image/png" />
                    {/* Use the default AVIF image for larger screens */}
                    <source srcSet={Bongo_Asili_AVIF.src} type="image/avif" />
                    {/* Fallback to PNG if AVIF isn't supported */}
                    <img
                      src={Bongo_Asili_PNG.src}
                      alt="Bongo Asili"
                      width={130}
                      height={82}
                      style={{ display: "block" }}
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