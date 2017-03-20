module.exports = {
    wibbleIt: function(input) {
        if (input.length > 0 && input.length < 10) {
            return input + " wibble";
        }

        return "wibble";
    }
};
