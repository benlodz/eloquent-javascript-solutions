/*
Inuition: A contraction is always preceded by a letter and followed by a letter,
I'm, Wouldn't, Y'all, Aren't 

so we replace all the ' when it isn't preceded by a letter or the beginning of the 
sentence. 
*/ 

let text = "'I'm the cook,' he said, 'it's my job.'";
// → "I'm the cook," he said, "it's my job."

console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));
