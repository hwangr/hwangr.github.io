
var pLocs = {
	"Duderstadt": {
		"b_id": "0",
		"b_name": "Duderstadt",
		"printers": {
			"B1": [
				{"p_name": "m-dc-B245A-bw-1", 		"floor": "B1", "top": "67%", "left": "49%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-B309A-bw-1a", 		"floor": "B1", "top": "59%", "left": "64%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-B309A-bw-1b", 		"floor": "B1", "top": "59%", "left": "64%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-b430-bwmulti-1", 	"floor": "B1", "top": "30%", "left": "69.5%", "color": "N", "multi": "Y"},
			],
			"F1": [
				{"p_name": "m-dc-1485-bwmulti-1", 	"floor": 1, "top": "55%", "left": "56%", "color": "N", "multi": "Y"},
				{"p_name": "m-dc-1485-color-1", 	"floor": 1, "top": "55%", "left": "56%", "color": "Y", "multi": "N"},
			],
			"F2": [
				{"p_name": "m-dc-2330-bw-1a", 		"floor": 2, "top": "87%", "left": "62%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-2330-bw-1b", 		"floor": 2, "top": "87%", "left": "62%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-2330-bwmulti-1", 	"floor": 2, "top": "87%", "left": "62%", "color": "N", "multi": "Y"},
				{"p_name": "m-dc-2330-color-1", 	"floor": 2, "top": "87%", "left": "62%", "color": "Y", "multi": "N"},
				{"p_name": "m-dc-2450c-bw-1a", 		"floor": 2, "top": "52%", "left": "57.5%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-2450c-bw-1b", 		"floor": 2, "top": "52%", "left": "57.5%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-2450C-bwmulti-1", 	"floor": 2, "top": "52%", "left": "57.5%", "color": "N", "multi": "Y"},
				{"p_name": "m-dc-2450C-bwmulti-2", 	"floor": 2, "top": "39%", "left": "63%", "color": "N", "multi": "Y"},
				{"p_name": "m-dc-2c20-bw-1a", 		"floor": 2, "top": "82%", "left": "50%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-2c20-bw-1b", 		"floor": 2, "top": "82%", "left": "50%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-2C42-bwmulti-1", 	"floor": 2, "top": "35%", "left": "75%", "color": "N", "multi": "Y"}
			],
			"F3": [
				{"p_name": "m-dc-3300-bw-1a", 		"floor": 3, "top": "84%", "left": "63.5%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-3300-bw-1b", 		"floor": 3, "top": "84%", "left": "63.5%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-3370-bw-1a", 		"floor": 3, "top": "61%", "left": "78%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-3370-bw-1b", 		"floor": 3, "top": "61%", "left": "78%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-3400-bw-1a", 		"floor": 3, "top": "28.5%", "left": "76.5%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-3400-bw-1b", 		"floor": 3, "top": "28.5%", "left": "76.5%", "color": "N", "multi": "N"},
				{"p_name": "m-dc-3400-color-1", 	"floor": 3, "top": "28.5%", "left": "76.5%", "color": "Y", "multi": "N"},
				{"p_name": "m-dc-3C33-bwmulti-1", 	"floor": 3, "top": "70%", "left": "70%", "color": "N", "multi": "Y"},
				{"p_name": "m-dc-3400-color-1", 	"floor": 3, "top": "83%", "left": "51%", "color": "Y", "multi": "N"}
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