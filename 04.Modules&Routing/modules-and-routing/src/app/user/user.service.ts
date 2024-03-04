import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { User } from "src/types/User";

@Injectable({
    providedIn: "root",
})
export class UserService implements OnInit {
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
        //
    }

    fetchUsers() {
        return this.http.get<User[]>(
            "https://jsonplaceholder.typicode.com/users",
        );
    }
    fettchOneUser(id: number) {
        return this.http.get<User>(
            `https://jsonplaceholder.typicode.com/users/${id}`,
        );
    }
}
