import React, { useEffect, useState } from "react";
import { useGetRecipesMutation } from "./services/recipeApi";
import Navbar from "./Components/Navbar";
import { Container, Grid, Skeleton, Stack, Typography } from "@mui/material";
import RecipeCard from "./Components/Card";

export interface Meal {
  strMeal: string;
  idMeal: string;
  strMealThumb: string;
  strInstructions: string;
}
const style = {
  padding: "2rem 1rem",
  marginTop: "1rem",
  border: "2px solid rgba(201, 214, 228, 0.2)",
  borderRadius: "10px",
  boxShadow: "2px 5px 15px rgba(0,0,0,0.2)",
};
function App() {
  const [query, setQuery] = useState<string>("");
  // eslint-disable-next-line
  const [getRecipes, { isLoading, data }] = useGetRecipesMutation();
  useEffect(() => {
    const getFoodRecipes = async () => {
      await getRecipes({ query }); //must be same name
    };
    getFoodRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <>
      <Navbar search={query} setSearch={setQuery} />
      <Container>
        <Typography sx={{ margin: "2rem 0", fontSize: "2rem" }}>
          Check Our Recipe
        </Typography>
        <Grid container spacing={2}>
          {data ? (
            data &&
            data?.meals?.map((meal: Meal) => (
              <Grid item xs={6} md={4} key={meal.idMeal}>
                <RecipeCard meal={meal} />
              </Grid>
            ))
          ) : (
            <Grid item xs={6} md={4}>
              <Stack spacing={1} sx={style}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="100%"
                  height={80}
                />
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width="30%"
                />
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default App;
