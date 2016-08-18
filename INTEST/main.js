(function() {
	// start processing user input
	process.stdin.resume();
	process.stdin.setEncoding('ascii');
	// declare global variables
	var input_stdin = "";
	var input_stdin_array = "";
	var input_currentline = 0;
	// standard input is stored into input_stdin
	process.stdin.on('data', function (data) {
	    input_stdin += data;
	});
	// standard input is done and stored into an array
	process.stdin.on('end', function () {
	    input_stdin_array = input_stdin.split("\n");
	    main();    
	});
	
	function main() {
		var n_k = readLine().split(' ');
		var a = parseInt(n_k[0]);
		var b = parseInt(n_k[1]);
	  	var res = solution(a, b);
	  	console.log(res);
	}

	function solution(a, b) {
	  var n = a;
	  var k = b;
	  var res = 0;
	  for(var index = 0; index < n; index++) {
	    if(parseInt(readLine()) % k === 0) { 
	      res++;
	    }
	  }
	  return res;  
	}

	// reads a line from the standard input array
	function readLine() {
	    return input_stdin_array[input_currentline++];
	}
})();