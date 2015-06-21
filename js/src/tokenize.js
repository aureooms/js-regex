
let tokenize = function* ( tokens ) {

	for ( let token of tokens ) {

		switch ( token ) {

			case '+' :
			case '-' :
			case '?' :
			case '*' :
			case '{' :
			case '}' :
			case '(' :
			case ')' :
			case '[' :
			case ']' :
			case '^' :
			case '$' :
			case '|' :
			case ':' :
			case '=' :
			case '!' :
			case '.' :
				yield [ SPECIAL , token ] ;
				break ;

			default :
				yield [ NORMAL , token ] ;
				break ;

		}

	}

	yield [ EOF , null ] ;

} ;

exports.tokenize = tokenize ;
