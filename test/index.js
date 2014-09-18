var assert = require('assert');
var decimal = require('decimal');

describe('decimal', function() {

  describe('.round()', function() {

    it('should return the expected result', function() {

      assert.strictEqual(0.0, decimal.round(0, 1));
      assert.strictEqual(1.0, decimal.round(1, 1));

      assert.strictEqual(0.1, decimal.round(0.09, 1));
      assert.strictEqual(1.01, decimal.round(1.005, 2));
      assert.strictEqual(1.28, decimal.round(1.275, 2));
      assert.strictEqual(1.01, decimal.round(1.0049999999999999, 2));

      assert.strictEqual(24, decimal.round(23.759999999999998));
      assert.strictEqual(24, decimal.round(23.759999999999998, 0));
      assert.strictEqual(23.8, decimal.round(23.759999999999998, 1));
      assert.strictEqual(23.76, decimal.round(23.759999999999998, 2));
      assert.strictEqual(23.760, decimal.round(23.759999999999998, 3));

    });

  });

  describe('.format()', function() {

    it('should return the expected result', function() {
      assert.strictEqual('0.0', decimal.format(0,       {places: 1}));
      assert.strictEqual('1.0', decimal.format(1,       {places: 1}));
      assert.strictEqual('1.28', decimal.format(1.275,  {places: 2}));
      assert.strictEqual('1,099.28', decimal.format(1099.2799,  {places: 2, separator: ','}));
    });

  });

});