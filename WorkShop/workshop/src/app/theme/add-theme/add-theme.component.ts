import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiService } from "src/app/api.service";

@Component({
    selector: "app-add-theme",
    templateUrl: "./add-theme.component.html",
    styleUrls: ["./add-theme.component.css"],
})
export class AddThemeComponent {
    constructor(private apiServise: ApiService) {}

    addTheme(form: NgForm) {
        if (form.invalid) {
            return;
        }
    }
}
