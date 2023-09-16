import { createContext } from "react";
const StoreCreatorDetails = createContext({
  creator: {
    usrAddress: "",
    option: "",
  },
});

export default StoreCreatorDetails;
