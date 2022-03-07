import * as core from "@actions/core";
import convert from "./convert";

async function run (): Promise<void> {
  try {
    const word: string = core.getInput("word");
    const style: string = core.getInput("style");
    core.debug(`Printing ${word} in ASCII...`);

    const banner = await convert(word, style);
    core.setOutput("banner", banner);
    core.debug(`Done printing ${word} in ASCII.`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
