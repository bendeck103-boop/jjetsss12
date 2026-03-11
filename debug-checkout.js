const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log("Starting trace...");

    page.on('response', async (res) => {
        const url = res.url();
        if (url.includes('/Breakdown/Get') || url.includes('/FlightSelection') || url.includes('/V2XHR/GetBookingData') || url.includes('InternalSelect')) {
            try {
                const json = await res.json();
                console.log(`\n--- [NET] ${res.request().method()} ${url}`);
                if (json.BookingSummary) {
                    console.log(`TotalAmount: ${json.BookingSummary.TotalAmount}`);
                    if (json.BookingSummary.Journeys && json.BookingSummary.Journeys[0]) {
                        console.log(`Outbound Journey Price: ${json.BookingSummary.Journeys[0].Price}, Subtotal: ${json.BookingSummary.Journeys[0].Subtotal}`);
                    }
                }
                if (json.Data && json.Data.BookingSummary) {
                    console.log(`Data.TotalAmount: ${json.Data.BookingSummary.TotalAmount}`);
                }
            } catch (e) {
                console.log(`\n--- [NET] ${res.request().method()} ${url} (Not JSON or Redirect)`);
            }
        }
    });

    try {
        // JetSmart clone usually loads slowly, use 'domcontentloaded' or 'load'
        await page.goto('http://localhost:3000/V2/Flight?Culture=es-CO', { waitUntil: 'load', timeout: 60000 });
        console.log("Page loaded.");

        // Wait until at least one flight price container is visible
        await page.waitForSelector('.flight-itinerary-detail, .flight-option, button.flight-price-btn, [data-test="flight-price-btn"]', { timeout: 15000 }).catch(() => console.log("No specific flight list container matched"));
        console.log("Flights rendered.");

        // Give time for initial Breakdown requests to finish
        await page.waitForTimeout(3000);

        const outbounds = await page.$$('button[data-test="flight-price-btn"], button.flight-price-btn, .flight-option button, .price-container');
        if (outbounds.length > 0) {
            console.log(`Clicking first outbound flight out of ${outbounds.length} buttons...`);
            await outbounds[0].click({ force: true }).catch(e => console.log(e));

            console.log("Wait for Breakdown/Get API to trigger and update the DOM...");
            await page.waitForTimeout(4000);
        } else {
            console.log("Could not find any flight buttons to click! DOM check follows:");
            const count = await page.evaluate(() => document.querySelectorAll('button').length);
            console.log(`Total buttons on page: ${count}`);
        }

        console.log("Checking UI totals from the DOM...");
        const totalAmount = await page.evaluate(() => {
            const el = document.querySelector('.total-amount') ||
                document.querySelector('[data-test="grand-total"]') ||
                document.querySelector('.amount') ||
                Array.from(document.querySelectorAll('div, span')).find(el => el.textContent.includes('COP') && el.textContent.includes('$') && !el.textContent.includes('adicionales') && !el.textContent.includes('por pasajero'));
            return el ? el.textContent.trim() : 'Not Found';
        });

        console.log(`DOM Total extracted: ${totalAmount}`);

    } catch (error) {
        console.error("Script error:", error);
    } finally {
        await browser.close();
    }
})();
