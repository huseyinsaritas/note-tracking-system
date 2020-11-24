import { Reducer } from "redux";
import IAction from "../model/IAction";
import IUserState, { initialUserState } from "../model/IUserState";
import * as USER_ACTIONS from "../actionType/user";

const userReducer: Reducer<IUserState, IAction> = (state: IUserState = initialUserState, action: IAction): IUserState => {
  switch (action.type) {
    /**
     *
     * Auths
     *
     */
    case USER_ACTIONS.LOGGED:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
  }
  return initialUserState;
};

export default userReducer;
