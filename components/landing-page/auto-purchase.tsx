"use client";

import { cn } from "@/lib/utils";
import { TicketCheck } from "lucide-react";
import React, { useState, useEffect } from "react";

const citiesAndStates = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
];

const productNames = ["Lite", "All In"];

export function AutoPurchase() {
  const [visible, setVisible] = useState(true);
  const [popup, setPopup] = useState<{
    product: string;
    place: string;
    time: string;
  }>({
    product: "Lite",
    place: "New York, NY",
    time: "just now",
  });

  useEffect(() => {
    let index = 0;

    const getRandomTimeAgo = () => {
      const hoursAgo = Math.floor(Math.random() * 24) + 1; // Random hours between 1 and 24
      return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
    };

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPopup({
          product: productNames[index % productNames.length],
          place: citiesAndStates[index % citiesAndStates.length],
          time: getRandomTimeAgo(),
        });
        setVisible(true);
        index++;
      }, 500); // Time for the component to stay hidden before reappearing
    }, 5500); // Total cycle time for visibility and transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "z-10 fixed bottom-4 left-4 p-4 bg-white text-black border-zinc-200 border border-solid rounded-lg shadow-lg transition-all duration-500 ease-in-out transform",
        visible ? "opacity-100 translate-y-0" : "translate-y-20"
      )}
    >
      <div className="flex items-center justify-center">
        <TicketCheck className="mr-2" size={18} color="#76c893" />
        <p className="text-sm text-[#76c893] font-bold">
          Someone from {popup.place} just bought {popup.product} {popup.time}!
          😊
        </p>
      </div>
    </div>
  );
}
