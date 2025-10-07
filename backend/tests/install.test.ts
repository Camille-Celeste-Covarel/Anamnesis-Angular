// Load environment variables from .env file
import "dotenv/config";

import * as fs from "node:fs";

// Test suite for environment installation
describe("Installation", () => {
  // Test: Check if the .env file exists
  test("You have created /backend/.env", async () => {
    expect(fs.existsSync(`${__dirname}/../.env`)).toBe(true);
  });

  // Test: Check if the .env.development.sample file exists
  test("You have retained /backend/.env.development.sample", async () => {
    expect(fs.existsSync(`${__dirname}/../.env.sample`)).toBe(true);
  });
});
