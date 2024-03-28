import { Injectable, OnDestroy } from "@angular/core";
import { UserForAuth } from "./types/user";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subscription, tap } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UserService implements OnDestroy {
    // ** Interceptor lesson
    private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
    private user$ = this.user$$.asObservable();
    // ****************
    user: UserForAuth | undefined;
    USER_KEY = "[user]";

    // ** Interceptor lesson
    userSubscription: Subscription;
    //** ******* */

    // Правим си гетър
    get isLogged(): boolean {
        return !!this.user;
    }
    //** make constructor for login - interceptors lesson */
    constructor(private http: HttpClient) {
        this.userSubscription = this.user$.subscribe((user) => {
            this.user = user;
        });
        //    ** Before Intercetors -lesson
        // try {
        //     const lsUser = localStorage.getItem(this.USER_KEY) || "";
        //     this.user = JSON.parse(lsUser);
        // } catch (error) {
        //     this.user = undefined;
        // }
    }
    //** Interceptor lesson */
    login(email: string, password: string) {
        // this is while we get forms
        // this.user = {
        //     id: "5fa64c1f2183ce1728ff3723",
        //     username: "Petko",
        //     email: "petko@abv.bg",
        //     password: "123123",
        //     tel: "123-123-123",
        // };
        // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

        // ** Interceptor lesson - add pipe
        return (
            this.http
                .post<UserForAuth>("/api/login", { email, password })
                //tap операторът е за слуша за резултатът, ког сървърът ще върне юзър
                .pipe(tap((user) => this.user$$.next(user)))
        );
    }

    // ** Interceptor lesson - register
    register(
        username: string,
        email: string,
        tel: string,
        password: string,
        rePassword: string,
    ) {
        return this.http
            .post<UserForAuth>("/api/register", {
                username,
                email,
                tel,
                password,
                rePassword,
            })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    //**  */

    logout() {
        // this.user = undefined;
        // localStorage.removeItem(this.USER_KEY);
        // ** Interceptor lesson - logout
        return this.http
            .post("/api/logout", {})
            .pipe(tap(() => this.user$$.next(undefined)));
    }

    //** After we create authenticate component */
    getProfile() {
        return this.http
            .get<UserForAuth>("/api/users/profile")
            .pipe(tap((user) => this.user$$.next(user)));
    }

    updateProfile(username: string, email: string, tel?: string) {
        return this.http
            .put<UserForAuth>("/api/users/profile", {
                username,
                email,
                tel,
            })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    // ** Interceptor lesson - destroy userService session
    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}
