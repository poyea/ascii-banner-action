// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import art from "ascii-art";
import * as core from "@actions/core";

const convert = async (word: string, style: string | undefined) => {
  style = style?.toLowerCase();
  const artFont = (style: string) => {
    // Sadly it only works properly this way
    art.font(word, style, (err: undefined, rendered: string) => {
      if (!err) {
        core.setOutput("banner", rendered);
        core.info(rendered);
        core.debug(`Done printing ${word} in ASCII.`);
      }
    });
  };
  switch (style) {
    case "rusted":
      artFont("rusted");
      break;
    case "doom":
    default:
      artFont("Doom");
      break;
  }
};

export default convert;
