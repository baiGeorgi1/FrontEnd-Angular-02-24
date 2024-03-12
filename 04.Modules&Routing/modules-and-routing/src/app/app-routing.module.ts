import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoListComponent } from "./todo/todo-list/todo-list.component";

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "user/list" },

    { path: "todo-list", component: TodoListComponent },
    { path: "**", redirectTo: "error-page" }, //make ERROR PAGE
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
