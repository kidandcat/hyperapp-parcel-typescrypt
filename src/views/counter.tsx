// @jsxFactory h
import { h, app } from "hyperapp";
import { Button } from "../components/Button";

const state = {
  count: 0
};

const actions = {
  up: value => state => ({ count: state.count + value }),
  upAsync: value => async (state, actions) =>
    setTimeout(() => actions.up(value), 1000),
  down: value => state => ({ count: state.count - value }),
  downAsync: value => async (state, actions) =>
    setTimeout(() => actions.down(value), 1000)
};

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <Button text="- async" action={actions.downAsync} />
    <Button text="-" action={actions.down} />
    <Button text="+" action={actions.up} />
    <Button text="async +" action={actions.upAsync} />
  </div>
);

app(state, actions, view, document.querySelector("#counter"));
