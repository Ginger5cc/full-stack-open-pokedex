// eslint-disable-next-line no-unused-vars
const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('pokemon page can be navigated to', async({ page }) => {
    await page.goto('http://localhost:8080/')
    await page.getByText('charmander').click()
    await expect(page.getByText('blaze')).toBeVisible()
    await expect(page.getByText('solar power')).toBeVisible()
  })
})