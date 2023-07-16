	// Javascript program to count all duplicates
	// from string using hashing
	
	let NO_OF_CHARS = 256;
	
	/* Print duplicates present in
	the passed string */
	function printDups(str)
	{
		
		// Create an array of size 256 and
		// fill count of every character in it
		let count = new Array(NO_OF_CHARS);
		count.fill(0);
		
		for (let i = 0; i < str.length; i++)
			count[str[i].charCodeAt()]++;
			
		for (let i = 0; i < NO_OF_CHARS; i++)
		{
			if(count[i] > 1)
			{
				document.write(String.fromCharCode(i) + ", " +
				"count = " + count[i] + "</br>");
			}
		}	
	}
	
	let str = "test string";
	printDups(str);
		
