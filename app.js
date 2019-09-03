//variables

const submitForm = document.getElementById ('form');
const tweetList = document.getElementById ('tweet-list');

//event listeners

eventListeners ();

function eventListeners () {
    submitForm.addEventListener ('submit' , newTweet);
    tweetList.addEventListener ('click' , removeTweet);

    //Document ready (JQuery)

    document.addEventListener ('DOMContentLoaded' , localStorageonLoad)
};

//functions

function newTweet (e) {
    e.preventDefault ();
    const tweet = document.getElementById ('tweet').value;

    //create remove button

    const removeBtn = document.createElement ('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'x';

    //create list

    let li = document.createElement ('li');
    li.textContent = tweet;
    li.appendChild (removeBtn);
    tweetList.appendChild (li);

    //adds the tweets to Local Storage

    addToLocalStorage (tweet); 

    //Print to alert
    alert ('Tweet Added!');
    this.reset ();
};

function removeTweet (e) {
    e.preventDefault ();
    if (e.target.classList.contains ('remove-tweet')) {
        e.target.parentElement.remove ();
    };

    //remove From LS
    removeFromStorage (e.target.parentElement.textContent);          
};

//adds the tweets to LS

function addToLocalStorage (tweet) {
    let values = getfromLocalStorage ()

    //push a tweet in array
    values.push (tweet);

    //convert twwet array in string and set it in LS
    localStorage.setItem ('keys', JSON.stringify (values));
    
};

//gets the tweet from LS

function getfromLocalStorage () {
    const keyfromLS = localStorage.getItem ('keys');
    let values;
    if (keyfromLS === null) {
        values = [];
    } else {
        values = JSON.parse (keyfromLS)
    };
    return values;
};

//prints LS tweets on load 

function localStorageonLoad () {
    let values = getfromLocalStorage ();
    values.forEach (function (tweet) {
        const removeBtn = document.createElement ('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'x';
    
        let li = document.createElement ('li');
        li.textContent = tweet;
        li.appendChild (removeBtn);
        tweetList.appendChild (li);

    });
};
    
//Remove From LS

function removeFromStorage (tweet) {
    //Get values from LS
    let values = getfromLocalStorage ();
    //remove the X
    const xDelete = tweet.substring (0 , tweet.length -1);  //bRIŠE x 

    //loops through values and removes thw equals
    values.forEach (function (valueLS, index) {
        if (xDelete === valueLS) {
            values.splice (index, 1);   
        };
    });

    //Save the data
    localStorage.setItem ('keys', JSON.stringify (values));
   
};