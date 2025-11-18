// smurfify.js
export function smurfify(text) {
  // Validate input to ensure it's a non-empty string
  if (!text || typeof text !== "string") throw new Error("Invalid input text.");

  // Define words to replace and their smurf equivalents
  const replacements = [
    { pattern: /\bglad\b/gi, replace: "smurfy" },
    { pattern: /\bhappy\b/gi, replace: "smurfy" },
    { pattern: /\bgood\b/gi, replace: "smurftastic" },
    { pattern: /\bbad\b/gi, replace: "unsmurfy" },
    { pattern: /\bwork\b/gi, replace: "smurfwork" },
    { pattern: /\bfriend\b/gi, replace: "smurfmate" },
    { pattern: /\bgo\b/gi, replace: "smurf along" }
  ];

  // Start with the original text
  let output = text;

  // Apply all replacements to the text
  for (const { pattern, replace } of replacements) {
    output = output.replace(pattern, replace);
  }

  // Return the transformed smurf-style text
  return output;
}
