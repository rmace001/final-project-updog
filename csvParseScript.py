# -*- coding: utf-8 -*-
"""
Created on Tue Oct 22 10:22:01 2019

@author: flips
"""

import pandas
import csv
import json
import xlrd

def split(word): 
    return list(word)

def get_block(word):
    result1 = []
    result3 = ""
    result1 = split(word)
    result3 = result1[0]
    return result3

def get_year(word):
    result1 = []
    result3 = ""
    result1 = split(word)
    result3 = result1[1]
    return result3
#matrixCell = {block first int, event string, outcome topic string, score, year second int}
#d = dict(), cell = {block, .. .. ..}
#matrixcell{cell1{block first int, event string, outcome topic string, score, year second int}}
#dictionary in dictionary (nested)

#This gets the .xlsx file and converts it into a 2D Array
book = xlrd.open_workbook('sampletest.xlsx')
sheet = book.sheet_by_name('Sheet1')
data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)] for r in range(sheet.nrows)]
outcomeTopic = data[0][:]

blocklist = []
yearlist = []
counter1 = 1
#gets the first and second numbers of the eventIDs and stores them into 
#a block list and year list respectively
for q in range((sheet.nrows)-1):
    block = get_block(data[counter1][0])
    blocklist.append(block)
    year = get_year(data[counter1][0])
    yearlist.append(year)
    counter1 += 1
    
inner_dict = dict()
rowsx = 1
colsx = 1
count = 1
#nested dictionary where the outer dictionary contains cells of inner 
#dictionaries with the labels and values for "block, year, Event, Outcome, and Score
for j in range((sheet.nrows)-1):
    for i in range((sheet.ncols)-1):
        inner_dict[count] = {}
        inner_dict[count]['Block'] = int(blocklist[rowsx-1])
        inner_dict[count]['Year'] = int(yearlist[rowsx-1])
        inner_dict[count]['Event'] = data[rowsx][0]
        inner_dict[count]['OutcomeTopic'] = outcomeTopic[colsx]
        inner_dict[count]['Score'] = data[rowsx][colsx]  
        count += 1
        colsx += 1
    rowsx +=1
    colsx = 1
    #inner_dict.clear()
    
print(inner_dict)
    