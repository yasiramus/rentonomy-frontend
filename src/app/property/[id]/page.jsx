"use client";
import React from "react";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

import { useProperties } from "../../../service";
import { Loader } from "../../../components/Loader";
import { PropertyCard } from "../../../components/PropertyCard";

export default function PropertyDetails({ params }) {
  const { id } = React.use(params);

  const router = useRouter();

  const { properties, isLoading, isError } = useProperties(`properties/${id}`);

  // Handle loading state
  if (isLoading) {
    return <Loader />;
  }

  // Handle error state
  if (isError || !properties) {
    notFound();
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <PropertyCard
          image={properties?.image || "/cozy.webp"}
          title={properties?.title}
          location={properties?.location}
          price={properties?.price || properties?.Prce}
          className="!h-48 w-full object-cover rounded-lg"
        />
      </div>

      {/* Additional Details */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Property Details
        </h2>
        <p className="text-gray-800 mb-2">
          <span className="font-semibold">Description:</span>{" "}
          {properties?.description || "No description available."}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Location:</span>{" "}
          {properties?.location || "Location not specified."}
        </p>
        <iframe
          src={`https://www.google.com/maps?q=${properties?.location}&output=embed`}
          className="w-full h-64 rounded-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <button
        onClick={() => router.push("/")}
        className="cursor-pointer mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Listings
      </button>
    </div>
  );
}
