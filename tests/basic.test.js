// const test = require("node:test");
// const assert = require("node:assert");

// test("basic test", () => {
//   assert.strictEqual(1 + 1, 2);
// });

const test = require("node:test");
const assert = require("node:assert");

test("application should load successfully", () => {
  assert.doesNotThrow(() => {
    require("../src/app");
  });
});