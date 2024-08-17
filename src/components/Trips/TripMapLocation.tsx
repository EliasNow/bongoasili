
// 8 aug 13.40 set default to Africa
import React from 'react';

// export const runtime = "edge";  // Ensure this route uses the Edge runtime 13 aug 14.17
interface TripMapLocationProps {
  tripLocation: string;
}

const TripMapLocation: React.FC<TripMapLocationProps> = ({ tripLocation }) => {
  const defaultLocation = tripLocation || "Africa";
  const encodedAddress = encodeURIComponent(defaultLocation);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`;

  return (
    <div className="bg-white shadow4 border-20 p-30 h-100">
      <div className="map-banner overflow-hidden border-15 h-100">
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

export default TripMapLocation;
