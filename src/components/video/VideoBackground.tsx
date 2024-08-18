// 17.12 18 aug use react modal video:
// "use client"
// import React, { useState } from 'react';
// import ModalVideo from 'react-modal-video';
// import 'react-modal-video/scss/modal-video.scss';
// import '@/assets/scss/_VideoBackground.scss';

// const VideoBackground = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <div className="video-background-container">
//       <ModalVideo
//         channel='custom'
//         isOpen={isOpen}
//         url="https://d4he32tg3z2m0.cloudfront.net/Serengeti_vid_cut.mp4"
//         onClose={() => setOpen(false)}
//         allowFullScreen
//       />
      
//       <div className="video-trigger" onClick={() => setOpen(true)}>
//         <div className="video-overlay">
//           {/* You can add some text or button to trigger the video */}
//           <button className="play-button">Play Video</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;


// 18 aug 14.34 use this instead of builder.io video
// using a CDN like aws or cloudflare should be quicker.
// import React from "react";
// import "@/assets/scss/_VideoBackground.scss"

// const VideoBackground = () => {
//   return (
//     <div className="video-background">
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         className="video"
//       >
//         <source
//           src="https://d4he32tg3z2m0.cloudfront.net/Serengeti_vid_cut.mp4"
//         //   src="assets/videos/Serengeti_vid.mp4"
//           type="video/mp4"
//         />
//         {/* You can add more <source> elements for different video formats */}
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoBackground;


// 18 aug 17.58 slight update
import React from "react";
import "@/assets/scss/_VideoBackground.scss";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="homepage-video"
      >
        <source
          src="https://d4he32tg3z2m0.cloudfront.net/Serengeti_vid_cut.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div> {/* optional overlay if needed */}
    </div>
  );
};

export default VideoBackground;
