var stringToBuffer = function(str){
  if (typeof str !== 'string') {
    throw TypeError('stringToBuffer: argument must be a string');
    return;
  }

  let encoder = new TextEncoder();

  let buffer = encoder.encode(str);

  return buffer;
};

var bufferToString = function(buffer){
  let decoder = new TextDecoder();

  let str = decoder.decode(buffer);

  return str;
};

export default { stringToBuffer, bufferToString };