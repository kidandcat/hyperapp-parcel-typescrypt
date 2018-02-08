import { State } from "./index";

export type Actions = {
  up: (value: number) => any;
  upAsync: (value: number) => any;
  down: (value: number) => any;
};

export const actions = {
  down: value => (state: State) => ({ count: state.count - value }),
  up: value => (state: State) => ({ count: state.count + value }),
  upAsync: value => async (state: State, actions: Actions) =>
    setTimeout(() => actions.up(value), 1000)
};
