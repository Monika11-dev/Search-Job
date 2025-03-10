import { createSlice } from "@reduxjs/toolkit";

interface idObj {
  id: string;
  userEmail: string;
}

interface AppliedJobs {
  jobs: idObj[];
}

const initialState: AppliedJobs = {
  jobs: JSON.parse(localStorage.getItem("ApppliedJobs") as string) || [],
};

export const appliedJobsSlice = createSlice({
  name: "userJobs",
  initialState,
  reducers: {
    applyJobs(state, action) {
      const jobDetail = action.payload;
      const idExists = state.jobs.find((job) => job.id === jobDetail.id);
      if (idExists) {
        alert("You have already applied");
        return;
      };

      state.jobs = [...state.jobs, jobDetail];
      console.log(state.jobs);
      localStorage.setItem("ApppliedJobs", JSON.stringify(state.jobs));
      alert("Successfully Applied !");
    },
  },
});

export const jobsActions = appliedJobsSlice.actions;

export default appliedJobsSlice.reducer;
