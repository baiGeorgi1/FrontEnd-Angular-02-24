import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
    name: "elapsedTime",
})
export class ElapsedTimePipe implements PipeTransform {
    transform(date: string, ...args: unknown[]): unknown {
        // today  - given date (to count when was published s.th.)
        // 28.03.2024 - 25.03.2024 =>  3days
        return moment(date).fromNow();
    }
}
