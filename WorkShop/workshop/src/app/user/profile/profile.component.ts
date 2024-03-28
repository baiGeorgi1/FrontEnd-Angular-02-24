import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EMAIL_DOMAINS } from "src/app/constants";
import { mailValidator } from "src/app/shared/utils/email-validator";
import { ProfileDetails } from "src/app/types/user";
import { UserService } from "src/app/user.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
    showEdit: boolean = false;

    profileDetails: ProfileDetails = {
        username: "",
        email: "",
        tel: "",
    };
    form = this.fb.group({
        username: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, mailValidator(EMAIL_DOMAINS)]],
        tel: [""],
    });

    constructor(private fb: FormBuilder, private userService: UserService) {}

    ngOnInit(): void {
        const { username, email, tel } = this.userService.user!;
        this.profileDetails = {
            username,
            email,
            tel,
        };
        // for edit form:
        this.form.setValue({
            username,
            email,
            tel,
        });
    }

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

        const { username, email, tel } = this.profileDetails;

        this.userService.updateProfile(username, email, tel).subscribe(() => {
            this.showEdit = false;
        });
    }
}
