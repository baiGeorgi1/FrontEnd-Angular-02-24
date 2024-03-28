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

    get username(): string {
        return this.userService.user?.username || "";
    }

    logout() {
        // ** Interceptor lesson - add subscribe
        this.userService.logout().subscribe({
            // after we made lazy loading add auth

            next: () => this.router.navigate(["/auth/login"]),
            error: () => this.router.navigate(["/auth/login"]),
        });
        // to use navigation inject Router in constructor
        // this.router.navigate(["/home"]);
    }
}
