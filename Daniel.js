var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function GET(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    return JSON.parse(xhttp.responseText);
}
//sdfgsdfgsdf
console.log(GET('https://jsonplaceholder.typicode.com/todos/1'));