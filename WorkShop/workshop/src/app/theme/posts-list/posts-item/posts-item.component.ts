import { Component, Input } from "@angular/core";
import { Post } from "src/app/types/post";

@Component({
    selector: "app-posts-item",
    templateUrl: "./posts-item.component.html",
    styleUrls: ["./posts-item.component.css"],
})
export class PostsItemComponent {
    @Input("post") post = {} as Post;
}
