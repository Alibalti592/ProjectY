import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: {},
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload.token;
      state.isLoading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    signIn: (state, action) => {
      state.isSignout = false;
      state.token = action.payload.token;
    },
    setProfileSetup: (state) => {
      state.isProfileSetup = true;
    },
    signOut: (state) => {
      state.isSignout = true;
      state.token = null;
    },
  },
});

export const { setUserToken, signIn, signOut, setProfileSetup, setUser } =
  authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectUserToken = (state) => state.auth.token;
export const checkToken = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
    dispatch(setUserToken({ token }));
  } catch (error) {
    console.error("Error checking token:", error);
  }
};

export default authSlice.reducer;
