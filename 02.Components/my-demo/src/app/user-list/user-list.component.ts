import { Component } from "@angular/core";
type User = {
    name: string;
    age: number;
    status?: string;
};

@Component({
    selector: "app-user-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.css"],
})
export class UserListComponent {
    users = [
        { name: "Pesho", age: 31, status: "green" },
        { name: "Misho", age: 32, status: "red" },
        { name: "Gogo", age: 23 },
        { name: "Ivan", age: 34, status: "yellow" },
    ] as User[];
}
