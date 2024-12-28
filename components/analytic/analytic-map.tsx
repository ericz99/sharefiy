"use client";

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

type GeoAnalytics = {
  countries: { [key: string]: number };
  regions: { [key: string]: number };
  cities: { [key: string]: number };
};

interface AnalyticMapProps {
  geoAnalytics: GeoAnalytics;
}

const countryNameMap: { [key: string]: string } = {
  "United States": "United States of America",
};

export default function AnalyticMap({ geoAnalytics }: AnalyticMapProps) {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className="relative border border-solid border-gray-200 rounded-lg">
      <div className="flex gap-2 p-4 border-b border-solid border-gray-200">
        <p className="font-bold text-gray-500">Map</p>
      </div>

      <ComposableMap projectionConfig={{ scale: 165, center: [20, -10] }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const geoCountryName = geo.properties.name;
              const countryName =
                countryNameMap[geoCountryName] || geoCountryName;
              const countryData = geoAnalytics.countries[countryName] || 0;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${countryName}: ${countryData}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: countryData ? "#F53" : "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <div
          className="tooltip"
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "3px",
            pointerEvents: "none",
            top: "10px",
            right: "10px",
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
}
