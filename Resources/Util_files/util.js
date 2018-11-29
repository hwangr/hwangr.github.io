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
	
	//Change header description for floor
	var desc = document.getElementById("building_desc");
	desc.innerHTML = "Building Map - " + bName + " " + floor;
	
	//Arrows
	/*
	var arrUp = document.createElement("IMG");
	arrUp.src = "Resources/Misc/arrow_up.jpg";
	oriDiv.appendChild(arrUp);
	var arrDown = document.createElement("IMG");
	arrDown.src = "Resources/Misc/arrow_down.jpg";
	oriDiv.appendChild(arrDown);
	*/
	
	//Floorplan Pic
	/*
	var floorPlan = document.createElement("IMG");
	floorPlan.src = "Resources/Building_Maps/" + bName + "/f" + floor + ".png";
	floorPlan.className = "floor_maps";
	oriDiv.appendChild(floorPlan);
	*/
	var floorPlan = document.getElementById("floorplan_pic");
	floorPlan.style.backgroundImage = "url('Resources/Building_Maps/" + bName + "/" + floor + ".png')";
	//<img class="building_maps" src="Resources/Building_Maps/Duderstadt/dc_1.png"></img>
	
	var pLocs = returnLocs();
	if (pLocs[bName].printers["B2"]) {
		console.log("OKOK");
	}
	if (pLocs[bName].printers["F2"]) {
		console.log("OKOKF@");
	}
	//console.log(pLocs[bName].printers["B2"]);
	console.log(floor[1]);
	
	//Display Arrows	
	var left = document.getElementById("arrows_container");
	var floorNum = floor[1];
	//Get prefix - B or F
	if (floor[0] == "F") {
		//First floor - special case
		if (floorNum == 1) {
			//Up arrow
			if (pLocs[bName].printers["F" + (Number(floorNum)+1)]) {	
				var newDiv = document.createElement("div");
				var newLink = document.createElement("a");
				var arrow = document.createElement("IMG");
				arrow.src = "Resources/Misc/arrow_up.jpg";
				newLink.href = "BuildingMap.html?bName=" + bName + "&floor=" + "F" + (Number(floorNum)+1);
				newLink.appendChild(arrow);
				newDiv.appendChild(newLink);
				left.appendChild(newDiv);
			}
			//Down arrow - B1
			if (pLocs[bName].printers["B1"]) {
				var newDiv = document.createElement("div");
				var newLink = document.createElement("a");
				var arrow = document.createElement("IMG");
				arrow.src = "Resources/Misc/arrow_down.jpg";
				newLink.href = "BuildingMap.html?bName=" + bName + "&floor=" + "B1";
				newLink.appendChild(arrow);
				newDiv.appendChild(newLink);
				left.appendChild(newDiv);
			}
		}
		//Any Floor above 1
		else {
			//Up arrow
			if (pLocs[bName].printers["F" + (Number(floorNum)+1)]) {
				var newDiv = document.createElement("div");
				var newLink = document.createElement("a");
				var arrow = document.createElement("IMG");
				arrow.src = "Resources/Misc/arrow_up.jpg";
				newLink.href = "BuildingMap.html?bName=" + bName + "&floor=" + "F" + (Number(floorNum)+1);
				newLink.appendChild(arrow);
				newDiv.appendChild(newLink);
				left.appendChild(newDiv);
			}
			//Down arrow
			if (pLocs[bName].printers["F" + (Number(floorNum)-1)]) {
				console.log("JOJOIJOIJ");
				var newDiv = document.createElement("div");
				var newLink = document.createElement("a");
				var arrow = document.createElement("IMG");
				arrow.src = "Resources/Misc/arrow_down.jpg";
				newLink.href = "BuildingMap.html?bName=" + bName + "&floor=" + "F" + (Number(floorNum)-1);
				newLink.appendChild(arrow);
				newDiv.appendChild(newLink);
				left.appendChild(newDiv);
			}
			
		}
		
	}
	else if (floor[0] == "B") {
		//Basement floor 1 - special case
		if (floorNum == 1) {
			//Up arrow - F1
			if (pLocs[bName].printers["F1"]) {	
				var newDiv = document.createElement("div");
				var newLink = document.createElement("a");
				var arrow = document.createElement("IMG");
				arrow.src = "Resources/Misc/arrow_up.jpg";
				newLink.href = "BuildingMap.html?bName=" + bName + "&floor=" + "F1";
				newLink.appendChild(arrow);
				newDiv.appendChild(newLink);
				left.appendChild(newDiv);
			}
			//Down arrow
			if (pLocs[bName].printers["B" + (Number(floorNum)+1)]) {
				var newDiv = document.createElement("div");
				var newLink = document.createElement("a");
				var arrow = document.createElement("IMG");
				arrow.src = "Resources/Misc/arrow_down.jpg";
				newLink.href = "BuildingMap.html?bName=" + bName + "&floor=" + "B" + (Number(floorNum)+1);
				newLink.appendChild(arrow);
				newDiv.appendChild(newLink);
				left.appendChild(newDiv);
			}
		}
		//Any Floor below B1
		else {
			//Up arrow
			if (pLocs[bName].printers["F" + (Number(floorNum)-1)]) {
				var newDiv = document.createElement("div");
				var newLink = document.createElement("a");
				var arrow = document.createElement("IMG");
				arrow.src = "Resources/Misc/arrow_up.jpg";
				newLink.href = "BuildingMap.html?bName=" + bName + "&floor=" + "B" + (Number(floorNum)-1);
				newLink.appendChild(arrow);
				newDiv.appendChild(newLink);
				left.appendChild(newDiv);
			}
			//Down arrow
			if (pLocs[bName].printers["F" + (Number(floorNum)+1)]) {
				console.log("JOJOIJOIJ");
				var newDiv = document.createElement("div");
				var newLink = document.createElement("a");
				var arrow = document.createElement("IMG");
				arrow.src = "Resources/Misc/arrow_down.jpg";
				newLink.href = "BuildingMap.html?bName=" + bName + "&floor=" + "B" + (Number(floorNum)+1);
				newLink.appendChild(arrow);
				newDiv.appendChild(newLink);
				left.appendChild(newDiv);
			}
			
		}
		
	}
	
	
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
		//pic.src = "Resources/Misc/P" + picNum + ".png";
		pic.src = "Resources/Misc/BW_MULTI.png";
		pic.className = "printButtons";
		pic.style.top = allPrinters[i].top;
		pic.style.left = allPrinters[i].left;
		//Link for icon
		newLink.appendChild(pic);
		//newLink.href = "Usage.html"
		newLink.href = "Usage.html?pname=" + allPrinters[i].p_name
		//Attach to div
		oriDiv.appendChild(newLink);
	}
	
}


function getBuildingPrinters(bName, floor) {
	var pLocs = returnLocs();
	console.log(pLocs[bName].printers[floor])
	return pLocs[bName].printers[floor];

}
	