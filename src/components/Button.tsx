import { h } from "hyperapp";

export const Button = ({ text, action }) => (
  <button onclick={() => action(1)}>{text}</button>
);
