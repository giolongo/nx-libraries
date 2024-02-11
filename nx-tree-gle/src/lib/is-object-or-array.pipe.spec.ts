import { IsObjectOrArrayPipe } from './is-object-or-array.pipe';

describe('IsObjectOrArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new IsObjectOrArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
