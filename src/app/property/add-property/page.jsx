"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, Typography } from "@mui/material";

import { Form } from "../../../components/Form/Form";

export default function AddProperty() {
  // const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target, "event");

    // try {
    //   await addProperty(formData);
    //   setSuccess(true);
    //   setError("");
    //   setTimeout(() => {
    //     router.push("/");
    //   }, 2000);
    // } catch (err) {
    //   setError(err.message);
    // }
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
          />
        </CardContent>
      </Card>
 
    </div>
  );
}
