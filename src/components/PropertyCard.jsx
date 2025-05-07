import React from "react";
import PropTypes from "prop-types";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

// Prop validation
PropertyCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export function PropertyCard({ image, title, location, price }) {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
      
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" className="font-bold text-gray-900">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-900">
          {location}
        </Typography>
        <Typography variant="body1" className="text-blue-500 font-medium">
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}
