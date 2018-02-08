import { Actions, State } from "../state";

export const App = (state: State, actions: Actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.downAsync(1)}>- async</button>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
    <button onclick={() => actions.upAsync(1)}>async +</button>
  </div>
);
