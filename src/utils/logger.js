
var warn = function(text) {
    console.log(`%c WARNING: ${text}`, 'color: #f5d142');
}

var error = function(text) {
    console.log(`%c ERROR: ${text}`, 'color: #f55555');
}

module.exports = { warn, error };