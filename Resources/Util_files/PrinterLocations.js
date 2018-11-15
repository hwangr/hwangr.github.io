
var pLocs = {
	"Duderstadt": {
		"b_id": "0",
		"b_name": "Duderstadt",
		"printers": {
			"1": [
				{"p_name": "m-aab-1000-bwmulti-1", "floor": 1, "top": "200px", "left": "100px"},
				{"p_name": "m-aab-1000-bwmulti-2", "floor": 1, "top": "200px", "left": "300px"},
				{"p_name": "m-aab-1000-bwmulti-3", "floor": 1, "top": "200px", "left": "500px"}
			],
			"2": [
				{"p_name": "m-aab-1000-bwmulti-2", "floor": 2, "top": "200px", "left": "300px"},
				{"p_name": "m-aab-1000-bwmulti-2", "floor": 2, "top": "200px", "left": "800px"}
			]
		}
	},
	
	"BBB": {
		"b_id": "1",
		"b_name": "BBB",
		"printers": [
			{"p_name": "m-aab-1000-bwmulti-1", "floor": 1},
			{"p_name": "m-aab-1000-bwmulti-2", "floor": 1}
		]
	}
	
};

//Returns JSON object with printer data
function returnLocs() {

	pLocs = JSON.stringify(pLocs);
	pLocs = JSON.parse(pLocs);
	console.log(pLocs);
	return pLocs;
}