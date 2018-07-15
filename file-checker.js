//require fs package
var fs = require('fs');

// checking if the any input for the 3d argument
if (process.argv[2] != null) {
    //reading the 3d argument file
    var content = fs.readFileSync(process.argv[2], 'utf8');

    //splite the file's content with new line '\n'
    var text = content.split('\n');
    //setup the valid file to true by defult
    var validFile = true;

    //looping through each item in the content
    for (var i = 0; i < text.length; i++) {

        //splite the content in the text array by semicolon
        var splited = text[i].split(';');
        
        //looping though each item in the new array
        for (var e = 0; e < splited.length; e++) {
            // sign each item to a new varible  
            var emptyStr = splited[e];

            // checking if the the item is an empty string
            if (emptyStr == '') {
                // if it is, switch the valid file defalut state to false
                validFile = false;
                         
            } 

        }

    }

    //if the file is valid file by defalut, which it is true
    //then tell the user this file is valid
    if (validFile) {
        console.log("File is Valid!");
    
    //otherwise, this file is not valid
    } else {
        console.log("File is not Valid!");
    }

    //if there is no 3d argument, tell the user put the agrument
} else {
    console.log("Please put a file name as an argument");

}