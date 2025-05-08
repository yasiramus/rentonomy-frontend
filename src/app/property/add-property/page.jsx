"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, Typography } from "@mui/material";

import { Form } from "../../../components/Form/Form";

export default function AddProperty() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate form data
    if (!formData.title || !formData.location || !formData.price) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    console.log(formData);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_PROPERTIES_API_URL}/properties`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Unable to add property. Please try again.");
      }

      setSuccess(true);
      setError("");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h1" className="mb-6 text-center">
            Add New Property
          </Typography>

          {/* Success Message */}
          {success && (
            <Typography
              variant="body1"
              className="text-green-500 mb-4 text-center"
            >
              Property added successfully!
            </Typography>
          )}

          {/* Error Message */}
          {error && (
            <Typography
              variant="body1"
              className="text-red-500 mb-4 text-center"
            >
              {error}
            </Typography>
          )}

          {/* Form */}
          <Form
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            error={error}
            loading={loading}
          />
        </CardContent>
      </Card>
    </div>
  );
}
