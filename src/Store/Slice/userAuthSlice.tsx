import { createSlice } from "@reduxjs/toolkit";
import { IExistingUserState, IUserDetail, IErrors } from "../../type/type";

const initialState: IExistingUserState = {
  existingUser: JSON.parse(localStorage.getItem("SearchJobuser") as string) || [],
  existingProfile: JSON.parse(localStorage.getItem("SearchJobProfile") as string) || [],
  currentUser: JSON.parse(localStorage.getItem("currentSearchJobUser") as string) || "",
  currentEmail: JSON.parse(localStorage.getItem("currentSearchJobEmail") as string) || "",
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    registerUser(state, action) {
      const newUser: IUserDetail = action.payload;
      const emailExists = state.existingUser.find(
        (user: IUserDetail) => user.email === newUser.email
      );
      if (emailExists) {
        alert("Email already exist");
        return;
      };

      state.existingUser = [...state.existingUser, newUser];
      localStorage.setItem("SearchJobuser", JSON.stringify(state.existingUser));
      localStorage.setItem(
        "currentSearchJobUser",
        JSON.stringify(newUser.username)
      );
      localStorage.setItem(
        "currentSearchJobEmail",
        JSON.stringify(newUser.email)
      );
      state.currentUser = newUser.username;
      state.currentEmail = newUser.email;
    },

    loginUser(state, action) {
      const loginUser: IUserDetail = action.payload;
      const user = state.existingUser.find(
        (user: IUserDetail) =>
          user.email === loginUser.email && user.password === loginUser.password
      );
      if (user) {
        localStorage.setItem(
          "currentSearchJobUser",
          JSON.stringify(user.username)
        );
        localStorage.setItem(
          "currentSearchJobEmail",
          JSON.stringify(user.email)
        );
        state.currentUser = user.username;
        state.currentEmail = user.email;
      } else {
        alert("Invalid email or password. Please try again");
      }
    },

    logoutUser(state) {
      localStorage.removeItem("currentSearchJobUser");
      localStorage.removeItem("currentSearchJobEmail");
      state.currentUser = "";
      state.currentEmail = "";
    },

    updateProfile(state, action) {
      const userProfile = action.payload;
      const emailExists = state.existingProfile.find((user: IErrors) => user.email === userProfile.email );
      if (emailExists) {
        const updatedProfile = state.existingProfile.map((item: IErrors) =>
          item.email === userProfile.email
            ? {
                ...item,
                firstname: userProfile.firstname,
                lastname: userProfile.lastname,
                title: userProfile.title,
                languages: userProfile.languages,
                current: userProfile.current,
                expected: userProfile.expected,
                message: userProfile.message,
                mobile: userProfile.mobile,
                country: userProfile.country,
                state: userProfile.state,
                pincode: userProfile.pincode,
                street: userProfile.street,
                degree: userProfile.degree,
                university: userProfile.university,
                grade: userProfile.grade,
                year: userProfile.year,
                designation: userProfile.designation,
                employment: userProfile.employment,
                company: userProfile.company,
                location: userProfile.location,
                skill1: userProfile.skill1,
                skill2: userProfile.skill2,
              }
            : item
        );
        localStorage.setItem(
          "SearchJobProfile",
          JSON.stringify(updatedProfile)
        );
        alert("Your profile is successfully updated");
        return;
      }
      state.existingProfile.push(userProfile);
      localStorage.setItem(
        "SearchJobProfile",
        JSON.stringify(state.existingProfile)
      );
      alert("Your profile is successfully updated");
    },
  },
});

export const userActions = userAuthSlice.actions;

export default userAuthSlice.reducer;
