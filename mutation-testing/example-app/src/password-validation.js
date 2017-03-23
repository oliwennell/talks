module.exports = {

    validate: function(password) {

        if (password.length > 0 && password.length < 10) {
            return true;
        }

        return false;
    }
};
