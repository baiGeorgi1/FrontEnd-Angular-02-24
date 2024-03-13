import {
    Directive,
    ElementRef,
    HostListener,
    OnDestroy,
    OnInit,
    Renderer2,
} from "@angular/core";

type MyVoid = () => void;

@Directive({
    selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit, OnDestroy {
    // ** DEMO HOSTLISTENER **/
    // @HostListener("mouseover", ["$event"]) mouseOverHandler(e: MouseEvent) {
    //     // console.log("mouseOVER", e);
    // }

    //** this is for ondestroy [here we collect event funcs to delete them onDestroy]
    unsubsFromEventsArr: MyVoid[] = [];

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
    ngOnInit(): void {
        // console.log(this.elRef.nativeElement);
        // ! BAD practise
        // this.elRef.nativeElement.style.background = "orange";

        //GOOD PRACTISE
        // add Rendere2 and use the directives like that:
        // this.renderer.setStyle(
        //     this.elRef.nativeElement,
        //     "background",
        //     "lightblue",
        // );
        const mouseEnterEvent = this.renderer.listen(
            this.elRef.nativeElement,
            "mouseenter",
            this.mouseEnterHandler.bind(this),
        );
        const mouseLeveEvent = this.renderer.listen(
            this.elRef.nativeElement,
            "mouseleave",
            this.mouseLeaveHandler.bind(this),
        );
        this.unsubsFromEventsArr.push(mouseEnterEvent);
        this.unsubsFromEventsArr.push(mouseLeveEvent);
    }

    mouseEnterHandler(e: MouseEvent): void {
        // ** Setting Styles **/
        // this.renderer.setStyle(
        //     this.elRef.nativeElement,
        //     "background",
        //     "lightblue",
        // );
        // ** Setting Classes **/
        this.renderer.addClass(this.elRef.nativeElement, "highlight");
    }
    mouseLeaveHandler(e: MouseEvent): void {
        // ** Setting Styles **/
        // this.renderer.setStyle(this.elRef.nativeElement, "background", "none");
        // ** Setting Classes **/
        this.renderer.removeClass(this.elRef.nativeElement, "highlight");
    }

    //** Unsubs from events */
    ngOnDestroy(): void {
        console.log(this.unsubsFromEventsArr);
        this.unsubsFromEventsArr.forEach((fn) => {
            fn();
        });
    }
}
