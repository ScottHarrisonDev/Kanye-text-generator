# Kanye Text Generator #
This tool uses the lyrics from all of Kanye Wests studio albums to learn how he is likely to write lyrics and then generates a set amount of characters in Kanyes style.

## How it works ##

### Learning process ###
I created a JSON file for each of Kanyes albums which contains all of _his_ lyrics from that album (no featured artist lyrics ar included). On page load the JavaScript loops over this source text and compiles an array of ngrams (collection of characters), each with a child array of the possible next characters. This is very primitive but it provides quite a convincing output. The quality (readability) of the text can be controlled by changing the amount of characters in the ngrams, for instance if the code is set to look at 10 character long ngrams it will be almost indistinguishable from the original source material, if the ngram is set to 2 characters then the result will be completely incomprehensible. I find that an ngram of 4-6 characters works well.

### Generation process ###
To generate the output text the code finds the first word to start from (in this implementation I've just used the first ngram in the source text for simplicity). Once it has the first ngram it looks at the ngrams array and selects a random element from the ngrams possible next character array. This continues until the output text is of the required length.

#### Credits ####
* Daniel Shiffman, for inspiration and guidance from his videos on markov chains.
  - http://shiffman.net/
  - https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
  - https://twitter.com/shiffman
  
* Matt Miller, for letting me chat his ear off about the project
  - https://github.com/matt123miller
  
* Genius.com, for hosting the lyrics I pulled into the project.
