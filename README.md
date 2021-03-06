# Simple Flask, Expressjs and Reactjs Demo

This repo is created to give an overview about basics of backend frameworks Flask which is written in Python, Expressjs which is written in Nodejs and frontend library React. We created a small REST API in Flask and Expressjs which serves same json data. And frontend React uses it without any changes except API URL.

This repo is made for **UMT Lahore workshop** happening in March, 2018

## Prerequisites

You should have following things installed in order to run these apps.

 - Python 3.6+
 - Nodejs 8.x.x LTS

## How to install/run Flask App

 1. Go to /backend/python
 2. On terminal run commands (preferably in virtualenv)
 3.  `pip install -r reqs.txt`
 4. `python app.py`
 5. If everything works, your server will start at `127.0.0.1:5000`

## How to install/run Expressjs App

 1. Go to /backend/nodejs
 2. On terminal run commands
 3.  `npm install`
 4. `npm run dev`
 5. If everything works, your server will start at `127.0.0.1:4000`

## How to install/run Reactjs App
 1. Go to /frontend
 2. On terminal run commands
 3.  `npm install`
 4. `npm start`
 5. If everything works, your frontend changes will available at `127.0.0.1:3000`

 In /frontend/src/Routes.js you can switch between backend API by changing value for variable HOST_NAME

## Flash/Expressjs API Usage
Both API's serves same data with same endpoints, except their URL which will be:

    127.0.0.1:5000 for Flask
    172.0.0.1:4000 for Expressjs
   
   #### 127.0.0.1:[4000|5000]/depts/
   
This endpoint will return all the departments present in database.

   #### 127.0.0.1:[4000|5000]/all/
   
This endpoint will return all the data present in database.

   #### 127.0.0.1:[4000|5000]/filter/:attrib/:value/
   
This endpoint will filter database with given parameters. For example we want to filter all records with departement name "Support" then:

    127.0.0.1:[4000|5000]/filter/depts/Support/

Other possible usage senarions could be filtering Male/Female members.

    127.0.0.1:[4000|5000]/filter/gender/Male/

   #### 127.0.0.1:[4000|5000]/view/:id/
   
This endpoint will return single record by searching for id.


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
