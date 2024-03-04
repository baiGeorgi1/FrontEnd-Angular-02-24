import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { routes } from "./app-routing.module";

import { CoreModule } from "./core/core.module";
import { UserModule } from "./user/user.module";
import { TodoModule } from "./todo/todo.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        // AppRoutingModule,
        CoreModule,
        UserModule,
        TodoModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
