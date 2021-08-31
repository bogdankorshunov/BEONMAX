document.addEventListener('DOMContentLoaded', function () {
  class Options {
    constructor(height, width, bg, fontSize, textAlign) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    createDiv(text) {
      let div = document.createElement('div');
      document.body.appendChild(div)
      div.cssText = text
      div.style.height = this.height + 'px';
      div.style.width = this.width + 'px';
      div.style.background = this.bg;
      div.style.fontSize = this.fontSize + 'px';
      div.style.textAlign = this.textAlign;
    }
  }
  let newDiv = new Options('50', '50', 'red', '25', 'center');
  newDiv.createDiv('test');
});
