"use client";

import React from "react";
import { ClientTweetCard } from "../ui/client-tweet-card";

interface ReviewsColumnsProps {
  tweets?: string[];
  components?: React.ReactNode[];
}

export function ReviewsColumns({ tweets, components }: ReviewsColumnsProps) {
  if (!tweets && !components) {
    throw new Error("Either tweets or components must be in props.");
  }

  return (
    <div className="max-w-7xl mx-auto my-12 p-8" id="reviews">
      <div className="mb-24 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl font-bold text-center">
          Join the other 350 makers building their next SaaS.
        </h1>

        <p className="text-zinc-600 text-base">
          They earned their first dollar online, and some even ditched the 9-5
          grind!
        </p>
      </div>

      <ul className="md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6 ">
        {tweets &&
          tweets.map((tweet) => (
            <li
              key={tweet}
              className="break-inside-avoid max-md:flex justify-center"
            >
              <ClientTweetCard id={tweet} />
            </li>
          ))}

        {components &&
          components.map((component, idx) => (
            <li
              key={idx}
              className="break-inside-avoid max-md:flex justify-center"
            >
              {component}
            </li>
          ))}
      </ul>
    </div>
  );
}
