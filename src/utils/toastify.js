import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastify = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
//* genel bir yerde <TostContainer/> eklemeyi unutmuyoruz.
