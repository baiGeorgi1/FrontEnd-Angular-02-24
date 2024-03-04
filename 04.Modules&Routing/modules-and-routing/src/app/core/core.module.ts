import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalLoaderComponent } from "./global-loader/global-loader.component";
import { ShareModule } from "../share/share.module";
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [GlobalLoaderComponent, NavigationComponent],
    imports: [CommonModule, ShareModule, RouterModule],
    exports: [GlobalLoaderComponent, NavigationComponent],
})
export class CoreModule {}
