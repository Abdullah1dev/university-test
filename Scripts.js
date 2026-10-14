// =====================================
// TASK 1: DOM SELECTION AND MANIPULATION
// =====================================

// Select heading using getElementById()
const heading = document.getElementById("demo-heading");

// Select paragraph using querySelector()
const message = document.querySelector("#demo-message");

// Select buttons
const textButton = document.getElementById("change-text-btn");
const styleButton = document.getElementById("change-style-btn");
const resetButton = document.getElementById("reset-dom-btn");

// Store original content
const originalHeading = heading.textContent;
const originalMessage = message.textContent;

// Change Message button
textButton.addEventListener("click", function () {
    heading.textContent = "JavaScript DOM Manipulation";
    message.textContent =
        "The heading and paragraph have been changed using JavaScript!";
});

// Change Style button
styleButton.addEventListener("click", function () {
    message.classList.toggle("highlight-message");
});

// Reset button
resetButton.addEventListener("click", function () {
    heading.textContent = originalHeading;
    message.textContent = originalMessage;
    message.classList.remove("highlight-message");
});


// =====================================
// TASK 2: DYNAMIC TECHNICAL SKILLS LIST
// =====================================

const skillForm = document.getElementById("skill-form");
const skillInput = document.getElementById("skill-input");
const skillError = document.getElementById("skill-error");
const skillList = document.getElementById("dynamic-skill-list");

// Validate while typing
skillInput.addEventListener("input", function () {
    const skill = skillInput.value.trim();

    if (skill.length > 0 && skill.length < 2) {
        skillError.textContent =
            "Skill name must contain at least 2 characters.";
    } else {
        skillError.textContent = "";
    }
});

// Add a skill
skillForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const skill = skillInput.value.trim();

    // Validate length
    if (skill.length < 2 || skill.length > 30) {
        skillError.textContent =
            "Enter a skill between 2 and 30 characters.";
        skillInput.focus();
        return;
    }

    // Check for duplicates, ignoring letter case
    const existingSkills = Array.from(
        skillList.querySelectorAll("li span")
    ).map(function (item) {
        return item.textContent.trim().toLowerCase();
    });

    if (existingSkills.includes(skill.toLowerCase())) {
        skillError.textContent = "This skill already exists.";
        skillInput.focus();
        return;
    }

    // Create list item
    const li = document.createElement("li");

    const skillName = document.createElement("span");
    skillName.textContent = skill;

    // Create Remove button
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-btn";
    removeButton.textContent = "Remove";

    li.append(skillName, removeButton);
    skillList.appendChild(li);

    // Clear input
    skillInput.value = "";
    skillError.textContent = "";
    skillInput.focus();
});

// Remove skills using event delegation
skillList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        event.target.closest("li").remove();
    }
});


// =====================================
// TASK 3: STUDENT REGISTRATION AND VALIDATION
// =====================================

const registrationForm = document.getElementById("registration-form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const department = document.getElementById("department");

const nameFeedback = document.getElementById("name-feedback");
const passwordFeedback = document.getElementById("password-feedback");
const registrationResult = document.getElementById("registration-result");

// Name validation rule:
// Letters, spaces, apostrophes and hyphens are allowed.
function isValidName(name) {
    const namePattern = /^[\p{L}]+(?:[ '\u2019-][\p{L}]+)*$/u;

    return name.trim().length >= 3 && namePattern.test(name.trim());
}

// Name feedback while typing
fullName.addEventListener("input", function () {
    const name = fullName.value.trim();

    if (name.length === 0) {
        nameFeedback.textContent = "";
    } else if (name.length < 3) {
        nameFeedback.textContent =
            "Name must contain at least 3 characters.";
        nameFeedback.className = "feedback error-message";
    } else if (!isValidName(name)) {
        nameFeedback.textContent =
            "Use letters, spaces, apostrophes or hyphens only.";
        nameFeedback.className = "feedback error-message";
    } else {
        nameFeedback.textContent = "Name looks good!";
        nameFeedback.className = "feedback success-message";
    }
});

// Password feedback while typing
password.addEventListener("input", function () {
    if (password.value.length === 0) {
        passwordFeedback.textContent = "";
    } else if (password.value.length < 8) {
        passwordFeedback.textContent =
            "Password must contain at least 8 characters.";
        passwordFeedback.className = "feedback error-message";
    } else {
        passwordFeedback.textContent = "Password length is valid.";
        passwordFeedback.className = "feedback success-message";
    }
});

// Submit registration form
registrationForm.addEventListener("submit", function (event) {
    // Prevent page reload
    event.preventDefault();

    const name = fullName.value.trim();
    const studentEmail = email.value.trim();
    const selectedDepartment = department.value;

    // Validate name
    if (!isValidName(name)) {
        nameFeedback.textContent =
            "Enter a valid name containing at least 3 characters.";
        nameFeedback.className = "feedback error-message";
        fullName.focus();
        return;
    }

    // Validate form fields using HTML validation
    if (!registrationForm.checkValidity()) {
        registrationForm.reportValidity();
        return;
    }

    // Show success alert
    alert("Form submitted successfully!");

    // Display submitted information safely
    registrationResult.replaceChildren();

    const resultHeading = document.createElement("h3");
    resultHeading.textContent = "Registration Details";

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = "Full Name: " + name;

    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = "Email: " + studentEmail;

    const departmentParagraph = document.createElement("p");
    departmentParagraph.textContent =
        "Department: " + selectedDepartment;

    registrationResult.append(
        resultHeading,
        nameParagraph,
        emailParagraph,
        departmentParagraph
    );

    registrationResult.className = "success-message";
});


// =====================================
// ADDITIONAL TASK 1: COUNT DROPDOWN ITEMS
// =====================================

const countOptionsButton = document.getElementById("count-options-btn");

countOptionsButton.addEventListener("click", function () {
    const departmentDropdown = document.getElementById("department");

    // Exclude the placeholder option
    const departmentCount = Array.from(
        departmentDropdown.options
    ).filter(function (option) {
        return option.value !== "";
    }).length;

    alert("Number of departments: " + departmentCount);
});


// =====================================
// ADDITIONAL TASK 2: RANDOM IMAGE DISPLAY
// =====================================

const randomImageButton = document.getElementById("random-image-btn");
const randomImage = document.getElementById("random-image");

const images = [
    {
        src: "https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: 240,
        height: 160
    },
    {
        src: "https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: 320,
        height: 195
    },
    {
        src: "https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: 500,
        height: 343
    }
];

randomImageButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    randomImage.src = selectedImage.src;
    randomImage.width = selectedImage.width;
    randomImage.height = selectedImage.height;
    randomImage.alt = "Random image " + (randomIndex + 1);
    randomImage.hidden = false;
});


// =====================================
// ADDITIONAL TASK 3: WINDOW RESIZE DIMENSIONS
// =====================================

const windowWidth = document.getElementById("window-width");
const windowHeight = document.getElementById("window-height");

function updateWindowDimensions() {
    windowWidth.textContent = window.innerWidth;
    windowHeight.textContent = window.innerHeight;
}

// Display dimensions immediately
updateWindowDimensions();

// Update dimensions whenever window is resized
window.addEventListener("resize", updateWindowDimensions);
