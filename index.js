window.addEventListener("load", () => {
  const cvs = document.querySelector("canvas");
  const ctx = cvs.getContext("2d");
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;

  console.log("Yeap! I'm here!");
});
