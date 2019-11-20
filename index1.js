// Demonstration Number #1

const user = {firstName:"Or", lastName:"Shalmayev"};
const fullName = (firstName, lastName) => [firstName, lastName].join(' ');

fullName(user.firstName, user.lastName);
// Output: Or Shalmayev

// Demonstration Number #2

// rename fullName to joinWithSpace
const joinWithSpace = (...args) => args.join(' ');
joinWithSpace(user.firstName, user.lastName);
// Output: Or Shalmayev

joinWithSpace('a','b','c'); // 'a b c'
joinWithSpace(joinWithSpace('a','b'),'c'); // 'a b c' 
joinWithSpace('a', joinWithSpace('b','c')); // 'a b c' 

// Demonstration Number #3

class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

const newUser = new User('Or', 'Shalmayev');
newUser.fullName(); // 'Or Shalmayev'