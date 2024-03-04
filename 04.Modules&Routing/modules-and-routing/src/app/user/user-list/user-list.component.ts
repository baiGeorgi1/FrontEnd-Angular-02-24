import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "src/types/User";
import { GlobalLoaderService } from "src/app/core/global-loader/global-loader.service";

@Component({
    selector: "app-user-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
    userlist: User[] = [];
    constructor(
        private userService: UserService,
        private GlobalLoaderService: GlobalLoaderService,
    ) {}
    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(): void {
        this.GlobalLoaderService.showLoader();
        // fetching users
        // with timeout
        // setTimeout(() => {
        this.userService.fetchUsers().subscribe({
            // properties of subscribe
            next: (users) => {
                this.userlist = users;
                this.GlobalLoaderService.hideLoader();
            },
            error: (error) => {
                alert(`Error: ${error.message}`);
                this.GlobalLoaderService.hideLoader();
            },
            complete: () => {
                //TODO additional things
            },
        });
        // }, 3000);
    }
    reloadUsers() {
        this.loadUsers();
    }
}
