//step 1
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//step 2
export const recipeApi = createApi({
  reducerPath: "recipeApi", //any name
  //step 3
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/", //base domain
  }),
  //step 4
  endpoints: (builder) => ({
    //step 5
    getRecipes: builder.mutation({
      //receiving parameter, step 5
      query: ({ query }) => {
        return {
          url: `search.php?s=${query}`,
          method: "get",
        };
      },
    }),
  }),
});

//step 6
//getRecipes expose a new hook, give convinent name
export const { useGetRecipesMutation } = recipeApi;
