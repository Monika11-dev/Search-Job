import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

interface stringObject {
  username : string,
  email: string,
  password ?: string,
}

interface Profile {
  firstname: string,
  lastname: string,
  title: string,
  languages: string,
  current: string,
  expected: string,
  message: string,
  mobile: string,
  email: string,
  country: string,
  state: string,
  pincode:string,
  street:string,
  degree:string,
  university:string,
  grade:string,
  year:string,
  designation:string,
  employment:string,
  company:string,
  location:string,
  skill1:string,
  skill2: string, 
}


interface ExistingUserState {
  existingUser: stringObject[]; 
  existingProfile: Profile[];
  currentUser: string;
  currentEmail: string;
}

const initialState: ExistingUserState = {
  existingUser: JSON.parse(localStorage.getItem("SearchJobuser") as string) || [],
  existingProfile: JSON.parse(localStorage.getItem("SearchJobProfile") as string) || [],
  currentUser: JSON.parse(localStorage.getItem("currentSearchJobUser") as string) || '',
  currentEmail: JSON.parse(localStorage.getItem("currentSearchJobEmail") as string) || '',
}

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {

    registerUser(state, action) {
      
      const newUser:stringObject = action.payload;
  
      const emailExists = state.existingUser.find(
        (user:stringObject) => user.email === newUser.email
      );

      if (emailExists) {
        alert("Email already exist");
        return;
      }

      state.existingUser = [...state.existingUser, newUser];
      console.log(state.existingUser);
      localStorage.setItem("SearchJobuser", JSON.stringify(state.existingUser));
      localStorage.setItem("currentSearchJobUser",JSON.stringify(newUser.username));
      localStorage.setItem("currentSearchJobEmail",JSON.stringify(newUser.email));
      state.currentUser = newUser.username;
      state.currentEmail = newUser.email; 
      alert("Account Created !");
      
    },

    loginUser(state,action){
      const loginUser:stringObject = action.payload;
     
      const user = state.existingUser.find(
        (user:stringObject)=>user.email === loginUser.email && 
        user.password === loginUser.password);
  
      if(user){
          localStorage.setItem("currentSearchJobUser",JSON.stringify(user.username));
          localStorage.setItem("currentSearchJobEmail",JSON.stringify(user.email));
          state.currentUser = user.username;
          state.currentEmail = user.email; 
          alert('Redirecting to the home page.');
          
      }
      else {
          alert("Invalid email or password. Please try again");       
      }
  },
    
  logoutUser(state){
      localStorage.removeItem("currentSearchJobUser");
      localStorage.removeItem("currentSearchJobEmail");
      state.currentUser = '';
      state.currentEmail = '';
      alert("You have been logged out.");
  },
  updateProfile(state,action){
    const userProfile = action.payload;  
    if(state.currentEmail === userProfile.email){
      const updatedProfile = state.existingProfile.map((item:Profile) =>
        item.email === userProfile.email
          ? { ...item, name: userProfile.name , email : userProfile.email, mobile :userProfile.mobile,location : userProfile.location }
          : item
      );
      localStorage.setItem("SearchJobProfile", JSON.stringify(updatedProfile));
        return;
    }
    state.existingProfile.push(userProfile);
    localStorage.setItem("SearchJobProfile", JSON.stringify(state.existingProfile));
  }
    
  },
})

export const userActions = userAuthSlice.actions;

export default userAuthSlice.reducer;