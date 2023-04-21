export class Effect {
  constructor(ctx, cvsWidth, cvsHeight) {
    this.ctx = ctx;
    this.cvsWidth = cvsWidth;
    this.cvsHeight = cvsHeight;
    this.textX = this.cvsWidth / 2;
    this.textY = this.cvsHeight / 2;
    this.fontSize = 100;
    this.lineHeight = this.fontSize * 0.9;
    this.textMaxWidth = this.cvsWidth * 0.4;
    this.inputText = document.querySelector("input");
    this.inputText.addEventListener("keyup", (e) => {
      if (e.key !== " ") {
        this.ctx.clearRect(0, 0, this.cvsWidth, this.cvsHeight);
        this.textWrapper(e.target.value.toUpperCase());
      }
    });
  }
  textWrapper(text) {
    // Setting
    const gradient = this.ctx.createLinearGradient(
      0,
      0,
      this.cvsWidth,
      this.cvsHeight
    );
    gradient.addColorStop(0.2, "#e8ff00");
    gradient.addColorStop(0.4, "#ff0000");
    gradient.addColorStop(0.6, "#ee0c3c");
    gradient.addColorStop(0.8, "#ff00d1");
    gradient.addColorStop(0.9, "#001fff");
    this.ctx.fillStyle = gradient;

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    this.ctx.lineWidth = 3;
    // this.ctx.strokeStyle = "#ee340c";
    this.ctx.strokeStyle = "#f4f3bb";
    this.ctx.font = this.fontSize + "px sans-serif";

    // Break multiline text
    let line = "";
    let linesArray = [];
    let lineCounter = 0;
    let words = text.split(" ");

    words.forEach((word) => {
      let testLine = `${line}${word} `;
      if (this.ctx.measureText(testLine).width > this.textMaxWidth) {
        line = `${word} `;
        lineCounter++;
      } else {
        line = testLine;
      }
      linesArray[lineCounter] = line;
    });

    let textHeight = this.lineHeight * lineCounter;
    this.textY = this.cvsHeight / 2 - textHeight / 2;

    linesArray.forEach((el, index) => {
      this.ctx.fillText(el, this.textX, this.textY + index * this.lineHeight);
      this.ctx.strokeText(el, this.textX, this.textY + index * this.lineHeight);
    });
  }
  convertToParticles() {
    //
  }
  render() {
    //
  }
}
