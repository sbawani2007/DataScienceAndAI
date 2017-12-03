# -*- coding: utf-8 -*-
"""
Created on Wed Nov 29 03:35:05 2017

@author: Home User N
"""
import sqlite3

conn = sqlite3.connect('test.db')

print ("Opened database successfully");
conn.execute('''CREATE TABLE COMPANY
         (ID INT PRIMARY KEY     NOT NULL,
         NAME           TEXT    NOT NULL,
         AGE            INT     NOT NULL,
         ADDRESS        CHAR(50),
         SALARY         REAL);''')
print ("Table created successfully");

conn.close()