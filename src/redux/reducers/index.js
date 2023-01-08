import { combineReducers } from "redux";
import auth from "./authReducer";
import token from "./tokenReducer";
import users from "./usersReducer";
import alert from "./alert";
import doctor from "./doctor";
import appointment from "./appointment";
import ShopApp from "./MedicineShoping";

export default combineReducers({
  auth,
  token,
  users,
  alert,
  doctor,
  appointment,
  ShopApp,
});

const DATA = JSON.parse(localStorage.getItem("Data")) || {};

const initialState = {
  ...DATA,
};

function appointments(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_APPOINTMENT":
      if (!state[action.date]) {
        state[action.date] = {
          [action.fromTime]: action.userData,
        };
      } else {
        state[action.date][action.fromTime] = action.userData;
      }
      localStorage.setItem("Data", JSON.stringify(state));
      return {
        ...state,
      };

    default:
      return state;
  }
}

export { appointments };
