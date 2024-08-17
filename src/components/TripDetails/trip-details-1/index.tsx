// 15.36
import HeaderOne from "@/layouts/headers/HeaderOne";
import TripDetailsOneAreaWrapper from "./TripDetailsOneAreaWrapper";
import FancyBanner from "@/components/common/FancyBanner";
import FooterFour from "@/layouts/footers/FooterFour";

const TripDetailsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <TripDetailsOneAreaWrapper 
        title="Kenya Dream Safari"
        location="Kenya"
        parks="Masai Mara / Amboseli"
        price="Price: $3,500 p.p."
        extras="Est. extras: $400* visa, drinks, tips, souvenirs"
        bigCarousel={[{ src: "/default-image.jpg" }]}
        smallCarousel={[{ src: "/default-thumbnail.jpg" }]}
        mainTripDescriptionTitle="Overview" //
        mainTripDescription="<p>Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.</p>" //
        primaryInfoTitle="Trip Overview"
        tripOverviewData={[{ id: 1, icon: "/default-icon.svg", title: "Safari Adventure" }]}
        // tripDaysData={[{ id: 1, title: "Day 1", description: "Arrival in Kenya" }]}
        tripDaysData={[
          {
            id: 101,
            title: "Day 1: Arrival in Nairobi @Stanley Sarova",
            description: "You'll be greeted by us at Jomo Kenyatta Internation Airport (NBO). We've got a visit planned to Sheldrick's Elephant Orphanage. Dinner will be at the infamous Carnivore restaurant. Where they'll keep bringing you feed till you surrender (litterally!; you'll have to put down the flag mounted on your table)"
          },
          { id: 102, title: "Day 2: Maasai Mara @Mara Kicheche", description: "We'll drive to Mara today and make our first real gamedrive, exciting!" },
          { id: 103, title: "Day 3: Amboseli @Tawi Lodge", description: "The home of Elephant. If you're lucky you'll capture the perfect picture with a mt. Kilimanjaro backdrop." }
        ]}



        similarTripsTitle="Similar Trips You May Like"
        // similarTrips={trip_data} // Pass the similarTrips prop
        // amenities={[{ amenity: "wifi" }]} // Pass the amenities
        // inclusions={[{ inclusion: "Wifi" }]} // Pass the inclusions
        // inclusions={[]}
        inclusions={[
          { inclusion: "4x4 Vehicle" },
          { inclusion: "Driver/Guide" },
          { inclusion: "Park Fees" },
          { inclusion: "Meals" },
          { inclusion: "Wifi" }
        ]}


        mapTitle="Your Safari"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd"
        contactName="Andrew"
        contactRole="Travel Director"
        contactLocation="Amsterdam, NL"
        contactEmail="andrewnijssen@bongoasilitravel.com"
        contactPhone="+31 6 51 333 499"
        features={[]}
              />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default TripDetailsOne;
