import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
//step 1
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { recipeApi } from "../services/recipeApi";

export const store = configureStore({
  reducer: {
    //step 2
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  //step 3
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
//step 4
setupListeners(store.dispatch);
