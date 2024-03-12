import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";
import { ThemeRoutingModule } from "./theme-routing.module";

import { ThemesListComponent } from "./themes-list/themes-list.component";

import { SharedModule } from "../shared/shared.module";

import { MainComponent } from "./main/main.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsItemComponent } from "./posts-list/posts-item/posts-item.component";

@NgModule({
    declarations: [
        CurrentThemeComponent,
        ThemesListComponent,
        PostsListComponent,
        PostsItemComponent,
        MainComponent,
    ],
    imports: [CommonModule, ThemeRoutingModule, SharedModule],
})
export class ThemeModule {}
