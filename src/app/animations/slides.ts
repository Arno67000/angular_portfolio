import { style, transition, trigger, animate, query, stagger, keyframes } from "@angular/animations";

export const slideListFromLeft = (elementClassName: string, timings: string, staggering: number) =>
    trigger("slideListFromLeft", [
        transition("void => *", [
            query(
                `.${elementClassName}`,
                [
                    style({ transform: "translateX(-100%)" }),
                    stagger(staggering, [animate(timings, style({ transform: "none" }))]),
                ],
                { optional: true }
            ),
        ]),
    ]);
export const slideListFromRight = (elementClassName: string, timings: string, staggering: number) =>
    trigger("slideListFromRight", [
        transition("void => *", [
            query(
                `.${elementClassName}`,
                [
                    style({ transform: "translateX(100%)" }),
                    stagger(staggering, [animate(timings, style({ transform: "none" }))]),
                ],
                { optional: true }
            ),
        ]),
    ]);
