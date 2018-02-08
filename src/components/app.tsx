export const App = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(2)}>-</button>
    <button onclick={() => actions.up(2)}>+</button>
  </div>
);
