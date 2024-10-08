// import Link from "next/link"

// const CommonBanner = ({ style_3 }: any) => {
//    return (
//       <div className="row">
//          <div className="col-lg-6">
//             <h3 className="property-title">Kenya Dream Safari</h3>
//             <div className="d-flex flex-wrap mt-10">
//                <div className={`list-type text-uppercase mt-15 me-3 ${style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"}`}>Kenya</div>
//                <div className="address mt-15"><i className="bi bi-geo-alt"></i> Parks: Mara / Amboseli 
//                </div>
//             </div>
//          </div>
//          <div className="col-lg-6 text-lg-end">
//             <div className="d-inline-block md-mt-40">
//                <div className="price color-dark fw-500">Price: $3,500 p.p.</div>
//                <div className="est-price fs-20 mt-25 mb-35 md-mb-30">Est. extras: <span
//                   className="fw-500 color-dark">$400*</span> visa, drinks, tips, souvenirs</div>
//                <ul className="style-none d-flex align-items-center action-btns">
//                   <li className="me-auto fw-500 color-dark"><i className="fa-sharp fa-regular fa-share-nodes me-2"></i>
//                      Share</li>
//                   <li><Link href="#"
//                      className={`d-flex align-items-center justify-content-center tran3s ${style_3 ? "" : "rounded-circle"}`}><i
//                         className="fa-light fa-heart"></i></Link></li>
//                   <li><Link href="#"
//                      className={`d-flex align-items-center justify-content-center tran3s ${style_3 ? "" : "rounded-circle"}`}><i
//                         className="fa-light fa-bookmark"></i></Link></li>
//                   <li><Link href="#"
//                      className={`d-flex align-items-center justify-content-center tran3s ${style_3 ? "" : "rounded-circle"}`}><i
//                         className="fa-light fa-circle-plus"></i></Link></li>
//                </ul>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default CommonBanner




//chatgpt (without giving common banner code? change this if styling is wrong)
// src/components/ListingDetails/listing-details-common/CommonBanner.tsx
import Link from "next/link";

interface CommonBannerProps {
  title: string;
  location: string;
  price: string;
  extras: string;
  style_3?: boolean;
}

const CommonBanner: React.FC<CommonBannerProps> = ({
  title,
  location,
  price,
  extras,
  style_3,
}) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h3 className="property-title">{title}</h3>
        <div className="d-flex flex-wrap mt-10">
          <div className={`list-type text-uppercase mt-15 me-3 ${style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"}`}>{location}</div>
          <div className="address mt-15">
            <i className="bi bi-geo-alt"></i> Parks: Mara / Amboseli
          </div>
        </div>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="d-inline-block md-mt-40">
          <div className="price color-dark fw-500">{price}</div>
          <div className="est-price fs-20 mt-25 mb-35 md-mb-30">{extras}</div>
          <ul className="style-none d-flex align-items-center action-btns">
            <li className="me-auto fw-500 color-dark">
              <i className="fa-sharp fa-regular fa-share-nodes me-2"></i> Share
            </li>
            <li>
              <Link href="#" className={`d-flex align-items-center justify-content-center tran3s ${style_3 ? "" : "rounded-circle"}`}>
                <i className="fa-light fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link href="#" className={`d-flex align-items-center justify-content-center tran3s ${style_3 ? "" : "rounded-circle"}`}>
                <i className="fa-light fa-bookmark"></i>
              </Link>
            </li>
            <li>
              <Link href="#" className={`d-flex align-items-center justify-content-center tran3s ${style_3 ? "" : "rounded-circle"}`}>
                <i className="fa-light fa-circle-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
