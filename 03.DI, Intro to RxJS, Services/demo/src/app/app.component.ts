import { Component, Input, OnInit } from "@angular/core";
import { JsonPlaceHolder, User } from "./types/user";
import { UserService } from "./user.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    title = "app-component";
    appUsers: JsonPlaceHolder[] = [];
    isLoading = true;
    constructor(private userService: UserService) {
        this.appUsers = this.userService.users;
    }

    // constructor(public userService: UserService) {}
    setUsers(inputName: HTMLInputElement, emailInput: HTMLInputElement) {
        this.userService.addUserHandler(inputName, emailInput);

        //     /// we can add additional funcionalities
    }

    ngOnInit(): void {
        this.userService.getUsers().then((users) => {
            console.log("users data", users);
            this.appUsers = users;
            setTimeout(() => {
                this.isLoading = false;
            }, 3000);
        });
    }
}
