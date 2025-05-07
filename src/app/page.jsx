"use client";
import Link from "next/link";

import { Grid } from "@mui/material";

import { useProperties } from "../service";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LoaderCard } from "../components/Loader";
import { PropertyCard } from "../components/PropertyCard";

export default function Home() {
  const { properties, isLoading, isError } = useProperties("properties");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex-grow p-8">
        {/* Hero Section*/}
        <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 rounded-lg shadow-lg mb-12">
          <h1 className="text-5xl font-extrabold">Your Dream Home Awaits</h1>
          <p className="text-lg mt-4">
            Explore a wide range of properties tailored to your needs. Start
            your journey to a better living experience today.
          </p>
          <Link href="#property-listings">
            <button className="cursor-pointer mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100">
              Explore Now
            </button>
          </Link>
        </section>
        {/* Property Listings */}
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
            <Grid container spacing={4} columns={12}>
              {properties.map(({ id, image, name, location, price }) => (
                <Grid size={4} key={id}>
                  <Link href={`/property/${id}`}>
                    <PropertyCard
                      image={image || "/cozy.webp"}
                      title={name}
                      location={location}
                      price={price + " USD"}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
