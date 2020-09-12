import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";
import { useStaticRendering } from "mobx-react-lite";
import { Counter } from "./Counter";
import { Cart } from "./Cart";
import { UI } from "./UI";

const isServer = typeof window === 'undefined';
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

const RootModel = types.model({
  counter: Counter,
  cart: Cart,
  ui: UI,
});

export const rootStore = RootModel.create({
  counter: {
    count: 0
  },
  cart: { items: [] },
  ui: {
    isMenuOpen: false
  }
});

onSnapshot(rootStore, snapshot => console.log("Snapshot: ", snapshot));

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
