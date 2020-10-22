import { ActionsEnum, ActionsType } from "../types";

export function helloWorldAction(name: string): ActionsType {
  return {
    payload: name,
    type: ActionsEnum.NAME,
  };
}
