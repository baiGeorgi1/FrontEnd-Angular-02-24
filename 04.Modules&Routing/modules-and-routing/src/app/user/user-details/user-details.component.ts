import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";

@Component({
    selector: "app-user-details",
    templateUrl: "./user-details.component.html",
    styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
    constructor(
        private activeRoute: ActivatedRoute,
        private userService: UserService,
    ) {
        //static data
        console.log("snapshot data", this.activeRoute.snapshot.data["user"]);
        //dynamic
        this.activeRoute.params.subscribe((v) => {
            console.log("params.subscribe", v);
            // const id = v["id"];
            // this.userService.fettchOneUser(id).subscribe((user) => {
            //     console.log(user);
            // });
        });
    }

    ngOnInit(): void {}
}
