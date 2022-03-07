import { expect } from "chai";
import convert from "../src/convert";

describe("Converting strings", () => {
  it("should return another string with doom", () => {
    const stringWithStyle = () => convert("Done", "doom");
    expect(stringWithStyle).not.to.throw();
  });

  it("should return another string with rusted", () => {
    const stringWithStyle = () => convert("Done", "Rusted");
    expect(stringWithStyle).not.to.throw();
  });

  it("should return another string without style", () => {
    const stringNoStyle = () => convert("Done", undefined);
    expect(stringNoStyle).not.to.throw();
  });
});
