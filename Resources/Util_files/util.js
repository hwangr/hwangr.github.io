/*
document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons() {	

	console.log("OKOK");

		
}
*/

pLocs = returnLocs();

asdf = JSON.stringify(pLocs);
console.log(asdf);
asdf = JSON.parse(asdf);
console.log(asdf);

console.log(asdf.printers[0]);