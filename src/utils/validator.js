/**
 * Validates the input prompt for proper bracket matching
 * @param {string} prompt - The input prompt to validate
 * @returns {boolean} Whether the prompt is valid
 */
export function validatePrompt(prompt) {
  const stack = [];
  const openBrackets = {'{': '}', '[': ']'};
  
  for (const char of prompt) {
    if (char === '{' || char === '[') {
      stack.push(char);
    } else if (char === '}' || char === ']') {
      const lastOpen = stack.pop();
      if (!lastOpen || openBrackets[lastOpen] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}