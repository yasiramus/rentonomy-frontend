"use client";
import Link from "next/link";

import { Grid } from "@mui/material";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PropertyCard } from "../components/PropertyCard";
import { useProperities } from "../service/useProperities";

export default function Home() {
  const { properties, isLoading, isError } = useProperities();

  console.log(properties, "properties");

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
          <Grid container spacing={4} columns={12}>
            {properties?.map(({ id, image, name, location, price }, index) => (
              <Grid size={4} key={index}>
                <Link href={`/property/${id}`}>
                  <PropertyCard
                    image={"/cozy.webp"}
                    title={name}
                    location={location}
                    price={"100USD"}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </section>
      </main>
      <Footer />
    </div>
  );
}
