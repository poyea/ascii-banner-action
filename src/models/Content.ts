import { artFont } from "../styles/art";
import { plainFont } from "../styles/plain";

class Content {
    word: string;
    style: string | undefined;

    constructor (word: string, style: string | undefined) {
      this.word = word;
      if (style !== undefined) { this.style = style.toLowerCase(); }
      this.checkStyle();
    }

    checkStyle () {
      if (this.style === "doom") {
        this.style = "Doom";
      }
    }

    async convert () {
      switch (this.style) {
        case "rusted":
          artFont(this);
          break;
        case "Doom":
        case "doom":
          artFont(this);
          break;
        default:
          plainFont(this);
          break;
      }
    }
}

export default Content;
