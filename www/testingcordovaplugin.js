var exec = require('cordova');

function testingcordovaplugin () {}

testingcordovaplugin.prototype.sayhello = function(text, success, fail) {
    cordova.exec(success, fail, "testingcordovaplugin", "sayhello", [text]);
};

// Register the plugin
var mycordovaplugin = new testingcordovaplugin();
module.exports = mycordovaplugin;