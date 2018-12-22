// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "Yes" && answer !== "yeah" & answer != "Yeah") {
// 	var answer = prompt("Are we there yet?");
// }


// alert("Yay, we made it!");




// Version 2


var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") == -1) {
	var answer = prompt("Are we there yet?");
}


alert("Yay, we made it!");