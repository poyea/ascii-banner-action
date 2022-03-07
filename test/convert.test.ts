import { expect } from "chai";
import convert from "../src/convert";

describe("Converting strings", () => {
  it("should return another string without style", async () => {
    const stringNoStyle = await convert("A string", undefined);
    expect(stringNoStyle).to.equal("A string");
  });

  it("should return another string with style", async () => {
    const stringWithStyle = await convert("A string", "a style");
    expect(stringWithStyle).to.equal("A string with a style");
  });
});
