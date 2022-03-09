import { expect } from "chai";
import Content from "../src/models/Content";

describe("Converting strings", () => {
  let content = new Content("Done", "doom");
  it("should return another string with doom", () => {
    const stringWithStyle = () => content.convert();
    expect(stringWithStyle).not.to.throw();
  });

  content = new Content("Done", "Rusted");
  it("should return another string with rusted", () => {
    const stringWithStyle = () => content.convert();
    expect(stringWithStyle).not.to.throw();
  });

  content = new Content("Done", undefined);
  it("should return another string without style", () => {
    const stringNoStyle = () => content.convert();
    expect(stringNoStyle).not.to.throw();
  });
});
