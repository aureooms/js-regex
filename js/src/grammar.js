
let grammar = {

"<S>" : [ [ "<REGEXP>" , "EOF" ] ] ,

"<REGEXP>" : [ [ "<BEGIN>" , "<DISJUNCTION>" , "<END>" ] ] ,


"<BEGIN>" : [
	[ ] ,
	[ "<BEGIN_MATCH>" ]
] ,

"<BEGIN_MATCH>" : [ [ "^" ] ] ,

"<END>" : [
	[ ] ,
	[ "<END_MATCH>" ]
] ,

"<END_MATCH>" : [ [ "$" ] ] ,

"<DISJUNCTION>" : [ [ "<SEQUENCE>" , "<DISJUNCTION_TAIL>" ] ] ,

"<DISJUNCTION_TAIL>" : [
	[ ] ,
	[ "<DISJUNCTION_CALL>" ]
] ,

"<DISJUNCTION_CALL>" : [ [ "|" , "<DISJUNCTION>" ] ] ,

"<SEQUENCE>" : [
	[ ] ,
	[ "<PART>" , "<SEQUENCE>" ]
] ,

"<PART>" : [
	[ "<CONTENT>" , "<QUANTIFIER>" ]
] ,

"<QUANTIFIER>" : [
	[ ] ,
	[ "<*>" ] ,
	[ "<*?>" ] ,
	[ "<+>" ] ,
	[ "<+?>" ] ,
	[ "<?>" ] ,
	[ "<COUNT>" ]
] ,

"<*>" : [ [ "*" ] ] ,
"<*?>" : [ [ "*" , "?" ] ] ,
"<+>" : [ [ "+" ] ] ,
"<+?>" : [ [ "+" , "?" ] ] ,
"<?>" : [ [ "?" ] ] ,

"<COUNT>" : [
	[ "{" , "<NATURAL>" , "<COUNT_TAIL>" , "}" ]
] ,

"<COUNT_TAIL>" : [
	[ ] ,
	[ "," , "<UPPERBOUND>" ]
] ,

"<UPPERBOUND>" : [
	[ ] ,
	[ "<NATURAL>" ]
] ,

"<POSITIVE>" : [
	[ "1" , "<NATURAL_TAIL>" ] ,
	[ "2" , "<NATURAL_TAIL>" ] ,
	[ "3" , "<NATURAL_TAIL>" ] ,
	[ "4" , "<NATURAL_TAIL>" ] ,
	[ "5" , "<NATURAL_TAIL>" ] ,
	[ "6" , "<NATURAL_TAIL>" ] ,
	[ "7" , "<NATURAL_TAIL>" ] ,
	[ "8" , "<NATURAL_TAIL>" ] ,
	[ "9" , "<NATURAL_TAIL>" ] ,
] ,

"<NATURAL>" : [
	[ "0" ] ,
	[ "<POSITIVE>" ]
] ,

"<NATURAL_TAIL>" : [
	[ ] ,
	[ "0" , "<NATURAL_TAIL>" ] ,
	[ "1" , "<NATURAL_TAIL>" ] ,
	[ "2" , "<NATURAL_TAIL>" ] ,
	[ "3" , "<NATURAL_TAIL>" ] ,
	[ "4" , "<NATURAL_TAIL>" ] ,
	[ "5" , "<NATURAL_TAIL>" ] ,
	[ "6" , "<NATURAL_TAIL>" ] ,
	[ "7" , "<NATURAL_TAIL>" ] ,
	[ "8" , "<NATURAL_TAIL>" ] ,
	[ "9" , "<NATURAL_TAIL>" ] ,
] ,

"<CONTENT>" : [
	[ "(" , "<PARENTHETICAL_EXPRESSION>" , ")" ] ,
	[ "[" , "<SET>" , "]" ] ,
	[ "<CONTENT_LITERAL>" ] ,
	[ "<BACK_REFERENCE>" ]
] ,

"<BACK_REFERENCE>" : [ [ "\\" , "<POSITIVE>" ] ] ,

"<PARENTHETICAL_EXPRESSION>" : [
	[ "<GROUP>" ] ,
	[ "?" , "<MATCH>" ]
] ,

"<GROUP>" : [ [ "<REGEXP>" ] ] ,

"<MATCH>" : [
	[ [ ":" , "<MATCH_WITHOUT_CAPTURE>" ] ] ,
	[ [ "=" , "<MATCH_FOLLOW>" ] ] ,
	[ [ "!" , "<MATCH_NOT_FOLLOW>" ] ] ,
] ,

"<MATCH_WITHOUT_CAPTURE>" : [ [ "<REGEXP>" ] ] ,
"<MATCH_FOLLOW>" : [ [ "<REGEXP>" ] ] ,
"<MATCH_NOT_FOLLOW>" : [ [ "<REGEXP>" ] ] ,

"<CONTENT_LITERAL>" : [
	[ "<CONTENT_CHARACTER>" ] ,
	[ "<CLASS_ANY>" ] ,
	[ "<CLASS_DIGIT>" ] ,
	[ "<CLASS_NON_DIGIT>" ] ,
	[ "<CLASS_WORD>" ] ,
	[ "<CLASS_NON_WORD>" ] ,
	[ "<CLASS_WHITE_SPACE>" ] ,
	[ "<CLASS_NON_WHITE_SPACE>" ] ,
	[ "<CLASS_TAB>" ] ,
	[ "<CLASS_CARRIAGE_RETURN>" ] ,
	[ "<CLASS_LINEFEED>" ] ,
	[ "<CLASS_VERTICAL_TAB>" ] ,
	[ "<CLASS_FORM_FEED>" ] ,
	[ "<BOUNDARY_WORD>" ] ,
	[ "<BOUNDARY_NON_WORD>" ] ,
	[ "<CLASS_NUL>" ] ,
	[ "<CLASS_CONTROL>" ]
] ,

"<CONTENT_CHARACTER>" : [
	[ "NORMAL" ] ,
	[ "\\" , "+" ] ,
	[ "-" ] ,
	[ "\\" , "?" ] ,
	[ "\\" , "*" ] ,
	[ "{" ] ,
	[ "}" ] ,
	[ "\\" , "(" ] ,
	[ "\\" , ")" ] ,
	[ "\\" , "[" ] ,
	[ "]" ] ,
	[ "\\" , "^" ] ,
	[ "\\" , "$" ] ,
	[ "\\" , "|" ] ,
	[ ":" ] ,
	[ "=" ] ,
	[ "!" ] ,
	[ "\\" , "." ] ,
	[ "<CLASS_ASCII>" ] ,
	[ "<CLASS_UNICODE>" ]
] ,

"<CLASS_ANY>" : [ [ "." ] ] ,
"<CLASS_DIGIT>" : [ [ "\\" , "d" ] ] ,
"<CLASS_NON_DIGIT>" : [ [ "\\" , "D" ] ] ,
"<CLASS_WORD>" : [ [ "\\" , "w" ] ] ,
"<CLASS_NON_WORD>" : [ [ "\\" , "W" ] ] ,
"<CLASS_WHITE_SPACE>" : [ [ "\\" , "s" ] ] ,
"<CLASS_NON_WHITE_SPACE>" : [ [ "\\" , "S" ] ] ,
"<CLASS_TAB>" : [ [ "\\" , "t" ] ] ,
"<CLASS_CARRIAGE_RETURN>" : [ [ "\\" , "r" ] ] ,
"<CLASS_LINEFEED>" : [ [ "\\" , "n" ] ] ,
"<CLASS_VERTICAL_TAB>" : [ [ "\\" , "v" ] ] ,
"<CLASS_FORM_FEED>" : [ [ "\\" , "f" ] ] ,
"<CLASS_BACKSPACE>" : [ [ "\\" , "b" ] ] ,
"<CLASS_NUL>" : [ [ "\\" , "0" ] ] ,


"<CLASS_CONTROL>" : [
	[ "\\" , "c" , "<CONTROL_CHR>" ]
] ,

"<CLASS_ASCII>" : [
	[ "\\" , "x" , "<HEX>" , "<HEX>" ]
] ,

"<CLASS_UNICODE>" : [
	[ "\\" , "u" , "<HEX>" , "<HEX>" , "<HEX>" , "<HEX>" ]
] ,

"<BOUNDARY_WORD>" : [ [ "\\" , "b" ] ] ,
"<BOUNDARY_NON_WORD>" : [ [ "\\" , "B" ] ] ,

"<CONTROL_CHR>" : [
	[ "A" ] ,
	[ "B" ] ,
	[ "C" ] ,
	[ "D" ] ,
	[ "E" ] ,
	[ "F" ] ,
	[ "G" ] ,
	[ "H" ] ,
	[ "I" ] ,
	[ "J" ] ,
	[ "K" ] ,
	[ "L" ] ,
	[ "M" ] ,
	[ "N" ] ,
	[ "O" ] ,
	[ "P" ] ,
	[ "Q" ] ,
	[ "R" ] ,
	[ "S" ] ,
	[ "T" ] ,
	[ "U" ] ,
	[ "V" ] ,
	[ "W" ] ,
	[ "X" ] ,
	[ "Y" ] ,
	[ "Z" ] ,
] ,

"<HEX>" : [
	[ "0" ] ,
	[ "1" ] ,
	[ "2" ] ,
	[ "3" ] ,
	[ "4" ] ,
	[ "5" ] ,
	[ "6" ] ,
	[ "7" ] ,
	[ "8" ] ,
	[ "9" ] ,
	[ "a" ] ,
	[ "b" ] ,
	[ "c" ] ,
	[ "d" ] ,
	[ "e" ] ,
	[ "f" ]
] ,

"<SET>" : [
	[ "[" , "<SET_CONTENT>" , "]" ]
] ,

"<SET_CONTENT>" : [
	[ "<SET_EXPRESSION>" ] ,
	[ "<NEGATED_SET_EXPRESSION>" ]
] ,

"<NEGATED_SET_EXPRESSION>" : [
	[ "^" , "<SET_EXPRESSION_TAIL>" ]
] ,

"<SET_EXPRESSION>" : [
	[ ] ,
	[ "<SET_CHARACTER>" , "<SET_EXPRESSION_2>" ] ,
	[ "<SET_LITERAL>" , "<SET_EXPRESSION_2>" ] ,
	[ "<RANGE>" , "<SET_EXPRESSION_2>" ]
] ,

"<SET_EXPRESSION_2>" : [
	[ ] ,
	[ "^" , "<SET_EXPRESSION_2>" ] ,
	[ "<SET_CHARACTER>" , "<SET_EXPRESSION_2>" ] ,
	[ "<SET_LITERAL>" , "<SET_EXPRESSION_2>" ] ,
	[ "<RANGE>" , "<SET_EXPRESSION_2>" ]
] ,

"<SET_LITERAL>" : [
	[ "<CLASS_ANY>" ] ,
	[ "<CLASS_DIGIT>" ] ,
	[ "<CLASS_NON_DIGIT>" ] ,
	[ "<CLASS_WORD>" ] ,
	[ "<CLASS_NON_WORD>" ] ,
	[ "<CLASS_WHITE_SPACE>" ] ,
	[ "<CLASS_NON_WHITE_SPACE>" ] ,
	[ "<CLASS_TAB>" ] ,
	[ "<CLASS_CARRIAGE_RETURN>" ] ,
	[ "<CLASS_LINEFEED>" ] ,
	[ "<CLASS_VERTICAL_TAB>" ] ,
	[ "<CLASS_FORM_FEED>" ] ,
	[ "<CLASS_BACKSPACE>" ] ,
	[ "<CLASS_NUL>" ] ,
	[ "<CLASS_CONTROL>" ] ,
] ,

"<SET_CHARACTER>" : [
	[ "NORMAL" ] ,
	[ "+" ] ,
	[ "-" ] ,
	[ "?" ] ,
	[ "*" ] ,
	[ "{" ] ,
	[ "}" ] ,
	[ "(" ] ,
	[ ")" ] ,
	[ "[" ] ,
	[ "\\" , "]" ] ,
	[ "\\" , "^" ] ,
	[ "$" ] ,
	[ "|" ] ,
	[ ":" ] ,
	[ "=" ] ,
	[ "!" ] ,
	[ "." ] ,
	[ "<CLASS_ASCII>" ] ,
	[ "<CLASS_UNICODE>" ]
] ,

"<RANGE>" : [ [ "<SET_CHARACTER>" , "-" , "<SET_CHARACTER>" ] ]

} ;

exports.grammar = grammar ;
