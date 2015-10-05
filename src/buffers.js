var stringToBuffer = function(str){
  if (typeof str !== 'string') {
    throw TypeError('stringToBuffer: argument must be a string');
    return;
  }

  // let arrayBuffer = new ArrayBuffer(str.length * 2);
  let convertedString = [].map.call(str, (char, i) => {
    return str.charCodeAt(i);
  });

  let buffer = new Uint16Array(convertedString);

  return buffer;
};

var bufferToString = function(buffer){
  if (typeof buffer.constructor !== ArrayBuffer) {
    throw TypeError('bufferToString: argument must be an ArrayBuffer');
  }
  return str;
};

export default { stringToBuffer, bufferToString };