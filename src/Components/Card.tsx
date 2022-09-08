import React from "react";
import {
  CardActions,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import { Meal } from "../App";
import DetailsModal from "./Modal";
type PropTypes = {
  meal: Meal;
};

export default function RecipeCard({ meal }: PropTypes) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={meal.strMeal}
        height="fit"
        image={meal.strMealThumb}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meal.strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {meal.strInstructions.slice(0, 70)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          Details
        </Button>
        <DetailsModal open={open} setOpen={setOpen} meal={meal} />
      </CardActions>
    </Card>
  );
}
