import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorComponent } from "./core/error/error.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/home" },
    { path: "home", component: HomeComponent },
    //** Interceptor lesson  */ lazy loading(after we remove UserModule from app.module)
    {
        path: "auth",
        loadChildren: () =>
            import("./user/user.module").then((m) => m.UserModule),
    },
    // after that make ng serve to restart the app
    // **************************
    // !! when we create error service + component :
    { path: "error", component: ErrorComponent },
    // !!
    { path: "**", redirectTo: "/404" },
    { path: "404", component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
