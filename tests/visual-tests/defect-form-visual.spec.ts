import { test, expect } from "@playwright/test";

test("Visual regression test", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Wait for all fonts to load
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  await page.waitForLoadState("networkidle");

  await page.waitForSelector("#defect-form", { state: "visible" });

  // Compare full-page screenshot with baseline
  expect(await page.screenshot()).toMatchSnapshot("defect-form.png", {threshold: 0.10});
});
