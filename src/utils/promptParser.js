import { calculateWeight } from './weightCalculator.js';

/**
 * Represents a token in the prompt
 * @typedef {Object} Token
 * @property {string} text - The text content
 * @property {number} depth - The nesting depth
 * @property {boolean} isNegative - Whether it's a negative token
 */

/**
 * Parses a prompt string into tokens
 * @param {string} prompt - The input prompt
 * @returns {Token[]} Array of parsed tokens
 */
export function parsePrompt(prompt) {
  const tokens = [];
  let currentText = '';
  let depth = 0;
  let isNegative = false;

  for (let i = 0; i < prompt.length; i++) {
    const char = prompt[i];

    if (char === '{' || char === '[') {
      if (currentText.trim()) {
        tokens.push({ text: currentText.trim(), depth: 0, isNegative: false });
        currentText = '';
      }
      depth++;
      isNegative = char === '[';
    } else if (char === '}' || char === ']') {
      if (currentText.trim()) {
        tokens.push({ 
          text: currentText.trim(), 
          depth: depth,
          isNegative: isNegative
        });
        currentText = '';
      }
      depth--;
    } else {
      currentText += char;
    }
  }

  if (currentText.trim()) {
    tokens.push({ 
      text: currentText.trim(), 
      depth: 0,
      isNegative: false
    });
  }

  return tokens;
}