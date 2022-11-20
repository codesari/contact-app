import { toast } from "react-toastify";

export const toastify = (msg) => {
  toast(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
//* genel bir yerde <TostContainer/> eklemeyi unutmuyoruz.
