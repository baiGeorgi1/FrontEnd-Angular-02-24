import { Injectable, OnDestroy } from "@angular/core";
import { JsonPlaceHolder, User } from "./types/user";

@Injectable()
//Тук можем да инжектнем даденият модул на определено място и да го подадем в providers в app.module.ts
//providedIn: "root",
export class UserService implements OnDestroy {
    URL = "https://jsonplaceholder.typicode.com/users";
    users: JsonPlaceHolder[] = [];

    constructor() {
        // setInterval(() => {
        //     this.counter++;
        // }, 3000);
    }
    ngOnDestroy(): void {
        // clear terminal,detach from events
    }

    // ********** Working with HTTP
    getUsers() {
        return fetch(this.URL).then((res) => res.json());
    }
    //******************************************* */

    addUserHandler(nameInput: HTMLInputElement, emailInput: HTMLInputElement) {
        const user = {
            name: nameInput.value,
            email: emailInput.value,
        } as JsonPlaceHolder;
        // с ф-я refresh()
        // this.users.push({ user });
        // Когато сме сложили ChangeDetevtion в test.ts
        // this.users = this.users.concat({ name });
        console.log(this.users);

        nameInput.value = "";
        emailInput.value = "";
    }
}
