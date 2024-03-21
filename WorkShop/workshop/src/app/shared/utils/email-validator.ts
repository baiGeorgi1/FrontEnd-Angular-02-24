import { ValidatorFn } from "@angular/forms";

export function mailValidator(domains: string[]): ValidatorFn {
    // ^[\w-\.]+@(gmail\.)+(com|bg)$
    const domainString = domains.join("|");
    const regExp = new RegExp(`^[A-Za-z0-9]+@gmail\.(${domainString})`);

    return (control) => {
        const isInvalidEmail =
            control.value === "" || regExp.test(control.value);
        console.log(
            "Test RegExp:",
            isInvalidEmail,
            "Control value:",
            control.value,
        );

        return isInvalidEmail ? null : { mailValidator: true };
    };
}
