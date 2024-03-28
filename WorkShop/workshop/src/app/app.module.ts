import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from "./home/home.component";

import { ThemeModule } from "./theme/theme.module";
import { AddThemeComponent } from "./theme/add-theme/add-theme.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FormsModule } from "@angular/forms";
import { appInterceptorProvider } from "./app.interceptor";
import { AuthenticateComponent } from "./authenticate/authenticate.component";

@NgModule({
    declarations: [
        AppComponent,
        AddThemeComponent,
        HomeComponent,
        NotFoundComponent,
        AuthenticateComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        HttpClientModule,
        // UserModule,  - removing from here to make it lazy loading
        ThemeModule,
        FormsModule,
        AppRoutingModule,
    ],
    // тук добавяме провайдърите
    providers: [appInterceptorProvider],
    bootstrap: [AppComponent],
})
export class AppModule {}
