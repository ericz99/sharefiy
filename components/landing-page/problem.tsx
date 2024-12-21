import React from "react";
import Image from "next/image";

export function Problem() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 pt-12 lg:pt-24 relative flex flex-col w-full">
      <h1 className="text-4xl lg:text-5xl font-black mb-8 text-center">
        Over 90% of startups fail because founders never launch
      </h1>

      <p className="max-w-3xl mx-auto text-lg tracking-tight text-center font-light text-slate-500">
        Founders are heavily engaged in tasks like setting up landing pages,
        implementing authentication, integrating payment systems, and more.
      </p>

      <Image
        src={"/problem.svg"}
        alt="problem-v1"
        height="1442"
        width="2432"
        decoding="async"
        className="mt-12 p-4"
      />
    </div>
  );
}
