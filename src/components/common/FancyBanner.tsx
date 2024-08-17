"use client";
import Image from "next/image";
import Link from "next/link";
import titleShape from "@/assets/images/shape/title_shape_06.svg";

const FancyBanner = ({ style }: any) => {
  const bannerStyle = {
    background: "url('/assets/images/hotels/Manyara's_Secret/safari/ManyarasSecret_2020_0565.jpg') no-repeat center",
    backgroundSize: "cover !important",
    backgroundAttachment: "fixed !important",
  };

  return (
    <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50" style={bannerStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
              <h3 className="text-white m0">
                Start your <span>Journey{style ? "" : <Image src={titleShape} alt="" className="lazy-img" />}</span> With Us.
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-wrapper me-auto ms-auto me-lg-0">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" className={style ? "rounded-0" : ""} />
                <button className={style ? "rounded-0" : ""}>Get Started</button>
              </form>
              <div className="fs-16 mt-10 text-white">
                Already a member? <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Sign in.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBanner;

// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import titleShape from "@/assets/images/shape/title_shape_06.svg"

// const FancyBanner = ({ style }: any) => {
//    return (
//       <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
//          <div className="container">
//             <div className="row align-items-center">
//                <div className="col-lg-6">
//                   <div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
//                      <h3 className="text-white m0">Start your <span>Journey{style ? "" : <Image src={titleShape} alt="" className="lazy-img" />}</span> With Us.</h3>
//                   </div>
//                </div>
//                <div className="col-lg-6">
//                   <div className="form-wrapper me-auto ms-auto me-lg-0">
//                      <form onSubmit={(e) => e.preventDefault()}>
//                         <input type="email" placeholder="Email address" className={style ? "rounded-0" : ""} />
//                         <button className={style ? "rounded-0" : ""}>Get Started</button>
//                      </form>
//                      <div className="fs-16 mt-10 text-white">Already a member? <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Sign in.</Link></div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default FancyBanner
