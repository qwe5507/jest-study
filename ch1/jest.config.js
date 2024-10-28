/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  rootDir: "src",
  setupFilesAfterEnv: ["./testSetup.js"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};