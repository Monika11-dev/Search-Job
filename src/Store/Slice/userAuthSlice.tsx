import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

interface stringObject {
  username : string,
  email: string,
  password ?: string,
}

interface ExistingUserState {
  existingUser: stringObject[];  
  currentUser: string;
  currentEmail: string;
}

const initialState: ExistingUserState = {
  existingUser: JSON.parse(localStorage.getItem("SearchJobuser") as string) || [],
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
  }
    
  },
})

export const userActions = userAuthSlice.actions;

export default userAuthSlice.reducer;