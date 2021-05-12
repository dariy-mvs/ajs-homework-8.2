import ArrayBufferConverter, { getBuffer } from '../app';

test('toSring', () => {
  const myBuffer = getBuffer();
  const myBufferClass = new ArrayBufferConverter(myBuffer);
  myBufferClass.load(getBuffer());
  expect(myBufferClass.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
