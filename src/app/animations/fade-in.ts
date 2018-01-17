import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
export const fadeIn = trigger('fadeIn', [
  transition('void => *', [
    style({opacity: 0}),
    animate(800, style({opacity: 1}))
  ]),
  transition('* => void', [
    style({ opacity: 1}),
    animate(800, style({ opacity: 0}))
  ])
]);
