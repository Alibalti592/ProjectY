import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isProfileSetup: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;
    },
    setProfileSetup: (state) => {
      state.isProfileSetup = true;
    },
    deleteUser: (state) => {
      state.token = null;
      state.isProfileSetup = false;
    },
  },
});

export const { loginSuccess, logout, setProfileSetup, deleteUser } =
  authSlice.actions;

export const checkToken = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      // If token exists, dispatch loginSuccess with token from action payload
      dispatch(loginSuccess({ token: token }));
    } else {
      // If token doesn't exist, dispatch logout
      dispatch(logout());
    }
  } catch (error) {
    console.error("Error checking token:", error);
    // If error occurs, dispatch logout
    dispatch(logout());
  }
};

export default authSlice.reducer;
