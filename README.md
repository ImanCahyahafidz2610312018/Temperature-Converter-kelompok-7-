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
This project is a simple menu-based calculator program that allows users to perform basic arithmetic operations, including addition, subtraction, multiplication, and division. The program displays a menu, accepts the user's choice and two numbers, performs the selected calculation, and displays the result. It also handles invalid operations such as division by zero, and keeps running in a loop until the user chooses to exit.

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
- The user's menu choice (1–5)
- The first number for calculation
- The second number for calculation
---
## 6. Process
The program checks the selected menu option and performs the corresponding operation:
- If the choice is Addition : the program adds the two numbers
- If the choice is Subtraction : the program subtracts the second number from the first
- If the choice is Multiplication : the program multiplies the two numbers
- If the choice is Division : the program divides the first number by the second, and checks if the second number is zero to prevent division error
- If the choice is Exit : the program stops running

## 7. Output
The program displays:
- The calculator menu
- The result of the selected calculation
- An error message if division by zero is attempted
- The program continues showing the menu until the user selects Exit
---
## 8. Algorithm
The algorithm used in the program is described in:
[pseudocode.txt](https://github.com/user-attachments/files/32087233/pseudocode.txt)
---

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
