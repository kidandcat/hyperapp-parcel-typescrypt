import { app, h } from "hyperapp";
import { actions, state } from "./state";
import { App } from "./components";

// Set h as global function (TypeScript only)
window.h = h;

app(state, actions, App, document.body);
