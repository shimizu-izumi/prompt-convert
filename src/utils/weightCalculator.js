/**
 * Calculates the weight for a given depth and direction
 * @param {number} depth - The nesting depth
 * @param {boolean} isNegative - Whether it's a negative weight
 * @returns {number} The calculated weight
 */
export function calculateWeight(depth, isNegative) {
  const power = isNegative ? -depth : depth;
  const fullNumber = Math.pow(1.05, power);
  // Truncate to 3 decimal places without rounding
  return Math.floor(fullNumber * 1000) / 1000;
}