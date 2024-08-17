// src/data/inner-data/TripDaysListData.ts

export interface TripDayType {
    id: number;
    title: string;
    description: string;
  }
  
  export const trip_days_list: TripDayType[] = [
    {
      id: 1,
      title: "Day 1: Arrival and Welcome",
      description: "Arrive at the destination, check-in to the hotel, and enjoy a welcome dinner with the tour group.",
    },
    {
      id: 2,
      title: "Day 2: City Tour",
      description: "Explore the city's landmarks and historical sites with a local guide. Lunch at a traditional restaurant.",
    },
    {
      id: 3,
      title: "Day 3: Adventure Day",
      description: "Engage in adventurous activities such as hiking, biking, or water sports. Dinner at a local eatery.",
    },
    // Add more days as needed
  ];
  