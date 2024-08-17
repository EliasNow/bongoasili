import React from 'react';
// import NextImage from 'next/image';

interface YourJourneyMapProps {
  title: string;
  mapSrc: string;
}

const YourJourneyMap: React.FC<YourJourneyMapProps> = ({ title, mapSrc }) => {
  return (
    <>
      <div className="bg-white shadow4 border-20 p-30">
      <h4 className="mb-40">{title}</h4>
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
      {/* maybe a picture is more secure */}
               {/* <NextImage
              src={mapSrc}
              width={600}
              height={450}
              style={{ border: 0 }}
              alt="Map"
              className="w-100 h-100"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default YourJourneyMap;
