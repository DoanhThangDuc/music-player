import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./features/songsSlice";
import actionsReducer from "./features/actionsSlice";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    actions: actionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
