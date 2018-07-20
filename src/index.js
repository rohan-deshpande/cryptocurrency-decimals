import InvalidSymbolError from './error/InvalidSymbolError';

/**
 * @const {object} DECIMALS - coin/token decimal place numbers
 */
const DECIMALS = {
  ADA: 6,
  AUD: 2,
  AUDT: 2,
  BCH: 8,
  BTC: 8,
  ETH: 16,
  NANO: 6,
  NEO: 2,
  USD: 2,
  USDT: 2,
  VEN: 16,
  XRB: 6,
  XRP: 15,
};

/**
 * Decimalizes the amount according to the symbol's required decimal places.
 *
 * @param {number} amount - the amount to format
 * @param {string} symbol - the symbol to use to find the number of decimal places
 * @throws InvalidSymbolError
 * @return {number}
 */
export function decimalize(amount, symbol) {
  const decimals = DECIMALS[symbol];

  if (!decimals) {
    throw new InvalidSymbolError(symbol);
  }

  return Number(Number(amount).toFixed(DECIMALS[symbol]));
}

export default DECIMALS;
