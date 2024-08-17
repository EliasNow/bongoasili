
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../../../components/builder";
import Wrapper from "@/layouts/Wrapper";

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
export const runtime = "edge";  // Ensure this route uses the Edge runtime

export const metadata = {
  title: "Family Safari: Tanzania",
  description: "Day by day description of a wonderful Tanzanian Family Safari."
};

export default async function HomePage() {
  const builderModelName = "page";
  const urlPath = "/family-safari-tanzania";
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