import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastifyAlert({ text}) {
  useEffect(() => {
    toast.error(text, {
        toastId: '123444'
    });
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default ToastifyAlert;
