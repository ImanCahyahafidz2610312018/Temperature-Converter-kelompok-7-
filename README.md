KELOMPOK 7
# Mini Programming Project
## 1. Group Information
**Class:** A
**Group:** 7
### Group Members
| No. | Name | Student ID | Role |
|---|---|---|---|
| 1 | Iman Cahyahafidz | 2610312018 | Project Coordinator |
| 2 | Keisha Athalia Junita | 2610312017 | Algorithm |
| 3 | Nazheera ’Adlyn | 2610312031 | Flowchart |
| 4 | Meyla Sonya | 2610312022 | JavaScript |
| 5 | Raisyah Nur Alysa | 2610312009 | Testing & Documentation |
---
## 2. Project Title
Simple Calculator with Menu
---
## 3. Project Description
Simple Calculator with Menu is a simple calculator program that allows users to perform basic mathematical operations, namely addition, subtraction, multiplication, and division. This program displays an operation option menu, then asks the user to enter two numbers to be calculated according to the selected operation. The program will continue to run repeatedly (looping) until the user selects the Exit option to exit. This project also implements error handling (error handling) especially for the case of division by zero, so that the program does not stop suddenly (crash) when the error occurs. Through this project, programming concepts such as switch structure, arithmetic operator, branching (if), and looping are applied directly in a functional program.
---
## 4. Objectives
This project is designed to apply the following programming concepts:
- Variables
- Data types
- Operators
- Conditional statements
- Loops
- Algorithms
- JavaScript
---
## 5. Input
The program receives:
- The temperature value input by the user
- The original unit (Celsius, Fahrenheit, or Kelvin)
- The target unit for conversion
---
## 6. Process
The program compares the player's guess with the target number.
If the guess is:
- Too high → the program provides a "too high" message
- Too low → the program provides a "too low" message
- Correct → the player wins
---
## 7. Output
The program displays:
- The result of each guess
- Hints or feedback
- The number of remaining attempts
- The final game status (win/loss)
---
## 8. Algorithm
The algorithm used in the program is described in:
`pseudocode.txt`
(https://github.com/user-attachments/files/32040155/Pseudecode.txt)
START
    LOOP
        DISPLAY "===== CALCULATOR MENU ====="
        DISPLAY "1. Addition"
        DISPLAY "2. Subtraction"
        DISPLAY "3. Multiplication"
        DISPLAY "4. Division"
        DISPLAY "5. Exit"
        DISPLAY "Enter your choice: "
        INPUT choice

        IF choice == 5 THEN
            DISPLAY "Exiting program..."
            BREAK
        END IF

        IF choice < 1 OR choice > 5 THEN
            DISPLAY "Invalid choice, please try again."
            CONTINUE
        END IF

        DISPLAY "Enter first number: "
        INPUT num1
        DISPLAY "Enter second number: "
        INPUT num2

        SWITCH choice
            CASE 1:
                result = num1 + num2
                DISPLAY "Result: ", result
            CASE 2:
                result = num1 - num2
                DISPLAY "Result: ", result
            CASE 3:
                result = num1 * num2
                DISPLAY "Result: ", result
            CASE 4:
                IF num2 == 0 THEN
                    DISPLAY "Error: Division by zero is not allowed"
                ELSE
                    result = num1 / num2
                    DISPLAY "Result: ", result
                END IF
            DEFAULT:
                DISPLAY "Invalid choice"
        END SWITCH

    END LOOP
END 
Uploading Pseudecode.txt…]()
---
## 9. Flowchart
The flowchart is created using Flowgorithm.
File:
`flowchart.fprg`
---
## 10. JavaScript Implementation
The JavaScript implementation of the program is available in:
`program.js`
---
## 11. Testing
The program is tested using several test scenarios.
Testing documentation:
`test-cases.md`
