import { configureStore} from "@reduxjs/toolkit";
import { cartReducer, customReducer } from "./Reducer";

const store = configureStore({
    reducer: {
        custom:customReducer,
        cartcustom:cartReducer,
    }
})
export default store;