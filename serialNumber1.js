function generate(){

	var serialLength = Number(document.getElementById('length').value),
	    charsLower = "abcdefghijklmnopqrstuvwxyz",
        charsUpper = charsLower.toUpperCase(),
        allChars = charsLower.concat(charsUpper, "0123456789"),
	    echoSerial = '',
	    i,
	    serialFormat;

	    for( i = 0; i < serialLength; i++){

         serialFormat = Math.floor(Math.random() * allChars.length);
         echoSerial += allChars.substring(serialFormat, serialFormat + 1);
	    }
    document.getElementById("serial").style.borderBottom = "thick solid #0000FF";
    document.getElementById('serial').innerHTML = echoSerial;
}


// function generateSerial() {

//     var // all variable
//         myElementSerial = document.getElementById("serial"),
//         charsLower = "abcdefghijklmnopqrstuvwxyz",
//         charsUpper = charsLower.toUpperCase(),
//         allChars = charsLower.concat(charsUpper, "0123456789"),
//         echoSerial = "",
//         serialLength = 8,
//         randomSerial,
//         i;


//     for (i = 0; i < serialLength; i++) {

//         randomSerial = Math.floor(Math.random() * allChars.length);

//         echoSerial += allChars.slice(randomSerial, randomSerial + 1);
//     }

//     myElementSerial.innerHTML = echoSerial;
// }
// generateSerial();
