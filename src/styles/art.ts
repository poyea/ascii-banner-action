// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import art from "ascii-art";
import Content from "../models/Content";
import * as core from "@actions/core";

const artFont = (content: Content) => {
  // Sadly it only works properly this way
  art.font(content.word, content.style, (err: undefined, rendered: string) => {
    if (!err) {
      core.setOutput("banner", rendered);
      core.info(rendered);
      core.debug(`Done printing ${content.word} in ASCII.`);
    }
  });
};

export { artFont };
