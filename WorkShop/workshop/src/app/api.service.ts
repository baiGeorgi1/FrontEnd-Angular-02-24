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

    // ** THEMES
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
    createTheme(themeName: string, postText: string) {
        const payload = {
            themeName,
            postText,
        };
        //when we made Authentication  we use this:
        return this.http.post<Theme>(`/api/themes`, payload);

        // const { apiURL } = environment;
        // return this.http.post<Theme>(`${apiURL}/themes`, payload);
    }

    // ** POSTS

    getPosts(limit?: number) {
        const { apiURL } = environment;

        let URL = `${apiURL}/posts`;
        if (limit) {
            URL += `?limit=${limit}`;
        }

        return this.http.get<Post[]>(URL);
    }
}
