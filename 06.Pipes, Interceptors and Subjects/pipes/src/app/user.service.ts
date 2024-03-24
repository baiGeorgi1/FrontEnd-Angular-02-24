import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private userSubject$$ = new BehaviorSubject<Object | null>(null);
    private isLoading$$ = new BehaviorSubject<boolean>(false);

    //with this method we can turn  Subject as  Observer
    public userObs$ = this.userSubject$$.asObservable();

    // We make observable to get it outside
    public isLoadingObs$ = this.isLoading$$.asObservable();

    constructor(private http: HttpClient) {}

    loadUsers() {
        this.userSubject$$.next(null);
        this.isLoading$$.next(true);
        // before subjects was this line
        // return this.http.get("/api/users");
        this.http.get("/api/users").subscribe((users) => {
            this.userSubject$$.next(users);
            this.isLoading$$.next(false);
        });
    }
}
