class Data {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: string;
    fulfilled: boolean;
    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = "undefined";
        this.fulfilled = false;
    }
}

let myData = new Data("GET", "http://google.bg", "HTTP/1.1", "");
myData.fulfilled = true;
console.log(myData);
