import {
    Directive,
    Input,
    OnChanges,
    OnInit,
    Optional,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from "@angular/core";

@Directive({
    selector: "[appMyStructural]",
    exportAs: "appMyStructural",
})
export class MyStructuralDirective implements OnChanges {
    @Input() appMyStructural: boolean = false;
    @Input() myTpmRef: TemplateRef<any> | undefined;
    constructor(
        @Optional() private templateRef: TemplateRef<any>,
        private vcRef: ViewContainerRef,
    ) {
        // debugger;
        // console.log({ templateRef });
    }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(this.appMyStructural);

        const template = this.templateRef || this.myTpmRef;

        if (this.appMyStructural) {
            this.vcRef.createEmbeddedView(
                template,
                //context
                {
                    myCustomValue: "This is how to make diff variables",
                    $implicit: "Default value!",
                },
            );
        } else {
            this.vcRef.clear();
        }
    }
}
