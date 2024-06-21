#!/usr/bin/env node
const { Command } = require('commander');
const initCommand = require('./commands/init');
const deployCommand = require('./commands/deploy');
const monitorCommand = require('./commands/monitor');

const program = new Command();

// Define CLI commands
program
    .command('init')
    .description('Initialize TEE environment')
    .action(() => {
        initCommand();
    });

program
    .command('deploy')
    .description('Deploy Multi-Prover AVS contract')
    .action(() => {
        deployCommand();
    });

program
    .command('monitor')
    .description('Monitor TEE and contract status')
    .action(() => {
        monitorCommand();
    });

// Parse CLI arguments
program.parse(process.argv);
