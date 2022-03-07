import { expect } from "chai";
import convert from "../src/convert";

describe("Converting strings", () => {
  it("should return another string with style", async () => {
    const stringWithStyle = await convert("Done", "doom");
    expect(stringWithStyle).to.match(/[/\\_()|'`\s\r\n]*/);
  });
  it("should return another string without style", async () => {
    const stringNoStyle = await convert("Done", undefined);
    expect(stringNoStyle).to.match(/[/\\_()|'`\s\r\n]*/);
  });
});
