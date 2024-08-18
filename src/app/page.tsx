// 18 aug 18.06 homepage without builder.io

// src/app/page.tsx
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import Wrapper from "@/layouts/Wrapper";

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
export const runtime = "edge";  // Ensure this route uses the Edge runtime
// 16 aug 15.00 updating for SEO
export const metadata = {
  title: "Bongo Asili Homepage",
  description: "Experience the best safaris in Tanzania with Bongo Asili.",
};

export default async function HomePage() {
  const builderModelName = "page";
  const urlPath = "/home-video";
  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: urlPath,
      },
    })
    .toPromise();

  return (
    <Wrapper>
      <RenderBuilderContent content={content} model={builderModelName} />
    </Wrapper>
  );
}

//og
// // src/app/page.tsx
// import HomeOne from "@/components/homes/home-one";
// import Wrapper from "@/layouts/Wrapper"

// export const metadata = {
//   title: "Bongo Asili Next js Template",
// };
// const index = () => {
//   return (
//     <Wrapper>
//       <HomeOne />
//     </Wrapper>
//   )
// }

// export default index
