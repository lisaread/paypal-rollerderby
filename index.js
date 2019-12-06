require('dotenv').config();

process.env.client_id;
process.env.client_secret;


PAYPAL_OAUTH_API = 'https://api.sandbox.paypal.com/v1/oauth2/token/';
PAYPAL_PAYMENTS_API = 'https://api.sandbox.paypal.com/v2/payments/payment?sort_by=create_time';


basicAuth = base64encode(`${ client_id }:${ client_secret }`);

auth = http.post(PAYPAL_OAUTH_API {
  headers: {
    Accept:        `application/json`,
    Authorization: `Basic ${ basicAuth }`
  },
  data: `grant_type=client_credentials`
});

function handleRequest(request, response) {

  details = http.get(PAYPAL_PAYMENTS_API, {
    headers: {
      Accept:        `application/json`,
      Authorization: `Bearer ${ auth.access_token }`
    }
  });
  console.log(details)
}