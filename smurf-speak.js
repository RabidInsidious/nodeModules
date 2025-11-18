#!/usr/bin/env node
import { smurfify } from "./smurfify.js";

// Get command-line arguments (excluding "node" and script name)
const args = process.argv.slice(2);

// Ensure the user provided input text
if (args.length === 0) {
  console.error("Usage: node smurf-speak.js \"USERTEXT\"");
  process.exit(1);
}

try {
  // Join all arguments into a single input string
  const input = args.join(" ");
  // Convert text into smurf-speak
  const result = smurfify(input);
  // Output the result
  console.log(result);
  process.exit(0);
} catch (err) {
  // Handle unexpected errors gracefully
  console.error("Error:", err.message);
  process.exit(1);
}
