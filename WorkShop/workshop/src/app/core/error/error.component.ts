import { Component, OnInit } from "@angular/core";
import { ErrorService } from "./error.service";

@Component({
    selector: "app-error",
    templateUrl: "./error.component.html",
    styleUrls: ["./error.component.css"],
})
export class ErrorComponent implements OnInit {
    errorMsg = "";
    // we can make it here
    // apiError$ = this.erroService.apiError$$.asObservable()
    constructor(private erroService: ErrorService) {}

    ngOnInit(): void {
        this.erroService.apiError$.subscribe((err: any) => {
            console.log(err);
            this.errorMsg = err?.message || "";
        });
    }
}

// ** CREATE ERROR SERVICE with ng g s
