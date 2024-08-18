// 18 aug 21.06
// src/components/headers/VideoHeader.tsx

// import React from 'react';
// import Link from 'next/link';
// import useVideoHeaderSticky from '@/hooks/useVideoHeaderSticky';
// import '@/assets/scss/_videoHeader.scss'; //

// const VideoHeader = () => {
//   const sticky = useVideoHeaderSticky();

//   return (
//     <header className={`video-header ${sticky ? 'sticky' : ''}`}>
//       <div className="container">
//         <div className="logo">
//           <Link href="/">
//             <a>Video Site</a>
//           </Link>
//         </div>
//         <nav className="navigation">
//           <ul>
//             <li>
//               <Link href="/about">
//                 <a>About</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact">
//                 <a>Contact</a>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default VideoHeader;

// 21.23 use
// "use client"
// import React from "react";
// import { useSticky } from "react-use-sticky";
// import Link from "next/link";
// import Image from "next/image";

// import Bongo_Asili_AVIF from "@/assets/images/logo/Bongo_Asili-removebg-preview.avif";
// import Bongo_Asili_PNG from "@/assets/images/logo/Bongo_Asili-removebg-preview.png";

// export function VideoHeader({ style }: any) {
//   const [headerRef, sticky] = useSticky<HTMLDivElement>();
//   const headerStyle = {
//     position: 'sticky',
//     top: 0,
//     background: sticky ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
//   };

//   return (
//     <div ref={headerRef} style={headerStyle}>
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
//                   <picture>
//                     <source srcSet={Bongo_Asili_AVIF.src} type="image/avif" />
//                     <img
//                       src={Bongo_Asili_PNG.src}
//                       alt="Bongo Asili"
//                       width={130}
//                       height={82}
//                       style={{ display: "block" }}
//                       loading="lazy"
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
//     </div>
//   );
// }

"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSticky } from 'react-use-sticky';

// Import the AVIF and PNG images
import Bongo_Asili_AVIF from '@/assets/images/logo/Bongo_Asili-removebg-preview.avif';
import Bongo_Asili_PNG from '@/assets/images/logo/Bongo_Asili-removebg-preview.png';

export function VideoHeader({ style }: any) {
  const [headerBarRef, sticky] = useSticky<HTMLDivElement>();
  
  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    background: sticky ? 'white' : 'transparent',
  };

  return (
    <header ref={headerBarRef} className={`theme-main-menu menu-overlay menu-style-one sticky-menu`} style={headerStyle}>
      {!style && (
        <div className="alert-wrapper text-center">
          <p className="fs-16 m0 text-white">Site Under Construction - Get in touch for more info</p>
        </div>
      )}
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-flex align-items-center">
                <picture>
                  <source srcSet={Bongo_Asili_AVIF.src} type="image/avif" />
                  <img
                    src={Bongo_Asili_PNG.src}
                    alt="Bongo Asili"
                    width={130}
                    height={82}
                    style={{ display: 'block' }}
                    loading="lazy"
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
  );
}