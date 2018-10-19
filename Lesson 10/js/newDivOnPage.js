'use strict';

class Options {
    constructor (bg = 'lightblue', fontSize = 20, textAlign = 'center', height = 50, width = 50) {
        this.height  = height;
        this.width = width; 
        this.bg = bg;
        this.fontSize = fontSize; 
        this.textAlign = textAlign;
    }

    createDiv(text) {
        
        let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = `height:${this.height}px;width:${this.width}px;
                             font-size:${this.fontSize}px;background-color:${this.bg};
                             text-align:${this.textAlign};`;
        document.body.appendChild(div);
    }
}

let newDiv = new Options('red', 16, 'right', 200, 300);
newDiv.createDiv('Это новый элемент');