// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {

    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    function wordStartsWithVowel(word) {
    if (word.charAt(0)==="e"){
        return true;
    }
}

var testWord2 = "elephant";
var testResult2 = appendYayToWord(testWord2);

     // Appends "yay" to the end of the word and returns the word.
    
    function appendYayToWord(word) {
       var x="excited"+"yay";
        return word;
}

var testWord3 = "excited";
var testResult3 = appendYayToWord(testWord2);
    
    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    
    function convertWordWithConsonant(word) {
     var oding="coding".substring(1);
     var c= word.charAt(0);
     var fullword=oding+c;
     var full="odingc"+"ay";
     return word;
}
var testWord4 = "coding";
var testResult4 = convertWordWithConsonant(testWord3);
    

    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {
    if(wordStartsWithVowel(word)){
        return(appendYayToWord(word))
    }
    else{
        return (convertWordWithConsonant(word))
    }

    // Create a click handler that takes is triggered when the user clicks the translate button.
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element
});
