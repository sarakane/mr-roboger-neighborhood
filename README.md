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
| Behavior                                                                               | Input   | Output                         |
|----------------------------------------------------------------------------------------|---------|--------------------------------|
| Program should return an error when input that is not a positive number is extered.    | "apple" | Please enter a positive number |
| Program returns a range of numbers from 0 to the users inputted number                 | "4"     | "0, 1, 2, 3, 4"                |
| Program replaces a number with "Beep!" if the number contains a 1.                     | "1"     | "Beep!"                        |
| Program replaces a number with "Boop!" if the number contains a 2.                     | "2"     | "Boop!"                        |
| Program replaces a number with "Won't you be my neighbor?" if the number contains a 3. | "3"     | "Won't you be my neighbor?"    |
| Program replaces a number with the highest priority exception for multi-digit numbers. | "32"    | "Won't you be my neighbor?"    |

## Known Bugs
* No known bugs.   

## Setup/Installation Instructions
#### Option 1
View the GitHub pages site here: <https://sarakane.github.io/mr-roboger-neighborhood/>

#### Option 2
To clone this repository from your command line you will need [Git](https://git-scm.com/) installed. First navigate in the command line to where you want to clone this repository. 

Example:  
```
$ cd ~/Desktop
```

Then from your command line:
```
$ git clone https://github.com/sarakane/mr-roboger-neighborhood
```
Once the repository has been cloned, you can open index.html in your preferred web browser to view the site or open in your preferred code editor to view and edit the code.

## Technologies Used
* Visual Studio Code (code editor)
* HTML /CSS
* Bootstrap-3.3.7
* JavaScript/jQuery-3.5.1

## License
This software is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (c) 2020 Sara Kane.