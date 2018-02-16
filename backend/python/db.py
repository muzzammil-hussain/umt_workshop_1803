import json
import os, sys

class DB(object):

	def __init__(self):
		my_path = os.path.dirname(__file__)
		db_path = os.path.join(my_path, "../../Database/mock_data.json")
		with open(db_path) as json_data:
		    self.database = json.load(json_data)


	def depts(self):
		depts = []

		for record in self.database:
			if record["dept"] not in depts:
				depts.add(record["dept"])

		return depts

	def all(self):
		data = []

		for record in self.database:
			data.append({
				"id": record["id"],
				"first_name": record["first_name"],
				"last_name": record["last_name"]
			})

		return data

	def search(self, attrib, value):
		data = []

		if attrib == "id":
			value = int(value)

		for record in self.database:
			if record[attrib] == value:
				data.append({
					"id": record["id"],
					"first_name": record["first_name"],
					"last_name": record["last_name"]
				})

		return data


	def view(self, id):
		for record in self.database:
			if record["id"] == id:
				return record

				