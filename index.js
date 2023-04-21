window.addEventListener("load", () => {
  const cvs = document.querySelector("canvas");
  const ctx = cvs.getContext("2d");
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;

  // Debug
  // console.log(ctx);
  // vertical line
  const lineColor = "#62ee0c";
  ctx.lineWidth = 3;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.moveTo(cvs.width / 2, 0);
  ctx.lineTo(cvs.width / 2, cvs.height);
  ctx.stroke();

  // horizontal line
  ctx.lineWidth = 3;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.moveTo(0, cvs.height / 2);
  ctx.lineTo(cvs.width, cvs.height / 2);
  ctx.stroke();

  // Screen text
  const inputText = document.querySelector("input");
  const textX = cvs.width / 2;
  const textY = cvs.height / 2;
  ctx.fillStyle = "#ffc300";
  ctx.strokeStyle = "#ee340c";

  ctx.font = "90px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(inputText, textX, textY);
  ctx.strokeText(inputText, textX, textY);

  const textMaxWidth = cvs.width * 0.5;
  const lineHeight = 100;

  //  console.log(`textMaxWidth: ${textMaxWidth}`);
  function textWrapper(text) {
    let line = "";
    let linesArray = [];
    let lineCounter = 0;
    let words = text.split(" ");
    words.forEach((word) => {
      let testLine = `${line}${word} `;
      if (ctx.measureText(testLine).width > textMaxWidth) {
        line = `${word} `;
        lineCounter++;
      } else {
        line = testLine;
      }
      linesArray[lineCounter] = line;
    });
    //  console.log(`testLine: ${ctx.measureText(testLine).width}`);
    let textHeight = lineHeight * lineCounter;
    let textY = cvs.height / 2 - textHeight / 2;
    linesArray.forEach((el, index) => {
      ctx.fillText(el, cvs.width / 2, textY + index * lineHeight);
    });
    console.log(linesArray);
  }

  inputText.addEventListener("keyup", (e) => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    textWrapper(e.target.value.toUpperCase());
  });

  //   console.log("Yeap! I'm here!");
});
