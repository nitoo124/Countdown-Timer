#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let ask = await inquirer.prompt([
    {
        type: 'number',
        name: 'duration',
        message: 'Enter countdown duration in seconds:',
        validate: (input) => {
            return input > 0 ? true : 'Please enter a valid number greater than 0';
        },
    },
]);
let remainingTime = ask.duration;
const interval = setInterval(() => {
    remainingTime--;
    if (remainingTime <= 0) {
        clearInterval(interval);
        console.log(chalk.green('Countdown finished!'));
        return;
    }
    console.log(chalk.yellow(`Remaining time: ${remainingTime}`));
}, 1000);
;
