// This script contains the JavaScript logic for the assignment.

// Wait for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', () => {

    // 🎯 Part 1: Mastering JavaScript Basics
    // This section demonstrates variables, conditionals, and user input.

    // Variable declarations using 'const' and 'let'
    const nameInput = document.getElementById('nameInput'); // Get the name input field
    const greetButton = document.getElementById('greetButton'); // Get the button
    let greetingMessage = document.getElementById('greetingMessage'); // Get the message element

    // Event listener for the greeting button click
    greetButton.addEventListener('click', () => {
        // Get the value from the input field
        const userName = nameInput.value;

        // Use a conditional (if/else) to check for user input
        if (userName.trim() !== '') {
            // Use a template literal to create a personalized greeting
            greetingMessage.textContent = `Hello, ${userName}! Welcome to your assignment.`;
        } else {
            // Display an error message if the input is empty
            greetingMessage.textContent = "Please enter your name!";
        }
    });

    // ❤️ Part 2: JavaScript Functions
    // This section demonstrates creating and calling custom functions.

    // Get the button and result elements for this section
    const calculateButton = document.getElementById('calculateButton');
    const totalResult = document.getElementById('totalResult');

    // Custom function to calculate a total with tax
    function calculateTotal(price, taxRate) {
        // Use an operator to perform the calculation
        const total = price * (1 + taxRate);
        // Return the final result
        return total.toFixed(2); // Format to 2 decimal places
    }

    // Event listener to call the function when the button is clicked
    calculateButton.addEventListener('click', () => {
        const itemPrice = 50;
        const taxRate = 0.08; // 8% tax

        // Call the function and store the returned value
        const finalTotal = calculateTotal(itemPrice, taxRate);

        // Display the result on the webpage
        totalResult.textContent = `The final total is $${finalTotal}.`;
        console.log(`The final total is $${finalTotal}.`);
    });


    // 🔁 Part 3: JavaScript Loops
    // This section demonstrates using a loop to generate dynamic content.

    // Get the button and list element for this section
    const generateListButton = document.getElementById('generateListButton');
    const loopList = document.getElementById('loopList');

    // Create an array to iterate over
    const items = ['Apples', 'Bananas', 'Carrots', 'Dates', 'Elderberries'];

    // Event listener to trigger the loop
    generateListButton.addEventListener('click', () => {
        // Clear the previous list content before generating a new one
        loopList.innerHTML = '';

        // Example 1: Use a 'for' loop to iterate and create list items
        for (let i = 0; i < items.length; i++) {
            // Create a new list item element
            const listItem = document.createElement('li');
            // Set the text content of the list item
            listItem.textContent = `Item ${i + 1}: ${items[i]}`;
            // Append the new list item to the unordered list
            loopList.appendChild(listItem);
        }

        // Example 2: Use a 'forEach' loop for a different approach (for practice)
        console.log("\n--- Looping with forEach ---");
        items.forEach(item => {
            console.log(`- Found item: ${item}`);
        });
    });


    // 🌐 Part 4: Mastering the DOM with JavaScript
    // This section demonstrates selecting and manipulating DOM elements.

    // Get references to elements for DOM interactions
    // Interaction 1: Select by ID and change text content
    const domTarget = document.getElementById('domTarget');

    // Interaction 2 & 3: Select by query selector and toggle a class and style
    const domButton = document.querySelector('#domButton'); // Select the button

    // Event listener for the DOM interaction button
    domButton.addEventListener('click', () => {
        // DOM Interaction 1: Change the text of the target element
        domTarget.textContent = "The DOM has been manipulated! 🎉";

        // DOM Interaction 2: Toggle a CSS class to change the background color
        // The '.dom-highlight' class is defined in style.css
        domTarget.classList.toggle('dom-highlight');

        // DOM Interaction 3: Change a style property directly
        // Change the border color to a random color for extra flair
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        domTarget.style.borderColor = randomColor;
        domTarget.style.borderWidth = '2px';
    });

});
