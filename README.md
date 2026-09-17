
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
The flowchart used in the program is described in:
[flowchart.fprg](https://github.com/ImanCahyahafidz2610312018/Temperature-Converter-kelompok-7-/blob/192065f97e18698abcec62ddacedba65d80e94a5/flowchart.fprg) 
    The flowchart is created using Flowgorithm.
    File: <?xml version="1.0"?>
    <flowgorithm fileversion="4.2">
        <attributes>
            <attribute name="name" value="flowgorithm simple calculator"/>
            <attribute name="authors" value="hpind"/>
            <attribute name="about" value=""/>
            <attribute name="saved" value="2026-09-11 07:45:09 PM"/>
            <attribute name="created" value="aHBpbmQ7RVZBOzIwMjYtMDktMTE7MDY6NTA6MDEgUE07MjAyOA=="/>
            <attribute name="edited" value="aHBpbmQ7RVZBOzIwMjYtMDktMTE7MDc6NDU6MDkgUE07MTsyMTQ5"/>
        </attributes>
        <function name="Main" type="None" variable="">
            <parameters/>
            <body>
                <declare name="pilihan" type="Integer" array="False" size=""/>
                <declare name="angka1, angka2" type="Real" array="False" size=""/>
                <declare name="hasil" type="Real" array="False" size=""/>
                <assign variable="pilihan" expression="0"/>
                <while expression="pilihan != 5">
                    <output expression="&quot;=== kalkulator sederhana ===&quot;" newline="True"/>
                    <output expression="&quot;1. penjumlahan&quot;" newline="True"/>
                    <output expression="&quot;2. pengurangan&quot;" newline="True"/>
                    <output expression="&quot;3. perkalian&quot;" newline="True"/>
                    <output expression="&quot;4. pembagian&quot;" newline="True"/>
                    <output expression="&quot;5. keluar&quot;" newline="True"/>
                    <input variable="pilihan"/>
                    <if expression="pilihan == 1">
                        <then>
                            <input variable="angka1"/>
                            <input variable="angka2"/>
                            <assign variable="hasil" expression="angka1 + angka2"/>
                            <output expression="&quot;hasil: &quot; &amp; hasil" newline="True"/>
                        </then>
                        <else>
                            <if expression="pilihan == 2">
                                <then>
                                    <input variable="angka1"/>
                                    <input variable="angka2"/>
                                    <assign variable="hasil" expression="angka1 - angka2"/>
                                    <output expression="&quot;hasil: &quot; &amp; hasil" newline="True"/>
                                </then>
                                <else>
                                    <if expression="pilihan == 3">
                                        <then>
                                            <input variable="angka1"/>
                                            <input variable="angka2"/>
                                            <assign variable="hasil" expression="angka1 * angka2"/>
                                            <output expression="&quot;hasil: &quot; &amp; hasil" newline="True"/>
                                        </then>
                                        <else>
                                            <if expression="pilihan == 4">
                                                <then>
                                                    <input variable="angka1"/>
                                                    <input variable="angka2"/>
                                                    <if expression="angka2 == 0">
                                                        <then>
                                                            <output expression="&quot;error: pembagian dengan 0 tidak diperbolehkan&quot;" newline="True"/>
                                                        </then>
                                                        <else>
                                                            <assign variable="hasil" expression="angka1 / angka2"/>
                                                            <output expression="&quot;hasil: &quot; &amp; hasil" newline="True"/>
                                                        </else>
                                                    </if>
                                                </then>
                                                <else>
                                                    <if expression="pilihan == 5">
                                                        <then>
                                                            <output expression="&quot;terima kasih&quot;" newline="True"/>
                                                        </then>
                                                        <else>
                                                            <output expression="&quot;menu tidak valid&quot;" newline="True"/>
                                                        </else>
                                                    </if>
                                                </else>
                                            </if>
                                        </else>
                                    </if>
                                </else>
                            </if>
                        </else>
                    </if>
                </while>
            </body>
        </function>
    </flowgorithm>
                                                            
---
## 10. JavaScript Implementation
The JavaScript implementation of the program is available in:
`program.js` import { createInterface } from 'readline/promises';

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    let choice = 0;
    
    while (choice !== 5) {
      console.log("\n===== CALCULATOR MENU =====");
      console.log("1. Addition");
      console.log("2. Subtraction");
      console.log("3. Multiplication");
      console.log("4. Division");
      console.log("5. Exit");
    
      choice = parseInt(await rl.question("Enter your choice: "));
    
      if (choice < 1 || choice > 5) {
        console.log("Invalid choice, please try again.");
        continue;
      }
    
      if (choice === 5) {
        console.log("Exiting program...");
        break;
      }
    
      let num1 = parseFloat(await rl.question("Enter first number: "));
      let num2 = parseFloat(await rl.question("Enter second number: "));
      let result;
    
      if (choice === 1) {
        result = num1 + num2;
        console.log("Result:", result);
      } else if (choice === 2) {
        result = num1 - num2;
        console.log("Result:", result);
      } else if (choice === 3) {
        result = num1 * num2;
        console.log("Result:", result);
      } else if (choice === 4) {
        if (num2 === 0) {
          console.log("Error: Division by zero is not allowed");
        } else {
          result = num1 / num2;
          console.log("Result:", result);
        }
      }
    }
    
    rl.close();
---
## 11. Testing
The program is tested using several test scenarios.
Testing documentation:
`test-cases.md`
