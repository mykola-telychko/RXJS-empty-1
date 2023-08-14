import { empty } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/empty

// Example 1: empty immediately completes
// output: 'Complete!'
const subscribe = empty().subscribe({
  next: () => console.log('Skip'),
  complete: () => console.log('Complete!'),
});
