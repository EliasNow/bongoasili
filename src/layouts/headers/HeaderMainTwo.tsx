// adapted from src/layouts/headers/HeaderMainOne.tsx 29 jul 24 14.06
"use client"
import Link from "next/link"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"

import Bongo_Asili from "@/assets/images/logo/Bongo_Asili-removebg-preview.png"

const HeaderMainTwo = ({ style }: any) => {
   const sticky = UseSticky();

   return (
      <>
         <header className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${sticky ? "fixed" : ""}`}>
            {/* {!style && <div className="alert-wrapper text-center">
               <p className="fs-16 m0 text-white"><Link href="/listing_01" className="fw-500">Last Minute</Link> Safaris. Offer ends — <span>This Sunday</span></p>
            </div>} */}
            <div className="inner-content gap-one">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="logo order-lg-0">
                        <Link href="/" className="d-flex align-items-center">
                           <Image src={Bongo_Asili} alt="Bongo Asili" width={130} height={82} />
                        </Link>
                     </div>
                     <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           {/* <li>
                              <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one"><i className="fa-regular fa-lock"></i> <span>Login</span></Link>
                           </li> */}
                           {/* <li className="d-none d-md-inline-block ms-3">
                              <Link href="/trips/tripoverview/" className="btn-two" target="_blank"><span>Find Trips</span> <i className="fa-thin fa-arrow-up-right"></i></Link>
                           </li> */}
                        </ul>
                     </div>
                     <nav className="navbar navbar-expand-lg p0 order-lg-2">
                        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                           aria-label="Toggle navigation">
                           <span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}

export default HeaderMainTwo
