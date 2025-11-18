# node-modules assignment
## Marc-Alexandre Martin-Lauzer
## martinlauzerm2@winthrop.edu

This repository contains 2 JavaScript applications named `pun.js` and `smurf-speak.js` pun.js is designed to output a random question and it's pun answer from a selection of puns and can call on a specfic pun with an id comandline argument. smurf-speak.js is designed to take in a sentence at the commandline and output a version with words being altered to sound like a smurf said it. Both programs are connected module chalk which determines color of output, pun.js imports a module which contains the random puns, while smurf-speak.js imports smurfify.js to modify sentences. Both include error handlings and provide a help interface for usage instructions.

### pun.js
A tool that fetches and displays puns with colorful terminal output using the puns.dev API:
- Multiple ways to get a pun
  - Random pun with no arguments
  - Specific pun by ID, -id or --id
- Displays puns in colors with chalk
  - Cyan for the setup/question
  - Yellow for the punchline/answer
  - Green for single-line puns
- Error handling with red-colored messages
```bash
node pun.js              # Random pun
node pun.js -id 42       # Pun with ID 42
node pun.js -s "word"     # Random pun containing "word"
```

### smurf-speak.js
A w tool that transforms any input text into Smurf-speak by replacing key words with smurf terms using the local smurfify function:
- Takes any text as command-line arguments and converts it
- Replaces common nouns, verbs, and adjectives
- Requires smurfify.js module in the same directory
- Error handling

```bash
node smurf-speak.js "I am happy!"
# Output: I am smurfy!
