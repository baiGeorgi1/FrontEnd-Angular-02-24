import { Component } from "@angular/core";
import { Game } from "./game-item/game-item.component";

@Component({
    selector: "game-app",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"],
})
export class GameComponent {
    coloredPrice?: boolean;
    showGameItemComponent?: boolean;
    // ******** for ngModel -add FormsModule in app.module
    searchText: string = "Game";
    // *********
    games: Game[] = [
        {
            title: "MineCraft",
            price: 10,
            img: "https://wallpapers.com/images/hd/minecraft-background-cfljc4haleghnajo.jpg",
        },
        {
            title: "Worl of Tanks",
            price: 30,
            img: "https://wallpapers.com/images/high/world-of-tanks-blasting-j0wj011hu1wt08wc.webp",
        },
        {
            title: "Heroes of Might of Magic",
            price: 120,
            img: "https://media.moddb.com/cache/images/games/1/1/295/thumb_620x2000/wallpaper.jpg",
        },
    ];
    constructor() {
        // Ако нямаме title , на конзолата ще върне undefined!
        for (const game of this.games) {
            console.log(game.title?.length);
        }
    }

    handleExpand(gamesContainer: HTMLElement): void {
        this.coloredPrice = this.coloredPrice ? false : true;
        console.log(gamesContainer.children);
    }
    handleSearchChange(event: Event) {
        console.log(event);
    }
    handleCreateOrDestroy(): void {
        this.showGameItemComponent = !this.showGameItemComponent;
    }
}
