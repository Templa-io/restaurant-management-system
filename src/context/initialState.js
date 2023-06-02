import { fetcUser } from "../utils/fetchLocalStorageData";

const userInfo = fetcUser()

export const initialState = {
    user: userInfo,
    foodItems : null,
};