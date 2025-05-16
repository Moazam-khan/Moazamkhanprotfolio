'use client';

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import ExportedImage from "next-image-export-optimizer";

export default function Right() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-white/[0.2] border-white/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full mt-2">
          <ExportedImage
            src="/assets/hero/moazam.jpg"  // Correct path without /public
            alt="Your Image Description"
            height={1000}                   // Use integer values for height
            width={1000}                    // Use integer values for width
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
