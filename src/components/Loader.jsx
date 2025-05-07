import React from "react";
import { Grid } from "@mui/material";

export function Loader() {
  return (
    <div className="p-6 max-w-5xl mx-auto animate-pulse bg-wh">
      {/* Skeleton for PropertyCard */}
      <div className="mb-8 bg-gray-300 h-48 w-full rounded-lg"></div>

      {/* Skeleton for Additional Details */}
      <div className="bg-gray-300 h-6 w-1/3 rounded mb-4"></div>
      <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-2/3 rounded mb-6"></div>

      {/* Skeleton for Property Features */}
      {/* <div className="bg-gray-300 h-6 w-1/4 rounded mb-4"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/3 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/4 rounded mb-6"></div> */}

      {/* Skeleton for Contact Information */}
      {/* <div className="bg-gray-300 h-6 w-1/4 rounded mb-4"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/3 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/4 rounded"></div> */}
    </div>
  );
}

export function LoaderCard() {
  return (
    <Grid container spacing={4} columns={12}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid size={{xs:12, sm:6, md:4}} key={index}>
          <div className="animate-pulse bg-gray-200 rounded-lg p-4">
            <div className="bg-gray-300 h-48 w-full rounded-lg mb-4"></div>
            <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
            <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
