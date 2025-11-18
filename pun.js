#!/usr/bin/env node
import chalk from "chalk";
import puns from "puns.dev";

// Get command-line arguments
const args = process.argv.slice(2);

function showHelp() {
  // Display usage instructions
  console.log(`
NAME
    pun.js - Outputs a pun and its punchline using colors in the terminal.

SYNOPSIS
    node pun.js [OPTIONS]

OPTIONS
    -s, --search QUERY    Searches for a pun that matches the query.
    -id NUM, --id NUM     Outputs the pun with the id of NUM
    -h, --help            Output a usage message and exit.
`);
}

function exitWithError(msg) {
  // Print error message in red and exit
  console.error(chalk.red("Error:"), msg);
  process.exit(1);
}

async function main() {
  try {
    // Show help if requested
    if (args.includes("-h") || args.includes("--help")) {
      showHelp();
      process.exit(0);
    }

    let pun;

    // Check if an ID is provided
    const idIndex = args.findIndex(a => a === "-id" || a === "--id");
    if (idIndex !== -1) {
      const id = parseInt(args[idIndex + 1]);
      if (isNaN(id)) return exitWithError("Invalid ID number.");
      pun = await puns.get(id);
    } else {
      // Check if a search query is provided
      const searchIndex = args.findIndex(a => a === "-s" || a === "--search");
      if (searchIndex !== -1) {
        const query = args[searchIndex + 1];
        if (!query) return exitWithError("No search query provided.");
        const results = await puns.search(query);
        if (!results || results.length === 0)
          return exitWithError("No matching puns found.");
        // Pick a random pun from the search results
        pun = results[Math.floor(Math.random() * results.length)];
      } else {
        // Otherwise, get a random pun
        pun = await puns.random();
      }
    }

    if (!pun) return exitWithError("No pun found.");

    // possible text fields from the pun object
    const setup =
      pun.setup || pun.question || pun.q || pun.joke || pun.pun || "";
    const punchline =
      pun.punchline || pun.answer || pun.a || pun.delivery || "";

    // Print the pun in color depending on data
    if (setup && punchline) {
      console.log(chalk.cyanBright(`Q: ${setup}`));
      console.log(chalk.yellowBright(`A: ${punchline}`));
    } else if (setup) {
      console.log(chalk.greenBright(setup)); // single-line pun
    } else if (punchline) {
      console.log(chalk.greenBright(punchline)); // fallback
    } else {
      console.log(chalk.gray("No readable pun text available."));
    }

    process.exit(0);
  } catch (err) {
    // Handle unexpected errors
    exitWithError(err.message || err);
  }
}

// Run the main function
main();
