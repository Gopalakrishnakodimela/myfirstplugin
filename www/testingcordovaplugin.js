var exec = require('cordova/exec');

exports.sayhello = function(param, success, error) {
    exec(success, error, "testingcordovaplugin", "sayhello", [param]);
};

