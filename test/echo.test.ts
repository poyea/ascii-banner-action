import echoThis from "../src/echo";
import { expect } from "chai";

describe("Function for processing strings", () => {
  it("should return it in a form with length less than 16", () => {
    expect(echoThis("This is a very long string. I believe.")).to.equal(
      "This is a very long string. I believe.".slice(0, 16)
    );
    expect(echoThis("This is not")).to.equal("This is not");
    expect(echoThis("")).to.equal("");
  });
});
