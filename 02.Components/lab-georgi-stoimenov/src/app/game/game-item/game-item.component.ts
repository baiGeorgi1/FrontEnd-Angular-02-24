import {
    Component,
    Input,
    OnDestroy,
    OnInit,
    OnChanges,
    SimpleChanges,
} from "@angular/core";
// class template
export interface Game {
    title?: string;
    price: number;
    img: string;
}

@Component({
    selector: "game-item",
    templateUrl: "./game-item.component.html",
})
export class GameItemComponent implements OnInit, OnDestroy, OnChanges {
    @Input() sourceGame!: Game;

    ngOnInit(): void {
        console.log("Game Item component created");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Game item changes", changes);
    }
    ngOnDestroy(): void {
        console.log("Game Item component destroyed");
    }
}
