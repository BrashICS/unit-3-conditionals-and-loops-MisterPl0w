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

