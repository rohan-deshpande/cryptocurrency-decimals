# cryptocurrency-decimals

Simple utility library for formatting cryptocurrency coins and token amounts to the correct number of decimal places

## Installation

```
npm i cryptocurrency-decimals --save
```

## Usage

```
import decimals, { decimalize } from 'cryptocurrency-decimals';

const btcAmount = 0.99884421;
const price = 10213;
const usdtAmount = decimalize(btcAmount * price, 'USDT');

// logs 10201.19
console.log(usdtAmount);

// logs 8
console.log(decimals['BTC']);
```

## Symbols

Currently only a few symbols are supported, please submit a PR to add more!

```
AUD
AUDT
BTC
BCH
ETH
NEO
USD
USDT
XRB
NANO
XRP
VEN
```
