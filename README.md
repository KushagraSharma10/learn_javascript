# learn_javascript
 
This repository is dedicated to learning JavaScript through daily coding exercises. Each day, new topics and tasks are added, helping in mastering core JavaScript concepts.

# Date - 17-02-2025

# Project: Star Pattern Generator 
# Description

This project allows users to input a number and generate a star pattern dynamically. The pattern is displayed below upon clicking the Submit button. Additionally, a Clear button is provided to reset both the input field and the output.

# Features:
1. Users can input a number to generate a star pattern.
2. Clicking Submit displays the output below.
3. Clicking Clear resets both the input and the output.



## Example Output

For input `5`, the output pattern will be:
```
*
* *
* * *
* * * *
* * * * *
```


You can Checkout Project on [Star Pattern 1](https://learn-javascript-chi.vercel.app/17-02-2025/starPattern/starPattern.html)



# Date - 18-02-2025

# Project: Star Pattern Generator
# Description

This project is a simple Star Pattern Generator built using HTML, CSS, and JavaScript. The user can input a number, and the application will generate a symmetrical star pattern based on the given number. The pattern consists of increasing and then decreasing rows of stars.

# Features

1. Accepts user input for the number of rows in the pattern.

2. Dynamically generates and displays a symmetrical star pattern.

3. Includes a "Submit" button to generate the pattern.

4. Includes a "Clear" button to reset the input and result.


## Example Output

For input `5`, the output pattern will be:

```
*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*
```

You can Checkout Project on [Star Pattern 2](https://learn-javascript-chi.vercel.app/18-02-2025/starPattern2/starPattern2.html)


# Date - 19-02-2025

# Star Pattern Generator
# Project Description

This project is a web-based application that allows users to generate a hollow pyramid star pattern by entering a number. The number entered by the user determines the number of rows in the pyramid. The application is built using HTML, CSS, and JavaScript, providing a simple and interactive interface.

# Features

1. Input field to enter the number of rows

2. Display area to show the generated pyramid pattern

3. Submit button to generate the pattern

4. Clear button to reset the input and output


# Code Explanation

1. The hollowPyramid function generates the pyramid using nested loops:

    a) The outer loop runs from 1 to the entered number, representing each row.

    b) The first inner loop adds spaces to align the pyramid.

    c) The second inner loop prints * at the borders and spaces in between. 

2. The input event updates the index variable with the entered value.

3. The click event of the Submit button calls the hollowPyramid function and displays the output.

4. The Clear button resets both the input field and the output.



## Example Output

For input `5`, the output pattern will be:

```
    * 
   * * 
  *   * 
 *     * 
* * * * * 
```

You can Checkout Project on [Hollow Pyramid](https://learn-javascript-chi.vercel.app/18-02-2025/starPattern2/starPattern2.html)



# Date - 20-02-2025

# Tic-Tac-Toe Game
# Description

This is a simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Players take turns entering their inputs (X or O) in the desired box, and the game checks for a winner based on standard Tic-Tac-Toe rules. The first player to align three identical symbols (horizontally, vertically, or diagonally) wins the game.

# Features

1. User-friendly interface

2. Input prompt to select a box number

3. Interactive buttons to choose between X and O

4. Visual indication of the winning combination

5. Automatic game reset upon a win


# How to Play

1. Click on the Enter Input button.

2. Enter the box number (0-8) where you want to place your symbol.

3. Click the X or O button to place your symbol.

4. The game highlights the winning combination and displays an alert with the winner's name.

5. The game resets automatically after a win.

# Box Numbering Reference

```
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8
```

