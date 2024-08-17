

// const Overview = () => {

//    const selectHandler = (e: any) => { };

//    return (
//       <div className="bg-white card-box border-20">
//          <h4 className="dash-title-three">Overview</h4>
//          <div className="dash-input-wrapper mb-30">
//             <label htmlFor="">Property Title*</label>
//             <input type="text" placeholder="Your Property Name" />
//          </div>
//          <div className="dash-input-wrapper mb-30">
//             <label htmlFor="">Description*</label>
//             <textarea className="size-lg" placeholder="Write about property..."></textarea>
//          </div>
//          <div className="row align-items-end">
//             <div className="col-md-6">
//                <div className="dash-input-wrapper mb-30">
//                   <label htmlFor="">Category*</label>
//                   <NiceSelect className="nice-select"
//                      options={[
//                         { value: "1", text: "Apartments" },
//                         { value: "2", text: "Condos" },
//                         { value: "3", text: "Houses" },
//                         { value: "4", text: "Industrial" },
//                         { value: "5", text: "Villas" },
//                      ]}
//                      defaultCurrent={0}
//                      onChange={selectHandler} // fixed empty onChange 19 jul 14.10
//                      name=""
//                      placeholder="" />
//                </div>
//             </div>
//             <div className="col-md-6">
//                <div className="dash-input-wrapper mb-30">
//                   <label htmlFor="">Listed in*</label>
//                   <NiceSelect className="nice-select"
//                      options={[
//                         { value: "1", text: "All Listing" },
//                         { value: "2", text: "Buy" },
//                         { value: "3", text: "Sell" },
//                         { value: "4", text: "Rent" },
//                      ]}
//                      defaultCurrent={0}
//                      onChange={selectHandler}
//                      name=""
//                      placeholder="" />
//                </div>
//             </div>
//             <div className="col-md-6">
//                <div className="dash-input-wrapper mb-30">
//                   <label htmlFor="">Price*</label>
//                   <input type="text" placeholder="Your Price" />
//                </div>
//             </div>
//             <div className="col-md-6">
//                <div className="dash-input-wrapper mb-30">
//                   <label htmlFor="">Yearly Tax Rate*</label>
//                   <input type="text" placeholder="Tax Rate" />
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Overview;



// "use client" // 14.19
// import React, { useState, useCallback } from "react"; //

// import NiceSelect from "@/ui/NiceSelect";

// const Overview = () => {
//    // Using useState to manage state in a client component
//    const [propertyTitle, setPropertyTitle] = useState("");
//    const [description, setDescription] = useState("");
//    const [category, setCategory] = useState("1");
//    const [listedIn, setListedIn] = useState("1");
//    const [price, setPrice] = useState("");
//    const [taxRate, setTaxRate] = useState("");

//    // Memoized select handler to prevent unnecessary re-renders
//    const selectHandler = useCallback((e: any) => {
//       // Handle select change event
//       console.log(e);
//    }, []);

//    return (
//       <div className="bg-white card-box border-20">
//          <h4 className="dash-title-three">Overview</h4>
//          <div className="dash-input-wrapper mb-30">
//             <label htmlFor="property-title">Property Title*</label>
//             <input 
//                id="property-title"
//                type="text"
//                placeholder="Your Property Name"
//                value={propertyTitle}
//                onChange={(e) => setPropertyTitle(e.target.value)}
//             />
//          </div>
//          <div className="dash-input-wrapper mb-30">
//             <label htmlFor="description">Description*</label>
//             <textarea
//                id="description"
//                className="size-lg"
//                placeholder="Write about property..."
//                value={description}
//                onChange={(e) => setDescription(e.target.value)}
//             ></textarea>
//          </div>
//          <div className="row align-items-end">
//             <div className="col-md-6">
//                <div className="dash-input-wrapper mb-30">
//                   <label htmlFor="category">Category*</label>
//                   <NiceSelect
//                      className="nice-select"
//                      options={[
//                         { value: "1", text: "Apartments" },
//                         { value: "2", text: "Condos" },
//                         { value: "3", text: "Houses" },
//                         { value: "4", text: "Industrial" },
//                         { value: "5", text: "Villas" },
//                      ]}
//                      defaultCurrent={0}
//                      onChange={(value) => setCategory(value)}
//                      name="category"
//                      placeholder=""
//                   />
//                </div>
//             </div>
//             <div className="col-md-6">
//                <div className="dash-input-wrapper mb-30">
//                   <label htmlFor="listed-in">Listed in*</label>
//                   <NiceSelect
//                      className="nice-select"
//                      options={[
//                         { value: "1", text: "All Listing" },
//                         { value: "2", text: "Buy" },
//                         { value: "3", text: "Sell" },
//                         { value: "4", text: "Rent" },
//                      ]}
//                      defaultCurrent={0}
//                      onChange={(value) => setListedIn(value)}
//                      name="listed-in"
//                      placeholder=""
//                   />
//                </div>
//             </div>
//             <div className="col-md-6">
//                <div className="dash-input-wrapper mb-30">
//                   <label htmlFor="price">Price*</label>
//                   <input 
//                      id="price"
//                      type="text"
//                      placeholder="Your Price"
//                      value={price}
//                      onChange={(e) => setPrice(e.target.value)}
//                   />
//                </div>
//             </div>
//             <div className="col-md-6">
//                <div className="dash-input-wrapper mb-30">
//                   <label htmlFor="tax-rate">Yearly Tax Rate*</label>
//                   <input 
//                      id="tax-rate"
//                      type="text"
//                      placeholder="Tax Rate"
//                      value={taxRate}
//                      onChange={(e) => setTaxRate(e.target.value)}
//                   />
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// }

// export default Overview;

// src/components/dashboard/add-property/Overview.tsx

"use client";

import React, { useState, ChangeEvent } from "react";
import NiceSelect from "@/ui/NiceSelect";

const Overview = () => {
   const [propertyTitle, setPropertyTitle] = useState<string>("");
   const [description, setDescription] = useState<string>("");
   const [category, setCategory] = useState<string>("1");
   const [listedIn, setListedIn] = useState<string>("1");
   const [price, setPrice] = useState<string>("");
   const [taxRate, setTaxRate] = useState<string>("");

   const selectHandler = (value: string) => {
      console.log(value);
   };

   return (
      <div className="bg-white card-box border-20">
         <h4 className="dash-title-three">Overview</h4>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="property-title">Property Title*</label>
            <input 
               id="property-title"
               type="text"
               placeholder="Your Property Name"
               value={propertyTitle}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setPropertyTitle(e.target.value)}
            />
         </div>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="description">Description*</label>
            <textarea
               id="description"
               className="size-lg"
               placeholder="Write about property..."
               value={description}
               onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            ></textarea>
         </div>
         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="category">Category*</label>
                  <NiceSelect
                     className="nice-select"
                     options={[
                        { value: "1", text: "Apartments" },
                        { value: "2", text: "Condos" },
                        { value: "3", text: "Houses" },
                        { value: "4", text: "Industrial" },
                        { value: "5", text: "Villas" },
                     ]}
                     defaultCurrent={0}
                     onChange={(value: string) => setCategory(value)}
                     name="category"
                     placeholder=""
                  />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="listed-in">Listed in*</label>
                  <NiceSelect
                     className="nice-select"
                     options={[
                        { value: "1", text: "All Listing" },
                        { value: "2", text: "Buy" },
                        { value: "3", text: "Sell" },
                        { value: "4", text: "Rent" },
                     ]}
                     defaultCurrent={0}
                     onChange={(value: string) => setListedIn(value)}
                     name="listed-in"
                     placeholder=""
                  />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="price">Price*</label>
                  <input 
                     id="price"
                     type="text"
                     placeholder="Your Price"
                     value={price}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                  />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="tax-rate">Yearly Tax Rate*</label>
                  <input 
                     id="tax-rate"
                     type="text"
                     placeholder="Tax Rate"
                     value={taxRate}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setTaxRate(e.target.value)}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Overview;

