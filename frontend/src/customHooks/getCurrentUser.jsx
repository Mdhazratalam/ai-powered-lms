

import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

const getCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          `${serverUrl}/api/user/currentuser`,
          { withCredentials: true }
        );

        // user mila -> redux me set karo
        dispatch(setUserData(result.data));
        // console.log("currentuser success:", result.data);
      } catch (error) {
        const status = error.response?.status;

        // 🔹 Logout / no token / unauthorised -> expected
        if (status === 400 || status === 401) {
          dispatch(setUserData(null));   // user logged out state
          return;                        // console me error mat dikhhao
        }

        // 🔹 koi aur real problem (500, network, etc.)
        console.error(
          "currentuser error:",
          error.response?.data || error.message
        );
        dispatch(setUserData(null));
      }
    };

    fetchUser();
  }, [dispatch]);
};

export default getCurrentUser;
