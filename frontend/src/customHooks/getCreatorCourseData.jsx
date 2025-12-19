
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { serverUrl } from "../App";
import { setCreatorCourseData } from "../redux/courseSlice";

const getCreatorCourseData = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    // 🔹 agar user hi nahi ya educator nahi hai -> API call hi mat karo
    if (!userData || userData.role !== "educator") {
      return;
    }

    const getCreatorData = async () => {
      try {
        const result = await axios.get(
          `${serverUrl}/api/course/getcreatorcourses`,
          { withCredentials: true }
        );

        dispatch(setCreatorCourseData(result.data));
        // console.log("creator courses:", result.data);
      } catch (error) {
        const status = error.response?.status;
        const msg =
          error.response?.data?.message || "Failed to load creator courses";

        // 🔹 agar 400/401 hai -> expected (not educator / logged out)
        if (status === 400 || status === 401) {
          // sirf silently ignore karo
          return;
        }

        // 🔹 baaki sab real error
        console.error("getcreatorcourses error:", msg);
        toast.error(msg);
      }
    };

    getCreatorData();
  }, [userData, dispatch]);
};

export default getCreatorCourseData;
