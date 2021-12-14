import chalk from 'chalk';
import readlineSync from 'readline-sync';
import axios from 'axios';
import { getCode, getName } from 'country-list';
//const chalk = require('chalk');
//const readlineSync = require('readline-sync');
//const axios = require('axios');
//const {getCode} = require('country-list');

let date = new Date();
let currentYears = date.getFullYear();
let country = readlineSync.question('Give me a country ? ');
//console.log(getCode(country));
let countryCode = getCode(country);
axios.get(`https://date.nager.at/api/v3/publicholidays/${currentYears}/${countryCode}`)
.then((response) => {
    response.data.forEach(element => console.log(`${element.date}) - ${element.name}`));
})

//console.log(chalk.blue(getCode(country)));

//console.log(getCode('Nowhere-to-be-found-land'));
