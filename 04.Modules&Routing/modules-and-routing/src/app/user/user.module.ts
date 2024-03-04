import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterModule } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserResolver } from "./user-details/user-details.resolver";

@NgModule({
    declarations: [UserListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "user/list",
                component: UserListComponent,
            },
            {
                path: "user/details/:id",
                resolve: { user: UserResolver },
                component: UserDetailsComponent,
            },
        ]),
    ],
    exports: [UserListComponent],
})
export class UserModule {}
