(function() {

	var root = this;
	 
	var crypt = function(obj) {
	  if (obj instanceof crypt) return obj;
	  if (!(this instanceof crypt)) return new crypt(obj);
	};

	function objectToArrayBuffer(obj) {
		
	}

	function makeKey() {

	}

	root.crypt = crypt;

	crypt.test = function() {
		console.log('bla');
	}

}.call(this));