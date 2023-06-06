import { style, transition, trigger, animate, query, stagger } from "@angular/animations";

export const scaleX = (elementClassName: string, timings: string, staggering: number) =>
    trigger("scaleX", [
        transition("void => *", [
            query(
                `.${elementClassName}`,
                [style({ width: "0%" }), stagger(staggering, [animate(timings, style({ width: "*" }))])],
                { optional: true }
            ),
        ]),
    ]);
