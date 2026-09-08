export const q1_5 = [
    {
        id: 1,
        categoryType: 'development',
        title: "Animal Images",
        difficulty: "Easy",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a webpage that displays Tiger and Lion images. Each image should be styled as a circular clickable element and should display a green border when selected.",

        requirements: [
            "Create a Tiger image with id='tiger-image'.",
            "Create a Lion image with id='lion-image'.",
            "Apply class='animal-image' to both images.",
            "Set both images to 100px width and 100px height.",
            "Make both images circular.",
            "Use a pointer cursor to indicate that the images are clickable.",
            "Give both images a transparent border initially.",
            "Add a smooth transition effect to the image border.",
            "Apply class='green-border' when an image is clicked.",
            "Remove class='green-border' when the same image is clicked again."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animal Images</title>
</head>
<body>

    <!-- TODO:
         Add the required Tiger and Lion images.
         Make sure each image has the correct id,
         class, source, and alt text.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Create the required styling for the animal images.

   Requirements:
   - Images must be 100px × 100px.
   - Images must be circular.
   - Add a transparent border.
   - Show a pointer cursor.
   - Add a smooth border transition.
*/


/* TODO:
   Define the "green-border" class.

   When applied, the image should display
   a green border.
*/`,

        starterJS: `// TODO:
// Select the Tiger image using its id.


// TODO:
// Select the Lion image using its id.


// TODO:
// Add click functionality to the Tiger image.
// Clicking it should toggle the "green-border" class.


// TODO:
// Add click functionality to the Lion image.
// Clicking it should toggle the "green-border" class.
`,

        testCases: [
            {
                name: "Tiger image exists",
                test: (doc) => {
                    const el = doc.getElementById("tiger-image");

                    return {
                        passed: !!el,
                        message: el
                            ? "Tiger image found."
                            : "Tiger image not found."
                    };
                }
            },

            {
                name: "Lion image exists",
                test: (doc) => {
                    const el = doc.getElementById("lion-image");

                    return {
                        passed: !!el,
                        message: el
                            ? "Lion image found."
                            : "Lion image not found."
                    };
                }
            },

            {
                name: "Both images have animal-image class",
                test: (doc) => {
                    const tiger = doc.getElementById("tiger-image");
                    const lion = doc.getElementById("lion-image");

                    const passed =
                        tiger?.classList.contains("animal-image") &&
                        lion?.classList.contains("animal-image");

                    return {
                        passed,
                        message: passed
                            ? "Both images have the required class."
                            : "Missing animal-image class."
                    };
                }
            },

            {
                name: "Images have 100px width",
                test: (doc, win) => {
                    const el = doc.querySelector(".animal-image");

                    if (!el) {
                        return {
                            passed: false,
                            message: "No animal image found."
                        };
                    }

                    const width = win.getComputedStyle(el).width;

                    return {
                        passed: width === "100px",
                        message: `Expected 100px, received ${width}.`
                    };
                }
            },

            {
                name: "Images have 100px height",
                test: (doc, win) => {
                    const el = doc.querySelector(".animal-image");

                    if (!el) {
                        return {
                            passed: false,
                            message: "No animal image found."
                        };
                    }

                    const height = win.getComputedStyle(el).height;

                    return {
                        passed: height === "100px",
                        message: `Expected 100px, received ${height}.`
                    };
                }
            },

            {
                name: "Images are circular",
                test: (doc, win) => {
                    const el = doc.querySelector(".animal-image");

                    if (!el) {
                        return {
                            passed: false,
                            message: "No animal image found."
                        };
                    }

                    const radius =
                        win.getComputedStyle(el).borderRadius;

                    return {
                        passed: radius === "50%",
                        message: `Expected 50%, received ${radius}.`
                    };
                }
            },

            {
                name: "Clicking Tiger applies green-border",
                test: (doc) => {
                    const el = doc.getElementById("tiger-image");

                    if (!el) {
                        return {
                            passed: false,
                            message: "Tiger image not found."
                        };
                    }

                    el.click();

                    const passed =
                        el.classList.contains("green-border");

                    return {
                        passed,
                        message: passed
                            ? "Green border applied to Tiger."
                            : "Green border was not applied to Tiger."
                    };
                }
            },

            {
                name: "Clicking Lion applies green-border",
                test: (doc) => {
                    const el = doc.getElementById("lion-image");

                    if (!el) {
                        return {
                            passed: false,
                            message: "Lion image not found."
                        };
                    }

                    el.click();

                    const passed =
                        el.classList.contains("green-border");

                    return {
                        passed,
                        message: passed
                            ? "Green border applied to Lion."
                            : "Green border was not applied to Lion."
                    };
                }
            }
        ]
    },

    {
        id: 2,
        categoryType: 'development',
        title: "Color Changing Box",
        difficulty: "Easy",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a webpage containing a color box and three buttons labeled Red, Green, and Blue. When a button is clicked, the background color of the box should change to the corresponding color.",

        requirements: [
            "Create a box with id='color-box'.",
            "Create a button with id='red-button'.",
            "Create a button with id='green-button'.",
            "Create a button with id='blue-button'.",
            "The buttons must display the text 'red', 'green', and 'blue' respectively.",
            "The color box should have an initial white background.",
            "Clicking the Red button should change the box background color to red.",
            "Clicking the Green button should change the box background color to green.",
            "Clicking the Blue button should change the box background color to blue."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changing Box</title>
</head>
<body>

    <!-- TODO:
         Create the color box and the three buttons.

         Requirements:
         - Use id="color-box" for the box.
         - Use id="red-button" for the Red button.
         - Use id="green-button" for the Green button.
         - Use id="blue-button" for the Blue button.
         - Use the required button text.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Style the color box according to the requirements.

   Requirements:
   - Set an appropriate size for the box.
   - Give the box an initial white background.
*/


/* TODO:
   Add any necessary styling for the buttons.
*/`,

        starterJS: `// TODO:
// Select the color box using its id.


// TODO:
// Select the Red, Green, and Blue buttons using their ids.


// TODO:
// Add a click event listener to the Red button.
// Change the color box background to red.


// TODO:
// Add a click event listener to the Green button.
// Change the color box background to green.


// TODO:
// Add a click event listener to the Blue button.
// Change the color box background to blue.
`,

        testCases: [
            {
                name: "Color box exists",
                test: (doc) => {
                    const el = doc.getElementById("color-box");

                    return {
                        passed: !!el,
                        message: el
                            ? "Color box found."
                            : "Color box not found."
                    };
                }
            },

            {
                name: "All color buttons exist",
                test: (doc) => {
                    const red = !!doc.getElementById("red-button");
                    const green = !!doc.getElementById("green-button");
                    const blue = !!doc.getElementById("blue-button");

                    const passed = red && green && blue;

                    return {
                        passed,
                        message: passed
                            ? "All required buttons found."
                            : "One or more color buttons are missing."
                    };
                }
            },

            {
                name: "Color box has initial white background",
                test: (doc, win) => {
                    const el = doc.getElementById("color-box");

                    if (!el) {
                        return {
                            passed: false,
                            message: "Color box not found."
                        };
                    }

                    const color =
                        win.getComputedStyle(el).backgroundColor;

                    return {
                        passed:
                            color === "rgb(255, 255, 255)" ||
                            color === "white",
                        message: `Background color is ${color}.`
                    };
                }
            },

            {
                name: "Red button changes box to red",
                test: (doc) => {
                    const button = doc.getElementById("red-button");
                    const box = doc.getElementById("color-box");

                    if (!button || !box) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const passed =
                        box.style.backgroundColor === "red";

                    return {
                        passed,
                        message: passed
                            ? "Box background changed to red."
                            : `Expected red, received ${box.style.backgroundColor}.`
                    };
                }
            },

            {
                name: "Green button changes box to green",
                test: (doc) => {
                    const button = doc.getElementById("green-button");
                    const box = doc.getElementById("color-box");

                    if (!button || !box) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const passed =
                        box.style.backgroundColor === "green";

                    return {
                        passed,
                        message: passed
                            ? "Box background changed to green."
                            : `Expected green, received ${box.style.backgroundColor}.`
                    };
                }
            },

            {
                name: "Blue button changes box to blue",
                test: (doc) => {
                    const button = doc.getElementById("blue-button");
                    const box = doc.getElementById("color-box");

                    if (!button || !box) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const passed =
                        box.style.backgroundColor === "blue";

                    return {
                        passed,
                        message: passed
                            ? "Box background changed to blue."
                            : `Expected blue, received ${box.style.backgroundColor}.`
                    };
                }
            },

            {
                name: "Button text is correct",
                test: (doc) => {
                    const redButton = doc.getElementById("red-button");
                    const greenButton = doc.getElementById("green-button");
                    const blueButton = doc.getElementById("blue-button");

                    if (!redButton || !greenButton || !blueButton) {
                        return {
                            passed: false,
                            message: "One or more buttons are missing."
                        };
                    }

                    const passed =
                        redButton.textContent.trim().toLowerCase() === "red" &&
                        greenButton.textContent.trim().toLowerCase() === "green" &&
                        blueButton.textContent.trim().toLowerCase() === "blue";

                    return {
                        passed,
                        message: passed
                            ? "All button labels are correct."
                            : "Button labels do not match the requirements."
                    };
                }
            }
        ]
    },


    {
        id: 3,
        categoryType: 'development',
        title: "Font Color Change Program",
        difficulty: "Easy",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a webpage containing two text elements and a button. When the button is clicked, use the required JavaScript function to change the font color of each text element to its specified color.",

        requirements: [
            "Create a text element with id='one'.",
            "Create a text element with id='two'.",
            "Create a button with id='submit'.",
            "The button must call the function changeFontColor() when clicked.",
            "Implement the required changeFontColor() function in JavaScript.",
            "When the button is clicked, the font color of element 'one' must change to #00FFFF.",
            "When the button is clicked, the font color of element 'two' must change to #ADFF2F.",
            "Both div elements must have a height of 50px."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Color Change</title>
</head>
<body>

    <!-- TODO:
         Create the two required text elements and the button.

         Requirements:
         - Use id="one" for the first text element.
         - Use id="two" for the second text element.
         - Use id="submit" for the button.
         - The button must call changeFontColor() when clicked.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Style the required div elements.

   Requirement:
   - Both div elements must have a height of 50px.
*/`,

        starterJS: `function changeFontColor() {

    // TODO:
    // Select the elements with ids "one" and "two".


    // TODO:
    // Change the font color of element "one" to #00FFFF.


    // TODO:
    // Change the font color of element "two" to #ADFF2F.

}`,

        testCases: [
            {
                name: "Element 'one' exists",
                test: (doc) => {
                    const el = doc.getElementById("one");

                    return {
                        passed: !!el,
                        message: el
                            ? "Element 'one' found."
                            : "Element 'one' not found."
                    };
                }
            },

            {
                name: "Element 'two' exists",
                test: (doc) => {
                    const el = doc.getElementById("two");

                    return {
                        passed: !!el,
                        message: el
                            ? "Element 'two' found."
                            : "Element 'two' not found."
                    };
                }
            },

            {
                name: "Submit button exists",
                test: (doc) => {
                    const el = doc.getElementById("submit");

                    return {
                        passed: !!el,
                        message: el
                            ? "Submit button found."
                            : "Submit button not found."
                    };
                }
            },

            {
                name: "changeFontColor function exists",
                test: (doc, win) => {
                    const passed =
                        typeof win.changeFontColor === "function";

                    return {
                        passed,
                        message: passed
                            ? "changeFontColor() function found."
                            : "changeFontColor() function not found."
                    };
                }
            },

            {
                name: "Clicking button changes Text 1 to #00FFFF",
                test: (doc, win) => {
                    const button = doc.getElementById("submit");
                    const element = doc.getElementById("one");

                    if (!button || !element) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const color =
                        win.getComputedStyle(element).color;

                    const passed =
                        color === "rgb(0, 255, 255)" ||
                        element.style.color.toLowerCase().includes("00ffff");

                    return {
                        passed,
                        message: passed
                            ? "Text 1 color changed correctly."
                            : `Expected #00FFFF, received ${color}.`
                    };
                }
            },

            {
                name: "Clicking button changes Text 2 to #ADFF2F",
                test: (doc, win) => {
                    const button = doc.getElementById("submit");
                    const element = doc.getElementById("two");

                    if (!button || !element) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const color =
                        win.getComputedStyle(element).color;

                    const passed =
                        color === "rgb(173, 255, 47)" ||
                        element.style.color.toLowerCase().includes("adff2f");

                    return {
                        passed,
                        message: passed
                            ? "Text 2 color changed correctly."
                            : `Expected #ADFF2F, received ${color}.`
                    };
                }
            },

            {
                name: "Div height is 50px",
                test: (doc, win) => {
                    const element = doc.getElementById("one");

                    if (!element) {
                        return {
                            passed: false,
                            message: "Element 'one' not found."
                        };
                    }

                    const height =
                        win.getComputedStyle(element).height;

                    return {
                        passed: height === "50px",
                        message: height === "50px"
                            ? "Div height is 50px."
                            : `Expected 50px, received ${height}.`
                    };
                }
            }
        ]
    },

    {
        id: 4,
        categoryType: 'development',
        title: "Resize Images",
        difficulty: "Easy",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a webpage that displays two images and a button. When the button is clicked, both images must be resized to 150px × 150px using the required JavaScript function.",

        requirements: [
            "Create an image with id='image1'.",
            "Create an image with id='image2'.",
            "Create a button with id='submit'.",
            "Implement the required function resizeImages().",
            "Both images must be displayed on the webpage.",
            "Clicking the Submit button must resize both images to 150px × 150px."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resize Images</title>
</head>
<body>

    <!-- TODO:
         Add the two required images and the Submit button.

         Requirements:
         - Use id="image1" for the first image.
         - Use id="image2" for the second image.
         - Use id="submit" for the button.
         - Use appropriate src and alt attributes.
         - The button must call resizeImages() when clicked.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add any necessary styling for the images
   or button.
*/`,

        starterJS: `function resizeImages() {

    // TODO:
    // Select image1 and image2.


    // TODO:
    // Resize both images to 150px × 150px.

}`,

        testCases: [
            {
                name: "Image 1 exists",
                test: (doc) => {
                    const el = doc.getElementById("image1");

                    return {
                        passed: !!el,
                        message: el
                            ? "Image 1 found."
                            : "Image 1 not found."
                    };
                }
            },

            {
                name: "Image 2 exists",
                test: (doc) => {
                    const el = doc.getElementById("image2");

                    return {
                        passed: !!el,
                        message: el
                            ? "Image 2 found."
                            : "Image 2 not found."
                    };
                }
            },

            {
                name: "Submit button exists",
                test: (doc) => {
                    const el = doc.getElementById("submit");

                    return {
                        passed: !!el,
                        message: el
                            ? "Submit button found."
                            : "Submit button not found."
                    };
                }
            },

            {
                name: "resizeImages function exists",
                test: (doc, win) => {
                    const passed =
                        typeof win.resizeImages === "function";

                    return {
                        passed,
                        message: passed
                            ? "resizeImages() function found."
                            : "resizeImages() function not found."
                    };
                }
            },

            {
                name: "Submit resizes image1 to 150px × 150px",
                test: (doc, win) => {
                    const button = doc.getElementById("submit");
                    const image = doc.getElementById("image1");

                    if (!button || !image) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const width = win.getComputedStyle(image).width;
                    const height = win.getComputedStyle(image).height;

                    const passed =
                        width === "150px" &&
                        height === "150px";

                    return {
                        passed,
                        message: passed
                            ? "Image 1 resized to 150px × 150px."
                            : `Expected 150px × 150px, received ${width} × ${height}.`
                    };
                }
            },

            {
                name: "Submit resizes image2 to 150px × 150px",
                test: (doc, win) => {
                    const button = doc.getElementById("submit");
                    const image = doc.getElementById("image2");

                    if (!button || !image) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const width = win.getComputedStyle(image).width;
                    const height = win.getComputedStyle(image).height;

                    const passed =
                        width === "150px" &&
                        height === "150px";

                    return {
                        passed,
                        message: passed
                            ? "Image 2 resized to 150px × 150px."
                            : `Expected 150px × 150px, received ${width} × ${height}.`
                    };
                }
            }
        ]
    },

    {
        id: 5,
        categoryType: 'development',
        title: "Simple Counter",
        difficulty: "Easy",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a simple counter with decrement and increment buttons. The counter should start at 0 and update its value by 1 whenever either button is clicked.",

        requirements: [
            "Create a button with id='decrement'.",
            "Create a span with id='counter'.",
            "Create a button with id='increment'.",
            "The counter must initially display 0.",
            "Clicking the increment (+) button must increase the counter value by 1.",
            "Clicking the decrement (-) button must decrease the counter value by 1.",
            "The counter must support both positive and negative values."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Counter</title>
</head>
<body>

    <!-- TODO:
         Create the counter interface.

         Requirements:
         - Create a button with id="decrement".
         - Create a span with id="counter".
         - Create a button with id="increment".
         - The counter must initially display 0.
         - The buttons should display - and + respectively.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the counter interface.
   
   Make sure the counter and buttons are clearly
   visible and easy to interact with.
*/`,

        starterJS: `// TODO:
// Create a variable to store the counter value.
// The initial value should be 0.


// TODO:
// Select the decrement button,
// counter element, and increment button.


// TODO:
// Add a click event listener to the increment button.
// Increase the counter value by 1
// and update the displayed value.


// TODO:
// Add a click event listener to the decrement button.
// Decrease the counter value by 1
// and update the displayed value.
`,

        testCases: [
            {
                name: "Counter element exists",
                test: (doc) => {
                    const el = doc.getElementById("counter");

                    return {
                        passed: !!el,
                        message: el
                            ? "Counter element found."
                            : "Counter element not found."
                    };
                }
            },

            {
                name: "Increment button exists",
                test: (doc) => {
                    const el = doc.getElementById("increment");

                    return {
                        passed: !!el,
                        message: el
                            ? "Increment button found."
                            : "Increment button not found."
                    };
                }
            },

            {
                name: "Decrement button exists",
                test: (doc) => {
                    const el = doc.getElementById("decrement");

                    return {
                        passed: !!el,
                        message: el
                            ? "Decrement button found."
                            : "Decrement button not found."
                    };
                }
            },

            {
                name: "Initial counter value is 0",
                test: (doc) => {
                    const counter = doc.getElementById("counter");

                    const passed =
                        counter?.textContent.trim() === "0";

                    return {
                        passed,
                        message: passed
                            ? "Counter initially displays 0."
                            : `Expected 0, received ${counter?.textContent}.`
                    };
                }
            },

            {
                name: "Increment button increases value by 1",
                test: (doc) => {
                    const counter = doc.getElementById("counter");
                    const button = doc.getElementById("increment");

                    if (!counter || !button) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    counter.textContent = "0";
                    button.click();

                    const passed =
                        counter.textContent.trim() === "1";

                    return {
                        passed,
                        message: passed
                            ? "Counter increased from 0 to 1."
                            : `Expected 1, received ${counter.textContent}.`
                    };
                }
            },

            {
                name: "Decrement button decreases value by 1",
                test: (doc) => {
                    const counter = doc.getElementById("counter");
                    const button = doc.getElementById("decrement");

                    if (!counter || !button) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    counter.textContent = "2";
                    button.click();

                    const passed =
                        counter.textContent.trim() === "1";

                    return {
                        passed,
                        message: passed
                            ? "Counter decreased from 2 to 1."
                            : `Expected 1, received ${counter.textContent}.`
                    };
                }
            },

            {
                name: "Multiple increments and decrements work correctly",
                test: (doc) => {
                    const counter = doc.getElementById("counter");
                    const incrementButton =
                        doc.getElementById("increment");
                    const decrementButton =
                        doc.getElementById("decrement");

                    if (!counter || !incrementButton || !decrementButton) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    counter.textContent = "0";

                    incrementButton.click();
                    decrementButton.click();
                    decrementButton.click();

                    const passed =
                        counter.textContent.trim() === "-1";

                    return {
                        passed,
                        message: passed
                            ? "Counter updates correctly for multiple operations."
                            : `Expected -1, received ${counter.textContent}.`
                    };
                }
            }
        ]
    },

];
