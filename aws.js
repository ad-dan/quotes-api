const quotesData = require('./quotes.json');

exports.handler = async event => {
  // TODO implement
  const randomIndex = Math.floor(Math.random() * quotesData.length);

  const randomQuote = quotesData[randomIndex];

  const response = {
    statusCode: 2010,
    body: JSON.stringify(randomQuote)
  };
  return response;
};
