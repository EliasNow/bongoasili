// import AgencyFormOne from "@/components/forms/AgencyFormOne";
// import LoginModal from "@/modals/LoginModal";
// import Link from "next/link";
// import { useState } from "react";

// const CommonReviewForm = () => {

//    const [loginModal, setLoginModal] = useState<boolean>(false);

//    return (
//       <>
//          <h4 className="mb-20">Leave A Reply</h4>
//          <p className="fs-20 lh-lg pb-15">
//          <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal"
// 				className="color-dark fw-500 text-decoration-underline">Sign in</Link> to post your comment or
//             signup if you don&apos;t have any account.</p>

//          <AgencyFormOne style={true} />

//          <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
//       </>
//    )
// }

// export default CommonReviewForm;

//chatgpt fri 19 jul 13.38 trying to fix site broken after updating media gallery in listing-details-1
// src/components/ListingDetails/listing-details-common/CommonReviewForm.tsx
"use client";

import AgencyFormOne from "@/components/forms/AgencyFormOne";
import LoginModal from "@/modals/LoginModal";
import Link from "next/link";
import { useState } from "react";

const CommonReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="review">Review:</label>
//         <textarea id="review" name="review" value={formData.review} onChange={handleChange}></textarea>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

return (
   <div className="review-form bg-white shadow4 border-20 p-40">
     <form onSubmit={handleSubmit}>
       <div className="dash-input-wrapper mb-30">
         <label htmlFor="name" className="form-label">Name:</label>
         <input
           type="text"
           id="name"
           name="name"
           value={formData.name}
           onChange={handleChange}
           className="form-control"
           placeholder="Enter your name"
         />
       </div>
       <div className="dash-input-wrapper mb-30">
         <label htmlFor="email" className="form-label">Email:</label>
         <input
           type="email"
           id="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           className="form-control"
           placeholder="Enter your email"
         />
       </div>
       <div className="dash-input-wrapper mb-30">
         <label htmlFor="review" className="form-label">Review:</label>
         <textarea
           id="review"
           name="review"
           value={formData.review}
           onChange={handleChange}
           className="form-control"
           placeholder="Write your review here..."
         ></textarea>
       </div>
       <button type="submit" className="btn btn-primary">Submit</button>
     </form>
   </div>
 );
};

export default CommonReviewForm;
