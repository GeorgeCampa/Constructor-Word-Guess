var letter = function (character){
    this.character = character;
    this.isLetterGuessed = false;

    this.display = function (){
        if(this.character == ''){
            return('');
        }
        else if (this.isLetterGuessed){
            return(this.character)
        }
        else if (this.character == "'"){
            return ("'")
        }
        else if (this.character == "-"){
            return ("-");
        }
    }
    this.letterGuess = function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.isLetterGuessed = true;
        }
    }
}

module.export = Letter;