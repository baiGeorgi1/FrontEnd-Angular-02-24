import { Component, OnInit } from "@angular/core";
import { interval, map } from "rxjs";
import { UserService } from "./user.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    title = "pipes";

    user = { name: "Petko", age: 22, list: [1, 2, 3, 4, 5, 6, 7] };
    sum(acc: number, curr: number): number {
        return acc + curr;
    }

    addProperty() {
        (this.user as any).test = "1234";
        // to see how 'pure' works
        this.user.list = [...this.user.list, 100];
    }

    p = new Promise((resolve) => {
        setTimeout(() => {
            resolve(1111);
        }, 3000);
    });

    // **CLOCK
    time$ = interval(1000).pipe(map(() => new Date()));

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.loadUsers().subscribe({
            // next: (data) => console.log(data),   => OR
            next: console.log,
        });
    }
}
