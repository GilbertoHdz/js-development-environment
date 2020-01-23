import './index.css';
import numeral from 'numeral'

const courseValue = numeral(1000).format('$0,0.00');
// debugger; // lite to debugger in devtool from web
console.log(`I would pay ${courseValue} for this awesome course`);