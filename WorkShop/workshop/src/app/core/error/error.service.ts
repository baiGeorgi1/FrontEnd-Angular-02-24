import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ErrorService {
    private apiError$$ = new BehaviorSubject(null);
    // or here (see error.component)
    public apiError$ = this.apiError$$.asObservable();

    constructor() {}

    setError(error: any): void {
        // console.log(error);

        this.apiError$$.next(error);
    }
}
