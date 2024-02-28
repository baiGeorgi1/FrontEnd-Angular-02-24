import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { UserService } from "./user.service";
import { Observable, interval, map } from "rxjs";
// ADD HTTP CLient
import { HttpClientModule } from "@angular/common/http";
import { UserItemComponent } from "./user-item/user-item.component";

@NgModule({
    declarations: [AppComponent, TestComponent, UserItemComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [UserService],
    bootstrap: [AppComponent],
})
export class AppModule {}
//********** Promise
// - promises are not lazy, code invokes!
// - can't be canceled
const p = new Promise((resolve, reject) => {
    console.log("promise invoked!");
    setTimeout(() => {
        resolve(111);
        // ERROR reject("why not?");
    }, 3000);
});
p.then((data) => {
    console.log("from promise", data);
}).catch((err) => console.log(err));
// example shorthand
Promise.resolve(112)
    .then((data) => data * 10)
    .then((x) => console.log("from promise 2", x));
// sync analogy
// [1].map((x) => x * 2);

// ********** Observables
//sync analogy
// [1,2,3,4,5].map((x) => x*2)

//example

// const o = new Observable((observer) => {
//     observer.next(200);
//     observer.next(201);
//     observer.next(202);
//     observer.next(203);

// });
// o.subscribe((data) => {
//     console.log("From observable - ", data);
// });
// ************WITHOUT RxJS - counter util-ka
// const interval = (intervalValue: number) => {
//     const o = new Observable<number>((observer) => {
//         let counter = 0;
//         const timer = setInterval(() => {
//             observer.next(counter++);
//         }, intervalValue);
//         return () => {
//             //clear data on destroy
//             clearInterval(timer);
//         };
//     });
//     return o;
// };
interval(2000).subscribe((data) => {
    console.log("data from Interval ", data);
});
// Observables - променливите ги маркираме с "$" накрая
const stream$ = interval(3000).pipe(map((x) => x * 2));
stream$.subscribe((data) => console.log("from STREAM", data));

//може и като обект да подадем на stream$

stream$.subscribe({
    next: (data) => console.log("OBJECT STREAm", data / 2),
    error: (error) => console.log("ERROR: ", error),
    complete: () => console.log("The stream is completed!"),
});
