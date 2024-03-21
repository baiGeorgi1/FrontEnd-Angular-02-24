import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: HomeComponent,
    },
    {
        path: "lazy",
        loadChildren: () =>
            import("./lazy/lazy.module").then((m) => m.LazyModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            // additional configs
            // {
            //     // preloadingStrategy: PreloadAllModules,
            //     enableTracing: true, //show route path GOOD FOR NAVIGATION
            // },
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
