// 17 aug 21.26 optimize image loading:
"use client";
import Image from "next/image";
import { useState } from "react";

interface MediaGalleryProps {
  bigCarousel?: { src: string }[];
  smallCarousel?: { src: string }[];
  style?: boolean;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  bigCarousel = [],
  smallCarousel = [],
  style = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
      <div id="media_slider" className="carousel slide row" data-bs-ride="carousel">
        <div className="col-lg-10">
          <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
            <div className="position-relative z-1 overflow-hidden border-20">
              <div className="carousel-inner">
                {bigCarousel.length > 0 ? (
                  bigCarousel.map((carousel, index) => (
                    <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                      <Image
                        src={carousel.src}
                        alt=""
                        className="w-100 border-20"
                        width={800}
                        height={450}
                        sizes="(max-width: 1024px) 100vw, 800px"
                        priority={index === 0} // Load the first image with higher priority
                      />
                    </div>
                  ))
                ) : (
                  <div className="carousel-item active">
                    <Image
                      src="/default-image.jpg"
                      alt="Default Image"
                      className="w-100 border-20"
                      width={800}
                      height={450}
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                  </div>
                )}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#media_slider"
                data-bs-slide="prev"
                onClick={() => handleIndicatorClick((activeIndex - 1 + bigCarousel.length) % bigCarousel.length)}
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

        <div className="col-lg-2">
          <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
            {smallCarousel.length > 0 ? (
              smallCarousel.map((carousel, i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#media_slider"
                  data-bs-slide-to={`${i}`}
                  className={`${i === activeIndex ? "active" : ""}`}
                  aria-current="true"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => handleIndicatorClick(i)}
                >
                  <Image
                    src={carousel.src}
                    alt=""
                    className="w-100 border-10"
                    width={160}
                    height={90}
                    sizes="(max-width: 1024px) 100vw, 160px"
                    loading="lazy"
                  />
                </button>
              ))
            ) : (
              <button type="button" className="active">
                <Image
                  src="/default-thumbnail.jpg"
                  alt="Default Thumbnail"
                  className="w-100 border-10"
                  width={160}
                  height={90}
                  sizes="(max-width: 1024px) 100vw, 160px"
                  loading="lazy"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;

// // 26 jul 24 20.19 chatgpt update
// "use client";
// import Image from "next/image";
// // import Fancybox from "@/components/common/Fancybox";
// import { useState } from "react";

// interface MediaGalleryProps {
//   bigCarousel?: { src: string }[];
//   smallCarousel?: { src: string }[];
//   style?: boolean;
// }

// const MediaGallery: React.FC<MediaGalleryProps> = ({
//   bigCarousel = [],
//   smallCarousel = [],
//   style = false,
// }) => {
//   const largeThumb: string[] = ["1", "2", "3"];
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleIndicatorClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
//       <div id="media_slider" className="carousel slide row" data-bs-ride="carousel">
//         <div className="col-lg-10">
//           <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
//             <div className="position-relative z-1 overflow-hidden border-20">
//               {/* <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
//                 See all 37 Photos
//                 <Fancybox options={{ Carousel: { infinite: true } }}>
//                   {largeThumb.map((thumb: any, index: any) => (
//                     <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
//                   ))}
//                 </Fancybox>
//               </div> */}

//               <div className="carousel-inner">
//                 {bigCarousel.length > 0 ? (
//                   bigCarousel.map((carousel, index) => (
//                     <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
//                       <Image src={carousel.src} alt="" className="w-100 border-20" width={800} height={450} />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="carousel-item active">
//                     <Image src="/default-image.jpg" alt="Default Image" className="w-100 border-20" width={800} height={450} />
//                   </div>
//                 )}
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#media_slider"
//                 data-bs-slide="prev"
//                 onClick={() => handleIndicatorClick((activeIndex - 1 + bigCarousel.length) % bigCarousel.length)}
//               >
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#media_slider"
//                 data-bs-slide="next"
//                 onClick={() => handleIndicatorClick((activeIndex + 1) % bigCarousel.length)}
//               >
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-2">
//           <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
//             {smallCarousel.length > 0 ? (
//               smallCarousel.map((carousel, i) => (
//                 <button
//                   key={i}
//                   type="button"
//                   data-bs-target="#media_slider"
//                   data-bs-slide-to={`${i}`}
//                   className={`${i === activeIndex ? "active" : ""}`}
//                   aria-current="true"
//                   aria-label={`Slide ${i + 1}`}
//                   onClick={() => handleIndicatorClick(i)}
//                 >
//                   <Image src={carousel.src} alt="" className="w-100 border-10" width={160} height={90} />
//                 </button>
//               ))
//             ) : (
//               <button type="button" className="active">
//                 <Image src="/default-thumbnail.jpg" alt="Default Thumbnail" className="w-100 border-10" width={160} height={90} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;
