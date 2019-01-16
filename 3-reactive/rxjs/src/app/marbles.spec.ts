import { cold, hot, getTestScheduler } from 'jasmine-marbles'; 
import { concat, take, filter } from 'rxjs/operators';
import { interval } from 'rxjs';

describe('TEST', () => {
   it('simple', () => {
       const source = cold('x-x-x|');
       const expected = cold('x-x-x|');
       expect(source).toBeObservable(expected);
   });

   it('concat', () => {
    const one$ = cold('x-x|', { x : 'some string'} );
    const two$ = cold('-y|', { y: 999 });
    const expected = cold('a-a-b|', { a : 'some string', b: 999 });
    expect(one$.pipe(concat(two$))).toBeObservable(expected);
   })

   it('async', () => {
    const o$ = interval(10, getTestScheduler()).pipe(
        take(5),
        filter(v => v % 2 === 0)
    );
    getTestScheduler().flush();
    const expected$ = cold('-a-b-(c|)', { a: 0, b: 2, c: 4});
    expect(o$).toBeObservable(expected$);
   })
});