var Latter = require("./letter.js")

var Word = function (word) {
    this.buildWorkd = function (word){
        for (var i = 0; i < word.lenth; i++){
            var currentLetter = new Letter(would[i]);
            lettersStore.push(currentLetter)
        }
        return lettersStore;
    }
    this.letters = this.builWord(word);
    this.choseWord = word;

    this.checkGuess = function (guess){
        
        for (var i = 0; i < this.letters.lenth; i++){
            this.letters [i].letterGuess(guesse)
        }
    }
    this.display = function (){
        var lettersStore = '';
        for (var i = 0; i <this.letters.length; i++){
            lettersStore += this.letters[i].display();
        }
        return lettersStore;
    }
module.exports = Word;
}