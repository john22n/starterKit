const numeral = require('numeral');
import './css/style.css';
const logger = require('logger;');

const courseValue = numeral(1000).format('$0.0.00');
logger(`I would pay ${courseValue} for this awesome course`);