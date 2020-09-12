import { types } from "mobx-state-tree";

export const UI = types
  .model({
    isMenuOpen: types.boolean
  })
  .actions(self => ({
    setMenuOpen(val: boolean) {
      self.isMenuOpen = val;
    }
  }));
