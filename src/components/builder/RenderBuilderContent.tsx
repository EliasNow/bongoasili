// chatgpt says I need this to render builder.io content
// import { BuilderComponent } from '@builder.io/react';

// interface RenderBuilderContentProps {
//   content: any;
//   model: string;
// }

// export const RenderBuilderContent: React.FC<RenderBuilderContentProps> = ({ content, model }) => {
//   if (!content) {
//     return <div>Content not found</div>;
//   }
//   return <BuilderComponent model={model} content={content} />;
// };

"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent(props: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} />;
  }

  return null;
}