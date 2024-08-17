// 18.25 7 aug
import { useState, useEffect } from "react";
import trip_listing_data from "@/data/inner-data/TripListingData";
import { TripType } from "@/types/TripType";

interface FilterOptions {
  itemsPerPage: number;
  page: string;
  tag?: string;
}

interface Filters {
  location: string;
  priceRange: [number, number];
  amenities: string[];
  status: string;
  country: string;
  people: string;
  days: string;
}

const useTripOverviewFilter = ({ itemsPerPage, page, tag }: FilterOptions) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState<TripType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [sortedProperties, setSortedProperties] = useState<TripType[]>([]);
  const [priceValue, setPriceValue] = useState<[number, number]>([0, 1000000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [sortType, setSortType] = useState<string>("price_low");

  // Added state for active filters
  const [activeFilters, setActiveFilters] = useState<Filters>({
    location: "",
    priceRange: [0, 1000000],
    amenities: [],
    status: "",
    country: "",
    people: "1",
    days: "1",
  });

  useEffect(() => {
    let filteredProperties = trip_listing_data;

    // Filter properties by page
    filteredProperties = filteredProperties.filter((item) => item.page === page);

    // Filter properties by tag
    if (tag && tag !== "All") {
      filteredProperties = filteredProperties.filter((item) => item.tags.includes(tag));
    }

    // Filter properties by price range
    filteredProperties = filteredProperties.filter(
      (item) => item.price >= activeFilters.priceRange[0] && item.price <= activeFilters.priceRange[1]
    );

    // Filter properties by location
    if (activeFilters.location) {
      filteredProperties = filteredProperties.filter((item) =>
        item.location.includes(activeFilters.location)
      );
    }

    // Filter properties by status
    if (activeFilters.status) {
      filteredProperties = filteredProperties.filter((item) =>
        item.status.includes(activeFilters.status)
      );
    }

    // Filter properties by amenities
    if (activeFilters.amenities.length > 0) {
      filteredProperties = filteredProperties.filter((item) =>
        activeFilters.amenities.every((amenity) => item.inclusions?.includes(amenity))
      );
    }

    // Filter properties by country
    if (activeFilters.country) {
      filteredProperties = filteredProperties.filter((item) =>
        item.country.includes(activeFilters.country)
      );
    }

    // Filter properties by people
    if (activeFilters.people) {
      filteredProperties = filteredProperties.filter(
        (item) => item.people >= parseInt(activeFilters.people)
      );
    }
    // if (activeFilters.people) {
    //   filteredProperties = filteredProperties.filter(
    //     (item) => (item.people ?? 0) >= parseInt(activeFilters.people)
    //   );
    // }

    // Filter properties by days
    if (activeFilters.days) {
      filteredProperties = filteredProperties.filter(
        (item) => item.days >= parseInt(activeFilters.days)
      );
    }

    // Sort properties
    if (sortType === "price_low") {
      filteredProperties.sort((a, b) => a.price - b.price);
    } else if (sortType === "price_high") {
      filteredProperties.sort((a, b) => b.price - a.price);
    }

    setSortedProperties(filteredProperties);
    setCurrentItems(filteredProperties.slice(itemOffset, itemOffset + itemsPerPage));
    setPageCount(Math.ceil(filteredProperties.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, page, tag, activeFilters, sortType]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % sortedProperties.length;
    setItemOffset(newOffset);
  };

  const handleTypeChange = (selectedOption: any) => {
    setSortType(selectedOption);
  };

  const handlePriceChange = (val: [number, number]) => {
    setPriceValue(val);
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: val,
    }));
  };

  const handleAmenityChange = (amenities: string[]) => {
    setSelectedAmenities(amenities);
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      amenities,
    }));
  };

  const handleLocationChange = (location: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      location,
    }));
  };

  const handleStatusChange = (status: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      status,
    }));
  };

  const handleCountryChange = (country: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      country,
    }));
  };

  const handlePeopleChange = (people: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      people,
    }));
  };

  const handleDaysChange = (days: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      days,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      search: e.target.value,
    }));
  };

  const handlePriceDropChange = () => {
    // Placeholder function for handlePriceDropChange
  };

  const resetFilters = () => {
    setPriceValue([0, maxPrice]);
    setSelectedAmenities([]);
    setActiveFilters({
      location: "",
      priceRange: [0, maxPrice],
      amenities: [],
      status: "",
      country: "",
      people: "1",
      days: "1",
    });
  };

  return {
    itemOffset,
    sortedProperties,
    currentItems,
    pageCount,
    handlePageClick,
    handleTypeChange,
    maxPrice,
    priceValue,
    resetFilters,
    selectedAmenities,
    handlePriceChange,
    handleAmenityChange,
    handleLocationChange,
    handleStatusChange,
    handleCountryChange,
    handlePeopleChange,
    handleDaysChange,
    handleSearchChange,
    handlePriceDropChange, // Added handlePriceDropChange to the return value
    activeFilters, // Added activeFilters to the return value
  };
};

export default useTripOverviewFilter;

// also works but uses
// // 18.03 add people and days
// import { useState, useEffect } from "react";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import { TripType } from "@/types/TripType";

// interface FilterOptions {
//   itemsPerPage: number;
//   page: string;
//   tag?: string;
// }

// interface Filters {
//   location: string;
//   priceRange: [number, number];
//   amenities: string[];
//   status: string;
//   country: string;
//   people: string;
//   days: string;
// }

// const useTripOverviewFilter = ({ itemsPerPage, page, tag }: FilterOptions) => {
//   const [itemOffset, setItemOffset] = useState(0);
//   const [currentItems, setCurrentItems] = useState<TripType[]>([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [sortedProperties, setSortedProperties] = useState<TripType[]>([]);
//   const [priceValue, setPriceValue] = useState<[number, number]>([0, 1000000]);
//   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
//   const [maxPrice, setMaxPrice] = useState(1000000);
//   const [sortType, setSortType] = useState<string>("price_low");

//   // Added state for active filters
//   const [activeFilters, setActiveFilters] = useState<Filters>({
//     location: "",
//     priceRange: [0, 1000000],
//     amenities: [],
//     status: "",
//     country: "",
//     people: "1",
//     days: "1",
//   });

//   useEffect(() => {
//     let filteredProperties = trip_listing_data;

//     // Filter properties by page
//     filteredProperties = filteredProperties.filter((item) => item.page === page);

//     // Filter properties by tag
//     if (tag && tag !== "All") {
//       filteredProperties = filteredProperties.filter((item) => item.tags.includes(tag));
//     }

//     // Filter properties by price range
//     filteredProperties = filteredProperties.filter(
//       (item) => item.price >= activeFilters.priceRange[0] && item.price <= activeFilters.priceRange[1]
//     );

//     // Filter properties by location
//     if (activeFilters.location) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.location.includes(activeFilters.location)
//       );
//     }

//     // Filter properties by status
//     if (activeFilters.status) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.status.includes(activeFilters.status)
//       );
//     }

//     // Filter properties by amenities
//     if (activeFilters.amenities.length > 0) {
//       filteredProperties = filteredProperties.filter((item) =>
//         activeFilters.amenities.every((amenity) => item.inclusions?.includes(amenity))
//       );
//     }

//     // Filter properties by country
//     if (activeFilters.country) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.country.includes(activeFilters.country)
//       );
//     }

//     // Filter properties by people
//     if (activeFilters.people) {
//       filteredProperties = filteredProperties.filter(
//         (item) => item.property_info.bed >= parseInt(activeFilters.people)
//       );
//     }

//     // Filter properties by days
//     if (activeFilters.days) {
//       filteredProperties = filteredProperties.filter(
//         (item) => item.property_info.bath >= parseInt(activeFilters.days)
//       );
//     }

//     // Sort properties
//     if (sortType === "price_low") {
//       filteredProperties.sort((a, b) => a.price - b.price);
//     } else if (sortType === "price_high") {
//       filteredProperties.sort((a, b) => b.price - a.price);
//     }

//     setSortedProperties(filteredProperties);
//     setCurrentItems(filteredProperties.slice(itemOffset, itemOffset + itemsPerPage));
//     setPageCount(Math.ceil(filteredProperties.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, page, tag, activeFilters, sortType]);

//   const handlePageClick = (event: any) => {
//     const newOffset = (event.selected * itemsPerPage) % sortedProperties.length;
//     setItemOffset(newOffset);
//   };

//   const handleTypeChange = (selectedOption: any) => {
//     setSortType(selectedOption);
//   };

//   const handlePriceChange = (val: [number, number]) => {
//     setPriceValue(val);
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       priceRange: val,
//     }));
//   };

//   const handleAmenityChange = (amenities: string[]) => {
//     setSelectedAmenities(amenities);
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       amenities,
//     }));
//   };

//   const handleLocationChange = (location: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       location,
//     }));
//   };

//   const handleStatusChange = (status: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       status,
//     }));
//   };

//   const handleCountryChange = (country: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       country,
//     }));
//   };

//   const handlePeopleChange = (people: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       people,
//     }));
//   };

//   const handleDaysChange = (days: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       days,
//     }));
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       search: e.target.value,
//     }));
//   };

//   const handlePriceDropChange = () => {
//     // Placeholder function for handlePriceDropChange
//   };

//   const resetFilters = () => {
//     setPriceValue([0, maxPrice]);
//     setSelectedAmenities([]);
//     setActiveFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//       country: "",
//       people: "1",
//       days: "1",
//     });
//   };

//   return {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     handleLocationChange,
//     handleStatusChange,
//     handleCountryChange,
//     handlePeopleChange,
//     handleDaysChange,
//     handleSearchChange,
//     handlePriceDropChange, // Added handlePriceDropChange to the return value
//     activeFilters, // Added activeFilters to the return value
//   };
// };

// export default useTripOverviewFilter;


// works!
// // 7 aug 24 17.46 add handleSearchChange
// import { useState, useEffect } from "react";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import { TripType } from "@/types/TripType";

// interface FilterOptions {
//   itemsPerPage: number;
//   page: string;
//   tag?: string;
// }

// interface Filters {
//   location: string;
//   priceRange: [number, number];
//   amenities: string[];
//   status: string;
//   country: string;
// }

// const useTripOverviewFilter = ({ itemsPerPage, page, tag }: FilterOptions) => {
//   const [itemOffset, setItemOffset] = useState(0);
//   const [currentItems, setCurrentItems] = useState<TripType[]>([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [sortedProperties, setSortedProperties] = useState<TripType[]>([]);
//   const [priceValue, setPriceValue] = useState<[number, number]>([0, 1000000]);
//   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
//   const [maxPrice, setMaxPrice] = useState(1000000);
//   const [sortType, setSortType] = useState<string>("price_low");

//   // Added state for active filters
//   const [activeFilters, setActiveFilters] = useState<Filters>({
//     location: "",
//     priceRange: [0, 1000000],
//     amenities: [],
//     status: "",
//     country: "",
//   });

//   useEffect(() => {
//     let filteredProperties = trip_listing_data;

//     // Filter properties by page
//     filteredProperties = filteredProperties.filter((item) => item.page === page);

//     // Filter properties by tag
//     if (tag && tag !== "All") {
//       filteredProperties = filteredProperties.filter((item) => item.tags.includes(tag));
//     }

//     // Filter properties by price range
//     filteredProperties = filteredProperties.filter(
//       (item) => item.price >= activeFilters.priceRange[0] && item.price <= activeFilters.priceRange[1]
//     );

//     // Filter properties by location
//     if (activeFilters.location) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.location.includes(activeFilters.location)
//       );
//     }

//     // Filter properties by status
//     if (activeFilters.status) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.status.includes(activeFilters.status)
//       );
//     }

//     // Filter properties by amenities
//     if (activeFilters.amenities.length > 0) {
//       filteredProperties = filteredProperties.filter((item) =>
//         activeFilters.amenities.every((amenity) => item.inclusions?.includes(amenity))
//       );
//     }

//     // Filter properties by country
//     if (activeFilters.country) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.country.includes(activeFilters.country)
//       );
//     }

//     // Sort properties
//     if (sortType === "price_low") {
//       filteredProperties.sort((a, b) => a.price - b.price);
//     } else if (sortType === "price_high") {
//       filteredProperties.sort((a, b) => b.price - a.price);
//     }

//     setSortedProperties(filteredProperties);
//     setCurrentItems(filteredProperties.slice(itemOffset, itemOffset + itemsPerPage));
//     setPageCount(Math.ceil(filteredProperties.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, page, tag, activeFilters, sortType]);

//   const handlePageClick = (event: any) => {
//     const newOffset = (event.selected * itemsPerPage) % sortedProperties.length;
//     setItemOffset(newOffset);
//   };

//   const handleTypeChange = (selectedOption: any) => {
//     setSortType(selectedOption);
//   };

//   const handlePriceChange = (val: [number, number]) => {
//     setPriceValue(val);
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       priceRange: val,
//     }));
//   };

//   const handleAmenityChange = (amenities: string[]) => {
//     setSelectedAmenities(amenities);
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       amenities,
//     }));
//   };

//   const handleLocationChange = (location: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       location,
//     }));
//   };

//   const handleStatusChange = (status: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       status,
//     }));
//   };

//   const handleCountryChange = (country: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       country,
//     }));
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       search: e.target.value,
//     }));
//   };

//   const handlePriceDropChange = () => {
//     // Placeholder function for handlePriceDropChange
//   };

//   const resetFilters = () => {
//     setPriceValue([0, maxPrice]);
//     setSelectedAmenities([]);
//     setActiveFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//       country: "",
//     });
//   };

//   return {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     handleLocationChange,
//     handleStatusChange,
//     handleCountryChange,
//     handleSearchChange,
//     handlePriceDropChange, // Added handlePriceDropChange to the return value
//     activeFilters, // Added activeFilters to the return value
//   };
// };

// export default useTripOverviewFilter;



// // 7 aug 17.30 enhanced for use in CardTripOverviewArea
// "use client"; // Ensuring this is a client component

// import { useState, useEffect } from "react";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import { TripType } from "@/types/TripType";

// interface FilterOptions {
//   itemsPerPage: number;
//   page: string;
//   tag?: string;
// }

// interface Filters {
//   location: string;
//   priceRange: [number, number];
//   amenities: string[];
//   status: string;
//   country: string;
//   people: string;
//   days: string;
// }

// const useTripOverviewFilter = ({ itemsPerPage, page, tag }: FilterOptions) => {
//   const [itemOffset, setItemOffset] = useState(0);
//   const [currentItems, setCurrentItems] = useState<TripType[]>([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [sortedProperties, setSortedProperties] = useState<TripType[]>([]);
//   const [priceValue, setPriceValue] = useState<[number, number]>([0, 1000000]);
//   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
//   const [maxPrice, setMaxPrice] = useState(1000000);
//   const [sortType, setSortType] = useState<string>("price_low");

//   const [activeFilters, setActiveFilters] = useState<Filters>({
//     location: "",
//     priceRange: [0, 1000000],
//     amenities: [],
//     status: "",
//     country: "",
//     people: "1",
//     days: "1",
//   });

//   useEffect(() => {
//     let filteredProperties = trip_listing_data;

//     filteredProperties = filteredProperties.filter((item) => item.page === page);

//     if (tag && tag !== "All") {
//       filteredProperties = filteredProperties.filter((item) => item.tags.includes(tag));
//     }

//     filteredProperties = filteredProperties.filter(
//       (item) => item.price >= activeFilters.priceRange[0] && item.price <= activeFilters.priceRange[1]
//     );

//     if (activeFilters.location) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.location.includes(activeFilters.location)
//       );
//     }

//     if (activeFilters.status) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.status.includes(activeFilters.status)
//       );
//     }

//     if (activeFilters.amenities.length > 0) {
//       filteredProperties = filteredProperties.filter((item) =>
//         activeFilters.amenities.every((amenity) => item.inclusions?.includes(amenity))
//       );
//     }

//     if (activeFilters.country) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.country.includes(activeFilters.country)
//       );
//     }

//     if (activeFilters.people) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.minimum_age <= parseInt(activeFilters.people)
//       );
//     }

//     if (activeFilters.days) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.days >= parseInt(activeFilters.days)
//       );
//     }

//     if (sortType === "price_low") {
//       filteredProperties.sort((a, b) => a.price - b.price);
//     } else if (sortType === "price_high") {
//       filteredProperties.sort((a, b) => b.price - a.price);
//     }

//     setSortedProperties(filteredProperties);
//     setCurrentItems(filteredProperties.slice(itemOffset, itemOffset + itemsPerPage));
//     setPageCount(Math.ceil(filteredProperties.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, page, tag, activeFilters, sortType]);

//   const handlePageClick = (event: any) => {
//     const newOffset = (event.selected * itemsPerPage) % sortedProperties.length;
//     setItemOffset(newOffset);
//   };

//   const handleTypeChange = (selectedOption: any) => {
//     setSortType(selectedOption);
//   };

//   const handlePriceChange = (val: [number, number]) => {
//     setPriceValue(val);
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       priceRange: val,
//     }));
//   };

//   const handleAmenityChange = (amenities: string[]) => {
//     setSelectedAmenities(amenities);
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       amenities,
//     }));
//   };

//   const handleLocationChange = (location: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       location,
//     }));
//   };

//   const handleStatusChange = (status: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       status,
//     }));
//   };

//   const handleCountryChange = (country: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       country,
//     }));
//   };

//   const handlePeopleChange = (people: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       people,
//     }));
//   };

//   const handleDaysChange = (days: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       days,
//     }));
//   };

//   const handlePriceDropChange = () => {
//     // Placeholder function for handlePriceDropChange
//   };

//   const resetFilters = () => {
//     setPriceValue([0, maxPrice]);
//     setSelectedAmenities([]);
//     setActiveFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//       country: "",
//       people: "1",
//       days: "1",
//     });
//   };

//   return {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     handleLocationChange,
//     handleStatusChange,
//     handleCountryChange,
//     handlePeopleChange, // Added handlePeopleChange to the return value
//     handleDaysChange, // Added handleDaysChange to the return value
//     handlePriceDropChange, // Added handlePriceDropChange to the return value
//     activeFilters, // Added activeFilters to the return value
//   };
// };

// export default useTripOverviewFilter;



// works great!
// // 7 aug 14.42 updated for countries:
// // src/hooks/useTripOverviewFilter.ts
// import { useState, useEffect } from "react";
// import trip_listing_data from "@/data/inner-data/TripListingData";
// import { TripType } from "@/types/TripType";

// interface FilterOptions {
//   itemsPerPage: number;
//   page: string;
//   tag?: string;
// }

// interface Filters {
//   location: string;
//   priceRange: [number, number];
//   amenities: string[];
//   status: string;
//   country: string;
// }

// const useTripOverviewFilter = ({ itemsPerPage, page, tag }: FilterOptions) => {
//   const [itemOffset, setItemOffset] = useState(0);
//   const [currentItems, setCurrentItems] = useState<TripType[]>([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [sortedProperties, setSortedProperties] = useState<TripType[]>([]);
//   const [priceValue, setPriceValue] = useState<[number, number]>([0, 1000000]);
//   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
//   const [maxPrice, setMaxPrice] = useState(1000000);
//   const [sortType, setSortType] = useState<string>("price_low");

//   // Added state for active filters
//   const [activeFilters, setActiveFilters] = useState<Filters>({
//     location: "",
//     priceRange: [0, 1000000],
//     amenities: [],
//     status: "",
//     country: "",
//   });

//   useEffect(() => {
//     let filteredProperties = trip_listing_data;

//     // Filter properties by page
//     filteredProperties = filteredProperties.filter((item) => item.page === page);

//     // Filter properties by tag
//     if (tag && tag !== "All") {
//       filteredProperties = filteredProperties.filter((item) => item.tags.includes(tag));
//     }

//     // Filter properties by price range
//     filteredProperties = filteredProperties.filter(
//       (item) => item.price >= activeFilters.priceRange[0] && item.price <= activeFilters.priceRange[1]
//     );

//     // Filter properties by location
//     if (activeFilters.location) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.location.includes(activeFilters.location)
//       );
//     }

//     // Filter properties by status
//     if (activeFilters.status) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.status.includes(activeFilters.status)
//       );
//     }

//     // Filter properties by amenities
//     if (activeFilters.amenities.length > 0) {
//       filteredProperties = filteredProperties.filter((item) =>
//         activeFilters.amenities.every((amenity) => item.inclusions?.includes(amenity))
//       );
//     }

//     // Filter properties by country
//     if (activeFilters.country) {
//       filteredProperties = filteredProperties.filter((item) =>
//         item.country.includes(activeFilters.country)
//       );
//     }

//     // Sort properties
//     if (sortType === "price_low") {
//       filteredProperties.sort((a, b) => a.price - b.price);
//     } else if (sortType === "price_high") {
//       filteredProperties.sort((a, b) => b.price - a.price);
//     }

//     setSortedProperties(filteredProperties);
//     setCurrentItems(filteredProperties.slice(itemOffset, itemOffset + itemsPerPage));
//     setPageCount(Math.ceil(filteredProperties.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, page, tag, activeFilters, sortType]);

//   const handlePageClick = (event: any) => {
//     const newOffset = (event.selected * itemsPerPage) % sortedProperties.length;
//     setItemOffset(newOffset);
//   };

//   const handleTypeChange = (selectedOption: any) => {
//     setSortType(selectedOption);
//   };

//   const handlePriceChange = (val: [number, number]) => {
//     setPriceValue(val);
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       priceRange: val,
//     }));
//   };

//   const handleAmenityChange = (amenities: string[]) => {
//     setSelectedAmenities(amenities);
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       amenities,
//     }));
//   };

//   const handleLocationChange = (location: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       location,
//     }));
//   };

//   const handleStatusChange = (status: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       status,
//     }));
//   };

//   const handleCountryChange = (country: string) => {
//     setActiveFilters((prevFilters) => ({
//       ...prevFilters,
//       country,
//     }));
//   };

//   const handlePriceDropChange = () => {
//     // Placeholder function for handlePriceDropChange
//   };

//   const resetFilters = () => {
//     setPriceValue([0, maxPrice]);
//     setSelectedAmenities([]);
//     setActiveFilters({
//       location: "",
//       priceRange: [0, maxPrice],
//       amenities: [],
//       status: "",
//       country: "",
//     });
//   };

//   return {
//     itemOffset,
//     sortedProperties,
//     currentItems,
//     pageCount,
//     handlePageClick,
//     handleTypeChange,
//     maxPrice,
//     priceValue,
//     resetFilters,
//     selectedAmenities,
//     handlePriceChange,
//     handleAmenityChange,
//     handleLocationChange,
//     handleStatusChange,
//     handleCountryChange,
//     handlePriceDropChange, // Added handlePriceDropChange to the return value
//     activeFilters, // Added activeFilters to the return value
//   };
// };

// export default useTripOverviewFilter;
