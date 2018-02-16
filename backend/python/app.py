from flask import Flask, jsonify
from db import DB

app = Flask(__name__)
db = DB()

@app.route("/depts/")
def all_depts():
    return jsonify(db.depts())

@app.route("/all/")
def all_records():
    return jsonify(db.all())

@app.route("/search/<attrib>/<value>/")
def search_json(attrib, value):
    return jsonify(db.search(attrib, value))

@app.route("/view/<int:id>/")
def view_profile(id):
    return jsonify(db.view(id))

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response

if __name__ == '__main__':
    app.run(debug=True)