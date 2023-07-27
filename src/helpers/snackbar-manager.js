import { useSnackbar } from "notistack";

let useSnackbarRef;
export const SnackbarUtilitiesConfigutator = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarUtilities = {
  toast(message, variant) {
    useSnackbarRef.enqueueSnackbar(message, { variant });
  },
  success(message) {
    this.toast(message, "success");
  },
  error(message) {
    this.toast(message, "error");
  },
 
};
