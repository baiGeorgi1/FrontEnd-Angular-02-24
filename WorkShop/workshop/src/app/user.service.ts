import { Injectable } from "@angular/core";
import { User, UserForAuth } from "./types/user";

@Injectable({
    providedIn: "root",
})
export class UserService {
    user: UserForAuth | undefined;
    USER_KEY = "[user]";
    // Правим си гетър
    get isLogged(): boolean {
        return !!this.user;
    }

    constructor() {
        try {
            const lsUser = localStorage.getItem(this.USER_KEY) || "";
            this.user = JSON.parse(lsUser);
        } catch (error) {
            this.user = undefined;
        }
    }
    login() {
        // this is while we get forms
        this.user = {
            id: "5fa64c1f2183ce1728ff3723",
            firstName: "Petko",
            email: "petko@abv.bg",
            password: "123123",
            phoneNumber: "123-123-123",
        };
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    }
    logout() {
        this.user = undefined;
        localStorage.removeItem(this.USER_KEY);
    }
}
