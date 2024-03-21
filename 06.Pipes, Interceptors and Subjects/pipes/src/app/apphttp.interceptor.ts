import { Injectable, Provider } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { EMPTY, Observable, catchError, tap } from "rxjs";
import { API_URL } from "./constants";

// ** HTTP INTERCEPTORS

@Injectable()
export class ApphttpInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        if (request.url.startsWith("/api")) {
            request = request.clone({
                url: request.url.replace("/api", API_URL),
            });
        }
        console.log(request.url);

        // ** КОГАТО ОТТУК ИНТЕРСЕПТВАМЕ ГРЕШКИ, НЕ МОЖЕМ ДА ГИ ПРИХВАНЕМ ОТ ДРУГО МЯСТО!!!
        return next.handle(request).pipe(
            tap((req) => console.log(req)),
            catchError((err) => {
                if (err.status === 0) {
                    console.error("ERROR: ", err);
                    return EMPTY;
                }
                return [err];
            }),
        );
    }
}

export const ApphttpInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: ApphttpInterceptor,
};
