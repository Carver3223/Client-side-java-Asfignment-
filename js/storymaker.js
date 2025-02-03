// Assignment 1 | COMP1073 Client-Side JavaScript
//Carver Chapman - 1271389 - 2025-02-02

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyDisplay = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ["The cat",  "The dog", "A wizard", "My friend", "An alien"];
const verbs = ["danced with", "found", "lost", "painted", "hugged"];
const adjectives = ["a funny", "a huge", "a tiny", "a magical", "a silly"];
const nouns2 = ["hat", "frog", "spaceship", "castle",  "robot"];
const settings = ["in the park",  "on the moon", "under the sea", "in a forest", "at school"];


// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1.innerText = nouns1[noun1Count];
    // if-else to change count setting
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    choosenVerb.innerText = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjective.innerText = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2.innerText = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSetting.innerText = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.innerText} ${choosenVerb.innerText} ${choosenAdjective.innerText} ${choosenNoun2.innerText} ${choosenSetting.innerText}`;
    storyDisplay.innerText = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    
    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    storyDisplay.innerText = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
