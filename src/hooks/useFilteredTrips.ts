// // 7 aug  13.59
import { useState, useEffect } from "react";

interface Trip {
  id: number;
  location: string;
  price: number;
  amenities?: string[]; // make optional
  status: string;
  country: string[]; // Add the country property
  // Other properties from DataType that are used in filtering
  page: string;
  tag?: string;
  property_info?: {
    sqft: number;
    bed: string;
    bath: string;
  };
}

const useFilteredTrips = (trips: Trip[]) => {
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(trips);
  const [filters, setFilters] = useState({
    location: "",
    priceRange: [0, Infinity] as [number, number],
    amenities: [] as string[],
    status: "",
    country: "" // Add country to filters
  });

  useEffect(() => {
    let newFilteredTrips = trips;

    if (filters.location) {
      newFilteredTrips = newFilteredTrips.filter((trip) =>
        trip.location.includes(filters.location)
      );
    }

    if (filters.status) {
      newFilteredTrips = newFilteredTrips.filter((trip) =>
        trip.status.includes(filters.status)
      );
    }

    if (filters.priceRange) {
      newFilteredTrips = newFilteredTrips.filter(
        (trip) => trip.price >= filters.priceRange[0] && trip.price <= filters.priceRange[1]
      );
    }

    if (filters.amenities.length > 0) {
      newFilteredTrips = newFilteredTrips.filter((trip) =>
        filters.amenities.every((amenity) => trip.amenities?.includes(amenity))
      );
    }

    if (filters.country) {
      newFilteredTrips = newFilteredTrips.filter((trip) =>
        trip.country.includes(filters.country)
      );
    }

    setFilteredTrips(newFilteredTrips);
  }, [filters, trips]);

  const updateFilters = (newFilters: Partial<typeof filters>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return {
    filteredTrips,
    updateFilters,
    activeFilters: filters, // return the current active filters
  };
};

export default useFilteredTrips;
