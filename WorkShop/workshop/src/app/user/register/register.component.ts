import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EMAIL_DOMAINS } from "src/app/constants";
import { mailValidator } from "src/app/shared/utils/email-validator";
import { matchPasswordsValidator } from "src/app/shared/utils/match-passwords";
import { UserService } from "src/app/user.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
    form = this.fb.group({
        // controls
        username: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, mailValidator(EMAIL_DOMAINS)]],
        tel: [""],
        passGroup: this.fb.group(
            {
                password: ["", [Validators.required]],
                rePassword: ["", [Validators.required]],
            },
            {
                validators: [matchPasswordsValidator("password", "rePassword")],
            },
        ),
    });
    // ** Interceptor lesson - inject userservice,router
    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router,
    ) {}

    register(): void {
        if (this.form.invalid) {
            return;
        }

        // ** Interceptor lesson
        //destructoring
        const {
            username,
            email,
            tel,
            passGroup: { password, rePassword } = {},
        } = this.form.value;
        // този рег. връща обсървабъл, така че можем да субскрайбнем
        this.userService
            .register(username!, email!, tel!, password!, rePassword!)
            .subscribe(() => {
                this.router.navigate(["/themes"]);
            });
        //** */
        // console.log(this.form.value);
    }
}
