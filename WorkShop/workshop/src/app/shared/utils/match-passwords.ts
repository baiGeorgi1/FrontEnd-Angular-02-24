import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
    passwordControlName: string,
    rePasswordControlName: string,
): ValidatorFn {
    return (control) => {
        const passwordFormConttrol = control.get(passwordControlName);
        const rePassFormControl = control.get(rePasswordControlName);

        // console.log({ passwordFormConttrol, rePassFormControl });
        const areMatching =
            passwordFormConttrol?.value == rePassFormControl?.value;
        console.log({ areMatching });

        return areMatching ? null : { matchPasswordsValidator: true };
    };
}
