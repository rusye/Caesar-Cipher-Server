# Caesar Cipher Server Side

## Description

In cryptography, a [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)  is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

This server side app can work with out the client side but if you would like the client side, it can be found [here](https://github.com/rusye/Caesar-Cipher-Client).

## Installation

```bash
$ git clone https://github.com/rusye/Caesar-Cipher-Server.git
```

## Running the app

```bash
$ npm run start
```

## GET and POST endpoint
```bash
http://localhost:3000/ciphers
```

## Field's required in POST body
```base
toShift: "string"
shiftAmount: number
```

## Test

```bash
$ npm run test
```
