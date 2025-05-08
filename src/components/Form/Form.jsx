import React from "react";

import {  CircularProgress } from "@mui/material";

import { Field } from "./Field";
import { predefinedLocations } from "../../utility/index";

export function Form({ formData, onChange, onSubmit, error, loading }) {

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Field
        label="Title"
        name="title"
        value={formData.title}
        onChange={onChange}
        required
        placeholder="Enter title"
      />
      <Field
        label="Location"
        name="location"
        type="select"
        options={predefinedLocations}
        value={formData.location}
        onChange={onChange}
        required
        placeholder="Enter location"
      />
      <Field
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={onChange}
        required
        placeholder="Enter price"
      />
      <Field
        label="Description"
        name="description"
        type="textarea"
        value={formData.description}
        onChange={onChange}
        placeholder="Enter description"
      />
      <Field
        label="Image"
        name="image"
        value={formData.image}
        onChange={onChange}
        placeholder="Image URL"
      />
      <button
        type="submit"
        className="cursor-pointer w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        disabled={loading}
        style={{
          backgroundColor: loading ? "#ccc" : "#3b82f6",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
       {loading ? (
          <CircularProgress size={24} className="text-white" />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
