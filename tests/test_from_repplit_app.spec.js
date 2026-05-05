import {test, expect} from 'playwright/test'

test('Test automation primebank from repplit app', async ({ page })  => {
    const email = 'john.doe@nexusbank.com'
    const password = 'password123'

    //LOGIN

    await page.goto('https://test-runner--rizky08septian.replit.app/login');
    await expect(page.locator('h1')).toHaveText('PrimeBank Institutional');
    await page.locator('input[name="email"]').fill('john.doe@nexusbank.com');
    await expect(page.locator('[name="email"]')).toHaveValue('john.doe@nexusbank.com');
    await page.locator('input[name="password"]').fill('password123');
    await page.pause();
    await page.getByRole('button', { name: 'Secure Login' }).click();
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/dashboard');

    //BUY PRODUCTS
    await page.getByTestId('nav-products').click();
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/products');
    await page.getByText('Headquarters').scrollIntoViewIfNeeded();
    await page.locator('a[href^="/products/2"]').click();
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/products/2');
    await page.getByTestId('button-buy').click();
    await page.getByTestId('input-amount').fill('1500');
    await expect(page.getByTestId('input-amount')).toHaveValue('1500');
    await page.getByTestId('input-notes').fill('Test automation');
    await expect(page.getByTestId('input-notes')).toHaveValue('Test automation');
    await page.getByTestId('checkbox-terms').click();
    await page.getByTestId('button-submit').click();
    await page.getByTestId('input-otp').click()
    await page.pause();
    await expect(page.getByTestId('button-verify-otp')).toBeVisible();
    await page.getByTestId('button-verify-otp').click();
    await expect(page.getByText('Transaction Successful')).toBeVisible();
    await page.getByTestId('button-success-done').click();
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/transactions');

    //VIEW TRANSACTIONS

    await page.locator('a[href^="/transactions/25"]').click(); //Dynamic value
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/transactions/25'); //Dynamic value
    await expect(page.locator('h2')).toHaveText('Transaction Successful');
    
    //SWITCHING PRODUCTS
    await page.getByTestId('nav-products').click();
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/products');
    await page.locator('a[href^="/products/5"]').click();
    await page.getByTestId('button-buy').click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Switching' }).click();
    await page.locator("xpath=//input[@data-testid='input-amount']").fill('4500');
    await expect(
      page.locator("xpath=//input[@data-testid='input-amount']")
    ).toHaveValue('4500')
    await expect(page.getByText('50.3356')).toBeVisible();
    await page.getByTestId('input-notes').fill('Switching Transaction');
    await expect(page.getByTestId('input-notes')).toHaveValue('Switching Transaction');
    await page.getByTestId('checkbox-terms').click();
    await expect(page.getByTestId('button-submit')).toBeVisible();
    await page.getByTestId('button-submit').click();
    await expect(page.locator('h2')).toHaveText('Verify Your Identity');
    await page.getByTestId('input-otp').click();
    await expect(page.getByTestId('button-verify-otp')).toBeVisible();
    await page.pause();
    await page.getByTestId('button-verify-otp').click();
    await page.getByTestId('button-success-done').click();
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/transactions');

    //BUY PRODUCTS FROM WATCHLIST
    await page.getByTestId('nav-products').click();
    await page.locator("xpath=//button[@data-testid='button-watch-1']").click();
    await page.getByTestId('nav-watchlist').click();
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/watchlist');
    await page.getByTestId('button-view-1').click();
    await page.getByTestId('button-buy').click();
    await page.getByTestId('input-amount').fill('500');
    await expect(
      page.getByTestId('input-amount')
    ).toHaveValue('500');
    await page.getByTestId('input-notes').fill('Buy from Watchlist');
    await expect(
      page.getByTestId('input-notes')
    ).toHaveValue('Buy from Watchlist');
    await expect(page.getByText('2.0342')).toBeVisible();
    await page.getByTestId('checkbox-terms').click();
    await expect(page.getByTestId('button-submit')).toBeVisible();
    await page.getByTestId('button-submit').click();
    await expect(page.locator('h2')).toHaveText('Verify Your Identity');
    await page.getByTestId('input-otp').click();
    await expect(page.getByTestId('button-verify-otp')).toBeVisible();
    await page.pause();
    await page.getByTestId('button-verify-otp').click();
    await page.getByTestId('button-success-done').click();
    await expect(page).toHaveURL('https://test-runner--rizky08septian.replit.app/transactions');

    //NEWS
    await page.getByTestId('')


    await page.pause();



