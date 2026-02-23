import { test, expect } from '@playwright/test'

test("validate token", async ({ page }) => {
    await page.goto("https://regres.in")

    const token = await page.context().cookies()
    const tokenCookieValue = token.find(cookie => {
        return cookie.name === "token"
    })
    expect(tokenCookieValue).toBeDefined()
    expect(tokenCookieValue!.value).not.toBe("")
})