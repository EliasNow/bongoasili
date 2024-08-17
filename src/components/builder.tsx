// we definitely don't need edge runtime here
// only if actually rendering or using server-side logic
"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  // Determine if the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();

  // Render the BuilderComponent if content exists or is being previewed
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }

  // Render a 404 error page if no content is found and not in preview mode
  return <DefaultErrorPage statusCode={404} />;
}
