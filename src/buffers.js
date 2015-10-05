var stringToBuffer = function(str){
  if (typeof str !== 'string') {
    throw TypeError('stringToBuffer: argument must be a string');
    return;
  }

  let encoder = new TextEncoder('utf-16');

  let buffer = encoder.encode(str);

  return buffer;
};

var bufferToString = function(buffer){
  if (typeof buffer.constructor !== ArrayBuffer) {
    throw TypeError('bufferToString: argument must be an ArrayBuffer');
  }
  return str;
};

export default { stringToBuffer, bufferToString };