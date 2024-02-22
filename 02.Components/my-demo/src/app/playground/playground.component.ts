import {
    AfterViewInit,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
} from "@angular/core";
const IMG_URL =
    "https://www.halifaxhumanesociety.org/zupload/library/153/-703-700x500-0.jpg?ztv=20190514142532";
@Component({
    selector: "app-playground",
    templateUrl: "./playground.component.html",
    styleUrls: ["./playground.component.css"],
})
export class PlaygroundComponent
    implements OnInit, OnDestroy, AfterViewInit, DoCheck, OnChanges
{
    @Input("color") colorValue = "white";

    @Output() onTestOutput = new EventEmitter<string>();

    isToggle = false;
    greenBackGround = "green-background";
    imgUrl = IMG_URL;

    //************* HOOKS **************
    ngOnInit() {
        console.log("Created");
    }
    ngAfterViewInit() {
        console.log("After Init");
    }

    ngOnDestroy() {
        // cleanup of stuuf!
        console.log("ON DESTROY!");
    }
    // When data is changed
    ngOnChanges() {}
    // DETECT my own changes
    ngDoCheck() {
        if (this.isToggle === true) {
            console.log({ isToggle: this.isToggle });
        }
    }
    // *********************************
    handleClick(event: Event) {
        this.isToggle = !this.isToggle;
        console.log("clicked", this.isToggle);
    }
    inputHandle(usernameValue: HTMLInputElement) {
        console.log("username: ", usernameValue, usernameValue.value);
        console.log(this.colorValue);

        this.onTestOutput.emit(usernameValue?.value || "");
    }
}
