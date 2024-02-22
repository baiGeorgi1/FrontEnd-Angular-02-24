import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "my-demo";
    colorRedForPlayground = "red";
    colorGreenForPlayground = "green";

    onOutputfromChild(inputValue: string) {
        console.log("from parent", inputValue);
    }
}
