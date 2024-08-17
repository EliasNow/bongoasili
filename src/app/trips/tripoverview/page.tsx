// // added edge to src/app/api/route.ts so now we need to use POST
// // src/app/trip-collection/page.tsx
// import { RenderBuilderContent } from '../../../components/builder';
// import Wrapper from '@/layouts/Wrapper';

// export const runtime = 'edge'; // Ensure this route uses the Edge runtime

// export const metadata = {
//   title: 'Bongo Asili Trip Collection',
// };

// export default async function HomePage() {
//   const builderModelName = 'page';
//   const urlPath = '/trip-collection';

//   // Fetch content from the custom API route
//   const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/fetch-builder-content`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       action: 'fetch-builder-content',
//       modelName: builderModelName,
//       urlPath: urlPath,
//     }),
//   });

//   if (!response.ok) {
//     return (
//       <Wrapper>
//         <div>Error fetching content</div>
//       </Wrapper>
//     );
//   }

//   const content = await response.json();

//   return (
//     <Wrapper>
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </Wrapper>
//   );
// }

// og implementation (if we remove edge export): works without edge
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../../components/builder";
import Wrapper from "@/layouts/Wrapper";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const runtime = "edge";  // Ensure this route uses the Edge runtime

export const metadata = {
  title: "Bongo Asili Trip Collection",
  description: "Overview of Bongo Asili Trips based on useful categories."
};

export default async function HomePage() {
  const builderModelName = "page";
  const urlPath = "/trip-collection";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: urlPath,
      },
    })
    .toPromise();

    console.log("Builder Content for HomePage:", content);

    if (!content) {
      console.error("No content returned from Builder.io for HomePage.");
      return <Wrapper>Error: No content available.</Wrapper>;
    }

  return (
    <Wrapper>
      <RenderBuilderContent content={content} model={builderModelName} />
    </Wrapper>
  );
}

// in all these versions builder is never read
// // 13 aug 16.16 dynamic import for edge runtime
// import { builder } from "@builder.io/sdk";
// import { RenderBuilderContent } from "../../../components/builder"
// import Wrapper from "@/layouts/Wrapper";

// export default async function HomePage() {
//   const builderModelName = "page";
//   const urlPath = "/trip-collection";
//   let content = null;

//   if (process.env.NEXT_RUNTIME !== 'edge') {
//     const { builder } = await import('@builder.io/sdk');
//     builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

//     content = await builder
//       .get(builderModelName, {
//         userAttributes: {
//           urlPath: urlPath,
//         },
//       })
//       .toPromise();
//   }

//   return (
//     <Wrapper>
//       {content ? (
//         <RenderBuilderContent content={content} model={builderModelName} />
//       ) : (
//         <div>Content not available on Edge runtime.</div>
//       )}
//     </Wrapper>
//   );
// }

// export default async function HomePage() {
//   const builderModelName = "page";
//   const urlPath = "/trip-collection";

//   // Check if running in the Edge runtime
//   const isEdgeRuntime = process.env.NEXT_RUNTIME === 'edge';

//   // Dynamically import Builder SDK only if NOT running in Edge runtime
//   const builder = !isEdgeRuntime ? (await import('@builder.io/sdk')).builder : null;

//   if (!builder) {
//     // Handle case where Builder SDK is not available (e.g., in Edge runtime)
//     // You might use a different method to fetch content directly via `fetch`
//     return <div>Content not available on Edge runtime.</div>;
//   }

//   builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

//   const content = await builder
//     .get(builderModelName, {
//       userAttributes: {
//         urlPath: urlPath,
//       },
//     })
//     .toPromise();

//   return (
//     <Wrapper>
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </Wrapper>
//   );
// }

// export default async function HomePage() {
//   const builderModelName = "page";
//   const urlPath = "/trip-collection";

//   // Dynamically import Builder SDK only if running in Node.js (not Edge or client)
//   const builder = process.env.NODE_ENV !== 'edge' ? (await import('@builder.io/sdk')).builder : null;

//   if (!builder) {
//     // Handle case where Builder SDK is not available (e.g., in Edge runtime)
//     // Consider fetching content directly using fetch if possible
//     return <div>Content not available on Edge runtime.</div>;
//   }

//   builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
  
//   const content = await builder
//     .get(builderModelName, {
//       userAttributes: {
//         urlPath: urlPath,
//       },
//     })
//     .toPromise();

//   return (
//     <Wrapper>
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </Wrapper>
//   );
// }


// export default async function HomePage() {
//   const builderModelName = "page";
//   const urlPath = "/trip-collection";

//   // Check if running in the Edge runtime
//   const isEdgeRuntime = process.env.NEXT_RUNTIME === 'edge';

//   // Dynamically import Builder SDK only if NOT running in Edge runtime
//   const builder = !isEdgeRuntime ? (await import('@builder.io/sdk')).builder : null;

//   if (!builder) {
//     // Handle case where Builder SDK is not available (e.g., in Edge runtime)
//     // You might use a different method to fetch content directly via `fetch`
//     return <div>Content not available on Edge runtime.</div>;
//   }

//   builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

//   const content = await builder
//     .get(builderModelName, {
//       userAttributes: {
//         urlPath: urlPath,
//       },
//     })
//     .toPromise();

//   return (
//     <Wrapper>
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </Wrapper>
//   );
// }

// og working (without edge export)
// import { builder } from "@builder.io/sdk";
// import { RenderBuilderContent } from "../../../components/builder"
// import Wrapper from "@/layouts/Wrapper";

// // Initialize Builder with your API key
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
// export const runtime = "edge";  // Ensure this route uses the Edge runtime

// export const metadata = {
//   title: "Bongo Asili Trip Collection",
// };

// export default async function HomePage() {
//   const builderModelName = "page";
//   const urlPath = "/trip-collection";
//   const content = await builder
//     .get(builderModelName, {
//       userAttributes: {
//         urlPath: urlPath,
//       },
//     })
//     .toPromise();

//   return (
//     <Wrapper>
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </Wrapper>
//   );
// }