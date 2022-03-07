// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import art from "ascii-art";
import * as core from "@actions/core";

const convert = async (word: string, style: string | undefined) => {
  switch (style) {
    case "doom":
    default:
    {
      // Sadly it only works properly this way
      art.font(word, "Doom", (err: undefined, rendered: string) => {
        if (!err) {
          core.setOutput("banner", rendered);
          core.info(rendered);
          core.debug(`Done printing ${word} in ASCII.`);
        }
      });
    }
  }
};

export default convert;
