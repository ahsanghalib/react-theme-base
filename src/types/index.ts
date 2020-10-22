// Store
export type AppMainStore = {
  // loading: boolean;
  // token: string;
  // isAdmin: boolean;
  // user: {}
  name: string;
};

// State
export type AppStateType = {
  mainStore: AppMainStore;
};

// Actions
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export enum ActionsEnum {
  NAME = "NAME",
}

type Payloads = {
  [ActionsEnum.NAME]: string;
};

export type ActionsType = ActionMap<Payloads>[keyof ActionMap<Payloads>];
