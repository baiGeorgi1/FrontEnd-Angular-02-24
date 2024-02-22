import { Component } from "@angular/core";

@Component({
    selector: "app-nav", // така отличаваме нашите компоненти от html компонентите
    template: `<div id="nav-wrapper">
            <h3>
                We can use some logic in this scopes: {{ [1, 2, 3].join(",") }}
            </h3>
        </div>
        <div>{{ titleVariable }}</div>`,
    styles: ["#nav-wrapper{background:pink}"],
})
export class NavComponent {
    titleVariable = "Hello everyone!";
}
