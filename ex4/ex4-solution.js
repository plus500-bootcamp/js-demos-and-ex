import { fromEvent } from 'rxjs';
import { map, filter, throttleTime, scan } from 'rxjs/operators';

// Solution:
// 1. Create an Observable from document click events using fromEvent
const clicks$ = fromEvent(document, 'click');

// 2. Use the map operator to extract coordinates: { x: event.clientX, y: event.clientY }
const coordinates$ = clicks$.pipe(
    // Bonus1: Add filter operator to only log clicks in the left half of the screen
    filter(event => event.clientX < window.innerWidth / 2),
    throttleTime(1000), // Limit logging to once per second
    map(event => ({ x: event.clientX, y: event.clientY })),
    scan((acc, coords) => ({ ...coords, count: acc.count + 1 }), { count: 0 }) // Count total clicks
);

// 3. Subscribe and log the transformed coordinates with count
coordinates$.subscribe(data => {
    console.log(data);
});

// Expected output on each click:
// { x: 245, y: 389 }
// { x: 156, y: 203 }
// etc.

