import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EMAIL_DOMAINS } from "src/app/constants";
import { mailValidator } from "src/app/shared/utils/email-validator";
import { ProfileDetails } from "src/app/types/user";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
    showEdit: boolean = false;

    profileDetails: ProfileDetails = {
        username: "John Doe",
        email: "john@gmail.com",
        tel: "321 321 321",
    };
    form = this.fb.group({
        username: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, mailValidator(EMAIL_DOMAINS)]],
        tel: [""],
    });

    constructor(private fb: FormBuilder) {}

    onEdit(): void {
        this.showEdit = true;
    }

    onCancel(): void {
        this.showEdit = false;
    }
    saveProfileHandler(): void {
        console.log("Invoked: ", this.form.value);

        if (this.form.invalid) {
            return;
        }
        this.profileDetails = this.form.value as ProfileDetails;
        this.showEdit = false;
    }
}
