import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { EMAIL_DOMAINS } from "src/app/constants";
import { UserService } from "src/app/user.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})

//Template- driven method
export class LoginComponent {
    domains = EMAIL_DOMAINS;
    constructor(private userService: UserService, private router: Router) {}
    //  beofre taking form lesson
    // login(ev: Event, email: string, password: string) {
    login(form: NgForm) {
        console.log(form.value);

        if (form.invalid) {
            return;
        }
        // ev.preventDefault();
        this.userService.login();
        this.router.navigate(["/themes"]);
    }
}
