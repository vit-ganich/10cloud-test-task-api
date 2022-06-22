import people from "../src/services/people";
import { expect } from "chai";
import { AxiosError } from "axios";

describe("People service test", () => {
  it("should return Darth Vader", async () => {
    const response = await people.getById(4);
    expect(response.name).to.equal("Darth Vader");
  });

  it("should throw 404 error", async () => {
    try {
      await people.getById(400);
      throw new Error("Request should throw an error");
    } catch (error: AxiosError | unknown) {
      if (!(error instanceof AxiosError)) {
        throw error;
      }
      expect(error.code).to.equal("ERR_BAD_REQUEST");
    }
  });
});
