require("dotenv").config();
const PORT = 4000;
const HOST = 'http://localhost:'+ PORT;


const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;

const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET

const PAYPAL_API ="https://api-m.sandbox.paypal.com"

module.exports = { PAYPAL_API,PAYPAL_API_CLIENT,PAYPAL_API_SECRET}