require("dotenv").config();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.yelp_APIKEY);

//Yelp Search
function yelpSearch(keyword) {
  return client.search({
    term: keyword,
    location: 'MONTREAL, QC',
    limit: 3,
  }).then(response => {
    return response.jsonBody;
  }).catch(e => {
    console.log(e);
  });
}


yelpSearch("burger")
  .then((result) => console.log(result));