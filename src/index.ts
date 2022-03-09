import * as core from "@actions/core";
import Content from "./models/Content";

async function run (): Promise<void> {
  try {
    const word: string = core.getInput("word");
    const style: string = core.getInput("style");
    core.debug(`Printing ${word} in ASCII...`);
    const content = new Content(word, style);
    await content.convert();
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
