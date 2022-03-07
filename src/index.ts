import * as core from "@actions/core";
import convert from "./convert";

async function run (): Promise<void> {
  try {
    const word: string = core.getInput("word");
    const style: string = core.getInput("style").toLowerCase();
    core.debug(`Printing ${word} in ASCII...`);

    convert(word, style);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
