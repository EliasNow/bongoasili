// 18 aug 18.32 simplified useSticky hook
// "use client"
// import { useEffect, useState } from "react";

// const useSticky = () => {
//   const [sticky, setSticky] = useState(false);

//   const handleScroll = () => {
//     setSticky(window.scrollY > 200);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return sticky;
// };

// export default useSticky;

// og version
'use client'
import { useEffect, useState } from "react";

interface StickyState {
   sticky: boolean;
}

const UseSticky = (): StickyState => {
   const [sticky, setSticky] = useState(false);

   const stickyHeader = (): void => {
      if (window.scrollY > 200) {
         setSticky(true);
      } else {
         setSticky(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", stickyHeader);

      return (): void => {
         window.removeEventListener("scroll", stickyHeader);
      };
   }, []);
   return {
      sticky,
   };
}

export default UseSticky
