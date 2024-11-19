/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 *
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 *
 * If you run into Git or Github issues, call Mr. Brash over.
 **/


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// An example function for whether the input matches the given string
function word_match(word) {
    // Ask the user to match my word
    let user_guess = prompt("I'm thinking of a word. Can you match it?");

    // Check if they match
    if (user_guess == word) {
        console.log("The words MATCHED!");
        alert(`Correct! The word was ${word}`);
        return true;
    }

    return false;
}


// An example function to match a NUMBER
function number_match(n) {
    // As the user to match a number
    let user_guess = prompt("I'm thinking of a number... what is it?");

    // There's an error in this code... what is it?
    if (user_guess == n) {
        alert(`Yes! The number was ${n}`);
        return true;
    }

    return false;
}

function user() {
    let age = +prompt("How old are you?");

    if (age >= 60) {
        console.log("You qualify for the senior discount!");
    }
    if (age < 16) {
        console.log("You're not old enough to drive yet.");
    }
    if (age == 44) {
        console.log("So is Mr. Squirrel! 🐿️");
    }

    let user_name = prompt("What is your name?");

    if (user_name == "Mr. Squirrel") {
        console.log("🐿️");
    }
    if (user_name.length > 7) {
        console.log("You have a long name.");
    }

    let user_guess = +prompt("How many characters do you think your name is?");
    if (user_guess == user_name.length) {
        console.log("That's correct! ✔️");
    }
    if (user_guess > user_name.length) {
        console.log("Too high ✖️");
    }
    if (user_guess < user_name.length) {
        console.log("Too low ✖️");
    }

    if (age % 2 == 0) {
        console.log("Your age is an even number.");
    }
    if (age % 2 != 0) {
        console.log("Your age is an odd number.");
    }
}




function startGame() {
    let name = prompt("Hello adventurer! What is your name?");
    alert(`Well, ${name}, you've entered the haunted St. Matt's HS`);

    let choice = prompt("You can go to the (1) library, (2) basement, or (3) Mr. Flynn's room.")

    if (choice == 1) {
        library()
        alert("GAME OVER");
        return;
    }

    if (choice == 2) {
        basement()
        alert("GAME OVER");
        return;
    }
    if (choice == 3) {
        flynn()
        alert("GAME OVER");
        return;
    }

    alert("It seems you have made an incorrect selection... The haunted building closes in on you and you die a slow and VERY painful death.");

}

function library() {
    let lib = prompt("You've entered the library and notice Mrs. Murray slain on the floor, a trail of blood leads you to bloody footprints. You can either (1) follow the footprints (2) check her body for clues or (3) run away screaming.");

    if (lib == 1) {
        lib = prompt("You follow the bloody footprints behind a stack of books. Sitting on the floor is a tiny grade 7 student, covered in what you can only assume is Mrs. Murray's blood. The child looks up at you with dead, cold eyes. You can either (1) attempt to speak to the student or (2) attempt to subdue (kill) the zombie student.");
        if (lib == 1) {
            alert("You calmly ask the student if they are ok and perhaps if they need assistance. The child does not respond. It slowly turns its head to stare straight ahead and slowly points at the door to the co-op office. You can see that the door is slightly ajar.")

        }
        if (lib == 2) {
            alert("You attempt a swift karate kick to the student's zombie-like head. You miss. The zombie eats you.")
        }
        alert("Unfortunately, that was not one of the available options. The zombie student reaches up to grab your hand. You can't help but take their hand in a moment of calmness, perhaps to help the student stand. That was your first mistake. You are dead.");
        return;
    }
    if (lib == 2) {
        return;
    }
    if (lib == 3) {
        return;
    }

    alert("It seems you have made an incorrect selection. You get turned around, not quite sure where the exit is. Mrs. Murray's body comes to life, grabbing your ankle with cold, dead hands... the rest is history. You are dead.");

}

function basement() {
    alert("The story is incomplete...")
}

function flynn() {
    alert("The story is incomplete...")
}


function if_else_test() {
    let rnd = randInt(1, 100);

    console.log(`Let's classify the number ${rnd}.`);

    if (rnd <= 10) {
        console.log(`${rnd} is less than or equal to 10`);
    } else if (rnd < 50) {
        console.log(`${rnd} is greater than 10 but less than 50`);
    } else if (rnd <= 75) {
        console.log(`${rnd} is between 50 and 75 (inclusive)`);
    } else if (rnd <= 100) {
        console.log(`${rnd} is greater than 75 but less than or equal to 100`);
    }
}

function is_number(num) {
    return typeof num == "number";
}




function menu() {
    // Setup the menu
    let message = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit`
    let selection = Number(prompt(message));
    if (selection == 1) {
        alert("Let's Play!")
        let difficulty = +prompt(`Select a difficulty:
            1 - Easy
            2 - Medium
            3 - Hard`)

        alert("You selected: " + difficulty)
    } else if (selection == 2) {
        alert("You selected Options.")
    } else if (selection == 3) {
        alert("No new DLC at this time.")
    } else if (selection == 4) {
        alert("Everything is up to date.")
    } else if (selection == 5) {
        alert("Bye!")
    }
}

function average(n) {
    let avg = 0;
    let count = 1;
    
    while (count <= n) {
        avg = avg + Number(prompt(`Please enter value ${count}/${n}`));
        count++;
    }

    avg = round(avg / n, 1);
    console.log(`The average is ${avg}`);
}


function random_until(min, max, stop) {
    // Error checking
    if (stop < min || stop > max || max <= min) {
        return -1;
    }

    // Generate the first random number
    let rnd = randInt(min, max);
    
    // Check to see if it's the stop value
    while (rnd != stop) {
        console.log(rnd);
        rnd = randInt(min, max);
    }

    // Return 
    return stop;    
}

function count(str, letter) {
    let i = 0;
    let c = 0;
    while (i < str.length) {
        if (str[i] == letter) {
            c++;
        }
        i++;
    }
    return c;
}

function print_reverse(str) {
    // Start with a blank string to build up
    let output = "";

    // Loop through the given string from the END and build the output
    let i = str.length - 1
    while (i >= 0) {
        output = output + str[i];
        i--;
    }
    console.log(output);
}

function dragons_and_goblins(str) {
    let dragons = 0;
    let goblins = 0;

    let i = 0;
    while (i < str.length) {
        if (str[i].toLowerCase() == "d") {
            dragons = dragons + 1;
        } else if (str[i].toLowerCase() == "g") {
            goblins = goblins + 1;
        }
        i = i + 1;
    }
    console.log(`Dragons: ${dragons} Goblins: ${goblins}`);
}

// duplicate the string as many times as requested
function duplicate(str, number_of_times) {
    let output = "";    // Empty string for building
    let count = 1;
  
    while (count <= number_of_times) {
      output = output + str;
      count++;
    }
  
    return output;
}


function build_string() {
    let output = "";
    let input;
    do {
      input = prompt("Enter a string of text or a single 'q' to quit: ");
      output += input;
    } while (input.toLowerCase() != "q");
  
    return output;
}

// Note to self, there are two typos in the readme
// for the do...while loop examples.
// This one and Parrot
function print_odd(n) {
    // verify input
    if (isNaN(n) || n < 1 || n % 1 != 0) return;
    let i = 1;
    do {
        console.log(i);
        i = i + 2;
    } while (i <= n);

}

// Ask until we get a negative number
function negative_only() {
    let input;

    do {
        input = +prompt("Enter a negative number.");
    } while (input >= 0 || isNaN(input))

    return input;
}

function parrot() {
    let input = null;
    do {
        if (input != null) {
            console.log(input.toUpperCase());
        }
        input = prompt("Enter some text or 'quit' to end.");
    } while (input.toLowerCase() != "quit");

    console.log("GOODBYE! 🦜");
}

function factorial(n) {
    if (isNaN(n) || n < 0) return -1;

    let multiplier = 1;
    let product = 1;
    do {
        product *= multiplier++;
    } while (multiplier <= n);

    return product;
}

function count_up(start, stop) {
    if (isNaN(start * stop)) return -1;
    if (start > stop) return -1;

    for (start; start <= stop; start++) {
        console.log(start);
    }
}

function count_down(start, stop) {
    if (isNaN(start * stop)) return -1;
    if (start < stop) return -1;

    for (start; start >= stop; start--) {
        console.log(start);
    }
}

function print_chars(str, step) {
    if (step <= 0 || isNaN(step)) return -1;
    for (let i = 0; i < str.length; i+= step) {
        console.log(str[i]);
    }
}


function sum(n) {
    if (n < 1 || isNaN(n)) return -1;

    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }

    return s;
}

function count4(begin, end) {
    if (begin > end || isNaN(begin * end)) return -1;
    let count = 0;
    for (let i = begin; i <= end; i++) {
        if (i % 4 == 0) {
            count++;
        }
    }
    return count;
}

function sum_divisible(n, x) {
    if (n < 0 || isNaN(n * x)) return -1;

    let count = 0;
    for (n; n >= 0; n--) {
        if (n % x == 0) {
            count += n;
        }
    }

    return count;
}
