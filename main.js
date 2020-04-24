// return something funny if true
myArrowFunc = (a,b) => {
    a===b ? console.log("they equal, homey!" : console.log("they equal, homey!");
}

myArrowFunc(3,44);

// add them
function addThem(a,b) {
    console.log(a+b);
}

addThem(15,2.5);

// ask user name
const getUser = prompt("what is your name?");
alert("thanks,"+getUser);

// loop through list and push item
var mySimpleArray = [];
function pushToArray () {
    for (let i = 0; i < 15; i++) {
        mySimpleArray.push[i];
    }
    console.log(mySimpleArray);
}

pushToArray();

