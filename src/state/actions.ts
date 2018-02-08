import { State } from "./index";

export type Actions = {
  up: (value: number) => any;
  upAsync: (value: number) => any;
  down: (value: number) => any;
  downAsync: (value: number) => any;
};

export const actions = {
  //Up
  up: value => (state: State) => ({ count: state.count + value }),
  upAsync: value => async (state: State, actions: Actions) =>
    setTimeout(() => actions.up(value), 1000),
  //Down
  down: value => (state: State) => ({ count: state.count - value }),
  downAsync: value => async (state: State, actions: Actions) =>
    setTimeout(() => actions.down(value), 1000)
};
