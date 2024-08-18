// 18 aug 21.06
// src/hooks/useVideoHeaderSticky.ts
// "use client"
// import { useState, useEffect } from 'react';

// export default function useVideoHeaderSticky() {
//   const [sticky, setSticky] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 150) {
//       setSticky(true);
//     } else {
//       setSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return sticky;
// }

'use client';
import { useEffect, useState } from "react";

export function useSticky() {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { sticky };
}