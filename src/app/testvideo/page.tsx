// import React from 'react';
// import VideoBackground from '@/components/video/VideoBackground'; // Adjust the import path based on your project structure
// import Wrapper from '@/layouts/Wrapper';
// import VideoBackgroundArea from '@/components/video';

// export default TestVideoPage;


// const TestVideoPage = () => {
//     return (
//         <Wrapper>
//         <VideoBackgroundArea />
//         </Wrapper> 
//     );
// };

// export default TestVideoPage;

// import React from 'react';
// import { VideoHeader } from '@/layouts/headers/VideoHeader';
// import VideoBackground from '@/components/video/VideoBackground';

// const TestVideoPage = () => {
//   return (
//     <>
//       <VideoHeader style={true}/>
//       <VideoBackground />
//       {/* Add any additional content here */}
//     </>
//   );
// };

// export default TestVideoPage;

// use react-use-sticky library
import React from "react";
import { VideoHeader } from "@/layouts/headers/VideoHeader";
import VideoBackground from "@/components/video/VideoBackground";
import Wrapper from "@/layouts/Wrapper";

const TestVideoPage = () => {
  return (
    <>
    <Wrapper>
      <VideoHeader style={true} />
      <VideoBackground />
      </Wrapper>
    </>
  );
};

export default TestVideoPage;