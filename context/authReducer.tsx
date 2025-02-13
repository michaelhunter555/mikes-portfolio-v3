import { AuthAction, AuthState } from "./auth-context";
import { AuthActionTypes } from "./authActions";

export const initialState: AuthState = {
  isLoggedIn: false,
  userId: null,
  accountType: null,
  theme: "dark",
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        userId: action.userId,
        isLoggedIn: action.isLoggedIn,
        accountType: action.accountType,
        theme: action.theme,
      };
    case AuthActionTypes.LOGOUT:
      return initialState;
    case AuthActionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};
