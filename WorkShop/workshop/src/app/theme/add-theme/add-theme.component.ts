import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";

@Component({
    selector: "app-add-theme",
    templateUrl: "./add-theme.component.html",
    styleUrls: ["./add-theme.component.css"],
})
export class AddThemeComponent {
    //When we have Authentication we add constructor

    constructor(private apiServise: ApiService, private router: Router) {}

    addTheme(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // getting data from forms:
        const { themeName, postText } = form.value;
        this.apiServise.createTheme(themeName, postText).subscribe(() => {
            // navigate
            this.router.navigate(["/themes"]);
        });
    }
}
