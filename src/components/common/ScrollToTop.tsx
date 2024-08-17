// 28 jul 17.21 fix deprecation
"use client"
import UseSticky from "@/hooks/UseSticky";
import { useState, useEffect, useCallback } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   const [showScroll, setShowScroll] = useState(false);

   const checkScrollTop = useCallback(() => {
      if (!showScroll && window.scrollY > 400) {
         setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
         setShowScroll(false);
      }
   }, [showScroll]);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, [checkScrollTop]);

   return (
      <div onClick={scrollTop} className={`scroll-top ${sticky ? "active" : ""} ${showScroll ? "show" : ""}`}>
         <i className="bi bi-arrow-up-short"></i>
      </div>
   );
};

export default ScrollToTop;


// "use client"
// import UseSticky from "@/hooks/UseSticky";
// import { useState, useEffect } from "react";

// const ScrollToTop = () => {
//    const { sticky }: { sticky: boolean } = UseSticky();

//    const [showScroll, setShowScroll] = useState(false);

//    const checkScrollTop = () => {
//       if (!showScroll && window.pageYOffset > 400) {
//          setShowScroll(true);
//       } else if (showScroll && window.pageYOffset <= 400) {
//          setShowScroll(false);
//       }
//    };

//    const scrollTop = () => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//    };

//    // useEffect(() => {
//    //    window.addEventListener("scroll", checkScrollTop);
//    //    return () => window.removeEventListener("scroll", checkScrollTop);
//    // }, []);
//    useEffect(() => {
//       const checkScrollTop = () => {
//          if (!showScroll && window.pageYOffset > 400) {
//             setShowScroll(true);
//          } else if (showScroll && window.pageYOffset <= 400) {
//             setShowScroll(false);
//          }
//       };

//       window.addEventListener("scroll", checkScrollTop);
//       return () => window.removeEventListener("scroll", checkScrollTop);
//    }, [checkScrollTop]);

//    return (
//       <>
//          <div onClick={scrollTop} className={`scroll-top ${sticky ? "active" : ""}`}>
//             <i className="bi bi-arrow-up-short"></i>
//          </div>
//       </>
//    )
// }

// export default ScrollToTop
