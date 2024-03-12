import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";
import { Theme } from "../../types/theme";
import { UserService } from "src/app/user.service";

@Component({
    selector: "app-themes-list",
    templateUrl: "./themes-list.component.html",
    styleUrls: ["./themes-list.component.css"],
})
export class ThemesListComponent implements OnInit {
    themes: Theme[] = [];
    isLoading = true;
    constructor(private api: ApiService, private userService: UserService) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    //for subscribers
    get userId(): string {
        return this.userService.user?.id || "";
    }

    ngOnInit(): void {
        this.api.getThemes().subscribe((themes) => {
            this.themes = themes;
            this.isLoading = false;
        });
    }
    // for subscribers
    isSubscribed(theme: Theme) {
        const isSubscribedUser = theme.subscribers.find((s) => {
            return s === this.userService.user?.id;
        });

        return !!isSubscribedUser;
    }
}
