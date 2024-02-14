"use client";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = () => {
  "use client";
  return (
    <ToastContainer
      theme="colored"
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Bounce}
      className={"z-50 absolute"}
    />
  );
};

export default CustomToast;
