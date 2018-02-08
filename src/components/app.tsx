import { Actions } from "../state/actions";

export const App = (state, actions: Actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(2)}>-</button>
    <button onclick={() => actions.up(2)}>+</button>
    <button onclick={() => actions.upAsync(2)}>async +</button>
  </div>
);
