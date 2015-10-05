import test from './test';
import { stringToBuffer } from './buffers';

var crypt = function(obj) {
  if (obj instanceof crypt) return obj;
  if (!(this instanceof crypt)) return new crypt(obj);
};

// function objectToArrayBuffer(obj) {
	
// }

// function makeKey() {

// }

window.crypt = crypt;

crypt.test = test;
crypt.stringToBuffer = stringToBuffer;
