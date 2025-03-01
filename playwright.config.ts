import { defineConfig } from "@playwright/test";

export default defineConfig({
  expect: {
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.02
    }
  },
  snapshotPathTemplate: "{testDir}/visual-tests/__snapshots__/{testFileName}-{arg}{ext}",
  testDir: "tests",
});
