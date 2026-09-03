/* =====================================================
   BTECH QUEST
   STEP 3
   PROGRAMMING CHALLENGES
===================================================== */

const codingChallenges = [

    {
        id: 1,

        language: "Python",

        difficulty: "Easy",

        title: "Hello B.Tech",

        description:
            "Write a Python program that prints the text: Hello B.Tech",

        starterCode:
`# Write your code below

print("Hello B.Tech")`,

        expectedOutput:
            "Hello B.Tech",

        hints: [
            "Use the print() function.",
            "The output must be exactly Hello B.Tech."
        ],

        xp: 100,

        coins: 25
    },


    {
        id: 2,

        language: "Python",

        difficulty: "Easy",

        title: "Add Two Numbers",

        description:
            "Write a Python program that adds two numbers.",

        starterCode:
`a = 10
b = 20

# Print the sum
`,

        expectedOutput:
            "30",

        hints: [
            "Use the + operator.",
            "Try a + b."
        ],

        xp: 150,

        coins: 35
    },


    {
        id: 3,

        language: "Python",

        difficulty: "Easy",

        title: "Even or Odd",

        description:
            "Check whether the number 10 is even or odd.",

        starterCode:
`number = 10

# Write your logic below
`,

        expectedOutput:
            "Even",

        hints: [
            "Use the modulo operator %.",
            "If number % 2 is 0, it is even."
        ],

        xp: 200,

        coins: 40
    },


    {
        id: 4,

        language: "Python",

        difficulty: "Medium",

        title: "Largest Number",

        description:
            "Find the largest number from 10, 25 and 15.",

        starterCode:
`a = 10
b = 25
c = 15

# Find the largest number
`,

        expectedOutput:
            "25",

        hints: [
            "Compare the three values.",
            "You can also use Python's max() function."
        ],

        xp: 250,

        coins: 50
    },


    {
        id: 5,

        language: "Python",

        difficulty: "Medium",

        title: "Reverse a String",

        description:
            "Reverse the string BTECH.",

        starterCode:
`text = "BTECH"

# Reverse the string
`,

        expectedOutput:
            "HCETB",

        hints: [
            "Python supports string slicing.",
            "Try text[::-1]."
        ],

        xp: 300,

        coins: 60
    },


    {
        id: 6,

        language: "C",

        difficulty: "Easy",

        title: "Hello C",

        description:
            "Write a C program that prints Hello B.Tech.",

        starterCode:
`#include <stdio.h>

int main() {

    // Write your code here

    return 0;
}`,

        expectedOutput:
            "Hello B.Tech",

        hints: [
            "Use printf().",
            "Remember the semicolon."
        ],

        xp: 100,

        coins: 25
    },


    {
        id: 7,

        language: "C",

        difficulty: "Easy",

        title: "Add Two Numbers",

        description:
            "Write a C program that adds 10 and 20.",

        starterCode:
`#include <stdio.h>

int main() {

    int a = 10;
    int b = 20;

    // Print the sum

    return 0;
}`,

        expectedOutput:
            "30",

        hints: [
            "Use a + b.",
            "Print the answer using printf()."
        ],

        xp: 150,

        coins: 35
    },


    {
        id: 8,

        language: "C++",

        difficulty: "Easy",

        title: "Welcome Coder",

        description:
            "Write a C++ program that prints Welcome Coder.",

        starterCode:
`#include <iostream>

using namespace std;

int main() {

    // Write your code here

    return 0;
}`,

        expectedOutput:
            "Welcome Coder",

        hints: [
            "Use cout.",
            "Include iostream."
        ],

        xp: 100,

        coins: 25
    },


    {
        id: 9,

        language: "Java",

        difficulty: "Easy",

        title: "Welcome Java",

        description:
            "Write a Java program that prints Welcome Java.",

        starterCode:
`public class Main {

    public static void main(String[] args) {

        // Write your code here

    }

}`,

        expectedOutput:
            "Welcome Java",

        hints: [
            "Use System.out.println().",
            "Write it inside main()."
        ],

        xp: 100,

        coins: 25
    },


    {
        id: 10,

        language: "Python",

        difficulty: "Hard",

        title: "Palindrome",

        description:
            "Check whether the word madam is a palindrome.",

        starterCode:
`word = "madam"

# Check whether the word is a palindrome
`,

        expectedOutput:
            "Palindrome",

        hints: [
            "A palindrome reads the same forward and backward.",
            "Compare the word with its reverse."
        ],

        xp: 400,

        coins: 80
    }

];
