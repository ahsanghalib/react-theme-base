import produce from "immer";
import { ActionsEnum, ActionsType, AppMainStore } from "../types";

export const initialState: AppMainStore = {
  name: "",
};

export function Reducer(state = initialState, action: ActionsType) {
  switch (action.type) {
    case ActionsEnum.NAME:
      return produce(state, (draft) => {
        draft.name = action.payload;
      });
    default:
      return state;
  }
}
