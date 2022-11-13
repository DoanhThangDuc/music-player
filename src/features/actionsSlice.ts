import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  isPlaying: boolean;
  isRandom: boolean;
  isLooping: boolean;
  progressValue: number;
}

const actionsSlice = createSlice({
  name: "actions",
  initialState: {
    isPlaying: false,
    isRandom: false,
    isLooping: false,
    progressValue: 0,
  } as initialState,
  reducers: {
    setIsPlaying: (state: initialState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isPlaying: action.payload,
      };
    },
    setIsRandom: (state: initialState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isPlaying: action.payload,
      };
    },
    setIsLooping: (state: initialState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isPlaying: action.payload,
      };
    },
    setProgressValue: (state: initialState, action: PayloadAction<number>) => {
      return {
        ...state,
        progressValue: action.payload,
      };
    },
  },
});

export const { setIsLooping, setIsPlaying, setIsRandom, setProgressValue } =
  actionsSlice.actions;
export default actionsSlice.reducer;
