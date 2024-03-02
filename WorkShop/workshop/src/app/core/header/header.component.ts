import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
    // till we see how to maka login and logout
    isLoggedIn: boolean = false;
}
