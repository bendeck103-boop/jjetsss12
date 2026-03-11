#!/usr/bin/env node
require('dotenv').config();
const { program } = require('commander');
const { record } = require('./src/recorder');
const { serve } = require('./src/server');

program
  .name('jetsmart-cloner')
  .description('Record and replay the JetSmart booking SPA with dynamic city/date injection.')
  .version('2.0.0');

program
  .command('record')
  .description('Record the full booking flow by opening a browser.')
  .argument('<url>', 'Starting URL (e.g. https://jetsmart.com/co/es/)')
  .option('-d, --dir <directory>', 'Output directory', './clone')
  .action((url, options) => record(url, options.dir));

program
  .command('serve')
  .description('Serve the cloned SPA locally.')
  .option('-d, --dir <directory>', 'Clone directory', './clone')
  .option('-p, --port <port>', 'Port', 3000)
  .action((options) => serve(options.dir, options.port));

program.parse();
