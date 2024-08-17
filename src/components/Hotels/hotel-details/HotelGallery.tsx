// 00.20 18 aug introducing avif for speed
"use client";
import Image from "next/image";
import { useState } from "react";

interface HotelGalleryProps {
  bigCarousel?: { src: string; avif?: string }[];
  smallCarousel?: { src: string; avif?: string }[];
}

const HotelGallery: React.FC<HotelGalleryProps> = ({
  bigCarousel = [
    { src: "/images/listing/img_52.jpg", avif: "/images/listing/img_52.avif" },
    { src: "/images/listing/img_53.jpg", avif: "/images/listing/img_53.avif" },
    { src: "/images/listing/img_54.jpg", avif: "/images/listing/img_54.avif" },
    { src: "/images/listing/img_55.jpg", avif: "/images/listing/img_55.avif" },
  ],
  smallCarousel = [
    { src: "/images/listing/img_43_s.jpg", avif: "/images/listing/img_43_s.avif" },
    { src: "/images/listing/img_44_s.jpg", avif: "/images/listing/img_44_s.avif" },
    { src: "/images/listing/img_45_s.jpg", avif: "/images/listing/img_45_s.avif" },
    { src: "/images/listing/img_46_s.jpg", avif: "/images/listing/img_46_s.avif" },
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="media-gallery bg-white shadow4 p-40 border-20 mt-80 lg-mt-50 mb-60">
      <div id="media_slider" className="carousel slide row style-two" data-bs-ride="carousel">
        <div className="col-12">
          <div className="position-relative z-1 overflow-hidden border-20">
            <div className="carousel-inner">
              {bigCarousel.map((carousel, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <picture>
                    <source srcSet={carousel.avif} type="image/avif" />
                    <Image
                      src={carousel.src}
                      alt=""
                      className="border-20 w-100"
                      width={800}
                      height={450}
                      priority={index === 0} // Prioritize the first image
                      loading={index === 0 ? "eager" : "lazy"} // Eager loading for the first image, lazy for others
                    />
                  </picture>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="position-relative mt-25 xs-mt-10">
            <div className="carousel-indicators d-flex justify-content-between justify-content-xl-start position-relative w-100 h-100">
              {smallCarousel.map((carousel, i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#media_slider"
                  data-bs-slide-to={i}
                  className={i === activeIndex ? "active" : ""}
                  aria-current="true"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => handleIndicatorClick(i)}
                >
                  <picture>
                    <source srcSet={carousel.avif} type="image/avif" />
                    <Image
                      src={carousel.src}
                      alt=""
                      className="border-10 w-100"
                      width={160}
                      height={90}
                      loading="lazy" // Lazy load thumbnails
                    />
                  </picture>
                </button>
              ))}
            </div>
            <div className="carousel-arrow d-none d-xl-flex">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#media_slider"
                data-bs-slide="prev"
                onClick={() =>
                  handleIndicatorClick((activeIndex - 1 + bigCarousel.length) % bigCarousel.length)
                }
              >
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#media_slider"
                data-bs-slide="next"
                onClick={() => handleIndicatorClick((activeIndex + 1) % bigCarousel.length)}
              >
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelGallery;


// // this works!!
// // adding back default images 
// "use client";
// import Image, { StaticImageData } from "next/image";
// // import Fancybox from "@/components/common/Fancybox";
// import { useState } from "react";

// // Import default images
// import bigCarousel_1 from "@/assets/images/listing/img_52.jpg";
// import bigCarousel_2 from "@/assets/images/listing/img_53.jpg";
// import bigCarousel_3 from "@/assets/images/listing/img_54.jpg";
// import bigCarousel_4 from "@/assets/images/listing/img_55.jpg";

// import smallCarousel_1 from "@/assets/images/listing/img_43_s.jpg";
// import smallCarousel_2 from "@/assets/images/listing/img_44_s.jpg";
// import smallCarousel_3 from "@/assets/images/listing/img_45_s.jpg";
// import smallCarousel_4 from "@/assets/images/listing/img_46_s.jpg";

// interface HotelGalleryProps {
//   bigCarousel?: { src: string }[];
//   smallCarousel?: { src: string }[];
// }

// const HotelGallery: React.FC<HotelGalleryProps> = ({
//   bigCarousel = [
//     { src: bigCarousel_1.src },
//     { src: bigCarousel_2.src },
//     { src: bigCarousel_3.src },
//     { src: bigCarousel_4.src },
//   ],
//   smallCarousel = [
//     { src: smallCarousel_1.src },
//     { src: smallCarousel_2.src },
//     { src: smallCarousel_3.src },
//     { src: smallCarousel_4.src },
//   ],
// }) => {
//   const largeThumb: string[] = ["1", "2", "3"];
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleIndicatorClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="media-gallery bg-white shadow4 p-40 border-20 mt-80 lg-mt-50 mb-60">
//       <div id="media_slider" className="carousel slide row style-two" data-bs-ride="carousel">
//         <div className="col-12">
//           <div className="position-relative z-1 overflow-hidden border-20">
//             {/* <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//               See all 37 Photos
//               <Fancybox options={{ Carousel: { infinite: true } }}>
//                 {largeThumb.map((thumb: any, index: any) => (
//                   <a key={index} className="d-block" data-fancybox="img3" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
//                 ))}
//               </Fancybox>
//             </div> */}
//             <div className="carousel-inner">
//               {bigCarousel.map((carousel, index) => (
//                 <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
//                   <Image src={carousel.src} alt="" className="border-20 w-100" width={800} height={450} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="position-relative mt-25 xs-mt-10">
//             <div className="carousel-indicators d-flex justify-content-between justify-content-xl-start position-relative w-100 h-100">
//               {smallCarousel.map((carousel, i) => (
//                 <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={i} className={i === activeIndex ? "active" : ""} aria-current="true" aria-label={`Slide ${i + 1}`} onClick={() => handleIndicatorClick(i)}>
//                   <Image src={carousel.src} alt="" className="border-10 w-100" width={160} height={90} />
//                 </button>
//               ))}
//             </div>
//             {/* style={{ top: "calc(100% - 45px)", position: "relative" }} */}
//             <div className="carousel-arrow d-none d-xl-flex" > 
//               <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev" onClick={() => handleIndicatorClick((activeIndex - 1 + bigCarousel.length) % bigCarousel.length)}>
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next" onClick={() => handleIndicatorClick((activeIndex + 1) % bigCarousel.length)}>
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelGallery;
