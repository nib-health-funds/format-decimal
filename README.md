# format-decimal

Format decimal numbers.

## Installation

    component install nib-health-funds/format-decimal

## Usage

    var decimal = require('format-decimal');
    var price   = decimal.format(1699, {places: 2, separator: ','});
    console.log(price); //prints "1,699.00"

## API

### .round(number, places)

Rounds the number to the specified number of places.

### .format(number, options)

Formats the number.

- places - The number of places to round
- separator - The number separator
