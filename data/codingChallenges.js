/* =========================================================
   BTECH QUEST
   CODING CHALLENGES
========================================================= */

const codingChallenges = [

    {
        id: 1,
        language: "Python",
        difficulty: "Easy",
        title: "Hello B.Tech",
        description:
            "Write a Python program that prints Hello B.Tech Quest!",
        starterCode:
`print("Hello B.Tech Quest!")`,
        expectedOutput:
            "Hello B.Tech Quest!",
        hints: [
            "Use Python's print() function.",
            "Put the required text inside quotes."
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
            "Write a Python program that adds 10 and 20 and prints the result.",
        starterCode:
`a = 10
b = 20
print(a + b)`,
        expectedOutput:
            "30",
        hints: [
            "Create two variables.",
            "Use the + operator."
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
`n = 10

if n % 2 == 0:
    print("Even")
else:
    print("Odd")`,
        expectedOutput:
            "Even",
        hints: [
            "Use the modulo operator %.",
            "An even number gives remainder 0."
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
            "Find the largest number among 10, 25 and 15.",
        starterCode:
`a = 10
b = 25
c = 15

print(max(a, b, c))`,
        expectedOutput:
            "25",
        hints: [
            "Python provides the max() function.",
            "Pass all three numbers to max()."
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
            "Reverse the string 'BTECH'.",
        starterCode:
`text = "BTECH"

print(text[::-1])`,
        expectedOutput:
            "HCETB",
        hints: [
            "Python supports string slicing.",
            "Try using [::-1]."
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
            "Write a C program that prints Hello C.",
        starterCode:
`#include <stdio.h>

int main() {
    printf("Hello C");
    return 0;
}`,
        expectedOutput:
            "Hello C",
        hints: [
            "Include stdio.h.",
            "Use printf()."
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
            "Write a C program that prints the sum of 10 and 20.",
        starterCode:
`#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;

    printf("%d", a + b);

    return 0;
}`,
        expectedOutput:
            "30",
        hints: [
            "Create two integer variables.",
            "Print a + b."
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
            "Print Welcome Coder using C++.",
        starterCode:
`#include <iostream>
using namespace std;

int main() {

    cout << "Welcome Coder";

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
            "Print Welcome Java.",
        starterCode:
`class Main {

    public static void main(String[] args) {

        System.out.println("Welcome Java");

    }
}`,
        expectedOutput:
            "Welcome Java",
        hints: [
            "Use System.out.println().",
            "Create a main method."
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
            "Check whether the word 'level' is a palindrome.",
        starterCode:
`text = "level"

if text == text[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")`,
        expectedOutput:
            "Palindrome",
        hints: [
            "Reverse the string.",
            "Compare the original and reversed strings."
        ],
        xp: 400,
        coins: 80
    }

];
