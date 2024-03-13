import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent {
    // ** МОжем да създ. пром. и с @viewwChild
    @ViewChild("login") loginForm: NgForm | undefined;

    // Render static content
    // ngOnInit(): void {

    // }

    // ** Render final content+dynamic content
    // ngAfterViewInit() {}

    // ** КОгато изп. viewChild НЕ създ. пром. в Html-a и на хендлъра не подаваме (form: NgForm)
    formSubmitHandler() {
        if (!this.loginForm) {
            return;
        }

        const form = this.loginForm;

        if (form.invalid) {
            console.log("Form is invalid!");
            return;
        }
        console.log("Invalid", form.invalid);

        console.log(form.value);
        // ** form.value => ngModel on Input
        const { email, password } = form?.value;
        // ** Two way of reseting the form:
        // form.reset()
        form.setValue({ email: "", password: "" });
    }
}
