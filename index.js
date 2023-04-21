import { Effect } from "./src/Effect.js";

window.addEventListener("load", () => {
  const cvs = document.querySelector("canvas");
  const ctx = cvs.getContext("2d");
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;

  const effect = new Effect(ctx, cvs.width, cvs.height);
  effect.textWrapper("TYPE YOUR TEXT IN THE TEXT INPUT");
  effect.render();

  function animate() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    effect.render();
    requestAnimationFrame(animate);
    // console.log("animation");
  }
  animate();
});
