import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/user.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
    constructor(private userService: UserService, private router: Router) {}
    // till we see how to maka login and logout
    // isLoggedIn: boolean = false;

    // do this when made login structure
    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    get firstName(): string {
        return this.userService.user?.firstName || "";
    }

    logout() {
        this.userService.logout();
        // to use navigation inject Router in constructor
        this.router.navigate(["/home"]);
    }
}
