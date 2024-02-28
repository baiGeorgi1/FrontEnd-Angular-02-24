import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    OnChanges,
} from "@angular/core";
import { JsonPlaceHolder, User } from "../types/user";

@Component({
    selector: "test-app",
    templateUrl: "./test.component.html",
    styleUrls: ["./test.component.css"],
    //С това следим за промяна на Инпут-а
    //Използва се оптимизация на прилож.
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit, OnChanges {
    @Input("users") userList: JsonPlaceHolder[] = [];

    constructor(private cd: ChangeDetectorRef) {
        // if (this.userList.length % 2 === 0) {
        //     this.cdREf.detectChanges();
        //     console.log("Changes Detected!");
        // }
    }

    ngOnChanges(): void {
        // if (this.userList.length > 4) {
        //     console.log("on changes");
        // }
    }
    refresh() {
        this.cd.detectChanges;
    }

    ngOnInit(): void {}
}
