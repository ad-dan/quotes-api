const fs = require('fs');

const fileData = fs.readFileSync('./quotes.csv.txt', 'utf8');

const seperatedQuotes = fileData.split('\n');

const mappedQuotes = seperatedQuotes
  .map(data => {
    const splitted = data.split(',', 2).map(text => text.replace(/\"/g, ''));
    return {
      author: splitted[0],
      quoteText: splitted[1]
    };
  })
  .reduce((acc, curr) => {
    const { author, quoteText } = curr;
    if (!author) curr.author = acc.slice(-1)[0].author;
    acc.push(curr);
    return acc;
  }, []);
