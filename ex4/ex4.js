import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// YOUR CODE HERE:
// 1. Create an Observable from document click events using fromEvent
// 2. Use the map operator to extract coordinates: { x: event.clientX, y: event.clientY }
// 3. Subscribe and log the transformed coordinates

// Expected output on each click:
// { x: 245, y: 389 }
// { x: 156, y: 203 }
// etc.