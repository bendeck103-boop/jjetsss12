# JetSmart Sandbox Dynamic Pricing Engine

This document outlines the custom dynamic pricing and tax logic implemented in the `web-cloner-jet` sandbox. This ensures flight pricing behaves realistically for testing, calculating realistic base fares, accurate Colombian taxes, and precise bundle markup costs.

## Core Features Implemented

### 1. Deterministic Price Engine (`getDynamicFare`)
Instead of static prices or completely random fluctuations that break the booking flow, the backend uses a time-based deterministic hashing algorithm.
- **Logic:** Prices are generated based on a hash of the flight's unique `sellKey` and the current date/hour.
- **Result:** Flight prices change realistically every hour but remain perfectly stable during a single booking session, allowing a user to complete the flow without price validation errors.

### 2. Deterministic Tax Engine (`getDynamicTax`)
The system strips out all legacy static mock taxes (e.g., $100,576 or $53,276) and injects mathematically precise Colombian domestic taxes computed on the fly natively on the backend.
- **Tasas de Embarque (Boarding Tax):** Fixed at exactly **$23,650 COP** per flight leg.
- **IVA (VAT):** Calculated exactly at **19%** of the dynamically generated **Base Fare** (excluding bundle upgrades).
- The system uses aggressive JSON string replacement across `UncommittedBreakdown`, `CommittedBreakdown`, and `BookingSummary` networks payloads to ensure the itemized "Tasas e impuestos" dropdown in the UI explicitly reflects these live mathematical calculations.

### 3. Flight Bundle Markup Engine (`getBundleDiff`)
JetSmart's "Pack SMART" (`BND1`) and "Pack FULL" (`BND2`) upgrades have unique pricing differentials that vary dynamically per flight route. 
- **Scraping Map:** When the server boots, it parses `mocks.json` for the `FlightPageData` to scrape the exact markup cost for `BND1` and `BND2` specifically tied to every `sellKey`.
- **Logic:** The `FlightSelection` POST payload and `/breakdown/get` URL query string (`BundleCodes=BND1`) are actively intercepted.
- **Result:** The exact correct cost of the upgraded bundle is organically added onto the `Subtotal` of the flight card and Sidebar Grand Total, without artificially inflating the Base Fare IVA calculation.

### 4. Weekday Pricing Curve & Probability Scaling
To make flight prices highly realistic, a date-parsing logic explicitly extracts the requested flight date from the `SellKey` (or frontend override) and applies a weekday curve dynamically onto the base fare hash:
- **High Peak (Friday/Sunday):** Adds a steep 25k COP premium and lowers the chance of promotional fares down to 30%.
- **Mid Peak (Saturday/Monday):** Adds a moderate 12k COP premium, keeping promotional chance balanced at 60%.
- **Off-Peak (Tuesday-Thursday):** Subtly discounts the fare natively and raises the likelihood of an aggressively cheap promotion (51k-71k COP total) up to an incredible 90%.

### 5. Club de Descuentos & Active Flight Selection (`searchContext`)
The system intercepts JetSmart's `FlightSelection` POST payload specifically looking for the elusive `ApplyDiscount=true` parameter. This securely attaches an `isClub` state directly to `searchContext.selectedFlights`.
- Every localized `getDynamicFare()` function aggressively parses this boolean context and applies a flat mathematical 15% discount to the Base Fare securely prior to generating IVA/boarding taxes.

### 6. API Proxy Synchronization (`src/server.js`)
Transformations happen gracefully over deeply complex frontend requests:
- **`WeekCarousel` Horizontal Synchronization:** As the mathematical minimums fall inside the DateFlights `CheapestPrice` object nodes, the server intercepts `journeys.WeekCarousel`, overwriting JetSmart's stubborn static visual Date-Tabs. Missing local nodes mathematically synthesize their own fake dynamic representations using localized date overrides natively inside `getDynamicFare()`.
- **Checkout Summary Alignment:** Iterating tightly over `UncommittedBreakdown`, `CommittedBreakdown`, `BookingSummary` routes, and explicit queue-it redirect links guarantees zero mismatches inside the visual UI total cart math and post-payment logic. 
- **Date Override Execution:** The UI rigidly requests `InternalSelect` API hooks utilizing static payloads captured from the single `mocks.json` video. The server actively intercepts the `Culture` query string via `app.get()`, captures the precise mathematical request via `dd1/dd2` variables, securely caches them in `searchContext.current.departureDate`, and propagates it down into the core dynamic hash, brutalizing the generic static `sellKey` date logic to actively produce exactly the flight day prices the user intended to see.

## Troubleshooting / Restarting the Clone
If you record a new JetSmart template and metrics start breaking or grand totals act static again, verify the following:
1. **Mock Taxes:** Ensure the new mock doesn't introduce a new hardcoded base tax variable. The regex string replacements for `100576` and `53276` in `src/server.js` (`// Replace legacy tax mocked strings safely`) may need to be updated to the new static numbers found in your fresh `mocks.json` so the engine can safely overwrite them.
2. **Bundle/Array Changes:** Ensure JetSmart hasn't renamed `NormalBundleOffers` or its `UnFormattedPriceDifference` payload locations within flight card iterations.
3. **Execution Command:** The cloned sandbox runs independently via PM2 or Nohup: `nohup node index.js serve -d ./clone -p 3000 > server.log 2>&1 &`
