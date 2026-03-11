const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'src/server.js');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Update adjustClientAppData signature and usage
code = code.replace(/function adjustClientAppData\(body\)/g, 'function adjustClientAppData(body, currentFlowStep)');
code = code.replace(/adjustClientAppData\(parsed.BookingSummary\)/g, 'adjustClientAppData(parsed.BookingSummary, req.session.currentFlowStep)');
code = code.replace(/adjustClientAppData\(parsed.Data.BookingSummary\)/g, 'adjustClientAppData(parsed.Data.BookingSummary, req.session.currentFlowStep)');
code = code.replace(/adjustClientAppData\(parsed.Data\)/g, 'adjustClientAppData(parsed.Data, req.session.currentFlowStep)');
code = code.replace(/adjustClientAppData\(parsed\)/g, 'adjustClientAppData(parsed, req.session.currentFlowStep)');
code = code.replace(/adjustClientAppData\(bNode\)/g, 'adjustClientAppData(bNode, req.session.currentFlowStep)');

// 2. Replace variables but ONLY after line 180 (after the getActiveData and session middleware definitions)
const lines = code.split('\n');
for (let i = 180; i < lines.length; i++) {
    // Avoid replacing properties attached to objects or already modified
    if (lines[i].includes('reqSession.') || lines[i].includes('req.session.')) {
        // We might still need to replace other occurrences on the same line if they exist
    }

    // Use regex with word boundaries to avoid partial matches
    lines[i] = lines[i].replace(/\bsearchContext\b/g, 'req.session.searchContext');
    lines[i] = lines[i].replace(/\bcurrentFlowStep\b/g, 'req.session.currentFlowStep');
    lines[i] = lines[i].replace(/\bbookingCreated\b/g, 'req.session.bookingCreated');
    lines[i] = lines[i].replace(/\bnotifiedIPs\b/g, 'req.session.notifiedIPs');
}

// 3. Fix Telegram environment variables manually to avoid regex messing it up
let joined = lines.join('\n');
joined = joined.replace(/const TG_TOKEN = '[^']+';/g, "const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN;");
joined = joined.replace(/const TG_CHAT_ID = '[^']+';/g, "const TG_CHAT_ID = process.env.TELEGRAM_CHAT_ID;");

fs.writeFileSync(filePath, joined, 'utf8');
console.log('Refactoring complete.');
