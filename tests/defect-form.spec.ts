import { test, expect } from "@playwright/test";

test.describe("Defect Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000"); 
  });

  test("should render the form correctly", async ({ page }) => {
    await expect(page.locator("h2")).toHaveText("Submit a Defect");
    await expect(page.locator("form")).toBeVisible();
  });

  test("should show and remove validation errors on input change", async ({ page }) => {
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill("invalid-email");
    await emailInput.blur();
    await expect(page.locator("p:text('Invalid email format')")).toBeVisible();

    await emailInput.fill("valid@example.com");
    await emailInput.blur();
    await expect(page.locator("p:text('Invalid email format')")).not.toBeVisible();
  });
});
