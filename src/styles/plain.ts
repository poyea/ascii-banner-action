import Content from "../models/Content";
import * as core from "@actions/core";

const plainFont = (content: Content) => {
  core.setOutput("banner", content.word);
  core.info(content.word);
  core.debug(`Done printing ${content.word} in plain text.`);
};

export { plainFont };
