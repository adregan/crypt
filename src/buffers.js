var stringToBuffer = function(str){
  if (typeof str !== 'string') {
    throw TypeError('Argument needs to be a string');
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
  return str;
};

export default { stringToBuffer, bufferToString };