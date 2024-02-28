var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = "undefined";
        this.fulfilled = false;
    }
    return Data;
}());
var myData = new Data("GET", "http://google.bg", "HTTP/1.1", "");
myData.fulfilled = true;
console.log(myData);
