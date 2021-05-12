// TODO: write your code here

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const arrayForBuffer = new Uint16Array(this.buffer);
    const arrayForString = [];
    arrayForBuffer.forEach((el) => {
      arrayForString.push(String.fromCharCode(el));
    });
    return arrayForString.join('');
  }
}
