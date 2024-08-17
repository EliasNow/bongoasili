
// 18.17 what a day (not eating for 2 days doesn't help)
// revert back to a version that's based on YourJourneyMap component with embedded
import React from 'react';

// export const runtime = "edge";  // Ensure this route uses the Edge runtime 13 aug 14.17

interface HotelMapLocationProps {
  hotelMapTitle: string;
  hotelMapAddress: string;
}

const HotelMapLocation: React.FC<HotelMapLocationProps> = ({ hotelMapTitle, hotelMapAddress }) => {
  // Encode the address to use in the URL
  const encodedAddress = encodeURIComponent(hotelMapAddress);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`;

  return (
    <div className="bg-white shadow4 border-20 p-30">
      <h4 className="mb-40">{hotelMapTitle}</h4>
      <div className="map-banner overflow-hidden border-15">
        <div className="gmap_canvas h-100 w-100">
          <iframe
            src={mapSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-100 h-100"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HotelMapLocation;
