function stringHandsOn () {
    var sentence = "   Hey you are doing good, keep it up   ";
    console.log(`<==== Step-01 =====>${sentence}`);
    var lengthOfSentence = sentence.length;
    console.log(`<==== Step-02 =====> length of given sentence is: ${lengthOfSentence}`);

    var afterTrim = sentence.trim();
    var afterTrimLength = afterTrim.length;
    console.log(`<==== Step-03 ====> after Trim sentence is: ${afterTrim} and its length is: ${afterTrimLength}`);

    console.log(`<==== Step-04 ====> Total space are removed from sentence is: ${lengthOfSentence - afterTrimLength}`);

    console.log(`<==== Step-05 ====> After trim first char is: ${afterTrim.charAt(0)} and last char is: ${afterTrim.charAt(afterTrimLength-1)}`);

    var totalWord = afterTrim.split(" ");
    console.log(`<==== Step-6 ====> Total words in sentence after Trim: ${totalWord.length}`);

    var indexOfGivenWord = afterTrim.indexOf("good");
    console.log(`<==== Step-7 ====> Index of word "good" from the given string is: ${indexOfGivenWord}`);

    var subString = afterTrim.substring(22);
    console.log(`<==== Step-8 ====> Sub String starting from index 22 is: ${subString}` );

    var startWith = afterTrim.startsWith("Hey");
    console.log(`<==== Step-9 ====> Starting with "Hey" ${startWith}`);

    
    var endWith = afterTrim.endsWith("up");
    console.log(`<==== Step-10 ====> Starting with "Up" ${endWith}`);
}
stringHandsOn();