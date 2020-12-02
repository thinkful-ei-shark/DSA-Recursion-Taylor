/* 1. Counting Sheep 
   Write a recursive function that counts how many sheep jump over the fence. 
   Your program should take a number as input. 
   That number should be the number of sheep you have. 
   The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

        Input: 3
        Output:
        3: Another sheep jumps over the fence
        2: Another sheep jumps over the fence
        1: Another sheep jumps over the fence
        All sheep jumped over the fence 
*/

const countingSheep = sheep => {
  // Base Case
  if (sheep <= 0) {
    console.log('All sheep jumped over the fence.');
    return;
  }
  // General Case
  console.log(`${sheep}: Another sheep jumps over the fence.`);
  return countingSheep(sheep - 1);
};

/* 2. Power Calculator
   Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
   The function returns the value of the base raised to the power of the exponent. 
   Use only exponents greater than or equal to 0 (positive numbers)

        powerCalculator(10,2) should return 100
        powerCalculator(10,-2) should return exponent should be >= 0
*/

const powerCalculator = (base, exp) => {
  // Base Case
  if (exp <= 0) {
    console.log('Exponent should be > 0');
    return 1;
  } else {
    // General Case
    return base * powerCalculator(base, exp - 1);
  }
};

/* 3. Reverse String 
   Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.    
*/

const olSwitchAroo = string => {
  if (!string) {
    return '';
  }
  return olSwitchAroo(string.substring(1)) + string.charAt(0);
};

/* 4. nth Triangular Number 
    Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. 
    The nth triangular number is the number of dots 
    composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. 
    This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

                                    *
                    *           *    *
        *     |   *   *  |   *    *    *  |

        1st       2nd           3rd             nth? 
*/

const triangleNumber = n => {
  // Base Case
  if (n === 0) {
    return 0;
  }
  // General Case
  return n + triangleNumber(n - 1);
};

/* 5. String Splitter 
   Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
   Don't use JS array's split function to solve this problem.

        Input: 02/20/2020
        Output: ["02", "20", "2020"]
*/

const stringSplit = (string, separator) => {
  let index = string.indexOf(separator);
  // Base Case
  if (index === -1) return [string];
  // General Case
  return [string.slice(0, index)].concat(
    stringSplit(string.slice(index + separator.length), separator)
  );
};

console.log(stringSplit('02/20/2020', '/'));

/* 6. Fibonacci 
   Write a recursive function that prints the Fibonacci sequence of a given number. 
   The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
   For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

// INPUT = a number
// OUTPUT = a sequence

const fibonacci = fib => {
  if (fib === 1) {
    return [0, 1];
  }
  let sequence = fibonacci(fib - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return sequence;
};

/* 7. Factorial 
   Write a recursive function that finds the factorial of a given number. 
   The factorial of a number can be found by multiplying that number by each number between itself and 1. 
   For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/

// INPUT = a number
// OUTPUT = the product of the input and every number below
const factorial = fact => {
  if (fact < 2) {
    return fact;
  }

  return fact * factorial(fact - 1);
};

/* 8. Find a way out of the maze 
   You have entered a Maze and need to find your way out of it. 
   There are more than one possible paths through the Maze to the single exit point. 
   Write a recursive function that will help you find a possible path through the maze.
   You can use the following mazes to test your program.

   let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
    
   let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
*/

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

function traverseMaze(maze, x = 0, y = 0) {
  if (maze[y][x] === 'e') {
    return 'Maze Complete!';
  }
  if (maze[y][x + 1] == ' ' || maze[y][x + 1] === 'e') {
    const path = 'R';
    maze[y][x] = '-';
    return path + traverseMaze(maze, x + 1, y);
  } else if (
    maze[y + 1] &&
    (maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e')
  ) {
    const path = 'D';
    maze[y][x] = '-';
    return path + traverseMaze(maze, x, y + 1);
  } else if (maze[y][x - 1] == ' ') {
    const path = 'L';
    maze[y][x] = '-';
    return path + traverseMaze(maze, x - 1, y);
  } else if (maze[y - 1] && maze[y - 1][x] == ' ') {
    const path = 'U';
    maze[y][x] = '-';
    return path + traverseMaze(maze, x, y - 1);
  }
}

// console.log(traverseMaze(maze));

// Build off of previous function
// Find a way to know which path we went before

/* 9. Find ALL the ways out of the maze 
   Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. 
   To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

   Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. 
   For example, given the maze above, the program should output the following:

   Path to the exit: RRDDLLDDRRRRRR
   Path to the exit: RRDDRRUURRDDDD
   Path to the exit: RRDDRRRRDD
*/

function findPaths(maze, x = 0, y = 0, steps = [], solutions = []) {
  if (x < 0 || x >= maze.length || y < 0 || y >= maze[x].length) {
    return solutions;
  }
  const current = maze[x][y];
  if (current === 'e') {
    return [...solutions, steps];
  } else if (current === '*') {
    return solutions;
  } else if (current === 'v') {
    return solutions;
  }
  const newMaze = maze.map((row, xIndex) =>
    row.map((value, yIndex) => {
      if (xIndex === x && yIndex === y) {
        return 'v';
      } else {
        return value;
      }
    })
  );
  solutions = findPaths(newMaze, x - 1, y, [...steps, 'U'], solutions);
  solutions = findPaths(newMaze, x + 1, y, [...steps, 'D'], solutions);
  solutions = findPaths(newMaze, x, y - 1, [...steps, 'L'], solutions);
  solutions = findPaths(newMaze, x, y + 1, [...steps, 'R'], solutions);
  return solutions;
}

/* 10. Anagrams 
   An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. 
   Write a function that creates an anagram list, listing all the rearrangements of a given word. 
   For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". 
This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". 
Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.
*/
let anagrams = [];

const anagramListCreator = (word, anagram = '') => {
  if (!word) {
    anagrams.push(anagram);
    return;
  }

  for (let i = 0; i < word.length; i++) {
    anagram += word[i];
    console.log(word);
    anagramListCreator(word.slice(0, i) + word.slice(i + 1), anagram);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return [...new Set(anagrams)];
};

console.log(anagramListCreator('east'));

/* 11. Organization Chart 
   Write a recursive function that prints the following organization chart. 
   Your output should be as shown below with proper indentation to show the hierarchy. 
   You may store the org chart in an object and send that as an input to your program.
 
   Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
*/

let org = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {},
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

function traverseA(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1);
  });
}

// traverseA(org);

/* 12. Binary Representation 
   Write a recursive function that prints out the binary representation of a given number. 
   For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. 
   Note that the binary representation of 0 should be 0.
*/

const toBinary = n => {
  n = Math.abs(Math.round(n));
  if (n === 0 || n === 1) {
    return n.toString();
  }
  const lsb = (n % 2).toString();
  const remainingBits = Math.floor(n / 2);
  return toBinary(remainingBits) + lsb;
};

// console.log(toBinary(10)); // 1010
// console.log(toBinary(10.5)); // Round floats 1011
// console.log(toBinary(-3)); // Abs value 11
// console.log(toBinary(0)); // 0
// console.log(toBinary(1)); // 1

function twoNumberSum(array, targetSum) {
  let target = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let newSum = array[i] + array[j];
      if (newSum === targetSum) {
        target.push(newSum);
      } else {
        return target;
      }
    }
    return target;
  }
}
