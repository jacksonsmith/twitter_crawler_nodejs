const Twitter = require('twitter-lite');
const config = { consumer_key: 'REPLACE_FOR_CONSUMER_KEY',
	consumer_secret: 'REPLACE_FOR_CONSUMER_KEY',
	access_token_key: 'REPLACE_FOR_ACCESSS_TOKEN_KEY',
	access_token_secret: 'REPLACE_FOR_TOKEN_SECRET'
}

const client = new Twitter(config);
 
  const parameters = {
    track: "#happy, #good, dog"
  }
  
  const stream = client.stream("statuses/filter", parameters)
    .on("start", response => console.log("start"))
    .on("data", event => {
      console.log(event)
    })
    .on("error", error => console.log("error", error))
    .on("end", response => console.log("end"));
  
