export function calculateSum(values) {
  return values.reduce((total, num) => total + (Number(num) || 0), 0);
}
