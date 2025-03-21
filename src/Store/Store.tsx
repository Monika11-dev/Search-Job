import { configureStore } from "@reduxjs/toolkit";
import { userAuthSlice } from "./Slice/userAuthSlice";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { appliedJobsSlice } from "./Slice/appliedJobsSlice";
import { FiltersSlice } from "./Slice/FiltersSlice";

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice.reducer,
    userJobs: appliedJobsSlice.reducer,
    jobsFilter: FiltersSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
