import Image, { StaticImageData } from "next/image"
import Fancybox from "@/components/common/Fancybox"
import Link from "next/link"

// import offcanvasLogo from "@/assets/images/logo/logo_02.svg"
import logo_1 from "@/assets/images/logo/Bongo Asili EASpec_edited_crop_resize.svg";

import offcanvasThumb_1 from "@/assets/images/listing/img_69.jpg"
import offcanvasThumb_2 from "@/assets/images/listing/img_70.jpg"
import offcanvasThumb_3 from "@/assets/images/listing/img_71.jpg"
import offcanvasThumb_4 from "@/assets/images/listing/img_72.jpg"

interface DataType {
   id: number;
   tag: string;
   thumb: StaticImageData;
   carousel_thumb: string[];
   price: number;
   sub?: JSX.Element;
   address: string;
}[];

const offcanvas_data: DataType[] = [
   {
      id: 1,
      tag: "Kenya",
      thumb: offcanvasThumb_1,
      carousel_thumb: ["1", "2", "3"],
      price: 2210,
      sub: (<> <sub>p.p.</sub></>),
      address: "excluding flights",
   },
   {
      id: 2,
      tag: "Tanzania",
      thumb: offcanvasThumb_2,
      carousel_thumb: ["1", "2", "3"],
      price: 2210,
      sub: (<> <sub>p.p.</sub></>),
      address: "excluding international flights",
   },
   {
      id: 3,
      tag: "Kenya Tanzania",
      thumb: offcanvasThumb_3,
      carousel_thumb: ["1", "2", "3"],
      price: 8934,
      sub: (<> <sub>p.p.</sub></>),
      address: "includes: balloon safari & beach holiday",
   },
   {
      id: 4,
      tag: "Namibia",
      thumb: offcanvasThumb_4,
      carousel_thumb: ["1", "2", "3"],
      price: 5500,
      sub: (<> <sub>p.p.</sub></>),
      address: "includes local flights",
   },
]

const Offcanvas = ({ offCanvas, setOffCanvas }: any) => {
   return (
      <>
         <div className={`offcanvas offcanvas-end sidebar-nav ${offCanvas ? "show" : ""}`} id="sideNav">
            <div className="offcanvas-header">
               <div className="logo order-lg-0">
                  <Link href="/" className="d-flex align-items-center">
                     <Image src={logo_1} alt="" />
                  </Link>
               </div>
               <button onClick={() => setOffCanvas(false)} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="wrapper mt-60">
               <div className="d-flex flex-column h-100">
                  <div className="property-block">
                     <h4 className="title pb-25">Featured Safaris </h4>
                     <div className="row">
                        {offcanvas_data.map((item) => (
                           <div key={item.id} className="col-12">
                              <div className="listing-card-one shadow-none style-two mb-40">
                                 <div className="img-gallery">
                                    <div className="position-relative overflow-hidden">
                                       <div className="tag bg-white text-dark fw-500">{item.tag}</div>
                                       <Image src={item.thumb} className="w-100" alt="..." />

                                       <div className="img-slider-btn">
                                          03 <i className="fa-regular fa-image"></i>
                                          <Fancybox
                                             options={{
                                                Carousel: {
                                                   infinite: true,
                                                },
                                             }}
                                          >
                                             {item.carousel_thumb.map((thumb: any, index: any) => (
                                                <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                                             ))}
                                          </Fancybox>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="property-info d-flex justify-content-between align-items-end pt-30">
                                    <div>
                                       <strong className="price fw-500 color-dark fs-3">${item.price}{item.sub}</strong>
                                       <div className="address pt-5 m0">{item.address}</div>
                                    </div>
                                    <Link href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></Link>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="address-block mt-50">
                     <h4 className="title pb-15">Our Address</h4>
                     <p>Chowrastar Mirpur- 1210, Sangu <br />River, Dhaka</p>
                     <p>Urgent issue? call us at <br /><Link href="tel:310.841.5500">310.841.5500</Link></p>
                  </div>
                  <ul
                     className="style-none d-flex flex-wrap w-100 justify-content-between align-items-center social-icon pt-25 mt-auto">
                     <li><Link href="#"><i className="fa-brands fa-whatsapp"></i></Link></li>
                     <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                     <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                     <li><Link href="#"><i className="fa-brands fa-viber"></i></Link></li>
                  </ul>
               </div>
            </div>
         </div>
         <div onClick={() => setOffCanvas(false)} className={`offcanvas-backdrop fade ${offCanvas ? "show" : ""}`}></div>
      </>
   )
}

export default Offcanvas

// //chatgpt make component dynamic by accepting props
// import Image, { StaticImageData } from "next/image"
// import Fancybox from "@/components/common/Fancybox"
// import Link from "next/link"
// import logo_1 from "@/assets/images/logo/Bongo Asili EASpec_edited_crop_resize.svg";
// import offcanvasThumb_1 from "@/assets/images/listing/img_69.jpg"
// import offcanvasThumb_2 from "@/assets/images/listing/img_70.jpg"
// import offcanvasThumb_3 from "@/assets/images/listing/img_71.jpg"
// import offcanvasThumb_4 from "@/assets/images/listing/img_72.jpg"

// interface Sub {
//   p: string;
// }

// interface OffcanvasData {
//   id: number;
//   tag: string;
//   thumb: string;
//   carousel_thumb: string[];
//   price: number;
//   sub?: string;
//   address: string;
// }

// interface OffcanvasProps {
//   offCanvas: boolean;
//   setOffCanvas: (state: boolean) => void;
//   data?: OffcanvasData[];
// }

// const Offcanvas: React.FC<OffcanvasProps> = ({ offCanvas, setOffCanvas, data = [] }) => {
//   return (
//     <>
//       <div className={`offcanvas offcanvas-end sidebar-nav ${offCanvas ? "show" : ""}`} id="sideNav">
//         <div className="offcanvas-header">
//           <div className="logo order-lg-0">
//             <Link href="/" className="d-flex align-items-center">
//               <Image src={logo_1} alt="" />
//             </Link>
//           </div>
//           <button onClick={() => setOffCanvas(false)} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>

//         <div className="wrapper mt-60">
//           <div className="d-flex flex-column h-100">
//             <div className="property-block">
//               <h4 className="title pb-25">Featured Safaris </h4>
//               <div className="row">
//                 {data.map((item) => (
//                   <div key={item.id} className="col-12">
//                     <div className="listing-card-one shadow-none style-two mb-40">
//                       <div className="img-gallery">
//                         <div className="position-relative overflow-hidden">
//                           <div className="tag bg-white text-dark fw-500">{item.tag}</div>
//                           <Image src={item.thumb} className="w-100" alt="..." />

//                           <div className="img-slider-btn">
//                             03 <i className="fa-regular fa-image"></i>
//                             <Fancybox
//                               options={{
//                                 Carousel: {
//                                   infinite: true,
//                                 },
//                               }}
//                             >
//                               {item.carousel_thumb.map((thumb, index) => (
//                                 <a key={index} className="d-block" data-fancybox="gallery2" href={thumb}></a>
//                               ))}
//                             </Fancybox>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="property-info d-flex justify-content-between align-items-end pt-30">
//                         <div>
//                           <strong className="price fw-500 color-dark fs-3">${item.price}<sub>{item.sub}</sub></strong>
//                           <div className="address pt-5 m0">{item.address}</div>
//                         </div>
//                         <Link href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="address-block mt-50">
//               <h4 className="title pb-15">Our Address</h4>
//               <p>Chowrastar Mirpur- 1210, Sangu <br />River, Dhaka</p>
//               <p>Urgent issue? call us at <br /><Link href="tel:310.841.5500">310.841.5500</Link></p>
//             </div>
//             <ul className="style-none d-flex flex-wrap w-100 justify-content-between align-items-center social-icon pt-25 mt-auto">
//               <li><Link href="#"><i className="fa-brands fa-whatsapp"></i></Link></li>
//               <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
//               <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
//               <li><Link href="#"><i className="fa-brands fa-viber"></i></Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div onClick={() => setOffCanvas(false)} className={`offcanvas-backdrop fade ${offCanvas ? "show" : ""}`}></div>
//     </>
//   )
// }

// export default Offcanvas;
