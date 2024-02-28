import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GameComponent } from "./game/game.component";
import { FormsModule } from "@angular/forms";
import { GameItemComponent } from "./game/game-item/game-item.component";

@NgModule({
    declarations: [AppComponent, GameComponent, GameItemComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
