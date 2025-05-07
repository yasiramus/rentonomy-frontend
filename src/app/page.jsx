"use client";
import Link from "next/link";

import { Grid } from "@mui/material";

import { useProperties } from "../service";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LoaderCard } from "../components/Loader";
import { PropertyCard } from "../components/PropertyCard";
import { useUserRole } from "../utility";

export default function Home() {
  const { properties, isLoading, isError } = useProperties("properties");

  const role = useUserRole(); // Get the user role from local storage

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex-grow p-8">
        {/* Hero Section */}
        <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 rounded-lg shadow-lg mb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Your Dream Home Awaits
            </h1>
            <p className="text-base sm:text-lg mt-4">
              Explore a wide range of properties tailored to your needs. Start
              your journey to a better living experience today.
            </p>
            <Link href="#property-listings">
              <button className="cursor-pointer mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300">
                Explore Now
              </button>
            </Link>
          </div>
        </section>
        <section id="property-listings">
          <h2 className="text-2xl font-bold text-white mb-6">
            Available Properties
          </h2>
          {/* Skeleton Loader */}
          {isLoading && <LoaderCard />}

          {/* Error State */}
          {isError && (
            <div className="text-center text-red-500 font-semibold">
              Failed to load properties. Please try again later.
            </div>
          )}

          {/* Properties Grid */}
          {!isLoading && !isError && properties?.length > 0 && (
            <Grid container spacing={4}>
              {properties.map(({ id, image, title, location, price }) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
                  <Link href={`/property/${id}`}>
                    <PropertyCard
                      image={image || "/cozy.webp"}
                      title={title}
                      location={location}
                      price={price}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </section>

        {/* Show Add Property Button for Managers */}
        {role === "manager" && (
          <div className="text-center mt-8">
            <Link href="/property/add-property">
              <button className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
                Add New Property
              </button>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
