import { Component, Input } from "@angular/core";
import { JsonPlaceHolder } from "../types/user";

@Component({
    selector: "user-item",
    templateUrl: "./user-item.component.html",
    styleUrls: ["./user-item.component.css"],
})
export class UserItemComponent {
    @Input("user") user = {} as JsonPlaceHolder;
}
