# -*- coding: utf-8 -*-
"""
Created on Sun Dec  3 20:19:07 2017

@author: Home User N
"""

from flask import Flask, render_template, request, jsonify, _app_ctx_stack
from sqlite3 import dbapi2 as sqlite3


if __name__ == '__main__':
    conn = sqlite3.connect('ex')
    
    print ("Opened database successfully");
#    conn.execute('''CREATE TABLE COMPANY
#             (ID INT PRIMARY KEY     NOT NULL,
#             NAME           TEXT    NOT NULL,
#             AGE            INT     NOT NULL,
#             ADDRESS        CHAR(50),
#             SALARY         REAL);''')
#    print ("Table created successfully");
    
#    conn.execute('''create table todos (
#              id integer primary key autoincrement,
#              title string not null,
#              description string not null
#            );
#            ''');
#    print ("Table created successfully");
#    conn.execute(''' insert into todos (title, description) values ("Demo simple application", "Demo the application to some top notch VCs in Silicon Valley"); ''');
    conn.close()

