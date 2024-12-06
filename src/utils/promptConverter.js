import { parsePrompt } from './promptParser.js';
import { calculateWeight } from './weightCalculator.js';

/**
 * Converts Novel AI style prompts to Web UI format
 * @param {string} novelAIPrompt - The input prompt in Novel AI format
 * @returns {string} The converted prompt in Web UI format
 */
export function convertPrompt(novelAIPrompt) {
  const tokens = parsePrompt(novelAIPrompt);
  
  return tokens.map(token => {
    if (token.depth === 0) {
      return token.text;
    }
    
    const weight = calculateWeight(token.depth, token.isNegative);
    return `(${token.text}:${weight})`;
  }).join(' ');
}