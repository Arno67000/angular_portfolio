import { style, transition, trigger, animate, query, stagger } from "@angular/animations";

export const listFadeIn = (elementClassName: string, timings: string, staggering: number) =>
    trigger("listFadeIn", [
        transition("void => *", [
            query(
                `.${elementClassName}`,
                [style({ opacity: 0 }), stagger(staggering, [animate(timings, style({ opacity: 1 }))])],
                { optional: true }
            ),
        ]),
    ]);
