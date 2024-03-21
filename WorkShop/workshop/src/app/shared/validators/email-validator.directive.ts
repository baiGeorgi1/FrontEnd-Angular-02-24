import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
    ValidatorFn,
} from "@angular/forms";
import { mailValidator } from "../utils/email-validator";

@Directive({
    selector: "[appEmailValidator]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailValidatorDirective,
            multi: true,
        },
    ],
})

// better VALIDATOR
// export class EmailValidatorDirective implements Validator, OnChanges {
//     @Input() appEmailValidator: string[] = [];
//     validator: ValidatorFn = () => null;

//     constructor() {}

//     validate(control: AbstractControl<any, any>): ValidationErrors | null {
//         console.log("validate:", control);

//         return this.validator(control.value);
//     }

//     ngOnChanges(changes: SimpleChanges): void {
//         const { currentValue } = changes["appEmailValidator"];

//         // console.log({ currentValue });
//         if (currentValue?.length) {
//             this.validator = mailValidator(currentValue);
//         }
//     }
// }

// ******************** EASY VALIDATOR
export class EmailValidatorDirective implements Validator {
    @Input() appEmailValidator: string[] = [];

    constructor() {}

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        console.log("validate:", control.value);
        console.log("DOMAINS:", this.appEmailValidator);

        const validatorFn = mailValidator(this.appEmailValidator);
        const result = validatorFn(control);
        console.log(result);

        return result;
    }
}
