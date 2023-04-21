import { Effect } from "./src/Effect.js";
import { Particle } from "./src/Particle.js";

window.addEventListener("load", () => {
  const cvs = document.querySelector("canvas");
  const ctx = cvs.getContext("2d");
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;

  const effect = new Effect(ctx, cvs.width, cvs.height);
  effect.textWrapper("DEBUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG!!!!");
  //  console.log(effect);
});
