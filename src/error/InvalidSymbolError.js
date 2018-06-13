export default class InvalidSymbolError extends Error {
  constructor(symbol) {
    super(`The symbol ${symbol} is not a valid cryptocurrency`);
  }
}
