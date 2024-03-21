import { Pipe, PipeTransform } from "@angular/core";

// Decorator който ни показва дали е  директ.,пайп и т.н.
@Pipe({
    name: "reduce",
    pure: true, // by default, result is memoized, invoked on change of the reference
    // pure:false , // not a pure func, not memoized,invoked on every change
})

// Class
//Правим класът да е от тип <Т> (дженерик=>когато не знаем от какъв тип ще са арг. (number,string,boolean etc))
export class ReducePipe<T> implements PipeTransform {
    transform(
        array: T[],
        callbackFn: (acc: any, curr: any) => any,
        initialValue: T, // T is generic type
    ): unknown {
        // [1,2,3,4,].reduce(callbackFn,0)

        //
        return array.reduce(callbackFn, initialValue);
    }
}
