//Last Workshop interseptors

import {
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment.development";
import { ErrorService } from "./core/error/error.service";
import { Router } from "@angular/router";
const { apiURL } = environment;
@Injectable()
class AppInterceptor implements HttpInterceptor {
    API = "/api";

    // Inject errorService to cath errors (After we made error service)
    constructor(private errorService: ErrorService, private router: Router) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        // console.log(req);

        if (req.url.startsWith(this.API)) {
            req = req.clone({
                url: req.url.replace(this.API, apiURL),
                // с таи конфиг. сървъра ни връща куки
                withCredentials: true,
            });
        }
        // After we made error service, add pipe to catch errors
        return next.handle(req).pipe(
            catchError((err) => {
                if (err.status === 401) {
                    this.router.navigate(["/auth/login"]);
                } else {
                    this.errorService.setError(err);
                    this.router.navigate(["/error"]);
                }
                return [err];
            }),
        );
    }
}
export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
};
