export const q11_15 = [
    {
        id: 11,
        categoryType: 'development',
        title: "Registration Form Validation",
        difficulty: "Medium",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a registration form with a username and password. Validate the form when the Register button is clicked and display an error message when the entered data is invalid.",

        requirements: [
            "Create a form with id='regForm'.",
            "Create a username input with id='username'.",
            "Create a password input with id='pwd' and type='password'.",
            "Create a button with id='submitBtn'.",
            "Create an error message element with id='formError'.",
            "Display an error when the username or password is empty.",
            "Display an error when the password contains fewer than 6 characters.",
            "Clear the error message when the username and password are valid."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form Validation</title>
</head>
<body>

    <!-- TODO:
         Create the registration form.

         Requirements:
         - Form with id="regForm"
         - Username input with id="username"
         - Password input with id="pwd"
         - Button with id="submitBtn"
         - Error element with id="formError"
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the registration form
   and its elements if required.
*/`,

        starterJS: `// TODO:
// Select the registration form elements
// using their respective ids.


// TODO:
// Add a click event listener to submitBtn.


// TODO:
// Get the username and password values.


// TODO:
// Check whether the username or password
// is empty.


// TODO:
// Check whether the password has
// at least 6 characters.


// TODO:
// Display an appropriate error message
// inside formError.


// TODO:
// Clear the error message when
// all entered data is valid.
`,

        testCases: [
            {
                name: "Registration form exists",
                test: (doc) => {
                    const el = doc.getElementById("regForm");

                    return {
                        passed: !!el,
                        message: el
                            ? "Registration form found."
                            : "Registration form not found."
                    };
                }
            },

            {
                name: "Username input exists",
                test: (doc) => {
                    const el = doc.getElementById("username");

                    return {
                        passed: !!el,
                        message: el
                            ? "Username input found."
                            : "Username input not found."
                    };
                }
            },

            {
                name: "Password input exists",
                test: (doc) => {
                    const el = doc.getElementById("pwd");

                    return {
                        passed: !!el,
                        message: el
                            ? "Password input found."
                            : "Password input not found."
                    };
                }
            },

            {
                name: "Error element exists",
                test: (doc) => {
                    const el = doc.getElementById("formError");

                    return {
                        passed: !!el,
                        message: el
                            ? "Error element found."
                            : "Error element not found."
                    };
                }
            },

            {
                name: "Empty form shows an error",
                test: (doc) => {
                    const button = doc.getElementById("submitBtn");
                    const error = doc.getElementById("formError");

                    if (!button || !error) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    const passed =
                        error.textContent.trim().length > 0;

                    return {
                        passed,
                        message: passed
                            ? "Error displayed for empty fields."
                            : "No error displayed."
                    };
                }
            },

            {
                name: "Short password shows an error",
                test: (doc) => {
                    const username = doc.getElementById("username");
                    const password = doc.getElementById("pwd");
                    const button = doc.getElementById("submitBtn");
                    const error = doc.getElementById("formError");

                    if (!username || !password || !button || !error) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    username.value = "user";
                    password.value = "123";

                    button.click();

                    const passed =
                        error.textContent.trim().length > 0;

                    return {
                        passed,
                        message: passed
                            ? "Error displayed for short password."
                            : "No error displayed."
                    };
                }
            },

            {
                name: "Valid data clears the error",
                test: (doc) => {
                    const username = doc.getElementById("username");
                    const password = doc.getElementById("pwd");
                    const button = doc.getElementById("submitBtn");
                    const error = doc.getElementById("formError");

                    if (!username || !password || !button || !error) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    username.value = "user";
                    password.value = "123456";

                    button.click();

                    const passed =
                        error.textContent.trim().length === 0;

                    return {
                        passed,
                        message: passed
                            ? "Valid data accepted and error cleared."
                            : "Error message was not cleared."
                    };
                }
            }
        ]
    },
    {
        id: 12,
        categoryType: 'development',
        title: "Image Gallery",
        difficulty: "Medium",
        category: "HTML • CSS • JavaScript",

        description:
            "Create an interactive image gallery where clicking a thumbnail updates the main display image.",

        requirements: [
            "Image element with id='mainImg'.",
            "Thumbnail container with class='thumbnails'.",
            "Create multiple images with class='thumb'.",
            "Clicking a thumbnail must change the src of mainImg to match the clicked thumbnail."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
</head>
<body>

    <!-- TODO:
         Add the main display image with id='mainImg'.
    -->

    <!-- TODO:
         Create a container with class='thumbnails'.
         Add multiple thumbnail images with class='thumb'.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Style the gallery and main image.
   The main image should be clearly visible.
*/

/* TODO:
   Arrange the thumbnails neatly.
   Make thumbnails clickable.
*/`,

        starterJS: `const mainImg = document.getElementById('mainImg');
const thumbs = document.querySelectorAll('.thumb');

// TODO:
// Add click functionality to each thumbnail.
// When a thumbnail is clicked,
// update mainImg.src using the clicked thumbnail's src.
`,

        testCases: [
            {
                name: "Main image exists",
                test: (doc) => {
                    const el = doc.getElementById("mainImg");

                    return {
                        passed: !!el,
                        message: el
                            ? "Main image found."
                            : "Main image not found."
                    };
                }
            },

            {
                name: "Multiple thumbnails exist",
                test: (doc) => {
                    const thumbnails = doc.querySelectorAll(".thumb");
                    const passed = thumbnails.length >= 2;

                    return {
                        passed,
                        message: passed
                            ? "Multiple thumbnails found."
                            : "At least two thumbnails are required."
                    };
                }
            },

            {
                name: "Thumbnail container exists",
                test: (doc) => {
                    const el = doc.querySelector(".thumbnails");

                    return {
                        passed: !!el,
                        message: el
                            ? "Thumbnail container found."
                            : "Thumbnail container not found."
                    };
                }
            },

            {
                name: "Clicking thumbnail changes main image",
                test: (doc) => {
                    const mainImg = doc.getElementById("mainImg");
                    const thumbnail = doc.querySelectorAll(".thumb")[1];

                    if (!mainImg || !thumbnail) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    thumbnail.click();

                    const passed =
                        mainImg.src === thumbnail.src;

                    return {
                        passed,
                        message: passed
                            ? "Main image updated correctly."
                            : "Main image src was not updated."
                    };
                }
            },

            {
                name: "Clicking another thumbnail updates main image",
                test: (doc) => {
                    const mainImg = doc.getElementById("mainImg");
                    const thumbnails = doc.querySelectorAll(".thumb");

                    if (!mainImg || thumbnails.length < 2) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    thumbnails[0].click();

                    const passed =
                        mainImg.src === thumbnails[0].src;

                    return {
                        passed,
                        message: passed
                            ? "Main image updated to the selected thumbnail."
                            : "Main image was not updated correctly."
                    };
                }
            }
        ]
    },
    {
        id: 13,
        categoryType: 'development',
        title: "Dynamic Student Table",
        difficulty: "Medium",
        category: "HTML • CSS • JavaScript",

        description:
            "Render a list of student objects as rows in an HTML table using JavaScript.",

        requirements: [
            "Create a table with id='studentTable'.",
            "Create a table body with id='studentBody'.",
            "Use the provided students array.",
            "Iterate over the students array.",
            "Dynamically create a <tr> for each student.",
            "Each row must contain three <td> elements for ID, Name, and Grade.",
            "Append the generated rows to studentBody."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Student Table</title>
</head>
<body>

    <!-- TODO:
         Create the required student table.
         Include headers for ID, Name, and Grade.
         Add a tbody with id='studentBody'.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the student table.
   Style the table, headers, and cells as required.
*/`,

        starterJS: `const students = [
    { id: 1,
        categoryType: 'development', name: 'Alice', grade: 'A' },
    { id: 2,
        categoryType: 'development', name: 'Bob', grade: 'B' },
    { id: 3,
        categoryType: 'development', name: 'Charlie', grade: 'C' },
    { id: 4,
        categoryType: 'development', name: 'Diana', grade: 'A-' }
];

const studentBody = document.getElementById('studentBody');

// TODO:
// Iterate over the students array.
//
// For each student:
// 1. Create a <tr> element.
// 2. Create three <td> elements.
// 3. Add the student's ID, name, and grade.
// 4. Append the <td> elements to the row.
// 5. Append the row to studentBody.
`,

        testCases: [
            {
                name: "Student table exists",
                test: (doc) => {
                    const el = doc.getElementById("studentTable");

                    return {
                        passed: !!el,
                        message: el
                            ? "Student table found."
                            : "Student table not found."
                    };
                }
            },

            {
                name: "Student body exists",
                test: (doc) => {
                    const el = doc.getElementById("studentBody");

                    return {
                        passed: !!el,
                        message: el
                            ? "Student body found."
                            : "Student body not found."
                    };
                }
            },

            {
                name: "Table headers exist",
                test: (doc) => {
                    const headers = doc.querySelectorAll("#studentTable th");
                    const passed = headers.length === 3;

                    return {
                        passed,
                        message: passed
                            ? "ID, Name, and Grade headers found."
                            : "Required table headers are missing."
                    };
                }
            },

            {
                name: "Student rows are generated",
                test: (doc) => {
                    const rows =
                        doc.querySelectorAll("#studentBody tr");

                    const passed = rows.length === 4;

                    return {
                        passed,
                        message: passed
                            ? "All student rows generated."
                            : `Expected 4 rows, received ${rows.length}.`
                    };
                }
            },

            {
                name: "Each row contains three cells",
                test: (doc) => {
                    const rows =
                        doc.querySelectorAll("#studentBody tr");

                    if (rows.length !== 4) {
                        return {
                            passed: false,
                            message: "Student rows are missing."
                        };
                    }

                    const passed =
                        [...rows].every(
                            row => row.querySelectorAll("td").length === 3
                        );

                    return {
                        passed,
                        message: passed
                            ? "Each row contains three cells."
                            : "Each row must contain three <td> elements."
                    };
                }
            },

            {
                name: "Student data is displayed correctly",
                test: (doc) => {
                    const rows =
                        doc.querySelectorAll("#studentBody tr");

                    if (rows.length !== 4) {
                        return {
                            passed: false,
                            message: "Student rows are missing."
                        };
                    }

                    const firstRow =
                        rows[0].querySelectorAll("td");

                    const passed =
                        firstRow[0]?.textContent.trim() === "1" &&
                        firstRow[1]?.textContent.trim() === "Alice" &&
                        firstRow[2]?.textContent.trim() === "A";

                    return {
                        passed,
                        message: passed
                            ? "Student data displayed correctly."
                            : "Student data does not match the provided array."
                    };
                }
            }
        ]
    },
    {
        id: 14,
        categoryType: 'development',
        title: "Shopping Cart",
        difficulty: "Hard",
        category: "HTML • CSS • JavaScript",

        description:
            "Implement a simple shopping cart where users can add products and track the total number of items and total price.",

        requirements: [
            "Create a container with id='cartItems' to display the item count.",
            "Create a container with id='totalPrice' to display the total price.",
            "Create multiple Add to Cart buttons with class='add-item'.",
            "Each add-item button must have a data-price attribute.",
            "Clicking an Add to Cart button must increase the cart item count by 1.",
            "Clicking an Add to Cart button must add its data-price to the total price.",
            "Update the displayed cart count and total price after each click."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
</head>
<body>

    <!-- TODO:
         Create multiple products.
         Each product should have an Add to Cart button
         with class='add-item' and a data-price attribute.
    -->

    <!-- TODO:
         Create a cart summary.
         Display the item count using id='cartItems'
         and the total price using id='totalPrice'.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the products,
   buttons, and cart summary.
*/`,

        starterJS: `const cartItemsEl = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');
const addButtons = document.querySelectorAll('.add-item');

let itemCount = 0;
let totalCost = 0;

// TODO:
// Add click functionality to each Add to Cart button.
//
// When a button is clicked:
// 1. Get its data-price value.
// 2. Increase itemCount by 1.
// 3. Add the price to totalCost.
// 4. Update cartItemsEl.
// 5. Update totalPriceEl.
`,

        testCases: [
            {
                name: "Cart item counter exists",
                test: (doc) => {
                    const el = doc.getElementById("cartItems");

                    return {
                        passed: !!el,
                        message: el
                            ? "Cart item counter found."
                            : "Cart item counter not found."
                    };
                }
            },

            {
                name: "Total price element exists",
                test: (doc) => {
                    const el = doc.getElementById("totalPrice");

                    return {
                        passed: !!el,
                        message: el
                            ? "Total price element found."
                            : "Total price element not found."
                    };
                }
            },

            {
                name: "Add to Cart buttons exist",
                test: (doc) => {
                    const buttons =
                        doc.querySelectorAll(".add-item");

                    const passed = buttons.length > 0;

                    return {
                        passed,
                        message: passed
                            ? "Add to Cart buttons found."
                            : "No Add to Cart buttons found."
                    };
                }
            },

            {
                name: "Buttons have data-price",
                test: (doc) => {
                    const buttons =
                        doc.querySelectorAll(".add-item");

                    const passed =
                        buttons.length > 0 &&
                        [...buttons].every(
                            button => button.hasAttribute("data-price")
                        );

                    return {
                        passed,
                        message: passed
                            ? "All buttons have data-price."
                            : "One or more buttons are missing data-price."
                    };
                }
            },

            {
                name: "Initial cart count is 0",
                test: (doc) => {
                    const el = doc.getElementById("cartItems");

                    return {
                        passed: el?.textContent.trim() === "0",
                        message: `Cart count is ${el?.textContent}.`
                    };
                }
            },

            {
                name: "Initial total price is 0",
                test: (doc) => {
                    const el = doc.getElementById("totalPrice");

                    return {
                        passed: el?.textContent.trim() === "0",
                        message: `Total price is ${el?.textContent}.`
                    };
                }
            },

            {
                name: "Adding an item updates cart count",
                test: (doc) => {
                    const button = doc.querySelector(".add-item");
                    const cartItems =
                        doc.getElementById("cartItems");

                    if (!button || !cartItems) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    button.click();

                    return {
                        passed: cartItems.textContent.trim() === "1",
                        message: `Cart count is ${cartItems.textContent}.`
                    };
                }
            },

            {
                name: "Adding an item updates total price",
                test: (doc) => {
                    const totalPrice =
                        doc.getElementById("totalPrice");

                    if (!totalPrice) {
                        return {
                            passed: false,
                            message: "Total price element is missing."
                        };
                    }

                    const value =
                        parseFloat(totalPrice.textContent);

                    return {
                        passed: value > 0,
                        message: `Total price is ${totalPrice.textContent}.`
                    };
                }
            }
        ]
    },
    {
        id: 15,
        categoryType: 'development',
        title: "Search and Filter",
        difficulty: "Hard",
        category: "HTML • CSS • JavaScript",

        description:
            "Create a product search feature that filters products as the user types.",

        requirements: [
            "Create an input with id='searchInput'.",
            "Create a list with id='productList'.",
            "Create multiple list items with class='product'.",
            "As the user types, show products that match the search text.",
            "Hide products that do not match using display: none.",
            "Search must be case-insensitive.",
            "Clearing the search should show all products."
        ],

        starterHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search and Filter</title>
</head>
<body>

    <!-- TODO:
         Create a search input with id='searchInput'.
    -->

    <!-- TODO:
         Create a list with id='productList'.
         Add multiple products using class='product'.
    -->

</body>
</html>`,

        starterCSS: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* TODO:
   Add basic styling for the search input
   and product list.
*/`,

        starterJS: `const searchInput =
    document.getElementById('searchInput');

const products =
    document.querySelectorAll('.product');

// TODO:
// Add an 'input' event listener to searchInput.
//
// When the user types:
// 1. Get the search text.
// 2. Convert it to lowercase.
// 3. Loop through all products.
// 4. Compare the product text with the search text.
// 5. Show matching products.
// 6. Hide non-matching products using display: none.
`,

        testCases: [
            {
                name: "Search input exists",
                test: (doc) => {
                    const el = doc.getElementById("searchInput");

                    return {
                        passed: !!el,
                        message: el
                            ? "Search input found."
                            : "Search input not found."
                    };
                }
            },

            {
                name: "Product list exists",
                test: (doc) => {
                    const el = doc.getElementById("productList");

                    return {
                        passed: !!el,
                        message: el
                            ? "Product list found."
                            : "Product list not found."
                    };
                }
            },

            {
                name: "Products exist",
                test: (doc) => {
                    const products =
                        doc.querySelectorAll(".product");

                    const passed = products.length >= 2;

                    return {
                        passed,
                        message: passed
                            ? "Products found."
                            : "At least two products are required."
                    };
                }
            },

            {
                name: "Search filters products",
                test: (doc, win) => {
                    const input =
                        doc.getElementById("searchInput");

                    const products =
                        doc.querySelectorAll(".product");

                    if (!input || products.length === 0) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    input.value = "Apple";
                    input.dispatchEvent(new win.Event("input"));

                    const apple =
                        [...products].find(
                            product =>
                                product.textContent
                                    .trim()
                                    .toLowerCase() === "apple"
                        );

                    const passed =
                        apple && apple.style.display !== "none";

                    return {
                        passed,
                        message: passed
                            ? "Matching product is visible."
                            : "Matching product was not displayed."
                    };
                }
            },

            {
                name: "Non-matching products are hidden",
                test: (doc, win) => {
                    const input =
                        doc.getElementById("searchInput");

                    const products =
                        doc.querySelectorAll(".product");

                    if (!input || products.length === 0) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    input.value = "Apple";
                    input.dispatchEvent(new win.Event("input"));

                    const nonMatching =
                        [...products].filter(
                            product =>
                                !product.textContent
                                    .toLowerCase()
                                    .includes("apple")
                        );

                    const passed =
                        nonMatching.every(
                            product => product.style.display === "none"
                        );

                    return {
                        passed,
                        message: passed
                            ? "Non-matching products are hidden."
                            : "Some non-matching products are still visible."
                    };
                }
            },

            {
                name: "Search is case-insensitive",
                test: (doc, win) => {
                    const input =
                        doc.getElementById("searchInput");

                    if (!input) {
                        return {
                            passed: false,
                            message: "Search input is missing."
                        };
                    }

                    input.value = "aPpLe";
                    input.dispatchEvent(new win.Event("input"));

                    const products =
                        [...doc.querySelectorAll(".product")];

                    const apple =
                        products.find(
                            product =>
                                product.textContent
                                    .trim()
                                    .toLowerCase() === "apple"
                        );

                    const passed =
                        apple && apple.style.display !== "none";

                    return {
                        passed,
                        message: passed
                            ? "Search is case-insensitive."
                            : "Case-insensitive search is not working."
                    };
                }
            },

            {
                name: "Clearing search shows all products",
                test: (doc, win) => {
                    const input =
                        doc.getElementById("searchInput");

                    const products =
                        doc.querySelectorAll(".product");

                    if (!input || products.length === 0) {
                        return {
                            passed: false,
                            message: "Required elements are missing."
                        };
                    }

                    input.value = "";
                    input.dispatchEvent(new win.Event("input"));

                    const passed =
                        [...products].every(
                            product => product.style.display !== "none"
                        );

                    return {
                        passed,
                        message: passed
                            ? "All products are visible."
                            : "Some products remain hidden."
                    };
                }
            }
        ]
    },
];
