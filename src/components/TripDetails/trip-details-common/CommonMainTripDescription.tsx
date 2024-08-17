// 15 aug 18.05 remove server-side sanitization (handled by AWS)
import React from "react";
import { sanitize } from "dompurify";
interface CommonMainTripDescriptionProps {
  title: string;
  description: string;
}

const CommonMainTripDescription: React.FC<CommonMainTripDescriptionProps> = ({ title, description }) => {
  const sanitizedDescription = sanitize(description);
  return (
    <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
      <h4 className="mb-20">{title}</h4>
      <div className="fs-20 lh-lg" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </div>
  );
};

export default CommonMainTripDescription;

// // 14 aug optimized for edge runtime:
// import React from "react";
// import DOMPurify from "dompurify";

// interface CommonMainTripDescriptionProps {
//   title: string;
//   description: string;
// }

// const CommonMainTripDescription: React.FC<CommonMainTripDescriptionProps> = ({ title, description }) => {
//   let sanitizedDescription = description;

//   if (typeof window === "undefined") {
//     // Server-side sanitization, avoiding jsdom in Edge environments
//     try {
//       // For Node.js environments (not Edge), you can still use jsdom
//       if (process.env.NODE_ENV !== 'production') {
//         const { JSDOM } = require("jsdom");
//         const { sanitize } = require("dompurify")(new JSDOM("").window);
//         sanitizedDescription = sanitize(description);
//       } else {
//         // Basic sanitization for Edge environments
//         sanitizedDescription = DOMPurify.sanitize(description);
//       }
//     } catch (error) {
//       console.error("Error during server-side sanitization:", error);
//     }
//   } else {
//     // Client-side sanitization
//     sanitizedDescription = DOMPurify.sanitize(description);
//   }

//   return (
//     <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//       <h4 className="mb-20">{title}</h4>
//       <div className="fs-20 lh-lg" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
//     </div>
//   );
// };

// export default CommonMainTripDescription;


// // 6 aug 19.39 fixed build errors
// import React from "react";

// interface CommonMainTripDescriptionProps {
//   title: string;
//   description: string;
// }

// const CommonMainTripDescription: React.FC<CommonMainTripDescriptionProps> = ({ title, description }) => {
//   let sanitizedDescription = description;

//   if (typeof window === "undefined") {
//     try {
//       const { JSDOM } = require("jsdom");
//       const createDOMPurify = require("dompurify");
//       const window = new JSDOM("").window;
//       const DOMPurify = createDOMPurify(window);
//       sanitizedDescription = DOMPurify.sanitize(description);
//     } catch (error) {
//       console.error("Error during server-side sanitization:", error);
//     }
//   }

//   return (
//     <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
//       <h4 className="mb-20">{title}</h4>
//       <div className="fs-20 lh-lg" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
//     </div>
//   );
// };

// export default CommonMainTripDescription;
