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
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardContent>
        <Typography variant="body1" noWrap className="font-bold text-gray-900">
          {title}
        </Typography>
        <Typography variant="body2" noWrap className="text-gray-600">
          {location}
        </Typography>
        <Typography variant="body1" noWrap className="text-blue-400">
          GHC {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
