export type Actions = {
  down: Function;
  up: Function;
  upAsync: Function;
};

export const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
  upAsync: value => async (state, actions: Actions) =>
    setTimeout(() => actions.up(value), 1000)
};
