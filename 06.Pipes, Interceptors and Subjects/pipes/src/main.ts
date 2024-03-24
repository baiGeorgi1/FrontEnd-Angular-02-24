import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { AsyncSubject } from "rxjs";

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));

// ** REFRESHER
// OBSERVER always ends with $
// const p = new Promise((resolve, reject) => {
//     resolve(100);

//     // reject -> catch -> err
// });

// p.then(console.log);

// const o$ = new Observable<number>((obs) => {
//     obs.next(101);
//     obs.next(102);
//     obs.next(103);

//     // Тук избираме дали да хвърлим грешка, или да комплийтнем
//     // obs.complete();
//     // obs.error(new Error("Something wen wrong!"));

//     // ** CLEANUP
//     return () => {
//         // cleanup!
//     };
// });
// o$.pipe(map((n) => n + 1)).subscribe({
//     next: console.log,
//     error: console.error,
//     complete: () => console.log("Completed!"),
// });

// ** SUBJECTS - alway ends with $$

// const subject$$ = new Subject();
// subject$$.subscribe((data) => console.log("A:", data)); //A
// subject$$.next(100);

// subject$$.subscribe((data) => console.log("B:", data)); //B
// subject$$.next(200);

// setTimeout(() => {
//     subject$$.subscribe((data) => console.log("D", data));
//     subject$$.next(300);
// }, 2000);

// **BEHAVIOR SUBJECTS
// const bSubject$$ = new BehaviorSubject(100);
// bSubject$$.subscribe((data) => console.log("Sub A:", data));
// setTimeout(() => {
//     bSubject$$.next(200);
//     bSubject$$.subscribe((data) => console.log("Sub B:", data));
// }, 2000);

// **REPLAY SUBJECT
// here we have a buffer where we can set the showing data
// const rSubject$$ = new ReplaySubject(5);
// rSubject$$.next(1000);
// rSubject$$.subscribe((data) => console.log("Subscription 1:", data));

// for (let i = 1; i <= 10; i++) {
//     rSubject$$.next(i);
// }
// console.log("------------------------------");
// rSubject$$.subscribe((data) => console.log("Subscription 2:", data));

// ** ASYNC Subject
// must have .complete()

const aSubject$$ = new AsyncSubject();
aSubject$$.next(1);
aSubject$$.next(2);
aSubject$$.next(3);
aSubject$$.next(4);
aSubject$$.subscribe((data) => console.log("Subscribe 1:", data));
aSubject$$.next(5);
aSubject$$.subscribe((data) => console.log("Subscribe 2:", data));

aSubject$$.complete();
