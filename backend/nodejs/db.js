var database = require('../../Database/mock_data.json');

module.exports = {
	// depts: function () {
	// 	depts = [];

    // 	for (var index in database) {
    // 		if (depts.indexOf(database[index]["dept"]) == -1){
    // 			depts.push(database[index]["dept"]);
    // 		}
    // 	}

    // 	return depts;
	// },

	// all: function () {
	// 	data = []

	// 	for (var index in database){
	// 		data.push({
	// 			"id": database[index]["id"],
	// 			"first_name": database[index]["first_name"],
	// 			"last_name": database[index]["last_name"]
	// 		})
	// 	}
		
    // 	return data;
	// },

	// filter: function (attrib, value) {
	// 	data = []

	// 	for (var index in database){
	// 		if (database[index][attrib] == value){
	// 			data.push({
	// 				"id": database[index]["id"],
	// 				"first_name": database[index]["first_name"],
	// 				"last_name": database[index]["last_name"],
	// 				"avatar": database[index]["avatar"]
	// 			})
	// 		}
	// 	}

    // 	return data;
	// },

	// view: function (id) {
    // 	for (var index in database){
    // 		if (database[index]["id"] == id){
    // 			return database[index];
    // 		}
    // 	}
	// }
}
