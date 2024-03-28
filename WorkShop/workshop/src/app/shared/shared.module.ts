import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader/loader.component";
import { WelcomeMsgComponent } from "./welcome-msg/welcome-msg.component";
import { RouterModule } from "@angular/router";
import { EmailValidatorDirective } from "./validators/email-validator.directive";
import { SlicePipe } from "./pipes/slice.pipe";
import { ElapsedTimePipe } from "./pipes/elapsed-time.pipe";

@NgModule({
    declarations: [
        LoaderComponent,
        WelcomeMsgComponent,
        EmailValidatorDirective,
        SlicePipe,
        ElapsedTimePipe,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        LoaderComponent,
        WelcomeMsgComponent,
        EmailValidatorDirective,
        SlicePipe,
        ElapsedTimePipe,
    ],
})
export class SharedModule {}
