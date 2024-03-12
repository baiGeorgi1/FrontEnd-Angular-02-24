import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { Theme } from "./types/theme";
import { Post } from "./types/post";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(private http: HttpClient) {}
    getThemes() {
        const { apiURL } = environment;
        // const api= environment.apiURL  OR like that:
        return this.http.get<Theme[]>(`${apiURL}/themes`);
    }

    getTheme(id: string) {
        //TODO : implement later
        const { apiURL } = environment;
        return this.http.get<Theme>(`${apiURL}/themes/${id}`);
    }
    createTheme(theneName: string, postText: string) {
        const { apiURL } = environment;
        const payload = {
            theneName,
            postText,
        };
        return this.http.post<Theme>(`${apiURL}/themes`, payload);
    }

    getPosts(limit?: number) {
        const { apiURL } = environment;

        let URL = `${apiURL}/posts`;
        if (limit) {
            URL += `?limit=${limit}`;
        }

        return this.http.get<Post[]>(URL);
    }
}
