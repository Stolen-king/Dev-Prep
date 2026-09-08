export const q6_10 = [
    {
        id: 6,
        categoryType: 'development',
        title: "Profile Validation",
        difficulty: "Medium",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a profile form with name and email fields. Validate the entered details when the user clicks Save and display appropriate error messages or a success message.",

        requirements: [
            "Create a name input with id='name'.",
            "Create an email input with id='email'.",
            "Create a button with id='saveBtn'.",
            "Create an error element with id='nameError' for name validation.",
            "Create an error element with id='emailError' for email validation.",
            "Create a success message element with id='message'.",
            "The name must contain more than 2 characters.",
            "The email must contain '@'.",
            "Display an appropriate error message when the name is invalid.",
            "Display an appropriate error message when the email is invalid.",
            "Display a success message when both fields are valid."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Validation</title>
</head>
<body>

    <!-- TODO:
         Create the profile validation form.

         Requirements:
         - Create an input with id="name".
         - Create an input with id="email".
         - Create a button with id="saveBtn".
         - Create an element with id="nameError".
         - Create an element with id="emailError".
         - Create an element with id="message".
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the profile form.
   
   Make the form fields and messages
   clearly visible.
*/`,

        starterJS: `// TODO:
// Select the name input, email input,
// error elements, save button, and message element.


// TODO:
// Add a click event listener to the Save button.


// TODO:
// Validate the name.
// The name must contain more than 2 characters.


// TODO:
// Validate the email.
// The email must contain '@'.


// TODO:
// Display the appropriate error messages
// in nameError and emailError.


// TODO:
// Display a success message in message
// when all fields are valid.
`,

        testCases: [
            {
                name: "Name input exists",
                test: (doc) => {
                    const el = doc.getElementById("name");

                    return {
                        passed: !!el,
                        message: el
                            ? "Name input found."
                            : "Name input not found."
                    };
                }
            },

            {
                name: "Email input exists",
                test: (doc) => {
                    const el = doc.getElementById("email");

                    return {
                        passed: !!el,
                        message: el
                            ? "Email input found."
                            : "Email input not found."
                    };
                }
            },

            {
                name: "Save button exists",
                test: (doc) => {
                    const el = doc.getElementById("saveBtn");

                    return {
                        passed: !!el,
                        message: el
                            ? "Save button found."
                            : "Save button not found."
                    };
                }
            },

            {
                name: "Name error element exists",
                test: (doc) => {
                    const el = doc.getElementById("nameError");

                    return {
                        passed: !!el,
                        message: el
                            ? "Name error element found."
                            : "Name error element not found."
                    };
                }
            },

            {
                name: "Email error element exists",
                test: (doc) => {
                    const el = doc.getElementById("emailError");

                    return {
                        passed: !!el,
                        message: el
                            ? "Email error element found."
                            : "Email error element not found."
                    };
                }
            },

            {
                name: "Success message element exists",
                test: (doc) => {
                    const el = doc.getElementById("message");

                    return {
                        passed: !!el,
                        message: el
                            ? "Success message element found."
                            : "Success message element not found."
                    };
                }
            },

            {
                name: "Short name is rejected",
                test: (doc) => {
                    const name = doc.getElementById("name");
                    const email = doc.getElementById("email");
                    const button = doc.getElementById("saveBtn");
                    const error = doc.getElementById("nameError");

                    if (!name || !email || !button || !error) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    name.value = "a";
                    email.value = "a@a.com";

                    button.click();

                    const passed =
                        error.textContent.trim().length > 0;

                    return {
                        passed,
                        message: passed
                            ? "Invalid name was rejected."
                            : "No name error was displayed."
                    };
                }
            },

            {
                name: "Valid name is accepted",
                test: (doc) => {
                    const name = doc.getElementById("name");
                    const email = doc.getElementById("email");
                    const button = doc.getElementById("saveBtn");
                    const error = doc.getElementById("nameError");

                    if (!name || !email || !button || !error) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    name.value = "abc";
                    email.value = "a@a.com";

                    button.click();

                    const passed =
                        error.textContent.trim().length === 0;

                    return {
                        passed,
                        message: passed
                            ? "Valid name accepted."
                            : "Valid name was rejected."
                    };
                }
            },

            {
                name: "Invalid email is rejected",
                test: (doc) => {
                    const name = doc.getElementById("name");
                    const email = doc.getElementById("email");
                    const button = doc.getElementById("saveBtn");
                    const error = doc.getElementById("emailError");

                    if (!name || !email || !button || !error) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    name.value = "abc";
                    email.value = "invalid";

                    button.click();

                    const passed =
                        error.textContent.trim().length > 0;

                    return {
                        passed,
                        message: passed
                            ? "Invalid email was rejected."
                            : "No email error was displayed."
                    };
                }
            },

            {
                name: "Valid email is accepted",
                test: (doc) => {
                    const name = doc.getElementById("name");
                    const email = doc.getElementById("email");
                    const button = doc.getElementById("saveBtn");
                    const error = doc.getElementById("emailError");

                    if (!name || !email || !button || !error) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    name.value = "abc";
                    email.value = "a@a.com";

                    button.click();

                    const passed =
                        error.textContent.trim().length === 0;

                    return {
                        passed,
                        message: passed
                            ? "Valid email accepted."
                            : "Valid email was rejected."
                    };
                }
            },

            {
                name: "Valid name and email display success",
                test: (doc) => {
                    const name = doc.getElementById("name");
                    const email = doc.getElementById("email");
                    const button = doc.getElementById("saveBtn");
                    const message = doc.getElementById("message");

                    if (!name || !email || !button || !message) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    name.value = "abc";
                    email.value = "a@a.com";

                    button.click();

                    const passed =
                        message.textContent.trim().length > 0;

                    return {
                        passed,
                        message: passed
                            ? "Success message displayed."
                            : "Success message was not displayed."
                    };
                }
            },

            {
                name: "Empty fields display both errors",
                test: (doc) => {
                    const name = doc.getElementById("name");
                    const email = doc.getElementById("email");
                    const button = doc.getElementById("saveBtn");
                    const nameError = doc.getElementById("nameError");
                    const emailError = doc.getElementById("emailError");

                    if (
                        !name ||
                        !email ||
                        !button ||
                        !nameError ||
                        !emailError
                    ) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    name.value = "";
                    email.value = "";

                    button.click();

                    const passed =
                        nameError.textContent.trim().length > 0 &&
                        emailError.textContent.trim().length > 0;

                    return {
                        passed,
                        message: passed
                            ? "Both validation errors displayed."
                            : "Both validation errors were not displayed."
                    };
                }
            }
        ]
    },

    {
        id: 7,
        categoryType: 'development',
        title: "Character Counter",
        difficulty: "Easy",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a live character counter that displays the number of characters entered in a textarea. The counter should update automatically whenever the user types or deletes text.",

        requirements: [
            "Create a textarea with id='textInput'.",
            "Create an element with id='charCount' to display the character count.",
            "The character count must initially display 0.",
            "Update the character count whenever the user enters or deletes text.",
            "The character count must represent the current length of the textarea value.",
            "When the textarea is empty, the character count must display 0."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Counter</title>
</head>
<body>

    <!-- TODO:
         Create the character counter interface.

         Requirements:
         - Create a textarea with id="textInput".
         - Create an element with id="charCount".
         - The character count must initially display 0.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the textarea
   and character count if required.
*/`,

        starterJS: `// TODO:
// Select the textarea using id="textInput".


// TODO:
// Select the character count element
// using id="charCount".


// TODO:
// Add an input event listener to the textarea.


// TODO:
// Update charCount with the current
// number of characters in the textarea.


// TODO:
// Make sure the count becomes 0
// when the textarea is empty.
`,

        testCases: [
            {
                name: "Text input exists",
                test: (doc) => {
                    const el = doc.getElementById("textInput");

                    return {
                        passed: !!el,
                        message: el
                            ? "Textarea found."
                            : "Textarea not found."
                    };
                }
            },

            {
                name: "Character count element exists",
                test: (doc) => {
                    const el = doc.getElementById("charCount");

                    return {
                        passed: !!el,
                        message: el
                            ? "Character count element found."
                            : "Character count element not found."
                    };
                }
            },

            {
                name: "Initial count is 0",
                test: (doc) => {
                    const el = doc.getElementById("charCount");

                    const passed =
                        el?.textContent.trim() === "0";

                    return {
                        passed,
                        message: passed
                            ? "Initial count is 0."
                            : `Expected 0, received ${el?.textContent}.`
                    };
                }
            },

            {
                name: "Typing updates character count",
                test: (doc, win) => {
                    const textarea = doc.getElementById("textInput");
                    const count = doc.getElementById("charCount");

                    if (!textarea || !count) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    textarea.value = "hello";
                    textarea.dispatchEvent(new win.Event("input"));

                    const passed =
                        count.textContent.trim() === "5";

                    return {
                        passed,
                        message: passed
                            ? "Character count updated to 5."
                            : `Expected 5, received ${count.textContent}.`
                    };
                }
            },

            {
                name: "Deleting text updates character count",
                test: (doc, win) => {
                    const textarea = doc.getElementById("textInput");
                    const count = doc.getElementById("charCount");

                    if (!textarea || !count) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    textarea.value = "hi";
                    textarea.dispatchEvent(new win.Event("input"));

                    const passed =
                        count.textContent.trim() === "2";

                    return {
                        passed,
                        message: passed
                            ? "Character count updated to 2."
                            : `Expected 2, received ${count.textContent}.`
                    };
                }
            },

            {
                name: "Emptying textarea resets count to 0",
                test: (doc, win) => {
                    const textarea = doc.getElementById("textInput");
                    const count = doc.getElementById("charCount");

                    if (!textarea || !count) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    textarea.value = "";
                    textarea.dispatchEvent(new win.Event("input"));

                    const passed =
                        count.textContent.trim() === "0";

                    return {
                        passed,
                        message: passed
                            ? "Character count reset to 0."
                            : `Expected 0, received ${count.textContent}.`
                    };
                }
            }
        ]
    },

    {
        id: 8,
        categoryType: 'development',
        title: "Show/Hide Password",
        difficulty: "Easy",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a password input with a button that allows the user to show or hide the entered password.",

        requirements: [
            "Create an input with id='passwordInput'.",
            "The password input must initially have type='password'.",
            "Create a button with id='toggleBtn'.",
            "The button must initially display 'Show'.",
            "Clicking the button must change the input type from 'password' to 'text'.",
            "Clicking the button again must change the input type from 'text' to 'password'.",
            "Update the button text when the password visibility changes."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show/Hide Password</title>
</head>
<body>

    <!-- TODO:
         Create a password input and a toggle button.

         Requirements:
         - Input id="passwordInput"
         - Input type="password"
         - Button id="toggleBtn"
         - Button text should initially be "Show"
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the password
   input and toggle button if required.
*/`,

        starterJS: `// TODO:
// Select the password input using its id.


// TODO:
// Select the toggle button using its id.


// TODO:
// Add a click event listener to the toggle button.


// TODO:
// If the input type is "password",
// change it to "text".


// TODO:
// If the input type is "text",
// change it back to "password".


// TODO:
// Update the button text to reflect
// the current password visibility.
`,

        testCases: [
            {
                name: "Password input exists",
                test: (doc) => {
                    const el = doc.getElementById("passwordInput");

                    return {
                        passed: !!el,
                        message: el
                            ? "Password input found."
                            : "Password input not found."
                    };
                }
            },

            {
                name: "Toggle button exists",
                test: (doc) => {
                    const el = doc.getElementById("toggleBtn");

                    return {
                        passed: !!el,
                        message: el
                            ? "Toggle button found."
                            : "Toggle button not found."
                    };
                }
            },

            {
                name: "Initial input type is password",
                test: (doc) => {
                    const input = doc.getElementById("passwordInput");

                    const passed =
                        input?.type === "password";

                    return {
                        passed,
                        message: passed
                            ? "Initial type is password."
                            : `Expected password, received ${input?.type}.`
                    };
                }
            },

            {
                name: "Clicking button changes type to text",
                test: (doc) => {
                    const button = doc.getElementById("toggleBtn");
                    const input = doc.getElementById("passwordInput");

                    if (!button || !input) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const passed =
                        input.type === "text";

                    return {
                        passed,
                        message: passed
                            ? "Password is now visible."
                            : `Expected text, received ${input.type}.`
                    };
                }
            },

            {
                name: "Clicking again changes type to password",
                test: (doc) => {
                    const button = doc.getElementById("toggleBtn");
                    const input = doc.getElementById("passwordInput");

                    if (!button || !input) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();
                    button.click();

                    const passed =
                        input.type === "password";

                    return {
                        passed,
                        message: passed
                            ? "Password is hidden again."
                            : `Expected password, received ${input.type}.`
                    };
                }
            },

            {
                name: "Button text updates correctly",
                test: (doc) => {
                    const button = doc.getElementById("toggleBtn");

                    if (!button) {
                        return {
                            passed: false,
                            message: "Toggle button not found."
                        };
                    }

                    const initialText =
                        button.textContent.trim().toLowerCase();

                    button.click();

                    const visibleText =
                        button.textContent.trim().toLowerCase();

                    button.click();

                    const hiddenText =
                        button.textContent.trim().toLowerCase();

                    const passed =
                        initialText !== visibleText &&
                        visibleText !== hiddenText;

                    return {
                        passed,
                        message: passed
                            ? "Button text updates correctly."
                            : "Button text does not update correctly."
                    };
                }
            }
        ]
    },

    {
        id: 9,
        categoryType: 'development',
        title: "TODO List",
        difficulty: "Medium",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a simple To-Do List application that allows the user to enter a task and add it to a list.",

        requirements: [
            "Create an input with id='taskInput'.",
            "Create a button with id='addBtn'.",
            "Create an unordered list with id='taskList'.",
            "Clicking the Add button must create a new <li> element.",
            "The entered task text must be displayed inside the new list item.",
            "Clear the input field after a task is successfully added.",
            "Do not add a task when the input is empty."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO List</title>
</head>
<body>

    <!-- TODO:
         Create the basic To-Do List structure.

         Requirements:
         - Input with id="taskInput"
         - Button with id="addBtn"
         - Unordered list with id="taskList"
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the To-Do List
   if required.
*/`,

        starterJS: `// TODO:
// Select the task input using its id.


// TODO:
// Select the Add button using its id.


// TODO:
// Select the task list using its id.


// TODO:
// Add a click event listener to the Add button.


// TODO:
// Get the task entered by the user.


// TODO:
// Check that the task is not empty.


// TODO:
// Create a new <li> element
// and add the task text to it.


// TODO:
// Append the new task to taskList.


// TODO:
// Clear the input after successfully adding the task.
`,

        testCases: [
            {
                name: "Task input exists",
                test: (doc) => {
                    const el = doc.getElementById("taskInput");

                    return {
                        passed: !!el,
                        message: el
                            ? "Task input found."
                            : "Task input not found."
                    };
                }
            },

            {
                name: "Add button exists",
                test: (doc) => {
                    const el = doc.getElementById("addBtn");

                    return {
                        passed: !!el,
                        message: el
                            ? "Add button found."
                            : "Add button not found."
                    };
                }
            },

            {
                name: "Task list exists",
                test: (doc) => {
                    const el = doc.getElementById("taskList");

                    return {
                        passed: !!el,
                        message: el
                            ? "Task list found."
                            : "Task list not found."
                    };
                }
            },

            {
                name: "Adding a task creates a list item",
                test: (doc) => {
                    const input = doc.getElementById("taskInput");
                    const button = doc.getElementById("addBtn");
                    const list = doc.getElementById("taskList");

                    if (!input || !button || !list) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    input.value = "Test Task";
                    button.click();

                    const passed =
                        list.children.length > 0;

                    return {
                        passed,
                        message: passed
                            ? "New task added to the list."
                            : "No list item was created."
                    };
                }
            },

            {
                name: "Added task contains the entered text",
                test: (doc) => {
                    const input = doc.getElementById("taskInput");
                    const button = doc.getElementById("addBtn");
                    const list = doc.getElementById("taskList");

                    if (!input || !button || !list) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    input.value = "Test Task 2";
                    button.click();

                    const lastItem =
                        list.lastElementChild;

                    const passed =
                        lastItem?.textContent.trim() === "Test Task 2";

                    return {
                        passed,
                        message: passed
                            ? "Task text is correct."
                            : "Task text does not match the input."
                    };
                }
            },

            {
                name: "Input is cleared after adding",
                test: (doc) => {
                    const input = doc.getElementById("taskInput");
                    const button = doc.getElementById("addBtn");

                    if (!input || !button) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    input.value = "Test Task 3";
                    button.click();

                    const passed =
                        input.value === "";

                    return {
                        passed,
                        message: passed
                            ? "Input cleared successfully."
                            : "Input was not cleared."
                    };
                }
            },

            {
                name: "Empty task is not added",
                test: (doc) => {
                    const input = doc.getElementById("taskInput");
                    const button = doc.getElementById("addBtn");
                    const list = doc.getElementById("taskList");

                    if (!input || !button || !list) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    const previousCount =
                        list.children.length;

                    input.value = "";
                    button.click();

                    const passed =
                        list.children.length === previousCount;

                    return {
                        passed,
                        message: passed
                            ? "Empty task was not added."
                            : "An empty task was added."
                    };
                }
            }
        ]
    },

    {
        id: 10,
        categoryType: 'development',
        title: "Digital Clock",
        difficulty: "Medium",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a digital clock that displays the current time in HH:MM:SS format and updates automatically every second.",

        requirements: [
            "Create an element with id='clock'.",
            "Display the current hours, minutes, and seconds inside the clock element.",
            "The time must be displayed in HH:MM:SS format.",
            "Hours, minutes, and seconds must always use two digits.",
            "Update the displayed time every 1000 milliseconds.",
            "The clock must continue updating automatically in real time."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
</head>
<body>

    <!-- TODO:
         Create an element with id="clock"
         to display the current time.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the digital clock
   if required.
*/`,

        starterJS: `// TODO:
// Select the clock element using its id.


// TODO:
// Create a function to get the current time.


// TODO:
// Get the current hours, minutes, and seconds.


// TODO:
// Format hours, minutes, and seconds
// so that each value contains two digits.


// TODO:
// Display the formatted time inside
// the clock element.


// TODO:
// Call the function once so the current
// time is displayed immediately.


// TODO:
// Use setInterval() to update the clock
// every 1000 milliseconds.
`,

        testCases: [
            {
                name: "Clock element exists",
                test: (doc) => {
                    const el = doc.getElementById("clock");

                    return {
                        passed: !!el,
                        message: el
                            ? "Clock element found."
                            : "Clock element not found."
                    };
                }
            },

            {
                name: "Clock displays time in HH:MM:SS format",
                test: (doc) => {
                    const clock = doc.getElementById("clock");

                    if (!clock) {
                        return {
                            passed: false,
                            message: "Clock element not found."
                        };
                    }

                    const value =
                        clock.textContent.trim();

                    const passed =
                        /^\d{2}:\d{2}:\d{2}$/.test(value);

                    return {
                        passed,
                        message: passed
                            ? "Clock uses HH:MM:SS format."
                            : `Invalid time format: ${value}`
                    };
                }
            },

            {
                name: "Clock contains hours, minutes and seconds",
                test: (doc) => {
                    const clock = doc.getElementById("clock");

                    if (!clock) {
                        return {
                            passed: false,
                            message: "Clock element not found."
                        };
                    }

                    const parts =
                        clock.textContent.trim().split(":");

                    const passed =
                        parts.length === 3 &&
                        parts.every(part => /^\d{2}$/.test(part));

                    return {
                        passed,
                        message: passed
                            ? "Hours, minutes and seconds are present."
                            : "Clock does not contain valid time components."
                    };
                }
            },

            {
                name: "Hours value is valid",
                test: (doc) => {
                    const clock = doc.getElementById("clock");

                    if (!clock) {
                        return {
                            passed: false,
                            message: "Clock element not found."
                        };
                    }

                    const hours =
                        parseInt(clock.textContent.split(":")[0]);

                    const passed =
                        hours >= 0 && hours <= 23;

                    return {
                        passed,
                        message: passed
                            ? "Hours value is valid."
                            : `Invalid hours value: ${hours}`
                    };
                }
            },

            {
                name: "Minutes value is valid",
                test: (doc) => {
                    const clock = doc.getElementById("clock");

                    if (!clock) {
                        return {
                            passed: false,
                            message: "Clock element not found."
                        };
                    }

                    const minutes =
                        parseInt(clock.textContent.split(":")[1]);

                    const passed =
                        minutes >= 0 && minutes <= 59;

                    return {
                        passed,
                        message: passed
                            ? "Minutes value is valid."
                            : `Invalid minutes value: ${minutes}`
                    };
                }
            },

            {
                name: "Seconds value is valid",
                test: (doc) => {
                    const clock = doc.getElementById("clock");

                    if (!clock) {
                        return {
                            passed: false,
                            message: "Clock element not found."
                        };
                    }

                    const seconds =
                        parseInt(clock.textContent.split(":")[2]);

                    const passed =
                        seconds >= 0 && seconds <= 59;

                    return {
                        passed,
                        message: passed
                            ? "Seconds value is valid."
                            : `Invalid seconds value: ${seconds}`
                    };
                }
            },

            {
                name: "Clock updates automatically",
                test: (doc, win) => {
                    const passed =
                        typeof win.setInterval === "function";

                    return {
                        passed,
                        message: passed
                            ? "setInterval is available for automatic updates."
                            : "setInterval is not available."
                    };
                }
            }
        ]
    },
];
