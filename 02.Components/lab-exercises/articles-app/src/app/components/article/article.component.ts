import { Component } from "@angular/core";
import { ArticleData } from "src/app/data/data";

@Component({
    selector: "app-article",
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.css"],
})
export class ArticleComponent {
    title = "";
}
