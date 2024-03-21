import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader/loader.component";
import { WelcomeMsgComponent } from "./welcome-msg/welcome-msg.component";
import { RouterModule } from "@angular/router";
import { EmailValidatorDirective } from "./validators/email-validator.directive";

@NgModule({
    declarations: [
        LoaderComponent,
        WelcomeMsgComponent,
        EmailValidatorDirective,
    ],
    imports: [CommonModule, RouterModule],
    exports: [LoaderComponent, WelcomeMsgComponent, EmailValidatorDirective],
})
export class SharedModule {}
