// src/components/video/index.tsx
// export { default as VideoBackground } from './VideoBackground';


import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import HeaderOne from "@/layouts/headers/HeaderOne"
import VideoBackground from "./VideoBackground"
import HeaderMainOne from "@/layouts/headers/HeaderMainOne"
import { VideoHeader } from "@/layouts/headers/VideoHeader"

const VideoBackgroundArea = () => {
   return (
      <>
         {/* <HeaderOne style={true} /> */}
         {/* <HeaderMainOne /> */}
         <VideoHeader />
         <VideoBackground />
         {/* <FancyBanner /> */}
         {/* <FooterFour /> */}
      </>
   )
}

export default VideoBackgroundArea;