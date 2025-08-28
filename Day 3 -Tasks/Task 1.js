var sentence = "JavaScript is fun";

var spletWord = sentence.split(" ");
console.log("Words is :", spletWord.length);

spletWord.forEach(word => {
    console.log(`${word} => ${word.length} letters`);
});
