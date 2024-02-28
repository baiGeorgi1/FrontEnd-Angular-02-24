var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
    return Ticket;
}());
function ticketCollection(arr, arg) {
    var allTickets = [];
    arr.forEach(function (line) {
        var newArr = line.split("|");
        new Ticket(newArr[0], Number(newArr[1]), newArr[2]);
    });
}
ticketCollection([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination");
console.log(Ticket);
