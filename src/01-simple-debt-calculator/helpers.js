export const calculateDebt = (amount, rate, years) => {
  return parseInt(amount) + (amount / 100 * rate) * years
};
