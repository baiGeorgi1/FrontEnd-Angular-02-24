class Ticket {
    info: Array<string>;
    sorting: string;

    // constructor(destination: string, price: number, status: string) {
    //     this.destination = destination;
    //     this.price = Number(price);
    //     this.status = status;
    // }
}
// function ticketCollection(arr: Array<string>, arg: string) {
//     const allTickets = [];
//     arr.forEach((line) => {
//         const newArr = line.split("|");
//         new Ticket(newArr[0], Number(newArr[1]), newArr[2]);
//     });
// }

const ticketCollection = new Ticket(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "destination",
);
console.log(Ticket);
