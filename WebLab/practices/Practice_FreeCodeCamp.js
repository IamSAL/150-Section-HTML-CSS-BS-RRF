//in-line comment


console.log("hello Js");


/* this is a mulit
line comment
 */
var myName = "Sheikh Salman";
myName = "Sabbir Miah";
ourname = "freecodecamp";

concat = myName + ourname

const pi = 3.14;
var a = 5;
a *= 6; //a=a*6;
console.log(typeof myName, pi);


// /* worblanks game
//  */
//
// function wordblanks(noun,adjective,verb,adverb) {
// result=noun+" is "+adjective+" and  "+verb+ " very " +adverb;
// return result;
//
// }
//
// var noun=prompt("Noun:")
// var adjective=prompt("adjective:")
// var verb=prompt("verb:")
// var adverb=prompt("adverb")
//
// console.log(wordblanks(noun,adjective,verb,adverb))
// /* worblanks game
//  */


var myArr = ["Salman", 9398]

var mulArr = [["salman", 9398], ["any", 1069]]


//shopping list array

var myList = [['cereal', 0], ['milk', 2], ['banana', 3], ['juice', 2], ['eggs', 12]];



//see where item is more 2 in shopping list
var itemNumber=myList.filter(function (item) {
    if(item[1]>2){
        return item
    }
}).map(function (item) {
    //get only item names
    return item[0]
});

console.log(itemNumber)



//stand in line (queue)

function nextInLine(arr, item) {

    arr.push(item);
    var next = arr.shift();
    return next;
}

var testArr = [1, 2, 3, 4, 5];


//golfName game

var golfNames = ["Hole-in-One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes == 1) {
        return golfNames[0]
    } else if (strokes <= par - 2) {
        return golfNames[1]
    } else if (strokes == par - 1) {
        return golfNames[2]
    } else if (strokes == par) {
        return golfNames[3]
    } else if (strokes == par + 1) {
        return golfNames[4]
    } else if (strokes == par + 2) {
        return golfNames[5]
    } else if (strokes >= par + 3) {
        return golfNames[6]
    } else {
        return "error"
    }

}

//golfName game

val = 7
switch (val) {
    case "bob":
        console.log("Marley");
        break;
    case 42:
        console.log("The Answer");
        break;
    case 1:
        console.log("There is no #1");
        break
    case 99:
        console.log("Missed me by this much!");
        break
    case 7:
        console.log("Ate Nine")
        break
    default:
        console.log("fooooooo")
        break


}


//JS object
var Dog = {
    "maveric": {
        "name": "Maverick",
        "legs": 4,
        "friends": ["everything"]
    },
    "Silver": {
        "name": "silver",
        "age": 4,
        "legs": 4,
        "friends": "none"
    },
    "shiba": {
        "name": "inu",
        "age": 2,
        "tails": 1
    }

}

//////////challenge:update

var collections = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You give Love a Bad name"

        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Rober Palmer",
        "tracks": []
    },

    "5439": {
        "album": "ABBA Gold"
    }
}




//keeping a copy for later tests
var collectionCopy = JSON.parse(JSON.stringify(collections));


//update function


function updateRecords(id, prop, value) {
    if (collections.hasOwnProperty(id)) {
        update(id, prop, value)
    } else {
        collections.id = id
        update(id, prop, value)
    }

    function update(id, prop, value) {
        if (value === "") {
            delete collections[id][prop];
        } else if (prop === "tracks") {
            collections[id][prop] = collections[id][prop] || [];
            collections[id][prop].push(value)
        } else {
            collections[id][prop] = value;
        }
    }

    return collections;
}

//update challenge-end

// function RandomValueByRange(Min, Max) {
//     randomValue = Math.floor(Math.random() * (Max - Min + 1)) + Min;
//     return randomValue
// }



//same with arrow func
const RandomValueByRange=(Min,Max)=>randomValue=Math.floor(Math.random()*(Max-Min+1))+Min;

//constructor function
function  Person(firstName,lastName,dob) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);


}
Person.prototype.getFullName=function () {
    return `${this.firstName} ${this.lastName}`
};

Person.prototype.getBirthYear=function () {
    return this.dob.getFullYear();
};
//Instantiate object

const person1=new Person('Sheikh','Salman','11-7-1997');
const person2=new Person('John','Doe','7-11-1990');

//ES6 oop:
class  customer {
    constructor(firstName,lastName,dob) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }
   getFullName(){
        return `${this.firstName} ${this.lastName}`;
    };

    getBirthYear(){
        return this.dob.getFullYear();
    };

}

var cus1=new customer('Nusrat','Jahan','9-5-1997');

//DOM


//single element selectors
form=document.getElementById('my-form');
console.log(form);
container=document.querySelector('.container'); //querySelectore can select class,tag,id anything but one the first one
console.log(container)



//multiple element selectors
list=document.querySelectorAll('.item');
console.log(list)

list2=document.getElementsByClassName('item')
list3=document.getElementsByTagName('li')


///looping through
list.forEach((item)=>console.log(item))

//chaning ui

const ul=document.querySelector('.items');
//ul.remove()
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent="Hello salman";
//
// ul.children[1].innerText="sabbir";
//
// ul.lastElementChild.innerHTML='<h4>Bye<\h4>';


//chaning style
const  btn=document.querySelector('.btn');
const nameField=document.querySelector('#name')
const emailField=document.querySelector('#email')
const msgField=document.querySelector('.msg')
const users=document.querySelector('.items');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var name=nameField.value;
    var email=emailField.value;

    if(name=="" || email==""){
        msgField.style.display='unset'
        msgField.classList.add('error');
        msgField.innerText="Error: One or more fields empty.";
        setTimeout(()=>msgField.style.display='none',3000);
    }else {
        msgField.style.color='unset';
        msgField.innerText=`User Added`;
        console.log('clicked');
        user=document.createElement("li");

        user.innerHTML=`<b>${name} </b><br> ${email}`;
        users.appendChild(user)
        nameField.value='';
       emailField.value='';

    }

});



