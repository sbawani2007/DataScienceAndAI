# -*- coding: utf-8 -*-
"""
Created on Mon Dec 11 07:07:50 2017

@author: Home User N
"""

from flask import Flask, render_template, request, jsonify, _app_ctx_stack
from pymongo import MongoClient
import os
#print(os.path.dirname(os.path.realpath(__file__)))

#app = Flask(__name__)
app = Flask(__name__, static_url_path="", static_folder="static")


@app.route('/index')
def index():
    return render_template('index.html')
@app.route('/p')
def p():
    return os.path.dirname(os.path.abspath(__file__)) ;
#send_static_file('templates/index.html')
 #render_template('index.html')


if __name__ == '__main__':
    #create_mongodatabase()
    app.run(host='localhost', port=5000, debug=True)   