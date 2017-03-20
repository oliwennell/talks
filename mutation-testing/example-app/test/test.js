var assert = require('assert');
var wibbler = require('../src/wibbler');

describe('Wibbling', () => {

    describe('Wibbling a non-empty string', () => {

        it('returns the string with wibble on the end', () => {
            assert.equal("a wibble", wibbler.wibbleIt("a"));
        });
    });

    describe('Wibbling an empty string', () => {

        it('returns wibble', function() {
            assert.equal("wibble", wibbler.wibbleIt(""));
        });
    });

    // describe('Wibbling a long string', function() {
    //
    //     it('returns wibble', function() {
    //         assert.equal("wibble", wibbler.wibbleIt("123456789"));
    //     });
    // });
});
