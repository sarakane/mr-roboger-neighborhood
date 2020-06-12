# _Mr. Roboger's Neighborhood_

#### _JavaScript/jQuery independent project for Epicodus, 2020.06.12_

#### By **Sara Kane**

## Description
This is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with
the following exceptions:
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

Exceptions are written from least to highest priority. For example:
* 13 should be replaced with "Won't you be my neighbor?"
* 21 should be replaced with "Boop!"
* 32 should be replaced with "Won't you be my neighbor?"

## Specifications
Behavior: Program should return an error when input that is not a positive number is extered.  
Input: "apple"  
Output: Please enter a positive number  

Behavior: The program returns a range of numbers from 0 to the users inputted number  
Input: "4"  
Output: "0, 1, 2, 3, 4"  

Behavior: The program replaces a number with "Beep!" if the number contains a 1.  
Input: "1"  
Output: "Beep!" 

Behavior: The program replaces a number with "Boop!" if the number contains a 2.  
Input: "2"  
Output: "Boop!"  

Behavior: The program replaces a number with "Won't you be my neighbor?" if the number contains a 3.  
Input: "3"  
Output: "Won't you be my neighbor?"  

Behavior: The program replaces number with the highest priority exception for multi-digit numbers.  
Input: "32"  
Output: "Won't you be my neighbor?"  

## Known Bugs
* No known bugs.   

## Setup/Installation Requirements
* Clone this repository from GitHub.
* Open the index.html file with your preffered browser to view the website, or use a code editor to view the code.

## Technologies Used
* Visual Studio Code (code editor)
* HTML /CSS
* Bootstrap-3.3.7
* JavaScript/jQuery-3.5.1

## License
This software is licensed under the MIT license. Copyright (c) 2020 Sara Kane.