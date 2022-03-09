import { expect } from "chai";
import Content from "../src/models/Content";

describe("Converting strings", () => {
  it("should return another string with doom", () => {
    const content = new Content("Done", "doom");
    const stringWithStyle = () => content.convert();
    expect(stringWithStyle).not.to.throw();
  });

  it("should return another string with rusted", () => {
    const content = new Content("Done", "Rusted");
    const stringWithStyle = () => content.convert();
    expect(stringWithStyle).not.to.throw();
  });

  it("should return another string without style", () => {
    const content = new Content("Done", undefined);
    const stringNoStyle = () => content.convert();
    expect(stringNoStyle).not.to.throw();
  });
});
