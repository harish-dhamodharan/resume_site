import { animate, state, style, transition, trigger } from "@angular/animations";


export let fade: any = trigger(
    'fade',
    [
        state('void', style({ opacity: 0})),
        transition(':enter, :leave', animate(200))
    ]
);