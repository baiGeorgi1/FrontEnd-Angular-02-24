import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReducePipe } from "./reduce.pipe";
import { HttpClientModule } from "@angular/common/http";
import { ApphttpInterceptorProvider } from "./apphttp.interceptor";
import { HomeComponent } from "./home/home.component";
import { LazyModule } from "./lazy/lazy.module";

@NgModule({
    declarations: [AppComponent, ReducePipe, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [ApphttpInterceptorProvider],
    bootstrap: [AppComponent],
})
export class AppModule {}
