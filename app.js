var lexer = new Lexer(),
	tagger = new POSTagger(),
	nodes = document.querySelectorAll(".text");

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i],
		words = lexer.lex(node.textContent),
		tagged = tagger.tag(words);

	var output = document.createElement("div");
	output.setAttribute("class", "output");

	for (var j = 0; j < tagged.length; j++) {
		var tag = tagged[j],
			word = tag[0],
			wordType = tag[1];

		var span = document.createElement("span");
		span.setAttribute("class", "word");
		span.setAttribute("data-word-type", wordType);
		span.setAttribute("data-word-type-name", wordTypes[wordType]);
		span.textContent = word;

		output.appendChild(span);
	}

	node.parentNode.insertBefore(output, node.nextSibling);
}

