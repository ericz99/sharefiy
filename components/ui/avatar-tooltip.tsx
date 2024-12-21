import React from "react";
import Image from "next/image";

interface AvatarTooltipsProps {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}

export function AvatarTooltips({ items }: AvatarTooltipsProps) {
  return items.map((item, idx) => (
    <Image
      key={idx}
      height={100}
      width={100}
      src={item.image}
      alt={item.name}
      className="dark:border-gray-800 object-cover object-top rounded-full h-12 w-12 border-2 border-white relative transition duration-500 ring-2 ring-orange-300"
    />
  ));
}
