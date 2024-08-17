// 17 aug 21.33 added React.memo because price div takes 14,000 ms to load
import React from 'react';
import Link from 'next/link';

interface CommonTripBannerProps {
  title: string;
  location: string;
  price: string;
  extras: string;
  parks: string;
  style_3?: boolean;
}

const CommonTripBanner: React.FC<CommonTripBannerProps> = React.memo(({
  title,
  location,
  price,
  extras,
  parks,
  style_3,
}) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h3 className="property-title">{title}</h3>
        <div className="d-flex flex-wrap mt-10">
          <div className={`list-type text-uppercase mt-15 me-3 ${style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"}`}>{location}</div>
          <div className="address mt-15">
            <i className="bi bi-geo-alt"></i> Parks: {parks}
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
});

export default CommonTripBanner;
