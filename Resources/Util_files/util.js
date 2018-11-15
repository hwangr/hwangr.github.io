/*
document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons() {	

	console.log("OKOK");

		
}
*/
/*
pLocs = returnLocs();

asdf = JSON.stringify(pLocs);
console.log(asdf);
asdf = JSON.parse(asdf);
console.log(asdf);

console.log(asdf.printers[0]);
*/
//Note: must bein form: file:///C:/Users/rh/Documents/GitHub/hwangr.github.io/BuildingMap.html?bName=Duderstadt&floor=1

function genPhotos() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var bName = url.searchParams.get("bName");
	console.log(bName);
	var floor = url.searchParams.get("floor");
	console.log(floor);
	
	//Case for bad input - TODO
	if (bName == null) {
		console.log("No good")
	}
	
	console.log("Floor " + floor)
	//Div to attach image to
	var oriDiv = document.getElementById("building_map");
	
	//Floorplan Pic
	var floorPlan = document.createElement("IMG");
	floorPlan.src = "Resources/Building_Maps/" + bName + "/f" + floor + ".png";
	floorPlan.className = "floor_maps";
	oriDiv.appendChild(floorPlan);
	//<img class="building_maps" src="Resources/Building_Maps/Duderstadt/dc_1.png"></img>
	
	
	//Get JSON
	var allPrinters = getBuildingPrinters(bName, floor);
	console.log(allPrinters);
	console.log("Loop");
	

	//Array, indexed already in JSON format
	for (i in allPrinters) {
		console.log(allPrinters[i].p_name);
		//Create icon
		var newLink = document.createElement("a");
		var pic = document.createElement("IMG");
		var picNum = Number(i) + 1;
		pic.src = "Resources/Misc/P" + picNum + ".png";
		pic.className = "printButtons";
		pic.style.top = allPrinters[i].top;
		pic.style.left = allPrinters[i].left;
		//Link for icon
		newLink.appendChild(pic);
		newLink.href = "Usage.html"
		//Attach to div
		oriDiv.appendChild(newLink);
	}
	
}


function getBuildingPrinters(bName, floor) {
	var pLocs = returnLocs();
	console.log(pLocs[bName].printers[floor])
	return pLocs[bName].printers[floor];

}