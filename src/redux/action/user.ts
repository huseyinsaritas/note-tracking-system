import * as USER_ACTIONS from "../actionType/user";
import IAction from "../model/IAction";

export const logged = (information: boolean): IAction => ({
  type: USER_ACTIONS.LOGGED,
  payload: information,
});
